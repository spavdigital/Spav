---
title: "Template Preview Project"
engine: "Roblox"
complexity: "Medium"
summary: "This is placeholder content used only to validate the project page template (video block, code highlighting, live-proof links, tags). It is a draft and is excluded from the production build."
videoUrl: "https://example.com/preview.mp4"
repoUrl: "https://github.com/example/example-repo"
liveUrl: "https://example.com/play"
tags: ["template", "draft", "do-not-publish"]
order: 0
draft: true
---

This section renders as the "Under the hood" body for the template preview.
It exists to confirm markdown rendering and syntax-highlighted code blocks
work correctly inside the project layout.

```lua
local function validatePurchase(player, itemId, price)
    local profile = DataStore:GetProfile(player.UserId)
    if not profile or profile.locked then
        return false, "profile unavailable"
    end

    if profile.balance < price then
        return false, "insufficient funds"
    end

    profile.balance -= price
    profile:AddItem(itemId)
    return true
end
```

Draft fixture only — never rendered in production because `draft: true`
is filtered out at build time.
