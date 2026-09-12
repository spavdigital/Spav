# Capacidade de postagem por fonte

Preenchido pelo diagnóstico de fonte. Fonte que não passa nos três primeiros checks não gera fila.

Última verificação: 2026-08-21

| Fonte | Sessão logada | Controle de candidatura | Habilitado | Destino do post | Trava atual | Próxima ação (de quem) |
|---|---|---|---|---|---|---|
| **HiddenDevs #scripter-hiring** | Sim (`PedroGabriels`) | **Não existe** — canal somente leitura, posts entram via bot `/post` | **Não** | — | Canal fechado a mensagens; todas as vagas pedem DM | **Pedro envia as DMs manualmente** (regra dura: nunca automatizar DM no Discord) |
| Cfx.re Server Bazaar | Sim | Botão Reply presente | Sim | **Moderação** ("Awaiting approval") | Nível de confiança baixo | Participar em Resource Development / Client Support (skill, com aprovação) |
| Unity Discussions | Sim (`spavdigital`, criada 21/ago) | Botão Reply presente | Sim, **mas some enquanto houver post pendente** | **Moderação** ("Post Needs Approval") | 1 post pendente bloqueia o fórum inteiro | Aguardar aprovação; subir pra TL1 lendo (5 tópicos / 30 posts / 10 min) |
| Roblox DevForum | Sim (`SpavDigital`) | **Não existe botão de resposta** em Find and Hire Talent; sem botão "Mensagem" no perfil alheio | — | — | Rank abaixo de Member | Responder em Scripting Support / Building Support (skill, com aprovação) |
| GmodStore Job Market | Sim (Steam) | Botão Apply presente | **Não — desabilitado em todas as vagas** | — | Causa não documentada | Abrir ticket no suporte (Pedro) |
| SpigotMC | Sim (`spavdigital`) | Resposta em tópico existente: sim. Abrir tópico: não | Parcial | A confirmar | 20 posts + 1 semana pra abrir tópico | Responder em Spigot Plugin Development (skill, com aprovação) |
| Reddit | Sim (`pedrogabriels`) | Comentário público | Sim | A confirmar | Nenhuma conhecida | Testar num post real quando aparecer vaga no escopo |
| BuiltByBit | Não | — | — | — | Sem conta | Criar conta (Pedro) |
| **Roblox Talent Hub** | Sim (`SpavDigital`) | Botão "Aplicar" abre modal com Creator Page + mensagem opcional (limite de 300 caracteres) | Sim | Aplicação direta ao empregador (sem fila de moderação humana visível), **mas mensagem opcional passa por filtro automático de texto** que pode zerá-la inteira | Filtro de texto bloqueia link externo e handle de Discord na mensagem (ver regras completas abaixo). Creator Page não tem campo pra site pessoal/GitHub/Discord (só 6 redes fixas) | Escrever mensagens só com conteúdo técnico, sem link nem handle |

## Regras do Roblox Talent Hub — pesquisado em 2026-08-25

**Fonte:** documentação oficial (`create.roblox.com/docs/.../talent-hub-developer-safety`), Community Standards da Roblox, e threads do Developer Forum sobre o filtro do Talent Hub (incluindo resposta de um funcionário da Roblox, Jed Peraldon).

1. **A Creator Page (perfil de talento) só aceita 6 redes fixas via checkbox**, importadas do perfil geral de criador: Roblox, Developer Forum, Facebook, Twitter, YouTube, Twitch. Não existe campo de site pessoal, GitHub ou Discord — confirmado ao vivo na tela de edição do perfil do Pedro (sem salvar nenhuma mudança). Ou seja, não dá pra "esconder" o portfólio no perfil como alternativa à mensagem — essa rota simplesmente não existe. O campo "Preferred Contact" também só oferece as mesmas redes marcadas — não existe opção de Discord ou e-mail ali.
2. **O campo "mensagem opcional" da candidatura passa por um filtro de texto automático** que censura links para domínios fora de uma lista pré-aprovada (~25 domínios, majoritariamente propriedades da própria Roblox) e censura menções/handles do Discord. Quando o filtro pega algo, a mensagem inteira pode ser zerada silenciosamente — foi o que aconteceu com a candidatura de 2026-08-25 ("a mensagem da candidatura foi totalmente moderada"). O link da Creator Page enviado por padrão pelo formulário não passa por esse filtro (é campo estruturado, não texto livre).
3. **Colocar link externo não aprovado na própria página do perfil pode gerar moderação da página inteira** ("was moderated for directing people off platform"), e em um caso relatado no fórum a conta chegou a ficar temporariamente restrita, exigindo reaceitar os termos de uso pra ser reativada. O risco de usar link externo não é só "a mensagem some" — no perfil, pode virar penalidade de conta.
4. Um funcionário da Roblox (Jed Peraldon) confirmou publicamente que a equipe sabe que o filtro "está restritivo demais" pro tipo de conversa que acontece no Talent Hub, e que estão trabalhando numa versão mais específica pro contexto de contratação — ainda não está em produção.
5. Existe uma mensagem oficial dentro do chat de candidatura dizendo que "compartilhar links fora da plataforma não será moderado neste chat, já que todos os participantes têm 18+ verificados" — mas relatos recentes de desenvolvedores mostram que essa promessa nem sempre se cumpre na prática.
6. Nas Community Standards gerais da Roblox, compartilhar handles/identificadores externos (Discord, Twitter etc.) só é oficialmente liberado via o recurso de Social Links, que exige verificação de idade 16+ — e no Talent Hub esse recurso está limitado às 6 redes do item 1, então não cobre Discord de qualquer forma.

**Regra prática pra toda candidatura no Roblox Talent Hub (aplicar SEMPRE, não só nesta vaga):**
- Mensagem de candidatura: só conteúdo técnico/pitch, zero link e zero handle. O link da Creator Page já vai junto automaticamente por padrão — não precisa (e não deve) ser digitado na mensagem.
- Não tentar adicionar spavdigital.com.br nem github.com/spavdigital na Creator Page — não tem onde, e o risco documentado é moderação da conta inteira, não vale o teste.
- Discord e portfólio ficam pra quando o contratante responder dentro da conversa da candidatura (não a mensagem inicial) — esse chat pode ser mais permissivo pra usuários 18+ verificados, mas isso não está confirmado na prática; testar com cautela quando surgir a oportunidade.
- Se o filtro barrar de novo mesmo sem link/handle, é sinal de over-filtering do lado da Roblox (bug documentado, não erro nosso) — registrar e não insistir removendo mais conteúdo.

Sources: [Talent Hub developer safety docs](https://create.roblox.com/docs/production/community/talent-hub-developer-safety/) · [Roblox Community Standards](https://about.roblox.com/community-standards) · [Talent Hub Censorship (DevForum)](https://devforum.roblox.com/t/talent-hub-censorship/4780811) · [Get rid of the chat filter in the Talent Hub (DevForum, resposta oficial da Roblox)](https://devforum.roblox.com/t/get-rid-of-the-chat-filter-in-the-talent-hub/1415892) · [TalentHub Account Moderated Due to Off Site Links (DevForum)](https://devforum.roblox.com/t/talenthubaccount-moderated-due-to-off-site-links/2228103) · [Is it okay to share a Discord Link when contacting an applicant on talent hub? (DevForum)](https://devforum.roblox.com/t/is-it-okay-to-share-a-discord-link-when-contacting-an-applicant-on-talent-hub/3850271)
