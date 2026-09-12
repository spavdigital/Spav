# Pacote de migração — busca de vagas de game scripting

Consolidado em 12/set/2026. O que tem aqui:

- `SKILL.md` — a lógica da skill (perfil, regras de negociação, contenção de teste grátis). Sem mudanças de conteúdo, só é a mesma que já está ativa nesta conta.
- `references/fontes.md` — catálogo de fontes de vaga, **já com as correções de 21/ago incorporadas de vez** (antes viviam separadas num overlay do projeto porque editar a skill não persistia — o defeito que causava isso só se resolve reempacotando, e é isso que este pacote faz).
- `references/desbloqueio-de-fontes.md` — sem mudanças, ainda válido.
- `project-docs/log.md`, `pending-signups.md`, `sources-status.md`, `capacidade-de-postagem.md`, `doorfall-luci-negociacao.md` — versões consolidadas dos docs do Projeto "Game Scripting", juntando o que estava espalhado entre o doc do projeto (parado em 21/ago), a cópia congelada dentro da skill (até 25/ago) e a memória desta conta (até 06/set).

## Pendências já resolvidas (12/set)

- **peepbuild** e **cart/bubby_ghosty6987**: encerrados por falta de retorno após vários dias — não avançar.
- **OG_LEO / Lunar Lighting Studio**: vaga foi preenchida com outra pessoa — encerrado. A nota de risco (formulário automatizado, ~155 candidatos, pressão pra não sair do servidor) ficou registrada no fim do `log.md` só como referência, caso apareça outro contratante com o mesmo padrão.

## Passo a passo pra instalar na conta nova

1. Entre na conta nova → **Customize/Definições → Skills** → criar/subir skill customizada. Suba `SKILL.md` junto com a pasta `references/` (ela é lida como parte da skill).
2. Crie um Project chamado "Game Scripting" (ou o nome que preferir) nessa conta e adicione os 5 arquivos de `project-docs/` como documentos do projeto — copie e cole o conteúdo de cada `.md`, mantendo os mesmos nomes de arquivo, porque a skill referencia esses nomes diretamente (ex.: "confira `game-scripting/pending-signups.md`").
3. Vincule a skill a esse Project (ou deixe como skill de conta, se preferir que funcione em qualquer conversa).
4. Depois de confirmar que está tudo funcionando na conta nova, você pode remover a skill e o Project "Game Scripting" desta conta — é aí que o controle de gasto de tokens realmente se separa; enquanto os dois existirem nas duas contas, você paga a leitura duas vezes.
5. Memória: cada conta tem sua própria memória — nada disso migra sozinho. Se quiser que a conta nova já "saiba" do histórico de negociação (em vez de só ter os arquivos do projeto), o jeito mais barato é colar o conteúdo relevante numa primeira mensagem pra ela, em vez de deixar o Claude da conta nova reconstruir isso do zero conversando.
