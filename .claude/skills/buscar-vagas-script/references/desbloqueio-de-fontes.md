# Desbloqueio de fontes — por que o Pedro não consegue postar e o que destrava

Descoberto empiricamente em 21/ago/2026, quando 4 candidaturas aprovadas resultaram em **1 enviada**. O gargalo do projeto hoje não é achar vaga: é que quase toda fonte tem uma trava de conta nova entre a mensagem pronta e o cliente.

**Regra de ouro:** trava de conta nunca se resolve fingindo. Não existe atalho que não seja participar de verdade ou falar com o suporte.

---

## Os quatro tipos de trava

| Tipo | Sintoma | Quem resolve |
|---|---|---|
| **Sem sessão** | O site mostra "Log in" / "Sign Up" | Pedro (a skill nunca faz login) |
| **Moderação** | O post é enviado mas fica "Awaiting approval" / "Post Needs Approval" | Tempo + reputação |
| **Sem permissão** | O botão de resposta simplesmente não existe no tópico | Reputação |
| **Bloqueio de plataforma** | O botão existe mas está desabilitado, sem explicação | Suporte da plataforma |

Distinguir os quatro importa: só o primeiro é resolvido em dois minutos, e só o último precisa de humano do outro lado.

---

## Discourse (Cfx.re, Unity Discussions, Roblox DevForum)

Os três rodam Discourse, então a mecânica é a mesma: **níveis de confiança** (trust levels) calculados automaticamente pela leitura e participação.

**Trust Level 1 (Basic) — padrão do Discourse:**

- entrar em pelo menos 5 tópicos
- ler pelo menos 30 posts
- somar 10 minutos de leitura

**Trust Level 2 (Member) — padrão do Discourse:**

- visitar em pelo menos 15 dias (não precisam ser seguidos)
- dar pelo menos 1 curtida
- receber pelo menos 1 curtida
- responder em pelo menos 3 tópicos diferentes
- entrar em pelo menos 20 tópicos
- ler pelo menos 100 posts
- somar 60 minutos de leitura

Fóruns podem endurecer esses números, e a maioria endurece.

### Cfx.re

- Conta logada, botão Reply presente, **mas o post cai em "Awaiting approval"**. O autor do tópico não vê a mensagem até um moderador liberar.
- Consequência prática: no Cfx.re o Pedro **não compete em velocidade**. Posts do Server Bazaar saturam em horas; um post em moderação chega depois da festa.
- Desbloqueio: subir de nível participando fora do Server Bazaar — Server Discussion, FiveM Client Support, Resource Development.

### Unity Discussions

- Conta criada em 21/ago. O primeiro post foi aceito e caiu em "Post Needs Approval".
- **Efeito colateral crítico:** enquanto houver um post pendente, o botão de resposta some de TODOS os tópicos do fórum. Uma candidatura pendente bloqueia todas as outras.
- Desbloqueio: esperar a aprovação do primeiro post e subir para TL1 lendo (5 tópicos, 30 posts, 10 min — barato).

### Roblox DevForum

- Logado como `SpavDigital`, mas **sem botão de resposta em Find and Hire Talent e sem botão "Mensagem" no perfil de outros usuários**. Não dá nem pra responder nem pra mandar PM.
- O Roblox não publica os números exatos do rank Member; a comunidade reporta que vem de leitura consistente ao longo de vários dias, acima do padrão do Discourse.
- Perfil em 21/ago: 9 dias acessados, 24 min de leitura, 25 tópicos vistos, 121 posts lidos, 0 postagem criada. Falta participação, não falta tempo.
- Desbloqueio: ler e **responder** em categorias abertas (Scripting Support, Building Support, Game Design Support), receber curtidas.

---

## SpigotMC

- Logado como `spavdigital`. Pode **responder** em tópicos existentes.
- Não pode **abrir** tópico na seção Hiring sem 20 posts e 1 semana de conta. O próprio fórum avisa isso no topo da seção e promove automaticamente.
- Desbloqueio: 20 respostas úteis em Spigot Plugin Development / Spigot Plugin Help.

---

## GmodStore

- Login via Steam resolvido em 21/ago.
- **Botão Apply aparece mas está desabilitado (`div.btn.btn-secondary.disabled`) em todas as vagas**, inclusive numa aberta até 30/out/2026. Não é prazo vencido.
- O guia oficial de Job Guidelines não lista nenhum pré-requisito de conta para se candidatar, e as configurações de perfil não mostram nenhum aviso pendente. Ou seja: a causa não é pública.
- Desbloqueio: **abrir ticket no suporte** (Help & Support → Submit a ticket) perguntando por que o Apply está desabilitado. Isso é ação do Pedro; a skill não abre ticket nem mexe em configuração de conta.
- Enquanto isso, aproveite: preencher "Portfolio URL" nas configurações de perfil, que hoje está vazio.

---

## Ordem de ataque recomendada

Ordene por (vagas destravadas) ÷ (esforço), não por tamanho da fonte.

1. **GmodStore** — um ticket destrava 4+ vagas de Lua com licença MIT. Maior retorno por esforço.
2. **Unity Discussions** — TL1 custa ~15 minutos de leitura e o board tem contrato sério com pouca concorrência.
3. **Roblox DevForum** — maior volume de dinheiro do catálogo, mas exige dias de participação real.
4. **Cfx.re** — sair da moderação melhora a velocidade, que é justamente o que essa fonte exige.
5. **SpigotMC** — 20 posts destravam abrir tópico próprio, mas a seção tem baixíssima rotatividade (nada novo desde mai/2026). Prioridade baixa.
