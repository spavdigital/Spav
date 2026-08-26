---
title: "Cross-server LiveOps patching — 5,000 servers inside a 2-minute SLA"
engine: "Roblox"
complexity: "High"
summary: "An admin on any server changes an item stat and every server in a 20,000-CCU fleet converges within 2 minutes — without hitting a MemoryStore, DataStore or MessagingService limit. Built as a studio trial task; 55-assertion test suite with a 5,000-server fleet simulation that runs outside Studio."
tags: ["Luau", "MemoryStoreService", "MessagingService", "DataStoreService", "fleet-scale", "tested"]
order: 2
draft: false
lang: "en"
urlSlug: "roblox-liveops-patching"
---

**My role:** sole author — design, code, tests and the write-up. Built as a paid-position trial task for a studio; the item names here are placeholders, the architecture is the real one.

The brief asks for two things that pull against each other: patch item stats across the whole fleet, and never hit a service limit. Each obvious answer fails one of them. `MessagingService` alone is best-effort and cannot reach a server that boots *after* the message — at 5,000 concurrent servers, servers boot constantly, so every one of them is stranded on the old value with nothing aware it is stale. `DataStore` polling alone works in testing and breaks in production: per-key read throughput is 25 MB/min for the whole experience, so 5,000 servers polling one key every 30 s caps the document at ~2.6 KB — a real live-event document crosses that and the key starts returning `KeyThrottled`.

So no single service is the answer. `MemoryStore` is the commit point (atomic `UpdateAsync`, monotonic version, 1 request unit per read regardless of payload); `MessagingService` is only a latency shortcut, fired once per patch; `DataStore` is the durable copy, written off the critical path and read only on a cold miss. The inversion that matters: **the poll carries the SLA, the push is an optimisation.** Poll cadence is sized as if `MessagingService` did not exist — 30 s ±20 % jitter, worst case 36 s, a 3.3× margin on the 120 s requirement. Base stats are never mutated: a patch is an overlay, which is what makes `/patch clear` a no-migration rollback.

```lua
-- Pure resolver: base stat + patch overlay. Base is never mutated, so
-- clearing the overlay restores the shipped value with nothing to replay.
function StatResolver.applyOp(base: number, op: Types.PatchOp?): number
	if op == nil then
		return base
	end

	if op.mode == "set" then
		return op.value
	elseif op.mode == "mul" then
		return base * op.value
	elseif op.mode == "add" then
		return base + op.value
	end

	-- A malformed document must degrade to "shipped behaviour",
	-- never to a broken server.
	warn(`[LiveOps] Unknown patch mode "{tostring(op.mode)}" -- falling back to base`)
	return base
end
```

The test suite runs the real modules against a Roblox API shim on a virtual clock: 55 assertions, including a 5,000-server simulation that measures convergence latency with the push path dead. The place file is generated from `src/`, so the code under review is byte-for-byte the code that runs. Built in 3 days.
