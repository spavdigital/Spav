---
title: "Shop & inventory — DataStore persistence with retry and rate limiting"
engine: "Roblox"
complexity: "Medium"
summary: "A server-authoritative Roblox shop and inventory system: schema-validated DataStore persistence that recovers from a corrupted or outdated save, automatic retry with backoff, and per-player purchase rate limiting."
repoUrl: "https://github.com/spavdigital/roblox-shop-datastore"
tags: ["Luau", "Rojo", "DataStoreService", "server-authoritative", "MIT"]
order: 1
draft: false
lang: "en"
urlSlug: "roblox-shop-datastore"
---

The client never sends a price — it sends an item id, and the server looks up the price itself. `attemptPurchase` is the only place a balance changes, and it runs entirely server-side: check the catalog, check the balance, deduct, grant. There is no code path where a client can set its own coins or claim an item it didn't pay for.

The harder problem is what happens around that function, not inside it. A `DataStore:SetAsync` call can fail mid-session — a network blip, a Roblox-side outage, a player leaving at the exact moment the server tries to save. The published version wraps every read and write in retry-with-backoff, and treats a missing or malformed save the same way it treats a first-time player: fall back to a known-good default instead of erroring the player out of their own data. A save schema also isn't forever — an item gets renamed, a field gets added — so loads are validated against the current schema rather than trusted blindly, which is what keeps an old save from corrupting a session instead of just failing to parse.

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
