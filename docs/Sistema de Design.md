# Sistema de Design

Tudo vive em `src/styles/global.css` (tokens + componentes compartilhados).

## Identidade InsperAI

- **Gradiente roxo → azul**: `#7c3aed → #2563eb` (`--insper-gradiente`).
- **Azul aço** nos títulos: `#294a6b` (`--insper-azul-aco`).
- **Fundo claro**: `#f5f8fd` (projetor com luz de sala acesa mata fundo escuro).
- Acentos de dados: coral `#f4603e` (previu a menos), ciano `#0ea5e9` (previu a
  mais), verde `#16a34a`, âmbar `#d97706`, vermelho `#dc2626`.

## Logo

`public/insperai-claro.png` (marca + wordmark "Insper AI", fundo claro) — usado no
topo da barra lateral. `public/insperai-escuro.png` (só a marca, fundo escuro) —
reserva para contexto escuro. A marca é um **grafo de nós** formando "AI", no
mesmo gradiente roxo→azul.

## Tipografia

- **Títulos:** `Space Grotesk` (CDN, com fallback do sistema → nunca quebra no projetor).
- **Corpo:** stack do sistema (leitura rápida e confiável).
- **Dados/números:** monospace do sistema (`--fonte-dados`) — número = precisão.

## PADRÃO DE PÁGINA

Definido em `SiteLayout.astro` + `global.css`. **Toda página nova usa ele.**
Refeito em 9 de agosto de 2026 — antes a barra lateral carregava tudo e a home
repetia o índice dela.

```
┌──────────────────────────────────────────────────────────┐
│ BARRA DO TOPO   marca · Aulas Projetos Recursos · Buscar │
├───────────┬──────────────────────────┬───────────────────┤
│ LATERAL   │  CONTEÚDO                │  NESTA AULA       │
│ índice da │  hero + texto + vizs     │  âncoras das ##   │
│ seção     │  leitura ~720px          │  (rail)           │
│ atual     │  vizs .larga = coluna    │                   │
└───────────┴──────────────────────────┴───────────────────┘
```

- **Barra do topo** (`.barra-topo`, 60px, sticky, `--barra-h`): a marca à
  esquerda, as **seções do site** no meio, a **busca** à direita. Global, em
  todas as páginas. Vem de `components/BarraTopo.astro`.
  - As seções são Aulas · Projetos · Recursos. **Projetos e Recursos ainda não
    existem**: aparecem com o selo "em breve" e **não são links** — nada de
    caminho que não leva a lugar nenhum.
  - "Aulas" aponta para `/#o-arco`, o arco da home. É o índice canônico de
    aulas do site; não existe uma página `/aulas` separada, de propósito, para
    não voltar a ter duas listas das mesmas 13 aulas.
  - A marca é **recortada por CSS**: o arquivo é um quadrado de 200×200 com o
    grafo em cima e o wordmark embaixo, e a 34px numa barra horizontal vira um
    borrão. O recorte (`background-size: 65px`, `background-position: -9.5px
    -5.5px`, caixa 42×38) foi medido no pixel — o grafo ocupa x 33–153, y 23–126
    do arquivo. O nome vem em texto ao lado.
- **Barra lateral** (`.sidebar`, 270px): agora é **só o índice da seção onde
  você está**. Em `/aulas/*` e `/guias/*` mostra "Antes de começar" (a Aula 0)
  mais os seis blocos. Perdeu o logo, que subiu para a barra do topo.
- **Conteúdo** (`.leitura`): texto em medida legível (`max-width: 720px`);
  visualizações levam a classe `larga` e usam a coluna inteira.
- **Rail "Nesta aula"** (`.rail`): âncoras das seções `##`. Some abaixo de 1120px.
- **Home**: `semLateral` — **não tem barra lateral**, é página inteira. Ver a
  seção abaixo.
- **Celular** (< 1000px): a lateral vira drawer (☰ na barra do topo, que só
  aparece quando a página tem lateral); abaixo de 620px as seções somem da barra
  e fica marca + busca.
- **"Tela cheia"** por visualização: `requestFullscreen` na `figure.viz-embed`.

### A busca

`components/Busca.astro` + `pages/busca.json.ts`. O índice é montado **no build**
(código, título, objetivo e as seções `##` de cada aula e guia) e vira um
`/busca.json` de ~7KB, baixado só na primeira vez que a busca abre — nenhuma
página carrega o índice à toa.

Abre pelo botão, por `/` ou por Cmd/Ctrl+K; fecha com Esc; `↑↓` navegam e Enter
abre. A comparação é **sem acento e sem caixa** ("convolucao" acha "A
convolução") e casa em duas granularidades: a aula inteira e a **seção dentro
dela** — o resultado de seção leva direto à âncora, e vem primeiro na ordem.

### A home

`pages/index.astro` + `components/Arco.astro`. Três partes, nesta ordem:

1. **Hero** — a frase-assinatura, o que é o programa, e dois caminhos:
   "Começar pela Aula 1" e "Nunca programei" (→ Aula 0).
2. **Como funciona** — quatro cartões com a **mecânica do programa**: 13 aulas
   (uma por semana), 2h de aula mais notebook, 1 provinha semanal, 2 desafios.
3. **O arco** — as 13 aulas como trilha de estações, agrupadas nos seis blocos.

**O que saiu, e por quê:**

- **Os seis cards que listavam as 13 aulas.** A barra lateral já fazia isso: quem
  chegava via o mesmo índice duas vezes. Essa duplicação era a raiz do problema.
- **"25 de 31 visualizações prontas"** e os selos "3 prontas" nos cards. Isso
  media o quanto o **site** estava construído — informação do professor, não do
  trainee — e ocupava o lugar mais nobre da página. Quando tudo ficasse pronto
  viraria "31 de 31", um número morto.

### A assinatura "o arco"

Agora ela é literal: `Arco.astro` desenha as 13 estações como uma trilha, uma
perna por bloco, com a cor **interpolada do roxo (Fundamentos) ao azul
(Fronteira)** — a viagem "de uma reta até um agente que aprende" fica no
gradiente. Estação escrita é link; a que ainda não existe fica com o ponto
tracejado e apagado. A linha que costura as estações some quando a perna tem uma
só (`:has(> :only-child)`).

## Regras invioláveis

- Sem rolagem horizontal no celular (medir `scrollWidth` vs `clientWidth`).
- Alto contraste, fonte grande.
- Respeita `prefers-reduced-motion`.
