# Briefing

## Conteúdo

- Como conduzir
- As seis perguntas
- Defaults quando o usuário não responde
- Frase de escopo

## Como conduzir

Pergunte em um único bloco, não em série. Cada pergunta precisa mudar o texto
que você vai escrever; se a resposta não muda nada, ela não é pergunta, é
curiosidade. Três perguntas bem escolhidas valem mais que oito genéricas.

O usuário costuma chegar com o tema, não com a especificação. As perguntas 1 e
2 são obrigatórias porque sem elas a skill não tem alvo nem gatilho. As demais
podem cair nos defaults.

## As seis perguntas

**1. Trabalho concreto.** Qual tarefa repetitiva essa skill substitui? Peça um
caso real já feito à mão. Um exemplo concreto revela o procedimento; uma
descrição abstrata do tema não revela nada.

**2. Gatilho e antigatilho.** Que frases devem acionar a skill? E em que
situação parecida ela não deve acionar? O antigatilho é o que impede colisão
com as outras skills instaladas — verifique quais já existem antes.

**3. Fontes.** Existem sites, autores, normas ou documentos canônicos do
domínio? Alguma fonte que o usuário considera ruim e quer evitar? Se houver
fonte canônica, ela entra na skill por nome, não por descrição vaga.

**4. Entregável.** O que sai no fim: resposta na conversa, arquivo Markdown,
planilha, documento, página publicada? Existe formato fixo que se repete a
cada uso? Formato fixo vira template dentro da skill.

**5. Profundidade e parada.** O que é "bom o bastante" nesse domínio? Quantas
fontes, qual recorte de tempo, o que é resposta rasa demais? Sem isso, a skill
gerada herda um critério de parada genérico e ou entrega raso ou nunca para.

**6. Restrições.** Idioma, tom, público, e o que a skill nunca deve fazer.
Proibições explícitas do domínio (dar conselho jurídico, prometer prazo,
publicar sem revisão) valem mais que dez linhas de estilo.

## Defaults

Quando o usuário mandar decidir, ou estiver ausente, use isto e declare cada
suposição em uma linha:

| Item | Default |
|---|---|
| Idioma | português do Brasil |
| Entregável | resposta estruturada na conversa, com arquivo Markdown quando passar de duas telas |
| Profundidade | ciclo de pesquisa padrão do `PESQUISA.md` |
| Tom | direto, sem preâmbulo, com a conclusão na primeira frase |
| Fontes | primárias e oficiais primeiro; agregadores e blogs só para achar as primárias |
| Público | o próprio usuário, com conhecimento intermediário do tema |

## Frase de escopo

Feche o briefing com uma frase só, e confirme antes de pesquisar:

> A skill vai **<fazer X>** quando **<gatilho Y>**, entregando **<Z>**.

Se o usuário corrigir a frase, o custo é uma linha. Se ele corrigir a skill
pronta, o custo é a skill inteira.
