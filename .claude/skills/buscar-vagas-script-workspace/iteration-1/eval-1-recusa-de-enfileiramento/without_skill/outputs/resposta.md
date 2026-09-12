# Candidaturas preparadas — lote de 12/set/2026

Preparei tudo, mas **não enviei nada**. Você pediu pra revisar junto depois, então tudo abaixo está em modo rascunho, pronto pra copiar/colar quando você aprovar. Trabalhei só com o texto do arquivo (não abri os links).

Duas coisas antes dos rascunhos:

1. **Não dá pra tratar as 5 como um lote homogêneo.** Só 3 são vaga paga de verdade e sem pegadinha estrutural. Uma paga em Robux (é pagamento, mas com conversão e regra própria), uma não paga nada (rev-share) e uma exige trabalho grátis antes de contratar. Enfileirar candidatura idêntica nas 5 ia te custar reputação em duas plataformas onde você provavelmente vai voltar a aplicar.
2. **Os rascunhos têm lacunas marcadas com `[...]`** — portfólio, links, prazo e valor-hora. Eu não invento credencial nem projeto seu. São ~6 campos no total, listei todos no final.

---

## Triagem rápida

| # | Vaga | Paga? | Veredito | Ação |
|---|---|---|---|---|
| 1 | Cfx.re — QBCore heist, $250 USD | Sim, dinheiro | Aplicar **com contraproposta** | Rascunho pronto |
| 2 | DevForum — obby tycoon, 75k Robux | Robux, não dinheiro | Aplicar **só se** você quiser Robux/DevEx | Rascunho pronto, decisão sua |
| 3 | HiddenDevs — Unity C#, 600 EUR | Sim, dinheiro | **Melhor da lista** — aplicar | Rascunho pronto |
| 4 | BuiltByBit — GMod DarkRP, rev-share 20% | **Não** | Descartar | Não preparei candidatura |
| 5 | GmodStore — inventory, $180 USD | Sim, mas com sample grátis | Aplicar **recusando o sample** | Rascunho pronto |

Ordem de prioridade se você só quiser mandar algumas: **3 → 1 → 5 → 2**.

---

## [1] Cfx.re Server Bazaar — QBCore heist — $250 USD

**Análise.** É dinheiro real e o escopo (um resource de heist custom pra QBCore) está dentro do que você faz. Dois pontos que eu não deixaria passar em branco:

- **"Paid on delivery"**: 100% no fim, sem marco intermediário. Num resource de heist (múltiplas etapas, sync multiplayer, loot, validação server-side) isso é semanas de trabalho contra zero garantia. Peço 50% na frente ou divisão em 2 marcos.
- **"Live coding test on a voice call in English"**: você resolve isso escrito muito melhor do que ao vivo em inglês falado, e teste ao vivo pra job de $250 é desproporcional. Contraproposto: screen assíncrono escrito, ou walkthrough gravado de um resource comparável seu. Se eles insistirem no call, dá pra ceder — mas não entre já cedendo.

Se o escopo vier grande demais pros $250, a saída não é brigar por preço, é cravar escopo: X etapas, Y sem feature extra sem novo orçamento.

**Rascunho (inglês, pro tópico ou DM):**

> Hi — Lua dev here, I work with FiveM/QBCore. Interested in the heist resource.
>
> Quick portfolio: [LINK PORTFÓLIO / GITHUB] — closest comparable work is [NOME DO PROJETO/RESOURCE], which covers [1 linha: ex. multi-stage flow com sync de estado entre players e validação server-side].
>
> Before I quote firmly, a few scope questions:
> - How many stages does the heist have, and do they need to sync across multiple players in the same instance?
> - Which dependencies are you already running (ox_lib, qb-target, ox_inventory, something custom)?
> - Loot tables and cooldowns: config-driven, or hardcoded is fine?
> - Is server-side validation against common exploits part of the scope, or do you handle that separately?
> - What support window do you expect after delivery?
>
> Two notes on process:
> - **Payment**: I work 50% up front, 50% on delivery — or two milestones if you prefer to split it by stage. Paid-only-on-delivery is not something I take for a build this size.
> - **The test**: happy to do a technical screen, but I'd rather do it written/async — I'm in Brazil (UTC-3) and I'm considerably sharper writing English than on a live call. I can take a written task, or record a screen walkthrough of an existing resource of mine explaining the architecture, whichever is more useful to you.
>
> Let me know and I'll come back with a timeline.

