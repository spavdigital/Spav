# Preços — DevEx, conversão e faixas de mercado

> **Procedência e limite desta pesquisa (12/set/2026).** As páginas oficiais
> (`create.roblox.com/docs/.../developer-exchange` e `devforum.roblox.com`) estão
> **bloqueadas pelo proxy de saída** do ambiente de nuvem onde esta pesquisa
> rodou — mesmo tipo de bloqueio já registrado pro Reddit em `fontes.md`. Então
> os números abaixo vêm de resumos de busca e de calculadoras de terceiros, **não
> da página oficial da Roblox**.
>
> **Consequência prática: antes de usar qualquer número daqui numa proposta,
> confirme a taxa vigente na hora** e diga ao Pedro que está usando valor
> consultado. Errar a conversão pra mais é prometer o que não se cumpre; pra
> menos é recusar trabalho bom.

---

## DevEx — taxa de conversão de Robux

| Situação | Taxa por Robux | Referência |
|---|---|---|
| **Padrão (atual)** | US$ 0,0038 | 100.000 Robux ≈ **US$ 380** |
| **Premium EUA 18+** | US$ 0,0054 | vigente desde 08/jun/2026, só para gasto de jogadores maiores de 18 anos nos EUA |
| **Taxa antiga** | US$ 0,0035 | Robux ganho antes de 05/set/2025 10h PT sai por esta |

**Os US$ 380 são brutos.** Saem dali ainda a taxa do meio de pagamento e o
imposto. Nunca cite o número bruto como se fosse o que entra na conta.

A taxa premium **não se aplica ao Pedro por padrão** — ela depende de onde e por
quem o Robux foi gasto dentro do jogo, não de quem recebe. Só entra na conta se o
contratante comprovar que o Robux dele vem dessa fatia.

### Robux de contratante quase nunca vira dinheiro (12/set/2026)

Esta é a razão de fundo da regra "Robux puro está fora". Não é que Robux valha
pouco — é que **o Robux que um contratante paga ao Pedro provavelmente não é
conversível de jeito nenhum.** Três barreiras se somam:

1. **Earned Robux ≠ Robux comprado.** O DevEx só converte Robux *ganho* na
   plataforma (venda de passes, produtos, itens, Creator Rewards). Se o
   contratante comprou Robux para pagar, a origem é compra — não entra.
2. **Payout de grupo sobre conteúdo de terceiro.** Pagamento por comissão
   costuma vir como group payout. A regra publicada trata payout como ganho
   quando os fundos do grupo vêm de vendas reais, mas há relato direto de que
   **payout de grupo em conteúdo que o recebedor não criou não conta como Earned
   Robux** — que é exatamente o caso de trabalho freelance no jogo dos outros.
   Existem tópicos de dev com DevEx recusado por comissão.
3. **Piso e assinatura.** O mínimo para sacar subiu para a casa dos **100.000
   Earned Robux**, e é preciso ter **Roblox Premium ativo no momento do saque**
   (assinatura paga) mais verificação de identidade. Premium vencido é a causa
   mais comum de recusa.

E a decisão final sobre o que é Earned Robux **é da Roblox, caso a caso**. Ou
seja: mesmo fazendo tudo certo, não há garantia.

**Como usar isso numa conversa.** Não diga "não aceito Robux" e pare — explique:
*"Robux pago por contratante normalmente não é elegível pro DevEx, porque não
conta como Earned Robux. Na prática eu não conseguiria sacar."* É mais forte que
recusa seca, e é verdade verificável.

Pagamento em Robux só volta à mesa se o contratante demonstrar que o valor sai
de fundos de grupo compostos por vendas reais **e** houver parte fixa relevante
em dinheiro. Mesmo assim: caso a caso, nunca por padrão.

> Procedência: mesma ressalva do topo — páginas oficiais da Roblox bloqueadas
> pelo proxy, dados vindos de resumo de busca. Antes de afirmar isso a um
> contratante, confirme a regra vigente.

### Como usar isso na triagem

