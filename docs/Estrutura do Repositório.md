# Estrutura do Repositório

```
trilha-trainees/
├── roteiro.md                 # FONTE de conteúdo das 13 aulas
├── astro.config.mjs           # Astro + MDX + KaTeX
├── package.json
├── docs/                      # ESTE vault do Obsidian
├── src/
│   ├── pages/
│   │   ├── index.astro        # a home (o arco)
│   │   └── aulas/[slug].astro  # rota dinâmica: renderiza cada aula
│   ├── content/
│   │   └── aulas/aula-XX.mdx   # o CONTEÚDO de cada aula
│   ├── content.config.ts       # schema da coleção "aulas" (n, titulo, ordem, objetivo)
│   ├── components/
│   │   ├── VizEmbed.astro       # moldura da viz + botão tela cheia
│   │   ├── EmBreve.astro        # placeholder "em breve" no fluxo
│   │   └── viz/
│   │       ├── ResiduosECusto.astro     # A1 · sliders w,b + resíduos + custo
│   │       ├── ErrosMaeMseRmse.astro     # A1 · MAE×MSE×RMSE com outlier
│   │       ├── SuperficieCusto3D.astro   # A1 · tigela 3D (Plotly) + descida
│   │       └── LearningRates.astro       # A1 · erro × iteração (curva de loss)
│   ├── layouts/
│   │   ├── Base.astro           # <html>, imports globais (CSS, KaTeX)
│   │   └── Aula.astro           # topo + hero + coluna de leitura + nav
│   ├── data/aulas.ts            # o arco: as 13 aulas p/ a home (com prontas/total)
│   ├── styles/global.css        # ver [[Sistema de Design]]
│   └── plotly.d.ts              # declara o módulo plotly sem tipos
└── (node_modules, dist → ignorados)
```

## Fluxo de renderização de uma aula

1. `src/content/aulas/aula-01.mdx` tem o **frontmatter** (`n`, `titulo`, `ordem`,
   `objetivo`) + o texto + as tags de visualização.
2. `src/pages/aulas/[slug].astro` lê a coleção, gera a rota `/aulas/aula-01/` e
   embrulha o conteúdo no layout `Aula.astro`.
3. A home (`index.astro`) lê `data/aulas.ts` + a coleção para montar o arco e a
   barra de progresso.

## Duas fontes de "lista de aulas" (de propósito)

- `src/data/aulas.ts` → o **arco completo** (as 13, com desc e contagem de vizs) para a home.
- `src/content/aulas/*.mdx` → só as aulas **já escritas** (viram link no arco).

Ver [[Como Adicionar uma Aula]] e [[Como Adicionar uma Visualização]].