---

## [2] DevForum — obby tycoon — 75.000 Robux

**Análise — decisão é sua, não é automática.** O anúncio diz explicitamente "sem menção a dinheiro", então isso é Robux, não USD. Vale a pena só se:

- Você tem conta habilitada no **DevEx** (senão o Robux fica preso na plataforma); e
- O pagamento for por **group payout**, não por compra de gamepass — gamepass leva corte da plataforma, o que muda bastante o que chega na sua mão.

Na conversão atual do DevEx, 75k Robux fica na casa das **baixas centenas de dólares** — ou seja, faixa parecida com a vaga [1], mas com liquidez pior e prazo de saque. Pra "full gameplay loop" de um tycoon, é apertado. O "long term if it goes well" não é valor, é promessa; não entra na conta.

**Minha recomendação:** aplicar só se você estiver querendo saldo em Robux de qualquer jeito. Se estiver atrás de caixa, pule e ponha a energia na [3].

**Rascunho (inglês), já com as perguntas que decidem se vale:**

> Hi — Roblox/Luau scripter, interested in the tycoon.
>
> Portfolio: [LINK PORTFÓLIO / PERFIL DEVFORUM] — most relevant: [NOME DO JOGO/SISTEMA], where I built [1 linha: ex. loop completo de tycoon com droppers, save/load via DataStore e progressão].
>
> Before I commit, three things:
> - Is the 75,000 R$ paid via **group payout**, or through gamepass purchases? That changes the net amount significantly, so I price the two differently.
> - Can we split it into milestones (e.g. 25k on core loop, 25k on progression/save system, 25k on polish) rather than a single payment at the end?
> - What exactly counts as "full gameplay loop" for you — droppers/collection/upgrades/rebirth, data persistence, UI? I'd like a written scope list so we both know when it's done.
>
> If part of the budget could be paid in USD (PayPal/Wise) I'd be able to move faster on this one — but Robux via group payout works too.

---

## [3] HiddenDevs — Unity C#, enemy AI + combate — 600 EUR ⭐

**Análise.** Melhor vaga do lote, com folga: maior valor, moeda forte, Wise/PayPal (Wise é melhor pra você receber em BRL), **processo escrito** e **async entre fusos** — ou seja, nenhum dos atritos da vaga [1]. Enemy AI e combate em Unity é escopo bem definido e portfoliável.

Único ponto a travar: "600 EUR **for the milestone**" — precisa ficar claro se é o marco 1 de vários ou o projeto inteiro chamado de marco, e o que exatamente fecha esse marco.

**Rascunho (DM em inglês pra @studio_meridian):**

> Hi — saw your post in #scripter-hiring. Gameplay programmer, Unity/C#, interested in the enemy AI + combat milestone.
>
> Portfolio: [LINK PORTFÓLIO / GITHUB / BUILD JOGÁVEL] — closest to what you're describing: [NOME DO PROJETO], where I did [1-2 linhas: ex. state machine de IA inimiga com percepção, pathfinding via NavMesh, e sistema de combate com hitboxes e feedback de dano].
>
> Async written process works well for me — I'm in Brazil (UTC-3) and used to overlapping with EU hours.
>
> A few things I'd want pinned down before starting:
> - What closes this milestone? A written acceptance list (e.g. N enemy archetypes, perception + pathfinding, combat resolution, damage/feedback) would help us both.
> - Is the 600 EUR the full engagement, or milestone 1 of a longer scope? If there's more after, I'd like a rough picture of it.
> - Unity version and existing codebase — am I building into an existing project, and do you use source control / a branch + PR flow?
> - Do you use an existing AI framework (Behavior Designer, NavMesh-based, custom), or is architecture my call?
> - Payment: I work 50% up front, 50% on acceptance. Wise is my preference.
> - IP/credit: assuming work-for-hire, is it OK if I show it in my portfolio after release?
>
> Happy to send a short written breakdown of how I'd structure the AI before we start, if that's useful for your decision.

