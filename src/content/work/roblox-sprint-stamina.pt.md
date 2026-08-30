---
title: "Sprint e stamina — onde mora a autoridade"
engine: "Roblox"
complexity: "Small"
summary: "Um sistema de sprint em que o cliente só pode pedir para correr e nunca toca no próprio WalkSpeed. O servidor controla a stamina, valida cada pedido, descarta payloads malformados em silêncio e replica uma aura de sprint para todos verem. Pequeno de propósito: é o padrão anti-exploit em que todos os outros sistemas desta página se apoiam."
repoUrl: "https://github.com/spavdigital/roblox-sprint-stamina"
tags: ["Luau", "anti-exploit", "RemoteEvent", "server-authoritative", "MIT"]
order: 8
draft: false
lang: "pt"
urlSlug: "roblox-sprint-stamina"
coverImage:
  src: "./media/roblox-sprint-stamina/cover.jpg"
  alt: "Um personagem com o contorno de aura de sprint replicado, com a barra de stamina visivelmente reduzida abaixo"
screenshots:
  - src: "./media/roblox-sprint-stamina/cover.jpg"
    alt: "Um personagem com o contorno de aura de sprint replicado, com a barra de stamina visivelmente reduzida abaixo"
    caption: "Sprint e stamina — a aura no meio do sprint"
---

**Meu papel:** autor único. Um teste curto de estúdio em que o ponto não era o sprint — o Roblox já dá WASD de graça — mas *onde mora a autoridade*.

O cliente dispara um `RemoteEvent` com um booleano: "quero correr" ou "parei". Essa é toda a superfície do lado do cliente. O servidor mantém um valor de stamina por jogador, drena no `Heartbeat` enquanto corre, regenera enquanto não corre, e é a única coisa que escreve em `Humanoid.WalkSpeed`. Um speed-hacker pode disparar o remote o dia inteiro; sem stamina não ganha nada, e não consegue mexer no `WalkSpeed` pelo cliente porque nada no cliente mexe.

Duas escolhas pequenas carregam a maior parte do valor. Um pedido abaixo da stamina mínima é *descartado*, não rejeitado com erro — erro é sinal que um exploiter consegue sondar; silêncio não é. E um payload que não é booleano é ignorado do mesmo jeito, então uma chamada malformada ou fuzzada nunca chega a lógica nenhuma. A aura de sprint (um `Highlight` no personagem) é ligada pelo servidor pelo mesmo motivo: vinda do servidor, todo jogador vê em quem está correndo, não só quem está testando.

```lua
sprintEvent.OnServerEvent:Connect(function(player, wantsToSprint)
	if typeof(wantsToSprint) ~= "boolean" then
		return -- payload malformado/exploit: ignora em silêncio
	end

	local stamina = staminaByPlayer[player]
	if not stamina then
		return
	end

	if wantsToSprint then
		if stamina > MIN_STAMINA_TO_START then
			sprintingByPlayer[player] = true
		end
		-- stamina baixa: o pedido é só descartado — sem erro, sem superfície de exploit
	else
		sprintingByPlayer[player] = false
	end
end)
```

Deliberadamente fora: barra de stamina no cliente (o servidor empurraria o valor), FOV ou animação de sprint (cosmético, do cliente, sem problema ficar lá) e cooldown ao zerar (uma linha de config). Feito em uma noite.
