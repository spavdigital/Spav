---
title: "Tycoon — reivindicação de plot, loop de renda e persistência"
engine: "Roblox"
complexity: "Medium"
summary: "Um tycoon para Roblox com autoridade no servidor: reivindicação atômica de plot, um único loop de renda controlado pelo servidor, e persistência em DataStore que sobrevive a uma falha no meio da sessão — nenhum script do cliente decide o que um jogador possui ou pode comprar."
repoUrl: "https://github.com/spavdigital/roblox-tycoon"
tags: ["Luau", "Rojo", "DataStoreService", "server-authoritative", "MIT"]
order: 4
draft: false
lang: "pt"
urlSlug: "roblox-tycoon"
coverImage:
  src: "./media/roblox-tycoon/cover.jpg"
  alt: "Um plot de tycoon reivindicado com três tipos de dropper lado a lado e uma pilha de moedas mostrando o cash acumulado"
screenshots:
  - src: "./media/roblox-tycoon/cover.jpg"
    alt: "Um plot de tycoon reivindicado com três tipos de dropper lado a lado e uma pilha de moedas mostrando o cash acumulado"
    caption: "Tycoon — plot reivindicado, droppers gerando renda"
---

Reivindicar um plot parece trivial — checar se está livre, atribuir — até dois jogadores acionarem o `ProximityPrompt` no mesmo frame. `claimPlot` roda de forma síncrona até o fim, sem nenhum `yield` no meio: o modelo de execução single-threaded do Luau garante que o ler-e-escrever (checar `plotOwners[plot]`, depois setá-lo) nunca pode ser interrompido pela reivindicação de outro jogador. Esse é o truque inteiro, e ele só se sustenta porque nada dentro da função espera por algo.

A renda é controlada pelo servidor em um intervalo fixo, em vez de acumulada no cliente e reportada de volta — o cliente não tem nenhum caminho de código que aumente o próprio saldo. Os droppers são buscados em um catálogo do servidor da mesma forma que os itens da loja: id entra, preço e renda saem, nunca confiados a partir do cliente. O progresso é salvo por jogador ao sair e no `BindToClose`, e — mesmo padrão do sistema de loja — um `DataStore:SetAsync` que falha é tentado de novo em vez de simplesmente descartado, porque perder a renda de uma sessão por um erro passageiro é uma experiência pior do que um save um pouco mais lento.

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
