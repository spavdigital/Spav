---
name: criando-prompts-especialistas
description: Cria uma nova skill especialista sobre qualquer tema, pesquisando na web em ciclos iterativos até a saturação antes de escrever, e entrega a skill pronta para instalar e usar na hora. Use quando o usuário disser "vamos fazer um prompt", pedir para criar ou gerar um prompt ou uma skill sobre um assunto, ou pedir que Claude se especialize em um tema antes de trabalhar nele. Não use para editar uma skill já existente, para empacotar uma skill sem pesquisa prévia, nem para responder uma pergunta pontual sobre um tema.
---

# Criando prompts especialistas

Transforma um tema solto em uma skill especialista: faz o briefing, pesquisa o
tema em ciclos até esgotar o que é novo, escreve a skill seguindo as regras de
prompting vigentes, gera casos de avaliação e entrega o arquivo pronto.

Todo o texto produzido — perguntas, notas e a skill gerada — é em português do
Brasil. Fontes em outros idiomas são lidas no original e sintetizadas em
português.

## Quando não usar

Melhorar, corrigir ou reempacotar uma skill que já existe; responder uma
pergunta direta sobre um tema sem gerar artefato; escrever um prompt de uso
único que o usuário vai colar uma vez e descartar. Nesses casos, faça o
trabalho direto.

## Fluxo

```
Progresso:
- [ ] Fase 0: mapear o ambiente e as ferramentas disponíveis
- [ ] Fase 1: briefing com o usuário
- [ ] Fase 2: pesquisa iterativa até a saturação
- [ ] Fase 3: redigir a skill
- [ ] Fase 4: gerar os casos de avaliação
- [ ] Fase 5: empacotar, entregar e aplicar
```

Marque cada fase ao concluir. Não pule a Fase 2: uma skill escrita só com
conhecimento interno envelhece mal e é exatamente o que esta skill existe para
evitar.

### Fase 0 — Ambiente

Descubra o que existe antes de prometer qualquer coisa, porque a entrega muda:

| Ambiente | Como reconhecer | Como entregar |
|---|---|---|
| Claude Code | há Bash e escrita em disco no projeto | escrever a pasta da skill em `.claude/skills/<nome>/` |
| Cowork | há Bash e `SendUserFile`, sem `.claude/skills` do projeto | montar o `.skill` e enviar com `SendUserFile` |
| Chat | sem Bash | devolver o `SKILL.md` completo em bloco de código, com as instruções de instalação |

Sem ferramenta de busca web disponível, avise o usuário antes de continuar: a
skill ainda pode ser escrita, mas sai baseada apenas em conhecimento interno e
isso precisa estar dito, não escondido.

### Fase 1 — Briefing

Faça as perguntas de `BRIEFING.md`. Regra de corte: pergunte apenas o que muda
o que você vai escrever. Se o usuário estiver ausente ou pedir para você
decidir, adote os defaults do próprio `BRIEFING.md`, declare cada suposição em
uma linha e siga — não trave esperando resposta.

Ao final do briefing, escreva uma frase única de escopo e confirme:
"A skill vai <fazer X> quando <gatilho Y>, entregando <Z>." Divergência aqui
custa uma frase; divergência descoberta na Fase 3 custa a skill inteira.

### Fase 2 — Pesquisa

Siga `PESQUISA.md`. O ciclo é buscar, ler, extrair, mudar o ângulo e buscar de
novo, até a saturação definida lá. `PESQUISA.md` também define o teto de
rodadas e o critério de parada — respeite os dois, pesquisa sem critério de
parada queima orçamento sem melhorar a skill.

Mantenha as descobertas em um arquivo de notas (`notas-pesquisa.md`) quando
houver disco. Sem disco, mantenha as notas na resposta, em forma condensada.

### Fase 3 — Redigir

Siga `MODELO-SKILL.md`, que traz o gabarito do arquivo e as regras de
prompting válidas para os modelos atuais. Duas regras dominam as demais:

O `description` é o que decide se a skill dispara. Ele carrega o que a skill
faz **e** quando usá-la, em terceira pessoa, com as palavras que o usuário
realmente digita. Um corpo excelente com `description` vago é uma skill que
nunca roda.

O corpo é orçamento de contexto. Escreva o que Claude não sabe: o
procedimento, as fontes canônicas, os erros típicos do domínio, os critérios
de aceite. Não escreva explicações genéricas que qualquer modelo já tem.

### Fase 4 — Avaliação

Siga `AVALIACAO.md`. Gere no mínimo três casos, sempre incluindo um caso
negativo — uma consulta parecida em que a skill **não** deve disparar. Sem o
caso negativo você não detecta a falha mais comum, que é a skill acionar
demais e atrapalhar as outras.

### Fase 5 — Entrega

Com Bash disponível, empacote com:

```bash
python3 scripts/empacotar.py <pasta-da-skill>
```

O script gera `<nome>.skill` ao lado da pasta. Entregue o arquivo com
`SendUserFile` no Cowork, ou grave a pasta em `.claude/skills/` no Claude
Code. Sem Bash, devolva o `SKILL.md` em bloco de código.

Diga ao usuário, em uma linha, que a skill foi **entregue** e que salvá-la na
conta é uma ação dele — você não tem sinal de que ela foi salva, então nunca
relate como instalada.

Depois de entregar, ofereça aplicar a skill imediatamente à tarefa que
originou o pedido. Era isso que o usuário queria desde o começo: não o arquivo,
mas o trabalho feito com ele.

## Arquivos

- `BRIEFING.md` — as perguntas por tipo de skill e os defaults
- `PESQUISA.md` — o ciclo iterativo e o critério de saturação
- `MODELO-SKILL.md` — gabarito do `SKILL.md` e regras de prompting atuais
- `AVALIACAO.md` — como montar os casos de teste
- `avaliacao.jsonl` — os casos desta própria skill, como exemplo de formato
- `scripts/empacotar.py` — monta o arquivo `.skill`
