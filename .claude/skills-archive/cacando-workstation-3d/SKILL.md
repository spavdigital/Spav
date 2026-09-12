---
name: cacando-workstation-3d
description: Caça uma workstation pronta para Blender, Substance 3D e Roblox Studio no mercado brasileiro — novo, Openbox e usado — checando alvos nomeados, contornando lojas que bloqueiam leitura automatizada, e triando cada achado contra especificação e armadilhas conhecidas. Use quando o usuário pedir para rodar o radar da máquina, perguntar se apareceu PC ou placa de vídeo, mencionar Afrodite, Cratos, Openbox, 5060 Ti, ou colar um anúncio ou orçamento de PC para avaliar. Não use para buscar vaga de emprego ou freelance, para mapear demanda de mercado de dev, nem para escolher periférico, monitor ou notebook.
---

# Caçando workstation 3D

Encontra e tria máquinas para o pipeline 3D da SPAV Digital no varejo brasileiro, e devolve um veredito curto de comprar, negociar ou esperar.

## Quando não usar

Busca de vaga, freelance ou cliente: use `radar-lusofono`. Panorama de demanda por linguagem ou stack: use `mapeando-mercado-dev`. Escolha de monitor, teclado, cadeira ou notebook: responda direto, o alvo aqui é torre.

## O alvo

Escopo fechado em **produção de mapas, cenários e assets para Roblox** (27/08/2026). Isso inverte a ordem de prioridade em relação a um pipeline multi-engine, porque o Roblox limita a 21 mil triângulos por MeshPart e usa materiais nativos — a plataforma trava a textura muito antes de a VRAM virar gargalo.

Prioridade de triagem, da mais alta para a mais baixa:

| # | Item | Alvo | Por quê |
|---|---|---|---|
| 1 | **RAM** | 32GB em dois pentes; 64GB é diferencial real | teto direto de polígono na escultura: 32GB decima ~32M triângulos, 64GB ~64M, escala linear |
| 2 | **Clock de CPU** | Zen 4/5 ou Intel 12ª geração pra cima | viewport do Roblox Studio e do Blender é single-thread; Studio é CPU-bound, não GPU |
| 3 | **Núcleos** | 8+; 14-20 threads é ótimo | batch do SPAG é paralelizável e escala quase linear |
| 4 | **SSD** | 1TB NVMe **com cache DRAM** | batch noturno faz escrita sustentada; drive sem DRAM despenca quando o cache SLC enche |
| 5 | **Fonte** | 650W+ com marca e grau declarados | fonte ruim leva componente junto ao morrer, e é máquina única |
| 6 | **VRAM** | 8GB NVIDIA basta | escultura no Blender é CPU e RAM, não VRAM |

Teto: **R$ 9.100** com nobreak e Windows.

Máquina **montada** vale prêmio: o usuário não monta PC. Configuração que exige montagem própria é rejeitada mesmo se mais barata.

GPU integrada reprova sempre — a Adobe não suporta iGPU em x86-64 no Substance.

### Quais GPUs passam

Com escopo Roblox, o critério é **NVIDIA**, e a VRAM deixa de ser corte. Ordem de preferência quando o preço empata: RTX 5060 Ti 16GB, 4060 Ti 16GB, A4000 16GB ECC (140W, single-slot, sai de frota corporativa e raramente minerou), 3090 24GB (mais rápida por real, mas 350W, dois 8-pinos e a maioria minerou — exija teste térmico), 5070 12GB, 4060 8GB, 5060 8GB.

**Reprova:** qualquer AMD. Decisão do usuário, mantida mesmo sabendo que a diferença se concentra no Cycles — em Blender a NVIDIA via OptiX entrega cerca do dobro, e o tooling de bake e de IA é CUDA primeiro.

Se o escopo voltar a incluir Unreal Engine, multi-engine ou IA generativa local, **16GB volta a ser piso** — o Substance com múltiplos UDIMs em 4K e o Stable Diffusion são os dois casos onde 8GB falha feio.

## Fluxo

```
Progresso:
- [ ] Passo 1: checar os dois alvos nomeados
- [ ] Passo 2: varrer o Promobit
- [ ] Passo 3: varrer Terabyte e Pichau
- [ ] Passo 4: garimpar OLX com filtros estruturados
- [ ] Passo 5: montar a lista de tarefas manuais
- [ ] Passo 6: triar contra especificação e armadilhas
- [ ] Passo 7: relatório
```

