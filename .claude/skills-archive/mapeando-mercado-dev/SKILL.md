---
name: mapeando-mercado-dev
description: Mapeia onde está a demanda no mercado global de desenvolvimento e quais tecnologias pagam mais, cruzando índices públicos de vagas com os relatórios anuais de ecossistema, e marcando o que é acessível para quem não fala inglês. Use quando o usuário perguntar sobre demanda de mercado, se vale a pena aprender uma linguagem ou framework, quais stacks pagam mais, o que está crescendo ou morrendo, ou pedir um panorama do mercado de dev, de scripter ou de Roblox. Não use para buscar vagas abertas, avaliar uma oferta recebida ou responder anúncio de recrutamento — isso é da radar-lusofono.
---

# Mapeando mercado dev

Responde a uma pergunta de mercado com número, fonte e data — não com
manchete. Cobre duas coisas: **onde está a demanda** e **quais tecnologias
pagam mais**, no mercado global.

Público: o Pedro, dev full-stack (Next.js, Python, Vercel) e lead dev de
Roblox/Luau, no Brasil, que lê inglês mas não sustenta conversa falada.
Toda conclusão precisa dizer se é acionável para ele ou se é só contexto.

## Quando não usar

Buscar vaga aberta, avaliar oferta concreta, escrever resposta a recrutador ou
prospectar cliente: isso é da `radar-lusofono`. A fronteira é simples — aqui se
decide **o que aprender e para onde ir**; lá se decide **para qual anúncio
responder hoje**.

## Fluxo

```
Progresso:
- [ ] Passo 1: classificar a pergunta
- [ ] Passo 2: medir a demanda no índice
- [ ] Passo 3: cruzar com os relatórios anuais
- [ ] Passo 4: marcar acessibilidade e concluir
```

### Passo 1 — Classificar

Toda pergunta cai em um destes três tipos, e cada um usa fontes diferentes:

| Tipo | Pergunta típica | Fonte que decide |
|---|---|---|
| Volume de demanda | "o mercado está bom?" | índice do Indeed no FRED |
| Demanda por tecnologia | "vale aprender Go?" | Devjobsscanner + Octoverse |
| Remuneração por tecnologia | "o que paga mais?" | Devjobsscanner + Dice |

Pergunta sobre Roblox é caso à parte: economia de criador não é mercado de
emprego, e misturar os dois é o erro que mais distorce conclusão aqui.

### Passo 2 — Medir

Comece pelo número, não pela narrativa. A série de vagas de software do Indeed
é pública, diária e comparável no tempo:

`https://fred.stlouisfed.org/series/IHLIDXUSTPSOFTDEVE`

Base: 1º de fevereiro de 2020 = 100. **Âncora conhecida: 74,36 em 14/ago/2026**,
ou seja, 25,6% abaixo do nível pré-pandemia. Sempre releia o valor atual em vez
de repetir a âncora — ela serve para você perceber se algo mudou muito, não
para ser citada como se fosse de hoje.

Existem séries equivalentes para outros países no mesmo prefixo `IHLIDX`. Não
existe série equivalente para o Brasil nem para economia de criador; quando a
pergunta for sobre esses, diga que a medição direta não existe e trabalhe com
proxies declarados como proxies.

### Passo 3 — Cruzar

Uma fonte só não conclui nada. Cruze pelo menos duas destas, e diga a data de
cada uma:

- **Devjobsscanner** (`devjobsscanner.com/blog`) — rankings de linguagem mais
  demandada e mais bem paga, apurados sobre milhões de ofertas reais. É a
  melhor fonte para remuneração por tecnologia, porque mede anúncio e não
  autodeclaração.
- **GitHub Octoverse** (`github.blog/news-insights/octoverse`) — uso medido.
  Âncora da edição 2025, publicada em 28/out/2025: TypeScript passou Python e
  JavaScript em agosto de 2025, primeira troca de liderança em mais de uma
  década; 36 milhões de novos devs no ano; repositórios públicos importando SDK
  de LLM cresceram 178%.
- **JetBrains State of Developer Ecosystem** (`blog.jetbrains.com/research`) —
  intenção declarada. Edição 2025: 24.534 devs, 194 países, campo entre abril e
  junho de 2025. 85% usam IA regularmente. Go e Rust lideram o que se quer
  aprender. PHP, Ruby e Objective-C em queda.
- **Stack Overflow Developer Survey** (`survey.stackoverflow.co`) — uso e
  satisfação. Edição 2025: 49.035 respondentes.
- **Dice Tech Salary Report** (`dice.com`, seção "salaries by skill") — salário
  por competência nos EUA. Os números ficam em visualização embutida, então a
  extração é trabalhosa; avise antes de mandar o usuário até lá.
- **HN Trends** (`hntrends.com`) — menções a tecnologia nos posts mensais
  "Who is hiring" do Hacker News, com série histórica longa. Bom para confirmar
  ou desmentir uma tendência vista nas outras fontes.
