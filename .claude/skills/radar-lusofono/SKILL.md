---
name: radar-lusofono
description: Radar diário de vagas e oportunidades para scripter/dev em fóruns de gamedev, com foco em Roblox/Luau e canais em português, incluindo diagnóstico de negociação em andamento e contenção de teste grátis. Use esta skill sempre que o assunto for buscar vagas, prospectar clientes, redigir resposta a anúncio de recrutamento, avaliar se uma oferta vale a pena, analisar uma conversa de negociação já em curso, ou atualizar o conhecimento sobre os fóruns e comunidades onde se contrata dev. Use também quando o usuário mencionar DevForum, RoHire, Discourse, freelance de Roblox, ou pedir para rodar o radar.
---

# Radar Lusófono

Agente de busca de oportunidades para o Pedro — dev full-stack (Next.js, Python,
Vercel) e lead dev de Roblox/Luau, brasileiro, em Paranã-TO.

**Restrição central: ele não fala inglês.** Lê com apoio de tradução, mas não
sustenta entrevista falada. Priorize sempre canais em português e vagas com
processo escrito e assíncrono.

---

## Regra zero: nunca publicar sozinho

Este agente **redige**. Quem publica é o Pedro.

Toda saída vai para `dados/fila_aprovacao.md`. Nada é postado, respondido ou
enviado sem que ele aprove explicitamente. Isso não é excesso de cuidado — é o
que mantém a conta dele dentro das regras dos fóruns. Ver
`references/regras-devforum.md`.

**Nunca:** farmar métrica de leitura, usar conta alternativa, raspar Discord com
token de usuário, mandar DM de prospecção no DevForum.

---

## O fluxo de 3 estágios

O custo mora no contexto, não no modelo. Por isso o volume é cortado **antes**
de qualquer token ser gasto.

### Estágio 1 — Coleta (Python puro, custo zero)

```bash
python scripts/coletor.py --todas
```

Busca as fontes, deduplica, aplica a pontuação heurística e o corte de 14 dias.
De ~200 tópicos sobram ~10. Grava em `dados/triagem.json`.

**Não leia os 200. Leia só o `triagem.json`.**

> **Pendência conhecida (12/set/2026):** `scripts/coletor.py` não veio no pacote
> de migração e não existe nesta instalação. Enquanto não for reescrito, faça o
> Estágio 1 manualmente pelas fontes de `references/fontes.md`, respeitando o
> mesmo corte de 14 dias e o mesmo teto de itens.

### Estágio 2 — Triagem (Haiku 4.5)

Leia `dados/triagem.json`. Para cada item, classifique:

- `pagamento`: USD | Robux | rev-share | indefinido
- `valor_estimado`: número em USD, ou null (converta Robux por
  `references/precos.md` — nunca pelo valor nominal)
- `idioma`: pt | en | outro
- `escopo`: tarefa | projeto | contrato longo | parceria
- `encaixe`: 0-10 para o perfil do Pedro
- `descartar`: true/false + motivo

Descarte automático: rev-share puro, valor líquido abaixo de US$5, exigência
de call em inglês, pedido de teste grátis (de graça é de graça — não entra,
nem pra portfólio), exigência de "zero uso de IA" ou desafio de código ao vivo
antes de contratar.

Classifique a faixa de preço em `faixa`:

- `portfolio`: US$5 a US$99 líquidos — serve pra construir portfólio, não é
  renda principal. **Nota (19/08/2026):** piso temporariamente baixado de
  US$100 pra US$5 porque o Pedro está numa fase de montar portfólio e topa
  cobrar pouco, mas não trabalhar de graça. Isso não é a régua definitiva de
  valor do trabalho dele — é uma fase. Reavaliar quando o portfólio estiver
  encorpado (perguntar ao Pedro periodicamente se ainda quer ver a faixa
  `portfolio` ou se é hora de voltar o piso pra US$100).
- `padrão`: US$100+ líquidos — renda real, prioridade de resposta.

Grave em `dados/classificados.json`.