### Passo 1 — Checar os dois alvos nomeados

Busque preço e estoque destes dois primeiro, porque são as máquinas já validadas contra a Config B e evitam refazer análise:

**Pichau Afrodite** — 5700X, RTX 5060 Ti 16GB, 32GB DDR4, 1TB, 750W, water 240mm.
`https://www.pichau.com.br/pc-pichau-gamer-afrodite-amd-ryzen-7-5700x-geforce-rtx-5060-ti-16gb-32gb-ddr4-ssd-m-2-1tb-60128`
Referência: R$ 8.299,98 no PIX, esgotado em 26/08/2026. É o alvo preferido.

**Pichau Cratos IV** — mesma especificação.
`https://www.pichau.com.br/pc-gamer-pichau-cratos-iv-amd-ryzen-7-5700x-geforce-rtx-5060-ti-16gb-32gb-ddr4-ssd-m-2-1tb-57040`
Referência: R$ 9.720,74 no PIX em 26/08/2026. Estoura o teto em cerca de mil reais.

As páginas de produto da Pichau são legíveis. Leia o campo `meta-product:availability` do cabeçalho, que traz `instock` ou `outofstock` de forma confiável. O corpo da página renderiza a palavra "Esgotado" no HTML estático mesmo com estoque — ignore o corpo e confie no `meta`.

### Passo 2 — Varrer o Promobit

KaBuM, Mercado Livre, Amazon e Magalu bloqueiam leitura automatizada. O Promobit agrega os quatro e é legível. É por aqui que se enxerga o que está acontecendo naquelas lojas.

```
https://www.promobit.com.br/promocoes/recentes/
https://www.promobit.com.br/promocoes/pc-gamer/s/
https://www.promobit.com.br/promocoes/hardware-perifericos/s/
https://www.promobit.com.br/promocoes/loja/kabum/
```

As ofertas vêm com carimbo de tempo, preço cheio e preço com desconto. Ofertas do Promobit expiram; confira a data antes de reportar preço como atual.

### Passo 3 — Varrer Terabyte e Pichau

```
https://www.terabyteshop.com.br/open-box
https://www.terabyteshop.com.br/pc-gamer
https://www.pichau.com.br/promocao/aniversario
```

Páginas de produto da Terabyte e da Pichau costumam responder à leitura. A página `pichau.com.br/openbox` recusa leitura automatizada — ela entra no Passo 4.

### Passo 4 — Garimpar OLX

A OLX é **legível por leitura automatizada** e devolve título, preço, cidade e data. O Facebook Marketplace exige login e não é acessível — anúncios de lá o usuário traz manualmente.

Ponto de partida: `https://www.olx.com.br/informatica/computadores-e-desktops`

**Prefira os filtros estruturados a palavra-chave.** A busca por texto genérico devolve milhares de máquinas de 2013 a 2019 e enterra o que presta. Os filtros da coluna esquerda que resolvem: Memória RAM (32 GB, 64 GB ou maior), Modelo do Processador (i7, i9, Ryzen 7, Ryzen 9), Marca da Placa de Vídeo (Nvidia), Características (Inclui monitor), Condição (Recondicionado), Tipo (Servidor, para workstations Xeon). Ordene por Mais Recentes.

Filtrar por **64GB de RAM** peneira sozinho: ninguém com máquina velha tem 64GB.

Buscas por URL que funcionam, no formato `olx.com.br/anuncios/<termo>`:

```
pc-64gb          workstation-64gb      pc-gamer-64gb
14600kf          14700                 i7-13700
9700x            7700x                 5700x
workstation-blender                    pc-render
pc-edicao-de-video                     setup-completo
```

Os termos **workstation, render e edição** costumam trazer RAM alta e CPU forte a preço melhor, porque o comprador gamer os ignora.

Oriente o usuário a salvar a busca com filtros na OLX e no Marketplace para receber alerta de anúncio novo — usado bom some em horas, e alerta rende mais que abrir o app várias vezes ao dia.

Estas fontes exigem navegador humano. Entregue como lista curta de tarefas, com o link e o que olhar em cada uma:

