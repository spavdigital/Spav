---
title: "NPC AI — patrol, detection and pathfinding chase"
engine: "Roblox"
complexity: "Medium"
summary: "A server-authoritative NPC state machine for Roblox: patrols a set of waypoints, spots players by line of sight, chases with PathfindingService, and attacks in melee range."
videoUrl: "https://www.youtube.com/embed/i-PDjMKdUSk"
previewVideoUrl: "/work/npc-ai-card.mp4"
previewPosterUrl: "/work/npc-ai-card.jpg"
coverImage:
  src: "./media/roblox-npc-ai/cover.jpg"
  alt: "An NPC guard chasing a fleeing player character across open ground, mid-pursuit"
screenshots:
  - src: "./media/roblox-npc-ai/cover.jpg"
    alt: "An NPC guard chasing a fleeing player character across open ground, mid-pursuit"
    caption: "NPC AI — mid-chase, both running"
repoUrl: "https://github.com/spavdigital/roblox-npc-ai"
liveUrl: "https://www.roblox.com/games/120166913647612/NPC-AI-Demo-SPAV"
tags: ["Luau", "Rojo", "PathfindingService", "server-authoritative", "MIT"]
order: 6
draft: false
lang: "en"
urlSlug: "roblox-npc-ai"
---

Every registered NPC is stepped from a single Heartbeat loop rather than one thread per NPC, so all state transitions stay auditable in one place. The two expensive calls are throttled for different reasons: pathfinding recomputes every 0.5s because a half-second-old path is still a fine approximation of "walk toward the target", and detection scans run 5 times a second per NPC — staggered by a random offset at registration so they don't all land on the same frame — because each scan costs one raycast per player, which is the real hot path at scale.

Damage is resolved entirely on the server. The client is never given a way to touch Humanoid.Health, so there is no client-authoritative path for an exploiter to hook.

```lua
-- Seconds between player-detection scans per NPC while patrolling. Each scan
-- costs one raycast per player in the server (line-of-sight check), so with
-- many NPCs and many players this — not pathfinding — is the real hot path.
-- 0.2s is imperceptible to a player (they can't tell an NPC "noticed" them
-- 200ms late) but cuts the scan load ~12x compared to scanning every
-- Heartbeat at 60fps (60 scans/s -> 5 scans/s per NPC).
NPCConfig.DETECTION_INTERVAL = 0.2

-- Seconds between PathfindingService:ComputeAsync() calls per NPC while
-- chasing. Recomputing every Heartbeat is expensive at any real NPC count
-- and unnecessary — a path that is half a second stale is still a
-- reasonable approximation of "walk toward the target".
NPCConfig.PATH_RECOMPUTE_INTERVAL = 0.5
```
