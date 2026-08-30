---
title: "Tycoon — plot claiming, income loop and persistence"
engine: "Roblox"
complexity: "Medium"
summary: "A server-authoritative Roblox tycoon: atomic plot claiming, a single server-driven income loop, and DataStore persistence that survives a mid-session failure — no client-side script decides what a player owns or can afford."
repoUrl: "https://github.com/spavdigital/roblox-tycoon"
tags: ["Luau", "Rojo", "DataStoreService", "server-authoritative", "MIT"]
order: 4
draft: false
lang: "en"
urlSlug: "roblox-tycoon"
coverImage:
  src: "./media/roblox-tycoon/cover.jpg"
  alt: "A claimed tycoon plot with three dropper types side by side and a stack of coins showing accumulated cash"
---

Claiming a plot looks trivial — check if it's free, assign it — until two players trigger their `ProximityPrompt` in the same frame. `claimPlot` runs synchronously to completion with no `yield` in the middle: Luau's single-threaded execution model means the read-then-write (check `plotOwners[plot]`, then set it) can never be interleaved by another player's claim. That's the whole trick, and it only holds because nothing in the function awaits anything.

Income is server-driven on a fixed interval rather than accumulated client-side and reported back — the client has no code path that increases its own cash. Droppers are looked up in a server-owned catalog the same way shop items are: id in, price and income out, never trusted from the client. Progress is saved per player on leave and on `BindToClose`, and — same pattern as the shop system — a failed `DataStore:SetAsync` is retried rather than silently dropped, because losing a session's income to one transient error is a worse experience than a slightly slower save.

```lua
-- Server-side source of truth. Client never decides what it owns or what it can afford.
local DROPPER_CATALOG = {
	BasicDropper   = { price = 0,    income = 1  }, -- free starter dropper
	FastDropper    = { price = 250,  income = 3  },
	PremiumDropper = { price = 1000, income = 10 },
}

local function claimPlot(player)
	if playerPlots[player.UserId] then
		return -- already owns a plot
	end

	local plot = findOpenPlot()
	if not plot then
		return
	end

	plotOwners[plot] = player.UserId
	playerPlots[player.UserId] = plot
	plot.Owner.Value = player.Name

	local progress = loadProgress(player)
	playerCash[player.UserId] = progress.cash
end
```