| Fonte | Link | O que olhar |
|---|---|---|
| Openbox Pichau | `pichau.com.br/openbox` | PC montado e 5060 Ti 16GB |
| Openbox KaBuM | `kabum.com.br/hotsite/openbox/` | filtro "Tipo de Produto" → OpenBox |
| Dell Outlet | `dell.com/pt-br/outlet/shop/desktop-all-in-ones` | filtrar Precision e Pro Max Tower |
| meuPCusado | `meupcusado.com/comprar` e WhatsApp (62) 3100-0761 | tem mais estoque que o site mostra |

Openbox tem garantia menor que produto novo, e o prazo varia por loja: KaBuM declara até 3 meses; a Terabyte declara apenas a garantia legal de 90 dias, sem garantia contratual; a Pichau não publica o prazo. Instrua a perguntar o prazo por escrito antes de fechar, porque é máquina única de trabalho e o prazo é o que separa um upgrade de um prejuízo.

Recomende Openbox de GPU e de memória, que ou funcionam ou falham cedo. Para SSD, recomende produto novo, porque desgaste de NAND não aparece em inspeção.

### Passo 6 — Triar contra especificação e armadilhas

Leia o anúncio nesta ordem, que segue a prioridade do alvo: quantidade e número de pentes de RAM; modelo exato da CPU (o número, não só "i5" ou "Ryzen 7"); marca, potência e grau da fonte; marca da placa-mãe; modelo do SSD; e só então a GPU.

Atalho de descarte rápido: anúncio que **não nomeia fonte nem modelo de SSD** mas detalha sete ventoinhas RGB e water cooler com display já revelou onde o dinheiro foi.

Rejeite ou sinalize qualquer candidato que apresente:

- **VRAM só no título.** Anúncios escrevem "RTX 5060 Ti" no título e 8GB na ficha técnica. Confirme pela ficha.
- **Memória em pente único.** "16GB (1x16)" vira single channel. Virou padrão do varejo por causa da crise de memória, então apareça esperando encontrar.
- **Código de peça que não bate com a descrição.** O código real da MSI RTX 5060 Ti 16GB Ventus 2X OC Plus é `G506T-16V2CP`. Um código no padrão `G5070-...-12...` indica RTX 5070 de 12GB, que reprova por VRAM.
- **Peça descrita como "VARIADOS" ou "GENÉRICO"**, ou código de barras sequencial tipo `1234567891257`. Exija marca e modelo na nota.
- **Gabinete aquário** com vidro na frente, que restringe entrada de ar sob carga sustentada.
- **Windows "Trial".** Os PCs montados da Pichau vêm assim; some R$ 150 ao custo total.
- **Vendedor marketplace** em vez da loja. Muda a garantia de por-peça-com-nota para prazo curto com terceiro.

Preços de referência apurados em 26/08/2026, para julgar se um anúncio está caro: RTX 5060 Ti 16GB nova entre R$ 3.800 e 4.000; kit 32GB DDR5 6000 acima de R$ 2.800 por causa da crise de memória, com normalização prevista só para 2028; 32GB DDR4 bem abaixo disso, o que mantém DDR4 como escolha racional e não como consolo.

**Openbox só é economia se for mais barato que a peça nova.** Compare o preço Openbox com o preço da mesma peça nova antes de recomendar. Em campo já apareceu Openbox de GPU acima do preço de varejo — recomendar aquilo teria custado dinheiro ao usuário.

### Verificação de vendedor

Fora de Pichau, KaBuM e Terabyte, peça ao usuário para consultar a situação cadastral do CNPJ antes de qualquer pagamento, em `servicos.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp` ou em cnpj.biz. **Situação diferente de ATIVA reprova a compra**, porque nota fiscal emitida por empresa inapta pode ser inidônea — e é a nota que sustenta a garantia. Em campo, uma loja anunciando garantia de 1 ano e nota fiscal estava inapta por omissão de declarações havia dois meses.

Quando o anúncio não trouxer CNPJ, diga isso ao usuário como um dado, não como acusação: sem CNPJ não há o que consultar, e o recurso em caso de defeito passa a ser só o WhatsApp do vendedor.

### Padrões de anúncio que apareceram em campo

Estes se repetiram ao longo de trinta anúncios reais e devem ser checados sempre:

