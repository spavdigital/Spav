---
title: "Loja & inventário — persistência em DataStore com retry e rate limiting"
engine: "Roblox"
complexity: "Medium"
summary: "Uma loja e inventário para Roblox com autoridade no servidor: persistência em DataStore validada por schema, que se recupera de um save corrompido ou desatualizado, retry automático com backoff, e limite de taxa de compra por jogador."
repoUrl: "https://github.com/spavdigital/roblox-shop-datastore"
tags: ["Luau", "Rojo", "DataStoreService", "server-authoritative", "MIT"]
order: 1
draft: false
lang: "pt"
urlSlug: "roblox-shop-datastore"
---

O cliente nunca envia um preço — ele envia o id do item, e o servidor mesmo busca o preço. `attemptPurchase` é o único lugar onde um saldo muda, e ele roda inteiramente no servidor: checa o catálogo, checa o saldo, debita, concede. Não existe caminho onde o cliente defina suas próprias moedas ou reivindique um item que não pagou.

O problema mais difícil está em volta dessa função, não dentro dela. Uma chamada `DataStore:SetAsync` pode falhar no meio de uma sessão — uma instabilidade de rede, uma indisponibilidade do lado da Roblox, um jogador saindo bem no momento em que o servidor tenta salvar. A versão publicada envolve toda leitura e escrita em retry com backoff, e trata um save ausente ou malformado do mesmo jeito que trata um jogador novo: cai para um padrão conhecido e seguro, em vez de travar o jogador para fora dos próprios dados. Um schema de save também não é definitivo — um item muda de nome, um campo é adicionado — então os loads são validados contra o schema atual em vez de confiados às cegas, o que é o que impede um save antigo de corromper uma sessão em vez de simplesmente falhar ao ser lido.

```lua
-- Server-side source of truth for prices. Never trust the client with prices.
local SHOP_CATALOG = {
	SwordCommon    = { price = 50,  displayName = "Common Sword" },
	SwordRare      = { price = 200, displayName = "Rare Sword" },
	PotionHeal     = { price = 15,  displayName = "Healing Potion" },
	SpeedBoostGear = { price = 80,  displayName = "Speed Boost" },
}

local function attemptPurchase(player, itemId)
	local item = SHOP_CATALOG[itemId]
	local data = sessionCache[player.UserId]

	if not item or not data then
		return false, "Invalid item or player data not loaded"
	end

	if data.coins < item.price then
		return false, "Not enough coins"
	end

	data.coins -= item.price
	data.inventory[itemId] = (data.inventory[itemId] or 0) + 1

	return true, item.displayName
end
```