### Estágio 3 — Redação e aprendizado (Sonnet 5)

1. Para cada item com `encaixe >= 6`, redija um rascunho de resposta.
   Em português se a vaga for PT; em inglês simples e curto se não for.
2. Escreva `dados/fila_aprovacao.md` no formato da seção abaixo.
3. **Atualize `references/aprendizados.md`** com o que a rodada ensinou.

**Opus só em sessão interativa**, quando o Pedro estiver ajustando a skill.
Nunca na execução agendada.

---

## Formato da fila de aprovação

```markdown
## [ID] Título da vaga
**Fonte:** DevForum #82 · **Postado:** há 6h · **Encaixe:** 8/10 · **Faixa:** padrão
**Pagamento:** USD 500 (projeto) · **Idioma:** inglês
**Link:** https://...

**Por que passou:** paga em USD, escopo fechado, processo escrito.
**Risco:** primeira contratação do anunciante, sem histórico.

**Rascunho:**
> ...

**Aprovar?** [ ] sim  [ ] não  [ ] editar
```

Ordene por encaixe **dentro de cada faixa**, e mostre `padrão` antes de
`portfolio` na fila — renda real sempre aparece primeiro. Máximo 5 por
rodada em cada faixa — fila longa não é lida.

---

## Como escrever: primeira pessoa como padrão em contato NOVO

Em mensagens pra um contratante ainda sem histórico, escreva em **primeira
pessoa do singular por padrão** — é mais simples e evita a pergunta "who's we"
à toa.

Mas se o próprio Pedro, numa conversa já em andamento, disser que trabalha com
o filho (ou qualquer outra coisa sobre quem faz o quê), **isso não é uma
divergência a ser corrigida** — é informação real que pode ter ficado de fora
do perfil. Trate como atualização de perfil primeiro (confirme com o Pedro se
deve virar padrão ou foi só daquela conversa) antes de tratar como risco.

Ver `references/perfil-pedro.md` para o que pode e o que não pode ser dito
sobre o arranjo com o filho.

---

## Diagnóstico de negociação em andamento

Quando o Pedro pedir pra analisar uma conversa que já está rolando (não uma
vaga nova), **antes** de sugerir a próxima mensagem, cheque estes sinais:

- **Ambiguidade de estrutura não resolvida.** Se o contratante menciona "meu
  time"/"outros devs" mas nunca fica claro se o Pedro seria o único responsável
  técnico ou um entre vários, isso muda o escopo real do trabalho — não deixe
  essa pergunta cair.
- **Pergunta técnica sua que ficou sem resposta.** Se o Pedro perguntou algo
  específico (quem mais programa, forma de pagamento) e o contratante respondeu
  só parte, aponte isso explicitamente — não assuma que foi respondido.
