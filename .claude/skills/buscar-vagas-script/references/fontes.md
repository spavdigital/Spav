# Fontes — catálogo, fluxo de candidatura e bloqueios conhecidos

Base: catálogo de pesquisa (ago/2026), **com as correções empíricas da varredura de 21/ago/2026 já incorporadas permanentemente** (antes viviam num arquivo de overlay separado, `fontes-correcoes.md`, porque editar este arquivo dentro da skill não persistia entre sessões — na conta nova, reempacotar a skill com este arquivo já corrigido resolve isso). Sempre confira `pending-signups.md` (documento do Project) antes de assumir que uma fonte está logada, e `sources-status.md` (documento do Project) antes de assumir que está Ativa.

**Legenda de acesso**
- ✔ **Fetch simples** — dá pra ler sem navegador. Bom pra triagem rápida e barata.
- 🌐 **Exige navegador** — bloqueio anti-bot ou conteúdo JS. Use Chrome MCP com a sessão do Pedro.
- 🔒 **Exige login** — candidatura só logado.

---

## Camada 1 — Top tier

### 1. Cfx.re Server Bazaar (FiveM, Lua) — ✔ fetch simples, 🔒 login pra responder
- **Link:** `https://forum.cfx.re/c/server-development/server-bazaar/38/l/latest` (a variante `/l/latest` é a que lista os tópicos recentes de forma confiável)
- **Busca:** `https://forum.cfx.re/search?q=...` é **bloqueada por robots.txt** — não tente. Para achar tópicos antigos de hiring, use busca web externa filtrando `site:forum.cfx.re`.
- **Conta:** confirmada.
- **Como aplicar:** abra o tópico → botão Reply do Discourse → mensagem customizada → publicar. Não precisa citar o post; reply no tópico já notifica o autor.
- **Volume real (21/ago/2026):** altíssimo, mas **a maioria dos posts é ruído** — anúncio de servidor RP e devs se oferecendo ("For Hire"). Numa página de ~28 tópicos recentes, só 3–4 eram alguém contratando de fato. Filtre por título antes de abrir, mas **confirme sempre abrindo** — título "Hiring" muitas vezes é recrutamento de staff voluntário (PD/EMS/gangs), sem pagamento.
- **Idioma:** inglês predominante; também alemão, espanhol, português.
- **Velocidade:** posts saturam em horas. Responder no mesmo dia importa.
- **Se o post pede DM no Discord:** aplique no tópico público **e** deixe o texto de DM pronto pro Pedro (nunca automatize DM).
- **Moderação de conta nova:** posts de conta recém-criada caem em "Awaiting approval" — o autor do tópico não vê a mensagem até um moderador liberar. Na prática, o Pedro não compete em velocidade nessa fonte enquanto isso não subir de nível (ver `desbloqueio-de-fontes.md`).

### 2. GmodStore Job Market (Garry's Mod, Lua) — ✔ lista por fetch, 🌐 descrição, 🔒 candidatura
- **Link:** `https://www.gmodstore.com/jobmarket/jobs/browse`
- A lista de jobs carrega por fetch simples, com título, preço em USD e status. O que **não** carrega sem navegador é a **descrição individual** de cada job. Na prática: dá pra triar preço/status/concorrência sem navegador e só usar o Chrome pra ler a descrição e candidatar.
- **Conta:** login via Steam feito.
- **Campos úteis na página do job:** Budget (USD declarado), Category, nº de Applications, Views, License, **Status**.
- **Status manda:** `Listed` = aberto; `In Progress` = já atribuído, **ignore** independentemente do número de candidatos. **Atenção**: já houve caso de leitura errada do stepper classificando vaga aberta como "In Progress" — confirme abrindo a página antes de descartar.
- **Como aplicar:** logado → abrir o job → botão de candidatura/proposta → enviar pela interface (candidatura estruturada, não é reply de fórum). **Bug conhecido**: o botão Apply pode aparecer desabilitado mesmo com conta logada e vaga dentro do prazo, sem aviso — causa não documentada publicamente; desbloqueio é abrir ticket no suporte (ação do Pedro, a skill não abre ticket).
- **Faixa típica:** US$5 a US$300. **Alto ruído de assets:** na amostra de 18 jobs, ~12 eram modelo/mapa/animação/vídeo (fora do escopo) e só ~4 eram Lua. Filtre por categoria e título.

