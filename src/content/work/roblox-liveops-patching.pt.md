---
title: "LiveOps cross-server — 5.000 servidores dentro de um SLA de 2 minutos"
engine: "Roblox"
complexity: "High"
summary: "Um admin em qualquer servidor altera o stat de um item e toda a frota de 20.000 CCU converge em até 2 minutos — sem estourar nenhum limite de MemoryStore, DataStore ou MessagingService. Feito como teste técnico para um estúdio; suíte com 55 asserções e simulação de 5.000 servidores que roda fora do Studio."
repoUrl: "https://github.com/spavdigital/roblox-liveops-patching"
tags: ["Luau", "MemoryStoreService", "MessagingService", "DataStoreService", "fleet-scale", "tested", "MIT"]
order: 2
draft: false
lang: "pt"
urlSlug: "roblox-liveops-patching"
---

**Meu papel:** autor único — design, código, testes e a documentação. Feito como teste técnico para uma vaga em estúdio; os nomes de item aqui são placeholders, a arquitetura é a real.

O pedido tem duas exigências que puxam em direções opostas: aplicar patch de stats na frota inteira e nunca bater em limite de serviço. Cada resposta óbvia falha em uma delas. `MessagingService` sozinho é best-effort e não alcança um servidor que sobe *depois* da mensagem — com 5.000 servidores simultâneos, servidores sobem o tempo todo, e cada um fica preso no valor antigo sem nada no sistema saber que está desatualizado. Polling em `DataStore` sozinho funciona no teste e quebra em produção: a leitura por chave é limitada a 25 MB/min para a experiência inteira, então 5.000 servidores lendo uma chave a cada 30 s limitam o documento a ~2,6 KB — um documento real de evento ao vivo passa disso e a chave começa a devolver `KeyThrottled`.

Logo, nenhum serviço isolado resolve. `MemoryStore` é o ponto de commit (`UpdateAsync` atômico, versão monotônica, 1 unidade por leitura independente do tamanho); `MessagingService` é só atalho de latência, disparado uma vez por patch; `DataStore` é a cópia durável, escrita fora do caminho crítico e lida só em cache miss frio. A inversão que importa: **o poll carrega o SLA, o push é otimização.** A cadência de poll foi dimensionada como se `MessagingService` não existisse — 30 s ±20 % de jitter, pior caso 36 s, margem de 3,3× sobre os 120 s exigidos. O stat base nunca é alterado: o patch é uma camada por cima, e é isso que faz `/patch clear` ser um rollback sem migração.

```lua
-- Resolver puro: stat base + camada de patch. A base nunca muda, então
-- limpar a camada restaura o valor original sem nada para reprocessar.
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

	-- Documento malformado degrada para "comportamento original",
	-- nunca para um servidor quebrado.
	warn(`[LiveOps] Unknown patch mode "{tostring(op.mode)}" -- falling back to base`)
	return base
end
```

A suíte roda os módulos reais contra um shim da API do Roblox num relógio virtual: 55 asserções, incluindo uma simulação de 5.000 servidores que mede a latência de convergência com o caminho de push morto. O arquivo de place é gerado a partir de `src/`, então o código revisado é byte a byte o código que roda. Construído em 3 dias.
