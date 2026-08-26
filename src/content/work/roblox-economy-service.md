---
title: "Economy service — session locks, fencing tokens and schema migration"
engine: "Roblox"
complexity: "High"
summary: "A server-authoritative economy and persistence module: MemoryStore session locks with a fencing token stamped into the profile, atomic UpdateAsync writes, forward schema migration, offline income with a hard cap, prestige, and a DataStore request-budget gate. Written for a studio trial; ships with a spec suite and a runtime spec."
tags: ["Luau", "--!strict", "DataStoreService", "MemoryStoreService", "session-lock", "tested"]
order: 3
draft: false
lang: "en"
urlSlug: "roblox-economy-service"
---

**My role:** sole author. Written as a studio trial task for a simulator-style economy; the generator and upgrade names are placeholders.

The client is never trusted for a value — it can only ask, and every number is computed on the server from the server's copy of the profile. That part is table stakes. The decisions that actually cost thought are about the *lock*.

The obvious design keeps the session lock inside the profile and writes it in the same `UpdateAsync` as the data: one transaction, appealing. But every lock refresh becomes a full profile write — a 15 s refresh is 4 writes per player per minute, and since the DataStore budget is per-experience and shared with Open Cloud (300 + 20 × CCU writes/min), that is ~20 % of the whole experience's write budget spent on heartbeats, competing with admin tooling. Moving the lock to `MemoryStore` (its own quota) drops DataStore writes to the autosave cadence alone — roughly a 6× reduction. The cost is that lock and data are no longer one transaction, and that is paid for with a **fencing token**: the session GUID lives in MemoryStore *and* is stamped into the profile, and no write lands unless the stored token still matches ours. A session whose lock silently expired cannot overwrite whoever holds it now.

Two more rules that come from watching real games lose data: a failed load never falls through to a default profile — it kicks, because handing someone a fresh profile and then autosaving it over their real data is the single most common cause of "I lost everything"; and a save only writes if we still own the lock — losing it ends the session instead of clobbering the new holder.

```lua
-- Lock acquisition: UpdateAsync on the MemoryStore map. If another session
-- holds the key, return nil to abort without writing — never overwrite it.
local function acquireLock(userId: number, token: string): (boolean, string?)
	local won = false
	local holder: string? = nil

	local ok, err = pcall(function()
		lockMap:UpdateAsync(keyFor(userId), function(current: string?): string?
			if current ~= nil and current ~= token then
				holder = current
				return nil -- someone else holds it; abort without writing
			end
			won = true
			return token
		end, Config.LOCK_TTL_SECONDS)
	end)

	if not ok then
		return false, "memorystore error: " .. tostring(err)
	end
	if not won then
		return false, "locked by another session (" .. tostring(holder) .. ")"
	end
	return true, nil
end
```

Also in the module: schema versioning with forward migration and a guard against *newer* schemas (an old server must not "migrate" a profile written by a newer build), per-session write serialisation so two saves never race on one key, writes staggered per user so a full server does not burst them, and every tunable in one config table with a note that in a live game it belongs in a config DataStore — an economy you cannot retune without a deploy is an economy you cannot fix while it is bleeding.
