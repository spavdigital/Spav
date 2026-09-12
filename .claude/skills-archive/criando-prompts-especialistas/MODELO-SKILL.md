# Modelo da skill gerada

## Conteúdo

- Estrutura de arquivos
- Frontmatter e o `description`
- Gabarito do corpo
- Regras de prompting dos modelos atuais
- Instruções que hoje pioram o resultado
- Checklist antes de entregar

## Estrutura de arquivos

Comece simples. Um `SKILL.md` único resolve a maioria dos casos. Só divida
quando o corpo passar de umas duzentas linhas ou quando houver material de
referência longo que nem toda execução precisa ler.

```
<nome-da-skill>/
├── SKILL.md          fluxo principal, sempre lido
├── REFERENCIA.md     material consultado sob demanda
├── MODELOS.md        templates de saída, se houver formato fixo
└── scripts/          código executado, não lido
```

Referências ficam a **um nível de profundidade**: tudo que importa é linkado
direto do `SKILL.md`. Referência que aponta para outra referência costuma
ficar sem ser lida.

Arquivo com mais de cem linhas começa com um índice, para que Claude veja o
escopo inteiro sem ler tudo.

Script vale mais que instrução quando a operação é frágil, determinística e se
repete igual. O código fica no disco e só a saída entra no contexto.

## Frontmatter

```yaml
---
name: <minúsculas-com-hifens>
description: <o que faz> + <quando usar> + <quando não usar>
---
```

`name`: até 64 caracteres, só minúsculas, números e hífens. Sem as palavras
reservadas `claude` e `anthropic`. Forma de gerúndio é preferível
(`analisando-contratos`, não `contratos` nem `utils`).

`description`: até 1024 caracteres, terceira pessoa, sem tags XML. É o único
texto sempre carregado, e é o que decide se a skill dispara. Precisa conter as
palavras que o usuário realmente digita, não o jargão do domínio.

Ruim: `Ajuda com documentos.`

Bom: `Analisa contratos de prestação de serviço e aponta cláusulas de risco,
prazo e rescisão. Use quando o usuário enviar um contrato, pedir revisão de
cláusula, ou mencionar minuta, aditivo ou distrato. Não use para redigir
contrato do zero nem para dar parecer jurídico definitivo.`

A cláusula de "não use" é o que evita colisão com as outras skills instaladas.
Sem ela, duas skills próximas competem e a errada ganha.

## Gabarito do corpo

```markdown
# <Nome legível>

<Uma ou duas frases: o que a skill entrega e para quem.>

## Quando não usar

<Os casos vizinhos em que Claude deve trabalhar direto, sem a skill.>

## Fluxo

```
Progresso:
- [ ] Passo 1: ...
- [ ] Passo 2: ...
```

### Passo 1 — <nome>

<O procedimento. Concreto: que fonte abrir, que campo checar, que ordem seguir.>

## Fontes canônicas

<Nomeadas. "Consulte fontes confiáveis" não é instrução, é enfeite.>

## Erros típicos do domínio

<O que dá errado nesse assunto especificamente, e como perceber.>

## Critério de aceite

<Como saber que a saída está pronta. Verificável, não aspiracional.>

## Formato de saída

<Template fixo, se houver.>
```

Nem toda skill precisa de todas as seções. Seção vazia é pior que seção
ausente, porque gasta contexto sem dizer nada.

## Regras de prompting dos modelos atuais

**Diga o que fazer, não o que evitar.** "Escreva em parágrafos corridos"
funciona; "não use markdown" não funciona. A instrução negativa descreve o
espaço todo menos um ponto, e o modelo precisa adivinhar o ponto.

**Explique o porquê junto do quê.** O modelo generaliza bem a partir do
motivo. "Cite a data porque preço de API muda por trimestre" cobre casos que
"sempre cite a data" não cobre.

**Escopo é literal.** Os modelos atuais seguem a instrução ao pé da letra e
não generalizam em silêncio. Se a regra vale para todas as seções, diga "todas
as seções", não confie na inferência.

**Exemplos: de três a cinco, diversos.** Poucos e parecidos ensinam o padrão
errado. Delimite com `<exemplo>` e cubra pelo menos um caso de borda.

**XML onde ele paga.** Delimitar bloco longo, dado colado, ou seção que pode
ser confundida com instrução: use tag. Envolver cada parágrafo em tag por
ritual só gasta contexto.

**Documento longo antes da pergunta.** Material extenso vai no topo; a
instrução e a pergunta vão depois dele.

**Concisão precisa ser pedida.** Os modelos atuais escrevem mais por padrão. Se
a saída deve ser curta, a skill diz isso explicitamente e diz o tamanho.

**Ferramenta precisa de política.** Os modelos atuais acionam ferramenta com
facilidade. Diga quando usar e quando responder direto. Para pesquisa:
"pesquise antes de afirmar qualquer fato que possa ter mudado" é política;
"use a busca" não é.

**Ações irreversíveis pedem confirmação.** Apagar, publicar, enviar, sobrescrever
e qualquer coisa visível para terceiros: confirmar antes. Ações locais e
reversíveis: executar direto.

## Instruções que hoje pioram o resultado

Estas eram boas prática em gerações anteriores e hoje atrapalham:

**"Verifique seu trabalho antes de terminar."** Os modelos atuais já verificam
sozinhos; a instrução gera verificação em excesso e alonga a resposta. Remova
em vez de reescrever.

**"Mostre seu raciocínio" / "pense em voz alta".** Pedir que o raciocínio
interno apareça como texto de resposta pode ser recusado nos modelos mais
novos. Peça a justificativa da conclusão, que é outra coisa e é permitida.

**"Seja exaustivo", "não seja preguiçoso", "explore tudo".** Combatiam um
problema que não existe mais. Hoje produzem escopo inflado e custo alto.

**Prefill da resposta do assistente.** Não é mais suportado nos modelos
recentes. Para formato rígido, use saída estruturada com esquema; dentro de uma
skill, use template no texto.

**`temperature` e `top_p` ajustados.** Os modelos atuais recusam valores fora do
padrão. Não escreva isso nas instruções de uso da skill.

**Delegação irrestrita a subagentes.** Delegar é caro e os modelos atuais
delegam demais. Se a skill menciona subagente, restrinja a tarefas grandes,
independentes e paralelizáveis.

## Checklist antes de entregar

- [ ] `description` diz o que faz, quando usar e quando não usar
- [ ] `description` usa as palavras que o usuário digita
- [ ] Não colide com o gatilho de outra skill instalada
- [ ] Corpo abaixo de quinhentas linhas, referências a um nível
- [ ] Fontes canônicas nomeadas, não descritas
- [ ] Critério de aceite verificável
- [ ] Nenhuma instrução da lista "hoje pioram o resultado"
- [ ] Terminologia consistente: um termo por conceito, do começo ao fim
- [ ] Sem informação com prazo de validade embutida sem data
- [ ] Caminhos com barra normal, nunca barra invertida
