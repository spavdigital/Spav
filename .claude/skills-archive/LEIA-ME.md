# Arquivo morto de skills — backup antes da faxina de 12/set/2026

Esta pasta **não é carregada como skill**. O Claude Code só lê `.claude/skills/`.
Aqui é só cofre: o que foi apagado da conta claude.ai fica guardado no git, com
histórico, e pode ser re-subido a qualquer momento.

## O que está guardado e por quê

| Pasta | Origem | Por que foi arquivada |
|---|---|---|
| `mapeando-mercado-dev/` | skill customizada da conta (`skill_01L46kiXeYSkoqnSxTz7mjPy`) | apagada na faxina — trabalho autoral, inclui o `avaliacao.jsonl` |
| `cacando-workstation-3d/` | skill customizada da conta (`skill_015KhJmv9mvEGWWSwoXAmHJQ`) | apagada na faxina — trabalho autoral, inclui o `avaliacao.jsonl` |
| `criando-prompts-especialistas/` | skill customizada da conta (`skill_01CJmzcTF9wCNojF3eVxEAb1`) | apagada na faxina — a mais completa das três (briefing, modelo, script de empacotamento, avaliação) |
| `radar-lusofono-original/` | versão da skill de vagas que estava ativa na conta antes da consolidação | base do merge; guardada pra conferir o que entrou e o que saiu |
| `game-scripting-migration-pacote-original/` | zip recebido em 12/set/2026, cru | o `SKILL.md` dele é um *patch*, não a skill — guardado pra rastrear a procedência das correções |

## Como restaurar uma delas

1. claude.ai → Settings → Capabilities → Skills → criar skill customizada.
2. Subir a pasta inteira (o `SKILL.md` e o que estiver ao lado dele).
3. Os `avaliacao.jsonl` são conjuntos de avaliação da `skill-creator` — só fazem
   sentido se a `skill-creator` estiver ativa de novo.

## O que **não** está guardado aqui

`morning`, `import-memory` e `skill-creator` (origem `anthropic-example`) e
`pdf`, `docx`, `xlsx`, `pptx` (origem `anthropic`) não foram copiadas: são da
Anthropic, não são trabalho seu, e voltam pela galeria de skills quando você
quiser. O que se perde ao removê-las é zero.
