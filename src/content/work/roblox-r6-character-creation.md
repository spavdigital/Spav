---
title: "R6 character creation — weighted rolls, manual rig scaling, session-locked saves"
engine: "Roblox"
complexity: "High"
summary: "Main menu → mode → slot → character creation → play, with the character restored on rejoin. Height and weight are rolled server-side against probability tables from the client's design doc, an R6 rig is resized by hand (the engine's scale values are R15-only), and profiles persist through a session-locked DataStore layer. Studio trial; 400,000-roll distribution test runs outside Roblox."
tags: ["Luau", "Rojo", "DataStoreService", "R6", "UI-flow", "tested"]
order: 7
draft: false
lang: "en"
urlSlug: "roblox-r6-character-creation"
---

**My role:** sole author — menu flow, server authority, persistence, rig scaling and the test harness. Built as a trial for a survival-horror studio; their clothing asset IDs and design PDF are theirs and are not in this write-up.

The flow is four screens on the client and zero decisions on the client. Every roll, every confirm, every slot selection is a request; `CharacterService` on the server owns the roll budget, the whitelist of allowed assets, and the profile. Height and weight come from a weighted table — a bell curve centred on 170 cm and BMI stages from the studio's document — and `tests/distribution_check.lua` runs 400,000 rolls through the real `RollTables` module outside Roblox (`luau tests/distribution_check.lua`) and checks 53 assertions against the intended distribution, so "the odds are right" is a test result, not a claim.

The hard problem was the rig. The usual way to resize a Roblox character is `Humanoid.BodyHeightScale` / `BodyWidthScale` / `BodyDepthScale` — and **those are R15-only**. On an R6 rig the failure is silent: creating the NumberValues throws nothing, logs nothing, and the avatar stays exactly average while the menu says 220 cm. Since the brief specified R6, `R6Scaler` does it by hand: resize each part, rescale the `Motor6D` `C0`/`C1` offsets (or limbs detach), rescale `Attachment` positions (or hats float where the old head was), rescale the head mesh, and correct `HipHeight` using the R6 formula, which differs from R15. Scaling always works from a snapshot of the rig's *original* measurements, never its current ones, so applying it twice is idempotent — a character cannot grow a little on every respawn.

```lua
-- Identity comes from the snapshot, not the part's name: a Tool also has a
-- child called "Handle", and matching by name would scale a tool's grip
-- offset while never resizing the tool — drifting it out of the hand.
local function scaleForPart(part)
	if part and snapshot.uniformParts[part] then
		return uniformScale   -- head and anything hanging off it
	end
	return bodyScale          -- torso and limbs: height vs. width separately
end

-- How far the feet sit below the pivot before and after, so the model is
-- lifted by the difference instead of being resized into the floor and
-- shoved out by the physics solver.
local originalDrop = originalLegY + (0.5 * originalRootY) + snapshot.hipHeight
local scaledDrop = originalDrop * scaleY

for part, originalSize in pairs(snapshot.partSizes) do
	if part.Parent then
		part.Size = originalSize * scaleForPart(part)
	end
end
```

Persistence is a `PlayerDataService` with session locks, retry with backoff, and a schema version — the same rules as the economy service, applied to a character profile. The multiplayer branch is a real `TeleportService` path with a documented "unavailable here" fallback in Studio, and it was exercised in a published place from a real client, not just in Studio. The gameplay *effects* of height and weight (speed, stamina, HP) were explicitly out of scope; the values sit in the profile ready to feed them.
