# buscar-vagas-script — skill de conta do Pedro

Fonte de verdade versionada. Esta pasta é o pacote que sobe em
**claude.ai → Settings → Capabilities → Skills**.

Ela existe no git por causa de um defeito real: **editar um arquivo dentro da
skill durante uma conversa não persiste.** Só reinstalar o pacote aplica a
mudança. Antes disso, o catálogo de fontes ficou desatualizado por semanas sem
ninguém perceber.

## Linhagem

`radar-lusofono` → `buscar-vagas` → `buscar-vagas-script` (12/set/2026).

O nome ganhou o sufixo `-script` porque vem uma irmã: uma skill separada para
vagas de build, modelagem 3D, personagem, cenário e asset. As duas descrições
delimitam escopo explicitamente pra não brigarem no disparo.

## A regra de arquitetura

| Onde | O que vai | Por quê |
|---|---|---|
| **No pacote** (`SKILL.md` + `references/`) | perfil, regras de negociação, protocolo de teste grátis, catálogo de fontes validado, preços, regras de fórum | é estável; muda raramente e vale reempacotar quando mudar |
| **Nos documentos do Project** | log de candidaturas, cadastros pendentes, status de fontes, aprendizados, fontes candidatas, negociações abertas | muda toda semana; documento de Project se edita na hora, sem reinstalar nada |

Os documentos do Project estão em `.claude/project-docs-game-scripting/` neste
repositório, prontos pra colar num Project chamado "Game Scripting".

## Sem citação fantasma

Toda referência citada no `SKILL.md` existe no pacote. Foi conferido — não há
ponteiro para arquivo inexistente. O `scripts/coletor.py` que a versão anterior
citava foi removido da citação, já que o script nunca existiu.

## O que mudou nesta versão

- **A skill envia.** Roda sempre no Chrome com a sessão do Pedro e ele presente;
  onde a fonte permite, ela publica. Onde não permite, prepara e chama.
- **Uma vaga por vez.** Encontre → analise → preencha → envie ou chame → confirme
  → registre → próxima. Sem enfileirar.
- **Confirmação obrigatória de publicação** antes de registrar `Enviado` —
  Discourse joga post de conta nova em moderação sem avisar o autor do tópico.
- **DM no Discord continua manual.** É a única exceção ao envio, e é regra do
  próprio Pedro.
- **Toda mensagem em EN + PT-BR.** Ele não lê inglês e precisa conferir o que sai
  em nome dele.
- **Nada some em silêncio.** Só não aparece o que não paga dinheiro real. Vaga com
  sinal ruim (zero-IA, desafio ao vivo, formulário-bot) aparece com aviso.
- **Análise de contratante só depois que ele responde** — antes disso é tempo
  gasto com quem talvez nem responda.
- **Escopo grande vira marcos**, com 50/50 em cada marco.
- **C#/Unity** entrou no escopo, junto de Luau/Roblox, Lua/FiveM e Lua/GMod.
- **Dois modos de entrada.** O Pedro costuma rodar a skill já dentro de um fórum,
  com página aberta — varrer tudo nessa hora é desperdício. A skill infere o modo
  quando o sinal é claro, pergunta só quando é ambíguo, e sempre declara em qual
  entrou, pra ele corrigir em uma palavra.
- **Condição de pagamento fora do primeiro contato.** 50/50, marcos e valor são
  assunto da negociação, não da mensagem de abertura.
- **O arranjo com o filho não é oferecido**, só respondido se perguntarem.

## Pendência aberta

`precos.md` e `regras-devforum.md` foram escritos **sem acesso à fonte primária**
— `create.roblox.com` e `devforum.roblox.com` estão bloqueados pelo proxy do
ambiente de nuvem. Os números e regras são utilizáveis, mas cada arquivo diz isso
no topo e manda confirmar antes de usar numa proposta.

Achado que vale ação: desde março/2026 a categoria Collaboration do DevForum é
**18+ com Age Check obrigatório**. Isso pode ser a trava real da conta
`SpavDigital`, e não o nível de confiança — ler posts não destrava verificação de
idade.
