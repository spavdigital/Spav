---
title: "Loop de round — intermission → arena → condição de vitória → lobby"
engine: "Roblox"
complexity: "Medium"
summary: "Máquina de estados de round controlada pelo servidor para um jogo 1-contra-muitos: jogadores esperam no lobby, são levados para uma arena construída inteiramente por código, vencem ao matar um alvo e voltam para a intermission. Quem entra tarde ou respawna é enviado para o round em andamento em vez de ficar preso. Feito em um dia como teste de estúdio."
repoUrl: "https://github.com/spavdigital/roblox-round-loop"
tags: ["Luau", "Rojo", "state-machine", "server-authoritative", "round-based", "MIT"]
order: 5
draft: false
lang: "pt"
urlSlug: "roblox-round-loop"
coverImage:
  src: "./media/roblox-round-loop/cover.jpg"
  alt: "Um jogador na arena construída por código, de frente pro dummy alvo, com o banner de status ROUND visível"
screenshots:
  - src: "./media/roblox-round-loop/cover.jpg"
    alt: "Um jogador na arena construída por código, de frente pro dummy alvo, com o banner de status ROUND visível"
    caption: "Loop de round — um round em andamento"
---

**Meu papel:** autor único. Feito como teste rápido para um estúdio pequeno que desenvolve um jogo de rounds estilo juggernaut; a arena e o dummy são placeholders do mapa e dos inimigos reais deles.

O loop tem quatro estados — `Intermission → Round → Won → Intermission` — controlados por um único script de servidor, e o cliente só é *avisado* em que estado está por um único `RemoteEvent`. O "outro plano" do pedido não é teleporte de place: a arena é uma região separada do mesmo place, construída pelo `ArenaFactory` no início do round e destruída no fim, então nunca sobra arena velha de um round anterior para limpar e não há para onde um jogador escapar entre rounds.

O que separa uma demo de algo em que um estúdio consegue construir em cima são os casos de borda na fronteira do round. Um jogador que entra ou respawna no meio do round recebe um hook em `CharacterAdded` que o move para a arena em vez de deixá-lo no lobby assistindo a um round que não consegue alcançar. Esses hooks são rastreados por jogador e desconectados quando o round termina ou o jogador sai — um loop de round que vaza uma conexão por entrada funciona num teste de 5 minutos e vira problema de memória num servidor de 12 horas. A condição de vitória é exatamente uma coisa (`dummyHumanoid.Died`) e nada mais encerra o round, então não há ambiguidade sobre qual caminho do código pode transitar de estado.

```lua
local function runRound()
	local arenaModel, dummyHumanoid = ArenaFactory.Build()
	local spawnPart = arenaModel:FindFirstChild("ArenaSpawn")
	local arenaCFrame = spawnPart and spawnPart.CFrame or arenaModel:GetPivot()

	teleportAllTo(arenaCFrame)
	Net.FireAll("RoundStateChanged", { state = "Round" })

	-- Quem spawna no meio do round (entrada tardia / respawn) vai
	-- direto para a arena em vez de ficar preso no lobby.
	local charConns = {}
	local function hookPlayer(player)
		charConns[player] = player.CharacterAdded:Connect(function(character)
			task.wait(0.5)
			character:PivotTo(arenaCFrame)
		end)
	end
	for _, player in ipairs(Players:GetPlayers()) do hookPlayer(player) end
	local addedConn = Players.PlayerAdded:Connect(hookPlayer)

	-- Condição de vitória: o dummy morre. Nada mais encerra o round.
	dummyHumanoid.Died:Wait()

	addedConn:Disconnect()
	for _, conn in pairs(charConns) do conn:Disconnect() end

	Net.FireAll("RoundStateChanged", { state = "Won" })
	task.wait(WIN_HOLD_SECONDS)
	teleportAllTo(getLobbyCFrame())
	ArenaFactory.Destroy(arenaModel)
end
```

O que ele deliberadamente não faz: sem matchmaking entre servidores, sem timer de round (a condição de vitória do pedido era por abate), sem pontuação. Cada um desses fica a um estado ou um campo de distância, e é justamente por isso que o loop foi mantido tão pequeno.
