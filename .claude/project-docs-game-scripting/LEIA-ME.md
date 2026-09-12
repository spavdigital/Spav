# Documentos do Project "Game Scripting"

Estes arquivos **não** fazem parte do pacote da skill `buscar-vagas-script`. Eles
vão como **documentos de um Project** no claude.ai, e a skill se refere a eles
pelo nome.

## Por que separado

Editar um arquivo dentro do pacote da skill durante uma conversa **não
persiste** — só reinstalar a skill inteira aplica a mudança. Documento de Project
se edita na hora. Então tudo que muda com frequência mora aqui:

| Documento | Muda quando |
|---|---|
| `log.md` | a cada candidatura |
| `pending-signups.md` | a cada cadastro feito ou pendente |
| `sources-status.md` | a cada fonte que sobe, cai ou muda de URL |
| `capacidade-de-postagem.md` | a cada trava de conta que destrava |
| `aprendizados.md` | a cada rodada |
| `fontes-candidatas.md` | a cada fonte nova citada num anúncio |
| `doorfall-luci-negociacao.md` | enquanto a negociação estiver aberta |

O que é estável — perfil, regras de negociação, catálogo validado, preços,
regras de fórum — fica no pacote da skill.

## Como instalar

1. claude.ai → criar um Project chamado **Game Scripting**.
2. Adicionar cada `.md` desta pasta como documento do Project, **mantendo o mesmo
   nome de arquivo** — a skill referencia por nome.
3. Vincular a skill `buscar-vagas-script` a esse Project (ou deixá-la como skill
   de conta, se preferir que funcione em qualquer conversa).

## Estado inicial (12/set/2026)

- **`log.md`** — vazio por decisão do Pedro, com o formato de tabela já montado.
  O histórico anterior está arquivado em
  `.claude/skills-archive/game-scripting-migration-pacote-original/project-docs/log.md`
  no repositório, caso um contratante antigo reapareça.
- **`aprendizados.md`** e **`fontes-candidatas.md`** — vazios por desenho, com o
  formato de entrada definido. A skill preenche.
- **`pending-signups.md`**, **`sources-status.md`**,
  **`capacidade-de-postagem.md`**, **`doorfall-luci-negociacao.md`** — vieram com
  conteúdo real do pacote de migração. Isso **não** é histórico morto: são estado
  atual. Em particular, `doorfall-luci-negociacao.md` descreve uma negociação
  **aberta** (Luci / Doorfall), com estado registrado em 28/ago — confirme com o
  Pedro o que mudou desde então antes de tratar como atual.
