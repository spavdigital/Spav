---
title: "Criação de personagem R6 — rolagem ponderada, escala manual do rig, save com session lock"
engine: "Roblox"
complexity: "High"
summary: "Menu principal → modo → slot → criação de personagem → jogar, com o personagem restaurado ao reentrar. Altura e peso são rolados no servidor contra as tabelas de probabilidade do documento de design do cliente, um rig R6 é redimensionado à mão (os valores de escala do engine são só R15) e os perfis persistem numa camada de DataStore com session lock. Teste de estúdio; a checagem de distribuição com 400.000 rolls roda fora do Roblox."
repoUrl: "https://github.com/spavdigital/roblox-r6-character-creation"
tags: ["Luau", "Rojo", "DataStoreService", "R6", "UI-flow", "tested", "MIT"]
order: 7
draft: false
lang: "pt"
urlSlug: "roblox-r6-character-creation"
coverImage:
  src: "./media/roblox-r6-character-creation/cover.jpg"
  alt: "O menu de criação de personagem aberto com altura e peso rolados, ao lado do personagem R6 escalado manualmente que ele produziu"
---

**Meu papel:** autor único — fluxo de menu, autoridade no servidor, persistência, escala do rig e a suíte de teste. Feito como teste para um estúdio de survival-horror; os IDs de roupa e o PDF de design são deles e não estão nesta descrição.

O fluxo tem quatro telas no cliente e zero decisões no cliente. Cada rolagem, cada confirmação, cada escolha de slot é um pedido; o `CharacterService` no servidor é dono do orçamento de rolls, da whitelist de assets permitidos e do perfil. Altura e peso vêm de uma tabela ponderada — curva de sino centrada em 170 cm e estágios de IMC do documento do estúdio — e `tests/distribution_check.lua` passa 400.000 rolls pelo módulo real `RollTables` fora do Roblox (`luau tests/distribution_check.lua`) e confere 53 asserções contra a distribuição pretendida, então "as probabilidades estão certas" é resultado de teste, não afirmação.

O problema difícil foi o rig. O jeito comum de redimensionar um personagem no Roblox é `Humanoid.BodyHeightScale` / `BodyWidthScale` / `BodyDepthScale` — e **isso só existe em R15**. Num rig R6 a falha é silenciosa: criar os NumberValues não lança erro, não loga nada, e o avatar continua exatamente médio enquanto o menu diz 220 cm. Como o pedido especificava R6, o `R6Scaler` faz à mão: redimensiona cada parte, reescala os offsets `C0`/`C1` dos `Motor6D` (senão os membros descolam), reescala as posições dos `Attachment` (senão os chapéus flutuam onde a cabeça antiga estava), reescala o mesh da cabeça e corrige o `HipHeight` com a fórmula do R6, que é diferente da do R15. A escala sempre parte de um snapshot das medidas *originais* do rig, nunca das atuais, então aplicar duas vezes é idempotente — o personagem não cresce um pouco a cada respawn.

```lua
-- A identidade vem do snapshot, não do nome da parte: uma Tool também tem
-- um filho chamado "Handle", e comparar por nome escalaria o offset de
-- empunhadura sem redimensionar a ferramenta — ela sairia da mão.
local function scaleForPart(part)
	if part and snapshot.uniformParts[part] then
		return uniformScale   -- cabeça e tudo pendurado nela
	end
	return bodyScale          -- torso e membros: altura e largura separadas
end

-- Quanto os pés ficam abaixo do pivô antes e depois, para levantar o modelo
-- pela diferença em vez de redimensioná-lo para dentro do chão e deixar o
-- solver de física empurrá-lo para fora.
local originalDrop = originalLegY + (0.5 * originalRootY) + snapshot.hipHeight
local scaledDrop = originalDrop * scaleY

for part, originalSize in pairs(snapshot.partSizes) do
	if part.Parent then
		part.Size = originalSize * scaleForPart(part)
	end
end
```

A persistência é um `PlayerDataService` com session lock, retry com backoff e versão de schema — as mesmas regras do economy service, aplicadas a um perfil de personagem. O ramo multiplayer é um caminho real de `TeleportService` com fallback documentado de "indisponível aqui" no Studio, e foi exercitado numa place publicada a partir de um cliente real, não só no Studio. Os *efeitos* de altura e peso na gameplay (velocidade, stamina, HP) ficaram explicitamente fora do escopo; os valores ficam no perfil prontos para alimentá-los.
