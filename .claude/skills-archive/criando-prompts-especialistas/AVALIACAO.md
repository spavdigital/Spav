# Avaliação da skill gerada

## Conteúdo

- Por que avaliar
- Formato dos casos
- Os três casos mínimos
- Como rodar e o que corrigir

## Por que avaliar

A falha mais comum de uma skill não é o conteúdo do corpo: é o `description`
não disparar quando devia, ou disparar quando não devia. Isso só aparece em
teste. Entregue sempre os casos junto com a skill.

## Formato

Um objeto por caso, em `avaliacao.jsonl`:

```json
{"skills": ["<nome>"], "query": "<o que o usuário digitaria>", "deve_disparar": true, "expected_behavior": ["comportamento observável 1", "comportamento observável 2"]}
```

`expected_behavior` descreve o que dá para observar na saída, não a intenção.
"Cita a fonte primária com data" é observável; "entende o contexto" não é.

## Os três casos mínimos

**Caso central.** O pedido típico, com as palavras que o usuário usa de
verdade. Deve disparar e cumprir o fluxo inteiro.

**Caso de borda.** O pedido dentro do escopo mas incomum: entrada incompleta,
tema vizinho, pergunta ambígua. Deve disparar e lidar com a irregularidade sem
inventar.

**Caso negativo.** Um pedido parecido que **não** deve disparar a skill, de
preferência algo coberto por outra skill instalada. `deve_disparar` é `false`.
Sem esse caso você não detecta acionamento em excesso, que é o defeito que
degrada todas as outras skills ao mesmo tempo.

Acrescente um quarto caso quando a skill tiver um formato de saída fixo, para
checar se o template é seguido à risca.

## Como rodar e corrigir

Rode cada consulta em uma sessão limpa, sem contexto da conversa que criou a
skill. Contexto residual faz a skill parecer funcionar quando é a conversa que
está guiando.

O que fazer com cada falha:

| Sintoma | Causa provável | Correção |
|---|---|---|
| Não disparou no caso central | `description` sem as palavras do usuário | reescrever o `description`, não o corpo |
| Disparou no caso negativo | escopo largo demais | acrescentar a cláusula de "não use" |
| Disparou e fez o passo errado | fluxo ambíguo | numerar os passos e nomear o artefato de cada um |
| Saída fora do formato | template só descrito | colar o template literal na skill |
| Resposta longa demais | falta de calibração | dizer o tamanho esperado, explicitamente |

Corrija uma coisa por vez e rode de novo. Duas correções simultâneas escondem
qual delas resolveu.