- **Reação defensiva a pergunta técnica** ("this isn't my first rodeo", "I got
  that covered") é dado sobre como esse contratante reage a ser questionado,
  não motivo pra parar de perguntar — mas calibre o tom daqui pra frente com
  ele especificamente.
- **Novo fato sobre como o Pedro trabalha aparece na conversa** (ex.: menciona
  o filho, muda a forma de cobrar) — sinalize que isso deveria virar atualização
  de perfil permanente, pergunte se é assim mesmo daqui pra frente, e não repita
  a informação errada em mensagens futuras enquanto não estiver confirmada.

### Quando o Pedro já prometeu teste grátis por conta própria (antes de eu revisar)

Isso diverge da regra do Estágio 2 ("teste grátis não entra, nem pra
portfólio"). **A regra do Estágio 2 continua valendo para triagem de vaga
nova** — vaga que pede teste grátis é descartada. Esta seção é só contenção de
dano quando o Pedro já prometeu antes de a skill ver a conversa: desfazer
geralmente piora mais do que ajuda.

1. **Delimite o escopo antes de qualquer trabalho começar** — se o pedido for
   vago ("make it nice", "reproduce that"), pergunte qual parte específica o
   contratante quer ver, e proponha um recorte pequeno e cronometrado em vez de
   um alvo aberto que nunca fica "pronto o suficiente".
2. **Amarre o próximo passo.** Pergunte explicitamente o que acontece se ele
   gostar do teste — confirmação de contratação nos termos já discutidos
   (pagamento por tarefa, marcos), não mais uma rodada de "vou pensar".
3. **Trate como portfólio de qualquer forma**, já que o Pedro está fazendo de
   graça — o trabalho deve valer a pena mesmo se esse contratante específico não
   fechar. Registrar em `site-portfolio-spavdigital` (ou equivalente) que é mais
   um teste não remunerado destinado ao portfólio, seguindo o padrão dos
   anteriores.
4. Registre no log do projeto que o teste foi grátis e por quê, pra rastrear se
   esse padrão está se repetindo com muitos contratantes (sinal de que vale
   reforçar a defesa contra teste grátis na prática, não só na regra escrita).

---

## Aprender a cada rodada

Este é o ponto da skill. Se ela não ficar mais inteligente, virou só um raspador.

Ao final de cada execução, pergunte-se: **o que eu descobri hoje que
contradiz o que estava escrito nos meus arquivos?**

Registre em `references/aprendizados.md` quando encontrar:

- Regra de fórum que a gente não conhecia
- Fonte nova mencionada dentro de um anúncio (muito comum — veja abaixo)
- Faixa de preço praticada diferente da registrada
- Padrão no que o Pedro aprova ou rejeita
- Rascunho que gerou resposta (e o que ele tinha de diferente)

Formato: data, o que se acreditava, o que se descobriu, fonte.

### Expandir fontes automaticamente

Anúncio de vaga quase sempre cita outro canal — um Discord, um site, um grupo.
Quando encontrar menção a fórum/board não catalogado:

1. Teste `URL/categories.json`. Respondeu? É Discourse → adicione em
   `references/fontes.md` e no `coletor.py`
2. Não respondeu? Registre em `references/fontes-candidatas.md` para o Pedro avaliar
3. **Exige login ou token? NÃO adicione.** Procure se existe agregador legal que
   já cubra essa fonte (foi assim que chegamos ao RoHire)

---

## Arquivos de referência

Leia conforme a necessidade, não todos de uma vez:

| Arquivo | Estado |
|---|---|
| `references/fontes.md` — fontes ativas, IDs de categoria, nível de acesso | ✔ presente (correções de 21/ago incorporadas) |
| `references/desbloqueio-de-fontes.md` — travas de conta por fonte e ordem de ataque | ✔ presente |
| `references/perfil-pedro.md` — para redigir as respostas com os dados certos | ✔ presente (reconstituído em 12/set, confirmar com o Pedro) |
| `references/regras-devforum.md` — **leia antes de redigir qualquer resposta** | ✘ não veio no pacote — reconstituir |
| `references/precos.md` — DevEx, corte de 30%, faixas de mercado | ✘ não veio no pacote — reconstituir |
| `references/aprendizados.md` — histórico de correções | ✘ não veio no pacote — começar do zero |

**Enquanto `regras-devforum.md` e `precos.md` estiverem faltando:** não invente o
conteúdo deles. Antes de redigir resposta para o DevForum, consulte as regras da
categoria na hora; antes de converter Robux, confirme a taxa de DevEx vigente e
diga ao Pedro que está usando valor consultado, não valor registrado.

## Documentos operacionais do projeto

Vivem em `project-docs/` nesta skill (antes eram documentos do Project "Game
Scripting"). A skill às vezes se refere a eles pelo caminho antigo
`game-scripting/<arquivo>.md` — é o mesmo arquivo.

- `sources-status.md` — se a fonte está Ativa antes de assumir que está
- `pending-signups.md` — se a fonte está logada antes de assumir que está
- `capacidade-de-postagem.md` — inclui as **Regras do Roblox Talent Hub**, de
  leitura obrigatória antes de qualquer candidatura naquela fonte
- `log.md` — histórico de candidaturas e negociações
- `doorfall-luci-negociacao.md` — negociação aberta (estado de 28/ago, confirmar)