- **A VRAM some justamente no item mais caro.** Anúncio que detalha RPM de ventoinha e certificação de fonte mas escreve só "RTX 5060 Ti" está omitindo, não esquecendo.
- **A fonte aparece como número solto**, sem marca e sem grau 80 Plus, num anúncio que nomeia todas as outras peças. Fontes de 500W e 600W apareceram várias vezes com placas que pedem 750W recomendados.
- **Placa-mãe de marca sem RMA no Brasil** — Maxsun, Jginyue, Erying, e similares de venda direta da China. O caso mais grave é o interposer com CPU de notebook soldada: se a placa falha, leva o processador junto.
- **Pentes de memória avulsos em vez de kit casado.** No AM5 isso frequentemente não treina na frequência anunciada, e a memória roda na velocidade do pente mais lento.
- **Office ou Windows "incluso"** sem licença declarada, em máquina que vai guardar código de cliente e credenciais.
- **X3D vendido como diferencial.** Cache 3D acelera jogo, não modelagem nem batch. Num orçamento de trabalho, é prêmio pago à toa — sinalize como oportunidade de negociar para baixo.
- **Gabinete aquário**, com vidro na frente restringindo a entrada de ar, em máquina que vai rodar lote a noite toda.

### Passo 7 — Relatório

Máximo de quinze linhas. Estrutura fixa:

```
ALVOS
Afrodite: <preço> — <instock|outofstock>
Cratos IV: <preço> — <instock|outofstock>

ACHADOS
<loja> — <máquina ou peça> — <preço> — <o que reprova, se reprova>

TAREFAS MANUAIS
<link> — <o que olhar>

VEREDITO
<comprar agora | negociar | esperar> — <uma frase de motivo>
```

Sem achado que passe na triagem, escreva "nada passou" e o veredito de esperar. Relatório sem achado é resultado válido, e é mais útil que preencher com candidato reprovado.

## Política de busca

Pesquise antes de afirmar qualquer preço ou estoque, porque os dois mudam em dias e a crise de memória move o mercado toda semana. Preço citado de memória, sem leitura na sessão, sai errado.

Quando uma leitura for recusada por bloqueio de robô, registre a fonte no Passo 5 como tarefa manual em vez de tentar variações de URL. As lojas bloqueadas estão nomeadas acima e não mudam de comportamento entre sessões.

## Regra de decisão

**Comprar agora** quando um candidato passa em todos os itens da Config B, vem montado, e o total com nobreak e Windows fica em até R$ 9.100.

**Negociar** quando o candidato acerta CPU e GPU mas erra em memória ou armazenamento. Nesses casos o ajuste custa menos que trocar de máquina — liste as exigências em forma de itens verificáveis na nota fiscal.

**Esperar** quando nada passa. Diga em quanto tempo vale olhar de novo, com base na fonte: Openbox gira em dias, promoção de loja gira em semanas.

## Contexto que muda a triagem

O usuário não monta PC. Toda recomendação que dependa de instalar peça precisa vir com quem faz a instalação.

É a primeira e única máquina dele, e a renda depende dela. Isso pesa garantia acionável acima de especificação bruta: entre duas máquinas equivalentes, a de garantia por peça com nota fiscal vence.

Ele fica em Paranã, Tocantins. Assistência no local vale prêmio real de preço, porque enviar torre para fora do estado custa semanas de trabalho parado.

### Nada no Marketplace está fechado até o vendedor confirmar

Toda máquina de Facebook Marketplace ou OLX que o usuário traz é **candidata em negociação**, nunca compra garantida, mesmo depois de uma proposta enviada, mesmo depois de perguntas respondidas sobre especificação. O vendedor pode não responder, o anúncio pode já ter saído do ar, o preço pode mudar, ou outra pessoa pode fechar primeiro.

Nunca trate uma candidata como já adquirida, nem fale como se o usuário estivesse "trocando algo bom por algo pior" ao avaliar uma máquina nova. Cada anúncio novo que o usuário traz é avaliado por si só, contra o conjunto de candidatas que **ainda estão em negociação aberta** — não contra uma suposta compra já decidida.

Quando o usuário tiver várias negociações simultâneas em aberto, liste-as como candidatas pendentes de resposta, não como propriedade dele. Uma vez que o vendedor responda confirmando disponibilidade e preço, e o usuário sinalizar que fechou, só então trate como resolvida.

## Critério de aceite

O relatório está pronto quando cada preço citado veio de uma leitura feita nesta sessão, cada candidato reprovado tem o motivo nomeado, as fontes bloqueadas aparecem como tarefa manual com link, e o veredito é uma das três palavras da regra de decisão.
