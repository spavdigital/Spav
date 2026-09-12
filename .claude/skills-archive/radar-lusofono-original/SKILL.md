---
name: radar-lusofono
description: Radar diário de vagas e oportunidades para scripter/dev em fóruns de gamedev, com foco em Roblox/Luau e canais em português. Use esta skill sempre que o assunto for buscar vagas, prospectar clientes, redigir resposta a anúncio de recrutamento, avaliar se uma oferta vale a pena, ou atualizar o conhecimento sobre os fóruns e comunidades onde se contrata dev. Use também quando o usuário mencionar DevForum, RoHire, Discourse, freelance de Roblox, ou pedir para rodar o radar.
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
nem pra portfólio).

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

- `references/fontes.md` — fontes ativas, IDs de categoria, nível de acesso
- `references/regras-devforum.md` — **leia antes de redigir qualquer resposta**
- `references/precos.md` — DevEx, corte de 30%, faixas de mercado (inclui a
  faixa `portfolio` US$5-99 vigente desde 19/08/2026 — ver nota no Estágio 2)
- `references/aprendizados.md` — histórico de correções
- `references/perfil-pedro.md` — para redigir as respostas com os dados certos
