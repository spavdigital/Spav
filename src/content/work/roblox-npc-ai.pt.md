---
title: "IA de NPC — patrulha, detecção e perseguição"
engine: "Roblox"
complexity: "Medium"
summary: "Uma máquina de estados de IA para NPCs no Roblox, com autoridade no servidor: patrulha um conjunto de waypoints, detecta jogadores por linha de visão, persegue usando PathfindingService e ataca corpo a corpo."
videoUrl: "https://www.youtube.com/embed/i-PDjMKdUSk"
previewVideoUrl: "/work/npc-ai-card.mp4"
previewPosterUrl: "/work/npc-ai-card.jpg"
coverImage:
  src: "./media/roblox-npc-ai/cover.jpg"
  alt: "Um NPC guarda perseguindo um jogador fugindo em campo aberto, no meio da perseguição"
screenshots:
  - src: "./media/roblox-npc-ai/cover.jpg"
    alt: "Um NPC guarda perseguindo um jogador fugindo em campo aberto, no meio da perseguição"
    caption: "IA de NPC — perseguição em andamento, os dois correndo"
repoUrl: "https://github.com/spavdigital/roblox-npc-ai"
liveUrl: "https://www.roblox.com/games/120166913647612/NPC-AI-Demo-SPAV"
tags: ["Luau", "Rojo", "PathfindingService", "server-authoritative", "MIT"]
order: 6
draft: false
lang: "pt"
urlSlug: "roblox-npc-ai"
---

Cada NPC registrado é processado a partir de um único loop de Heartbeat, em vez de uma thread por NPC, então todas as transições de estado ficam auditáveis em um só lugar. As duas chamadas mais custosas são limitadas por motivos diferentes: o pathfinding recalcula a cada 0.5s porque um caminho com meio segundo de defasagem ainda é uma boa aproximação de "andar até o alvo", e as varreduras de detecção rodam 5 vezes por segundo por NPC — escalonadas por um offset aleatório no registro para não caírem todas no mesmo frame — porque cada varredura custa um raycast por jogador, que é o verdadeiro gargalo em escala.

O dano é resolvido inteiramente no servidor. O cliente nunca tem acesso para tocar em Humanoid.Health, então não existe caminho client-authoritative para um exploiter explorar.

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
