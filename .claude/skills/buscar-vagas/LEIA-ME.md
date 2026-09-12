# Buscar Vagas (`buscar-vagas`) — skill consolidada (12/set/2026)

Chamava-se `radar-lusofono` até 12/set/2026. Mesma skill, nome novo.

Esta pasta é a **fonte de verdade versionada** da skill de busca de vagas. Ela
existe aqui, no git, justamente por causa do defeito descrito no pacote de
migração: editar a skill dentro da conta não persiste entre sessões. Aqui
persiste, tem histórico e dá pra revisar em PR.

## O que foi consolidado

Três origens viraram uma:

1. **`radar-lusofono` que já estava ativa na conta** — o corpo da skill (fluxo de
   3 estágios, triagem, faixas de preço, fila de aprovação, regra de nunca
   publicar sozinho).
2. **Pacote `game-scripting-migration.zip` (12/set)** — o `SKILL.md` dele **não
   era a skill inteira**, era um *patch*: perfil do Pedro (filho), regra de
   primeira pessoa, diagnóstico de negociação em andamento e contenção de teste
   grátis. Tudo isso foi integrado nas seções certas do `SKILL.md` daqui.
3. **`references/` e `project-docs/` do pacote** — copiados sem alteração.

> ⚠️ Se o `SKILL.md` do zip for subido sozinho numa conta nova, a skill perde
> todo o corpo operacional e ainda fica com uma `description` que não dispara em
> "buscar vagas". Use **esta** pasta, não o zip cru.

## Conflito resolvido explicitamente

O corpo antigo manda descartar vaga que pede teste grátis ("nem pra
portfólio"); o patch manda tratar teste grátis já prometido como portfólio.
Não é contradição, são momentos diferentes — e o `SKILL.md` agora diz isso em
voz alta: **triagem descarta; contenção só vale depois que o Pedro já
prometeu.**

## O que está faltando (não foi inventado)

| Arquivo | Situação |
|---|---|
| `references/regras-devforum.md` | não veio no pacote; o `SKILL.md` manda ler antes de redigir |
| `references/precos.md` | não veio; é a base de conversão de Robux |
| `references/aprendizados.md` | não veio; começa do zero |
| `scripts/coletor.py` | não existe; Estágio 1 é manual até ser reescrito |
| `references/perfil-pedro.md` | **reconstituído** dos outros arquivos — Pedro precisa revisar |

## Como instalar

- **Neste repositório:** nada a fazer. Sessões do Claude Code abertas em
  `Spav` já carregam `.claude/skills/`.
- **Na conta inteira (claude.ai → Settings → Capabilities → Skills):** subir o
  conteúdo desta pasta como skill customizada. `references/` e `project-docs/`
  vão junto — a skill referencia os dois por caminho relativo.
- A `radar-lusofono` antiga já foi apagada da conta em 12/set/2026, então não há
  duplicata a resolver — mas a regra vale pra frente: duas skills com a mesma
  finalidade competem no disparo e você paga a leitura das duas.
