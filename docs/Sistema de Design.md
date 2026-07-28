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

## PADRÃO DE PÁGINA (layout estilo documentação)

Este é o padrão atual, definido em `SiteLayout.astro` + `global.css`. **Toda página
nova usa ele.** Três colunas em telas largas:

```
┌───────────┬────────────────────────┬──────────────┐
│ SIDEBAR   │  CONTEÚDO              │  NESTA AULA  │
│ (índice)  │  hero + texto + vizs   │  (âncoras)   │
│ logo +    │                        │              │
│ 13 aulas  │  texto legível ~720px  │  seções ##   │
│ agrupadas │  vizs .larga = coluna  │  (rail)      │
│ a atual   │  toda                  │              │
│ destacada │                        │              │
└───────────┴────────────────────────┴──────────────┘
```

- **Barra lateral fixa** (`.sidebar`, ~270px): logo + índice das 13 aulas por
  bloco, a atual (`.nav-aula.ativa`) com fundo gradiente e borda esquerda roxa.
  Persiste em todas as páginas. Vem de `data/aulas.ts`.
- **Conteúdo** (`.leitura`): texto em medida legível (`max-width: 720px`,
  alinhado à esquerda); visualizações levam a classe `larga` e usam a **coluna
  inteira**. Markdown estiliza direto (`.leitura > h2`, `.leitura > p`).
- **Rail "Nesta aula"** (`.rail`): âncoras das seções `##`, vindas de `headings`
  (do `render(entry)`). Some abaixo de 1120px.
- **Celular** (< 1000px): a sidebar vira **drawer** (botão ☰ na `.topbar`), o rail
  some. Sem rolagem horizontal.
- **Home**: hero + os 6 blocos em cards (`.blocos-grid`), usando a largura toda.
- **"Tela cheia"** por visualização: `requestFullscreen` na `figure.viz-embed`; a
  viz redimensiona para preencher a tela (JS lê `document.fullscreenElement`).

> Numa tela **muito** larga (>1400px) sobra vão à direita — é esperado; em tela
> normal fica equilibrado. Não é bug.

### A assinatura "o arco"

A ideia do **arco** (as 13 aulas como sequência/estações no gradiente) agora vive
na **barra lateral** (índice vertical) e nos cards da home. A numeração A1→A13
carrega informação real (a cadeia de pré-requisitos). Encarna o fecho do roteiro:
*"de uma reta até agente e linguagem"*.

## Regras invioláveis

- Sem rolagem horizontal no celular (medir `scrollWidth` vs `clientWidth`).
- Alto contraste, fonte grande.
- Respeita `prefers-reduced-motion`.
