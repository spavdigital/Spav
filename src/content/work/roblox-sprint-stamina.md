---
title: "Sprint & stamina — where the authority lives"
engine: "Roblox"
complexity: "Small"
summary: "A sprint system where the client can only request to sprint and never touches its own WalkSpeed. The server tracks stamina, validates every request, drops malformed payloads silently, and replicates a sprint aura so everyone sees it. Small on purpose: it is the anti-exploit pattern every other system on this page is built on."
repoUrl: "https://github.com/spavdigital/roblox-sprint-stamina"
tags: ["Luau", "anti-exploit", "RemoteEvent", "server-authoritative", "MIT"]
order: 8
draft: false
lang: "en"
urlSlug: "roblox-sprint-stamina"
coverImage:
  src: "./media/roblox-sprint-stamina/cover.jpg"
  alt: "A player character with a replicated sprint aura outline, with the stamina bar visibly depleted below"
screenshots:
  - src: "./media/roblox-sprint-stamina/cover.jpg"
    alt: "A player character with a replicated sprint aura outline, with the stamina bar visibly depleted below"
    caption: "Sprint & stamina — the aura mid-sprint"
---

**My role:** sole author. A short studio trial where the point was not the sprint — Roblox gives you WASD for free — but *where the authority lives*.

The client fires one `RemoteEvent` with one boolean: "I want to sprint" or "I stopped". That is the entire client-side surface. The server keeps a stamina value per player, drains it on `Heartbeat` while sprinting, regenerates it while not, and is the only thing that ever writes `Humanoid.WalkSpeed`. A speed-hacker can fire the remote all day; without stamina they get nothing, and they cannot touch `WalkSpeed` from the client because nothing on the client does.

Two small choices carry most of the value. A request below the minimum stamina is *dropped*, not rejected with an error — an error is a signal an exploiter can probe; silence is not. And a payload that is not a boolean is ignored the same way, so a malformed or fuzzed remote call never reaches any logic. The sprint aura (a `Highlight` on the character) is toggled by the server for the same reason: driven from the server, every player sees it on whoever is sprinting, not just the one testing.

```lua
sprintEvent.OnServerEvent:Connect(function(player, wantsToSprint)
	if typeof(wantsToSprint) ~= "boolean" then
		return -- malformed/exploited payload, ignore silently
	end

	local stamina = staminaByPlayer[player]
	if not stamina then
		return
	end

	if wantsToSprint then
		if stamina > MIN_STAMINA_TO_START then
			sprintingByPlayer[player] = true
		end
		-- too low: the request is just dropped — no error, no exploit surface
	else
		sprintingByPlayer[player] = false
	end
end)
```

Deliberately not here: a client-side stamina bar (the server would push the value to it), sprint FOV or animation (cosmetic, client-side, fine to do there), and cooldowns after hitting zero (a one-line config change). Built in an evening.
