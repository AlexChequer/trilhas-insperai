# Sistema de Design

Tudo vive em `src/styles/global.css` (tokens + componentes compartilhados).

## Identidade InsperAI

- **Gradiente roxo → azul**: `#7c3aed → #2563eb` (`--insper-gradiente`).
- **Azul aço** nos títulos: `#294a6b` (`--insper-azul-aco`).
- **Fundo claro**: `#f5f8fd` (projetor com luz de sala acesa mata fundo escuro).
- Acentos de dados: coral `#f4603e` (previu a menos), ciano `#0ea5e9` (previu a
  mais), verde `#16a34a`, âmbar `#d97706`, vermelho `#dc2626`.

## A assinatura: "o arco"

O elemento memorável do site é **o arco** — uma linha-gradiente vertical que
costura o semestre. Na home, as 13 aulas são **estações** numeradas ao longo
dele; a numeração A1→A13 carrega informação real (a cadeia de pré-requisitos),
não é enfeite. Encarna o fecho do próprio roteiro: *"de uma reta até agente e
linguagem"*.

## Tipografia

- **Títulos:** `Space Grotesk` (CDN, com fallback do sistema → nunca quebra no projetor).
- **Corpo:** stack do sistema (leitura rápida e confiável).
- **Dados/números:** monospace do sistema (`--fonte-dados`) — número = precisão.

## Layout das páginas de aula

- Coluna de leitura estreita (~700px) para o texto.
- Visualizações **quebram mais largas** (~980px) como `figure.viz-embed`, cada uma
  com barra + botão **"Tela cheia"** (`requestFullscreen` na figura).
- Markdown estiliza direto: `.leitura > h2` (título de seção), `.leitura > p`
  (prosa). Não precisa de classe em cada parágrafo.

## Regras invioláveis

- Sem rolagem horizontal no celular (medir `scrollWidth` vs `clientWidth`).
- Alto contraste, fonte grande.
- Respeita `prefers-reduced-motion`.