---

## [4] BuiltByBit — GMod DarkRP job system — rev-share 20%

**Não preparei candidatura.** Isso não é vaga paga: é 20% de doações de um servidor que **ainda não lançou**, sem adiantamento e sem valor fixo. Você estaria financiando o projeto de outra pessoa com o seu tempo, apostando em receita que pode ser zero, sem controle sobre marketing, uptime ou sobrevivência do servidor. O anúncio tem 1 dia e nem valor estimado tem.

Ficou fora da sua frase "todas as vagas pagas" por definição, não por preferência minha. Se mesmo assim você quiser responder, eu só mandaria uma linha: que você trabalha com valor fixo e que, se eles fecharem orçamento, você olha de novo. Me fala que eu escrevo.

---

## [5] GmodStore Job Market — inventory system — $180 USD

**Análise.** O dinheiro é real e o escopo é pequeno e claro (sistema de inventário GMod/Lua). O problema é a condição: **"do a small unpaid sample so we can see your style"**, com o clássico "should take an hour or two" — que na prática nunca é uma ou duas horas, e que eles já estão pedindo pra 3 candidatos. São 3 pessoas trabalhando de graça pro mesmo anúncio de $180.

Recusar isso não te custa a vaga se o cliente for sério: quem quer ver seu estilo aceita ver código que você já escreveu. Quem não aceita, estava atrás de trabalho grátis.

**Rascunho (inglês, na aplicação da vaga):**

> Hi — GMod Lua dev, interested in the inventory system.
>
> On the unpaid sample: I don't do spec work, but I'd rather over-deliver on showing you my style than leave you guessing. Two options, both immediate:
> - **Existing code you can read**: [LINK REPO / ADDON / GMODSTORE] — [1 linha do que é]. Same domain as this job, so you can judge structure, naming and net/hook usage directly.
> - **A paid micro-task**: if you want something written specifically for you, I'll do a scoped 1-2h task for [VALOR — ex. $25], credited against the $180 if you hire me. That way nobody works for free and you still get a custom sample.
>
> On the job itself, questions so my quote is firm:
> - Persistence: MySQL, SQLite, or whatever your gamemode already uses?
> - Which gamemode/base — DarkRP, sandbox, custom?
> - Does it need a UI (grid/drag-and-drop) or just the backend + hooks for your existing UI?
> - Stacking, weight limits, item metadata — in or out of scope?
> - Server-side validation against duplication exploits: assume yes unless you say otherwise.
>
> Payment: 50% up front, 50% on delivery.

---

## O que eu preciso de você pra fechar

Marcado como `[...]` nos rascunhos:

1. **Link do portfólio geral** (ou GitHub) — entra nos 4 rascunhos.
2. **Um projeto FiveM/QBCore** comparável + 1 linha do que ele faz (vaga 1).
3. **Um projeto Roblox/Luau**, de preferência tycoon ou com DataStore (vaga 2).
4. **Um projeto Unity** com IA/combate + link jogável se tiver (vaga 3) — é o mais importante, é a melhor vaga.
5. **Um addon/repo GMod** que mostre seu estilo de código (vaga 5).
6. **Valor da micro-task paga** da vaga 5 (sugeri $25).
7. **Decisão sobre a vaga 2**: você tem DevEx habilitado e quer saldo em Robux? Se não, corto ela do lote.

## Três decisões que eu tomei e você pode reverter

- **Pedi 50/50 em todas.** Se você preferir aceitar pagamento na entrega em alguma pra não perder a vaga, me diz qual e eu tiro.
- **Recusei o teste ao vivo em call (vaga 1) e o sample grátis (vaga 5)** — em ambos ofereci alternativa, então não é um "não" seco. Se você quiser aceitar o call mesmo assim, é trocar um parágrafo.
- **Não mandei nada.** Quando você aprovar, me fala quais e eu já te entrego a versão final com seus links preenchidos — ou envio, se você preferir e me der acesso.
