---
title: "Economy service — session lock, fencing token e migração de schema"
engine: "Roblox"
complexity: "High"
summary: "Módulo de economia e persistência com autoridade no servidor: session lock em MemoryStore com fencing token gravado no perfil, escritas atômicas via UpdateAsync, migração de schema, renda offline com teto, prestige e um gate de orçamento de requisições do DataStore. Escrito para um teste de estúdio; acompanha suíte de spec e spec de runtime."
repoUrl: "https://github.com/spavdigital/roblox-economy-service"
tags: ["Luau", "--!strict", "DataStoreService", "MemoryStoreService", "session-lock", "tested", "MIT"]
order: 3
draft: false
lang: "pt"
urlSlug: "roblox-economy-service"
---

**Meu papel:** autor único. Escrito como teste técnico de estúdio para uma economia estilo simulator; os nomes de gerador e upgrade são placeholders.

O cliente nunca é fonte de valor nenhum — ele só pede, e todo número é calculado no servidor a partir da cópia do perfil que o servidor tem. Isso é o mínimo. As decisões que custaram pensamento de verdade são sobre o *lock*.

O design óbvio guarda o session lock dentro do perfil e o escreve no mesmo `UpdateAsync` dos dados: uma transação só, atraente. Mas cada refresh do lock vira uma escrita completa de perfil — um refresh de 15 s são 4 escritas por jogador por minuto, e como o orçamento do DataStore é por experiência e compartilhado com o Open Cloud (300 + 20 × CCU escritas/min), isso é ~20 % do orçamento de escrita da experiência inteira gasto em heartbeat, competindo com as ferramentas de admin. Mover o lock para o `MemoryStore` (que tem cota própria) reduz as escritas do DataStore só à cadência de autosave — cerca de 6× menos. O custo é que lock e dados deixam de ser uma transação, e isso é pago com um **fencing token**: o GUID da sessão vive no MemoryStore *e* é gravado no perfil, e nenhuma escrita acontece a menos que o token armazenado ainda seja o nosso. Uma sessão cujo lock expirou em silêncio não consegue sobrescrever quem o detém agora.

Mais duas regras que vêm de ver jogos reais perderem dados: um load que falha nunca cai num perfil padrão — ele expulsa o jogador, porque entregar um perfil novo e depois autosalvá-lo por cima dos dados reais é a causa mais comum de "perdi tudo"; e um save só escreve se ainda somos donos do lock — perdê-lo encerra a sessão em vez de atropelar o novo dono.

```lua
-- Aquisição do lock: UpdateAsync no mapa do MemoryStore. Se outra sessão
-- detém a chave, retorna nil para abortar sem escrever — nunca sobrescreve.
local function acquireLock(userId: number, token: string): (boolean, string?)
	local won = false
	local holder: string? = nil

	local ok, err = pcall(function()
		lockMap:UpdateAsync(keyFor(userId), function(current: string?): string?
			if current ~= nil and current ~= token then
				holder = current
				return nil -- outra sessão detém; aborta sem escrever
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

Também no módulo: versionamento de schema com migração para frente e uma trava contra schemas *mais novos* (um servidor antigo não pode "migrar" um perfil escrito por um build mais recente), serialização de escrita por sessão para dois saves nunca disputarem a mesma chave, escritas escalonadas por usuário para um servidor cheio não disparar tudo de uma vez, e todos os parâmetros numa única tabela de config com a nota de que, em jogo ao vivo, eles pertencem a um DataStore de config — uma economia que não dá para reajustar sem deploy é uma economia que não dá para consertar enquanto sangra.