### 3. Minecraft — SpigotMC + BuiltByBit
- **SpigotMC "Hiring – Developers":** `https://www.spigotmc.org/forums/hiring-developers.55/` — **✘ 403 (Cloudflare) via fetch simples, confirmado.** Precisa de navegador real (sessão do Pedro).
  - **Conta:** feita, mas nova — só responde tópicos existentes. Sem 1 semana + 20 posts não abre tópico próprio. Não tente; se for bloqueado, registre e avise, não insista.
  - **Como aplicar:** fórum XenForo — abrir tópico, campo de resposta no rodapé.
- **BuiltByBit:** `https://builtbybit.com/` — **✔ CORRIGIDO: carrega normalmente por fetch simples, sem Cloudflare e sem login wall** (a classificação antiga de "bloqueado" estava errada). Threads de commission ficam nas tags `builtbybit.com/tags/commission/` e `/tags/plugin-developer/`. Mistura `[HIRING]` (demanda) com muito `[OFFERING]` (oferta = concorrência) — filtrar por título.
  - **Conta:** ainda não existe → prioridade alta em `pending-signups.md`, é o único passo faltando pra usar a fonte inteira.
  - **Como aplicar:** comentário no próprio tópico de commission.
- **Middleman:** SpigotMC e BuiltByBit têm sistema de middleman aprovado — mencionar/usar em negociações maiores reduz risco de calote.
- **Pagamento típico:** por escopo, USD/EUR via PayPal e Wise (alguns anúncios recusam explicitamente Payoneer/crypto).
- **Outras fontes Minecraft:** Minecraft Forum "Server Recruitment" (`minecraftforum.net/forums/servers-java-edition/server-recruitment`), Planet Minecraft forums (posts `[PAID] HIRING`).

---

## Camada 2 — Roblox (maior volume absoluto, filtro de moeda rígido)