A regra de perfil vem antes da matemática: **Robux puro está fora, sem exceção.**
A conversão serve pra duas coisas:

1. **Dimensionar a única exceção admitida** — Robux com conversão claramente
   vantajosa *combinada com uma parte fixa relevante em dinheiro real*. Sem a
   parte fixa, não há exceção a avaliar.
2. **Mostrar ao contratante o tamanho real da oferta dele.** "100k Robux" soa
   grande e vale ~US$380 brutos. Dizer isso com número é mais forte do que
   recusar sem explicar.

A calculadora de DevEx do RoHire e similares **não decidem nada** — servem só
para estimar. A decisão é a regra de perfil.

---

## Faixas de mercado por engine

Valores de freelance, em USD, coletados em set/2026. Use como **referência de
negociação**, não como tabela fixa: o escopo da tarefa manda mais que a média do
mercado.

| Engine / stack | Faixa praticada | Observação |
|---|---|---|
| **Roblox / Luau** | US$ 15–40/h pleno · US$ 50–120+/h sênior | sênior = com título publicado no currículo |
| **FiveM / Lua** | US$ 30–80/h | servidores grandes e mod único puxam pra cima |
| **Unity / C#** | US$ 20–40/h típico (mediana ~US$29) · US$ 40–100+/h gameplay programmer | a mediana baixa vem de plataforma de leilão |
| **GMod / Lua** | sem dado confiável em set/2026 | usar FiveM como proxy — trabalho comparável |

### O piso que não se persegue

Fiverr tem gig de script FiveM anunciado a **US$ 5–25 por script**. Isso é o
fundo do mercado e serve de aviso, não de alvo: é o preço contra o qual o Pedro
compete se entrar numa plataforma de leilão. Somado à regra de perfil (Fiverr,
Upwork, Freelancer, 99Freelas, Workana pago e Coconala estão **excluídos
permanentemente** por cobrarem do profissional), a conclusão é a mesma por dois
caminhos diferentes.

### Faixa de trabalho do Pedro

- **`portfolio`: US$ 5 a 99 líquidos.** Fase declarada — ele topa cobrar pouco
  pra montar portfólio, mas não trabalhar de graça. Confirmado como piso vigente
  em 12/set/2026. Não é a régua de valor do trabalho dele.
- **`padrão`: US$ 100+ líquidos.** Renda real, prioridade de resposta.

Comparando com a tabela acima: a faixa `portfolio` fica **abaixo de uma hora**
de qualquer engine listada. Vale dizer isso ao Pedro periodicamente — não pra
forçar a mudança, mas pra que a decisão de manter o piso continue sendo
consciente.

### Forma de cobrança

Orçamento **por tarefa**, evitando taxa fixa fechada pelo projeto inteiro, com
**50% adiantado / 50% na entrega**. Recebimento por Wise ou PayPal. Alguns
anúncios de Minecraft recusam explicitamente Payoneer e cripto.

Em marketplace com **middleman aprovado** (SpigotMC, BuiltByBit), mencionar o
middleman em negociação maior — reduz risco de calote e sinaliza profissionalismo
sem parecer desconfiança.

---

## Fontes

- [Roblox Developer Exchange — Creator Hub](https://create.roblox.com/docs/production/monetization/developer-exchange) *(não acessível deste ambiente)*
- [The 2026 DevEx Cheat Sheet — RoHire](https://rohire.dev/blog/2026-devex-cheat-sheet)
- [Developer Exchange Help — Roblox Support](https://en.help.roblox.com/hc/en-us/articles/13061189551124-Developer-Exchange-Help-and-Information-Page)
- [Roblox Developer Salary — ZipRecruiter](https://www.ziprecruiter.com/Salaries/Roblox-Developer-Salary)
- [Game developer hourly rates — Twine](https://www.twine.net/blog/game-developer-hourly-rates/)
- [Unity developer hourly rates — Upwork](https://www.upwork.com/hire/unity-3d-developers/cost/) *(referência de faixa; a plataforma em si está excluída)*