- **Roblox, relações com investidores** (`ir.roblox.com`) — carta trimestral ao
  acionista, o único número oficial de pagamento a criador. Sempre abra o
  trimestre mais recente: esta série vira rápido. Âncora do Q2 2026, divulgado
  em 30/jul/2026: DevEx de US$ 363 mi no trimestre, alta de 15% a/a; 123 milhões
  de usuários diários, alta de 10%; bookings de US$ 1,56 bi, alta de 8%, na
  ponta baixa do guidance. Para efeito de comparação, o Q4 2025 trazia DevEx de
  US$ 477 mi com alta de 70% e usuários crescendo 69% — a desaceleração entre os
  dois trimestres é o fato mais importante do tema hoje. O DevEx cresce acima
  dos bookings porque o aumento de taxa anunciado em 5/set/2025 elevou a fatia
  do criador.

**Hierarquia de evidência**, quando as fontes divergirem: série pública com
metodologia vence relatório anual de empresa, que vence post de blog, que vence
opinião em rede social. Blog só serve para achar a fonte primária. Se a
divergência sobreviver a essa ordem, apresente as duas leituras com as datas em
vez de escolher a mais confortável.

### Passo 4 — Concluir

Cada achado recebe uma marca de acessibilidade, porque dado global sem esse
filtro não é acionável para este usuário:

- **Acionável** — dá para atuar sem inglês falado: mercado brasileiro, cliente
  lusófono, trabalho assíncrono por texto, economia de criador.
- **Acionável com atrito** — exige leitura em inglês e comunicação escrita, mas
  não entrevista falada.
- **Só contexto** — informa a direção do mercado, mas não é alcançável hoje.

Feche com uma recomendação, não com um resumo. "O que fazer com isso" em uma
ou duas frases, na primeira posição da resposta.

## Erros típicos do domínio

**Achar que o Stack Overflow tem salário por linguagem.** Não tem. A edição
2025 reporta remuneração por cargo — backend, dados, engenharia de ML — e nunca
cruza com linguagem. Para pagamento por tecnologia, use Devjobsscanner ou Dice.

**Repetir cifra de colapso de vaga júnior sem primária.** Circulam versões
incompatíveis do mesmo suposto dado — queda de 67%, de 73%, "40% pior" — sem
fonte comum. Não cite nenhuma delas sem localizar a medição original.

**Aceitar manchete de recuperação sem checar o índice.** Há posts afirmando
alta de contratação exatamente nos meses em que a série do Indeed cai. Sempre
abra o índice antes de repetir a narrativa.

**Confundir popularidade com remuneração.** São variáveis diferentes e às vezes
opostas: no levantamento JetBrains de 2025, Scala é linguagem primária de
apenas 2% e aparece em 38% entre os que mais ganham. Escassez paga; ubiquidade
não. Procure ativamente esse descasamento — é onde mora a oportunidade.

**Tratar Roblox como parte do mercado de emprego.** São economias distintas e
respondem a forças diferentes. Analise separado e só depois compare.

**Repetir a âncora do Roblox sem abrir o trimestre novo.** Este é o erro mais
provável desta própria skill. Em dois trimestres o crescimento do DevEx caiu de
70% para 15%; quem citou a âncora antiga sem reler entregou o oposto da
realidade. Toda pergunta sobre Roblox exige abrir a carta trimestral mais
recente antes de responder.

**Citar número sem data.** Preço, índice, taxa e ranking têm validade curta
neste tema. Número sem data vira armadilha na próxima leitura.

**Confiar em rate de freelance como dado firme.** As plataformas expõem faixas
por ferramenta interativa, sem metodologia publicada. Trate como estimativa e
diga que é estimativa.

## Critério de aceite

A resposta está pronta quando cada afirmação numérica tem fonte nomeada e data;
pelo menos duas fontes independentes sustentam a conclusão principal; toda
divergência encontrada aparece declarada em vez de resolvida em silêncio; cada
achado tem marca de acessibilidade; e a primeira frase diz o que fazer.

Não está pronta se a conclusão veio de uma fonte só, se algum número apareceu
sem data, ou se a resposta descreve o mercado sem recomendar nada.

## Formato de saída

Relatório na conversa. Quando passar de duas telas, grave também
`mercado-AAAA-MM-DD.md` e entregue o arquivo, para permitir comparação com
leituras anteriores.

```markdown
**Recomendação:** <o que fazer, uma ou duas frases>

## Demanda
<índice, valor, data, direção>

## Tecnologias
<o que sobe, o que cai, o que paga — com fonte e data em cada linha>

## Acessibilidade
<o que é acionável, o que tem atrito, o que é só contexto>

## Divergências e lacunas
<contradições entre fontes; o que não foi possível medir>
```
