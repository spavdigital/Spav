---
title: "Round loop — intermission → arena → win condition → back to lobby"
engine: "Roblox"
complexity: "Medium"
summary: "A server-driven round state machine for a 1-vs-many game: players wait in a lobby, get moved to an arena built entirely by code, win by killing a target, and are returned to intermission. Late joiners and respawns are routed into the live round instead of being stranded. Built in a day as a studio trial."
repoUrl: "https://github.com/spavdigital/roblox-round-loop"
tags: ["Luau", "Rojo", "state-machine", "server-authoritative", "round-based", "MIT"]
order: 5
draft: false
lang: "en"
urlSlug: "roblox-round-loop"
---

**My role:** sole author. Built as a quick trial for a small studio making a juggernaut-style round game; the arena and dummy are placeholders for their real map and enemies.

The loop is four states — `Intermission → Round → Won → Intermission` — owned by one server script, with the client only ever *told* which state it is in through a single `RemoteEvent`. The "different plane" in the brief is not a place teleport: the arena is a separate region of the same place, built by `ArenaFactory` at round start and destroyed at round end, so there is never a stale arena from a previous round to clean up and nothing for a player to walk into between rounds.

The part that separates a demo from something a studio can build on is the edge cases around the round boundary. A player who joins or respawns mid-round gets a `CharacterAdded` hook that pivots them into the arena instead of leaving them in the lobby watching a round they cannot reach. Those hooks are tracked per player and disconnected when the round ends or the player leaves — a round loop that leaks a connection per join is fine in a 5-minute test and a memory problem on a 12-hour server. The win condition is exactly one thing (`dummyHumanoid.Died`) and nothing else ends a round, so there is no ambiguity about which code path is allowed to transition state.

```lua
local function runRound()
	local arenaModel, dummyHumanoid = ArenaFactory.Build()
	local spawnPart = arenaModel:FindFirstChild("ArenaSpawn")
	local arenaCFrame = spawnPart and spawnPart.CFrame or arenaModel:GetPivot()

	teleportAllTo(arenaCFrame)
	Net.FireAll("RoundStateChanged", { state = "Round" })

	-- Anyone who spawns mid-round (late join / respawn) is sent
	-- straight into the arena instead of stranded in the lobby.
	local charConns = {}
	local function hookPlayer(player)
		charConns[player] = player.CharacterAdded:Connect(function(character)
			task.wait(0.5)
			character:PivotTo(arenaCFrame)
		end)
	end
	for _, player in ipairs(Players:GetPlayers()) do hookPlayer(player) end
	local addedConn = Players.PlayerAdded:Connect(hookPlayer)

	-- Win condition: the dummy dies. Nothing else ends the round.
	dummyHumanoid.Died:Wait()

	addedConn:Disconnect()
	for _, conn in pairs(charConns) do conn:Disconnect() end

	Net.FireAll("RoundStateChanged", { state = "Won" })
	task.wait(WIN_HOLD_SECONDS)
	teleportAllTo(getLobbyCFrame())
	ArenaFactory.Destroy(arenaModel)
end
```

What it deliberately does not do: no matchmaking across servers, no round timer (the brief's win condition was kill-based), no scoring. Each of those is a state or a field away, which is the point of keeping the loop this small.