- **Discords de candidatura direta (HiddenDevs #scripter-hiring, RoDevs #lfd-scripter, Scripting Helpers)** — **na prática, a fonte com melhor retorno desde 23/ago/2026.** Volume alto de vagas com valor fixo declarado em USD ou Robux, candidatura por DM ou thread de "Purchase". Sempre checar histórico de DM/thread com o mesmo contato antes de reabrir contato do zero (já houve quase-duplicata por não checar). Filtro obrigatório: só USD/EUR ou Robux convertido claramente vantajoso — muita vaga só paga em Robux puro, descartar. **Vagas que exigem "zero uso de IA" ou desafio de código ao vivo antes de contratar: descartar automaticamente** (regra adicionada em set/2026).
  - Convites expiram — confirme no momento de usar.
  - **Cuidado com "Application Server" / bots de formulário longo**: pelo menos um contratante (ver histórico de negociações) redirecionou de DM direta pra um formulário automatizado de dezenas de perguntas com fila de centenas de candidatos e pressão pra não sair do servidor — sinal de risco a levar ao Pedro antes de investir mais tempo, não só seguir o fluxo.
- **RoHire.dev** (agregador): `https://rohire.dev/` — ✔ fetch simples. Atualiza de hora em hora; puxa de DevForum, HiddenDevs, RoDevs e outros.
  - **Realidade em 21/ago/2026:** de ~50 listagens visíveis, a esmagadora maioria era **"For Hire"** (devs se oferecendo) e havia **1 única** vaga "Hiring" — animação, paga em 100k Robux. Trate como fonte de baixa prioridade até isso mudar, mas não pause (o relógio de 6 meses só corre com ausência real de vaga paga).
  - A calculadora de DevEx do site **não serve pra decidir**: Robux nunca conta como pago.
- **Roblox DevForum "Find and Hire Talent":** **✔ CORRIGIDO — a URL antiga (`devforum.roblox.com/c/development-support/collaboration/`) devolvia 404, não 403.** A categoria certa é `https://devforum.roblox.com/c/collaboration/81` e ela **carrega por fetch simples**. Sinal encontrado logo na primeira página em 21/ago: vaga de US$1.000+ com % para Gameplay Programmer — dinheiro real, no escopo. Isso muda a prioridade do Roblox: a densidade baixa registrada antes vinha do RoHire.dev, não do DevForum. Nível de confiança mínimo (Member) é exigido pra *postar/responder/enviar PM*, não pra ler — conta `SpavDigital` existe mas ainda não tem esse nível (ver `desbloqueio-de-fontes.md`).
- **Talent Hub oficial:** `create.roblox.com/talent` — 🔒 login. **Antes de escrever qualquer mensagem de candidatura nesta fonte, leia a seção "Regras do Roblox Talent Hub" em `capacidade-de-postagem.md` (documento do Project) — sem exceção, mesmo que já tenha sido lida numa execução anterior.** Resumo: o campo de mensagem opcional da candidatura passa por um filtro de texto automático que censura link externo e handle de Discord, podendo zerar a mensagem inteira sem aviso prévio além de um toast genérico ("a mensagem da candidatura foi totalmente moderada"); a Creator Page (perfil) só aceita 6 redes fixas (Roblox, Developer Forum, Facebook, Twitter, YouTube, Twitch), sem campo pra site pessoal/GitHub/Discord, e colocar link não aprovado ali arrisca moderação da conta inteira, não só da mensagem. **Regra fixa: mensagem de candidatura só com conteúdo técnico, zero link, zero handle — o link da Creator Page já vai junto por padrão.** Portfólio e Discord ficam pra quando o contratante responder dentro da conversa da candidatura. Já teve caso real de mensagem zerada na primeira tentativa e aceita na segunda, sem link/handle.
- **Espanhol/LatAm:** servidores de Roblox Studio em espanhol no DISBOARD (tag `roblox-studio`, filtro `es`) — menos concorrência de idioma, bom pra reputação inicial.
- **Filtro obrigatório:** só aplicar no que declarar dinheiro real. Robux está fora, sem exceção, mesmo via DevEx — a única exceção histórica é uma conversão de Robux claramente vantajosa combinada com uma parte fixa em USD/EUR relevante (avaliar caso a caso, não por padrão).

---

## Camada 3 — Reddit — ✘ bloqueado sem navegador

- `https://www.reddit.com/r/gameDevClassifieds/new/` e `old.reddit.com` **recusam fetch (403/PROXY_REJECTED) na sessão de nuvem.** **Importante: essa recusa é do proxy/ferramenta WebFetch deste ambiente, não é anti-bot do Reddit** — não tentar rota alternativa (curl, requests, cache, mirror); Reddit só via navegador real do Pedro.
- **Subs:** r/gameDevClassifieds (o melhor), r/INAT (muito rev-share — filtrar com rigor), r/RobloxGameDev, r/godot, r/Unity3D, r/admincraft, r/spigot, r/gamedevjobs.
- **Como aplicar:** ordenar por "new" pra pegar antes de saturar; comentário público no post. **DM do Reddit é permitida** (não é Discord) mas prefira o comentário público quando o post permitir.
- **Conta:** confirmada (`pedrogabriels`), uso sempre via navegador do Pedro.

---

## Camada 4 — Por engine

- **Unity:** **✔ CORRIGIDO — a URL antiga (`discussions.unity.com/c/community/collaboration-jobs/`) devolvia 404 em todas as variantes testadas.** O caminho atual é `https://discussions.unity.com/c/collaboration/46` ("Collaboration & Jobs") e carrega por fetch simples. **Não há subcategoria separada de Jobs** — comercial e não-comercial convivem na mesma lista, então o filtro de pagamento tem que ser feito tópico a tópico. Convenção de prefixo local: `[PAID]`, `[RevShare]`, `[FOR HIRE]` (este último é oferta, ignorar). GameDev.net deixa de ser necessário como substituto. Fórum roda Discourse: conta nova (`spavdigital`, criada 21/ago) cai em moderação no primeiro post, e **enquanto houver post pendente o botão de resposta some de TODOS os tópicos** — uma candidatura pendente bloqueia as outras (ver `desbloqueio-de-fontes.md`).
- **Unreal/UEFN:** UEFN Community (`discord.com/invite/PdbTcXdcCv`), UEFN Hub (`discord.com/invite/65kz6gQr7m`), Unreal Source, Game Dev League — todos Discord, então **candidatura manual pelo Pedro**. Rev-share puro é muito comum no nicho Fortnite Creator Economy: descartar salvo pagamento fixo.
- **Godot:** GodotHire (`https://godothire.com/`) — ✔ fetch simples, só vagas pagas, curadoria manual. **Em 21/ago/2026 estava com zero vagas publicadas** ("No jobs posted yet"). Checar periodicamente; barato de checar. Godot Café e outros Discords de Godot.

---

## Camada 5 — Complementares

- **Algora.io** (`https://algora.io/bounties`) — ✔ fetch simples. Bounties open-source em USD via Stripe Connect (funciona no Brasil, KYC no payout), ~10% de taxa retida. **Em 21/ago/2026: nenhum dos 10 bounties abertos era de engine de games** (Golem Cloud, Cap, Cal.com, Tolgee, Screenpipe, Omnigres). Fonte complementar, checagem rápida, expectativa baixa.
- **Work With Indies** (`workwithindies.com`) — board + newsletter, foco indie, inclui contract/freelance. Atenção a golpes que se passam pela marca.
- **Hitmarker** (`hitmarker.net`) — maior board de gaming/esports, candidatura rápida. Predominam vagas CLT/estúdio — filtrar por Contract/Freelance/Remote.
- **Telegram InGameJob** (`@ingamejob`, `@ingamejob_dev`) — seleção semanal de vagas de programação; predominam vagas de estúdio.
- **GameDevZone.com** — marketplace indie novo (fev/2026), gratuito — verificar tração antes de priorizar.

---

## Camada 6 — Regionais, ressalva forte

Só engajar se o cliente aceitar pagar em USD/EUR via PayPal/Wise.

- **China:** MineBBS (`minebbs.com`, seção 求职/招募), grupos QQ, KLPBBS/XyeBBS — pagamento em RMB via Alipay/WeChat Pay, difícil de sacar no Brasil. Contato por QQ.
- **Japão:** MineIdea (`mineidea.net`) — grande parte é 無償依頼 (não remunerado); filtrar só 有償依頼. Game Creators CAMP (`game-creators.camp`) recruta UE5/C++, alguns pagos.

---

## Fontes excluídas permanentemente (cobram do profissional)

Upwork, Freelancer.com, 99Freelas, Fiverr, Workana (plano pago), Coconala. Nunca sugerir nem usar, mesmo com pedido pago de scripting aparecendo.

---

## Resumo operacional (atualizado — correções de 21/ago já aplicadas acima)

| Fonte | Acesso sem navegador | Densidade de vaga paga no escopo |
|---|---|---|
| HiddenDevs / RoDevs / Scripting Helpers (Discord) | 🌐 sempre navegador/Discord | **Alta** — hoje a fonte com mais candidaturas ativas |
| Cfx.re Server Bazaar | ✔ | Média — 3–4 reais em ~28 tópicos |
| GmodStore Job Market | ✔ (lista) / 🌐 (descrição) | Média — ~4 Lua em 18 jobs, preços declarados |
| BuiltByBit | ✔ **(corrigido)** | Ainda não classificada com candidatura real — conta pendente |
| Roblox DevForum | ✔ **(corrigido)** | Média — pelo menos 1 vaga de US$1.000+ na 1ª página |
| Unity Discussions | ✔ **(corrigido)** | Baixa a média — poucos [PAID] em meio a hobby/rev-share |
| RoHire.dev | ✔ | Muito baixa — quase só Robux |
| Algora.io | ✔ | Nula no momento |
| GodotHire | ✔ | Nula no momento (board vazio) |
| SpigotMC | ✘ 403 | Desconhecida — testar com navegador local |
| Reddit | ✘ (bloqueio do proxy, não do site) | Desconhecida — testar com navegador local |

---

## Notas sobre o agente do Chrome (painel lateral do Cowork)

- **Cloudflare vs. agente do navegador:** as fontes que dão 403 na nuvem (SpigotMC, Reddit) usam o navegador real do Pedro no painel do Chrome, com o IP e o perfil dele. É provável que passem, mas **teste e registre** em vez de assumir.
- **Fragilidade de layout:** fluxo de vários passos quebra quando o site muda um botão ou abre um modal novo. Se um envio travar no meio, registre a falha e siga — não insista nem improvise clique às cegas.
- **Editor de fórum:** escreva a mensagem em texto simples. Editores rich-text costumam mostrar `**` e `_` literais.
- **Rate limit do Discourse:** o Cfx.re limita respostas seguidas de conta nova. Espace os envios; se bloquear, retome na próxima sessão em vez de forçar.
- **Confirmação obrigatória:** depois de enviar, recarregue a página e veja a mensagem publicada antes de registrar `Aplicado`.
- **Sites bloqueados por padrão** na extensão (bancos, plataformas financeiras, exchanges de cripto) não afetam nenhuma fonte deste catálogo — mas se um contratante pedir para acessar algo assim, recuse.
