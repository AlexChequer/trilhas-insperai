# Estrutura do Repositório

Um repositório, **um site Astro**, **três trilhas**. O porquê dessa escolha (e por
que não submódulos) está no [[Log de Decisões]].

```
trilhas/
├── roteiro.md                 # FONTE de conteúdo das 13 aulas de trainees
├── astro.config.mjs           # Astro + MDX + KaTeX
├── package.json
├── tsconfig.json              # alias "@/*" → "src/*" (usado pelos MDX)
├── docs/                      # ESTE vault do Obsidian
├── public/                    # logos InsperAI (insperai-claro.png / insperai-escuro.png)
├── src/
│   ├── pages/
│   │   ├── index.astro              # o HUB: os cards das três trilhas
│   │   ├── [trilha]/
│   │   │   ├── index.astro          # a home de cada trilha (hero + mecânica + arco)
│   │   │   ├── aulas/[slug].astro   # rota de cada aula
│   │   │   └── guias/[slug].astro   # rota de cada guia (Aula 0)
│   │   ├── aulas/[slug].astro       # redirecionamento dos endereços antigos
│   │   ├── guias/[slug].astro       # idem
│   │   └── busca.json.ts            # índice de busca do site inteiro
│   ├── content/
│   │   ├── aulas/<trilha>/aula-XX.mdx   # o CONTEÚDO de cada aula
│   │   └── guias/<trilha>/*.mdx          # material de consulta, fora do arco
│   ├── content.config.ts       # schema das coleções "aulas" e "guias"
│   ├── components/
│   │   ├── VizEmbed.astro       # moldura da viz + botão tela cheia
│   │   ├── BarraTopo.astro      # marca + seletor de trilhas + seções + busca
│   │   ├── Arco.astro           # o arco de UMA trilha (recebe a trilha por prop)
│   │   ├── Redirecionar.astro   # página mínima de redirecionamento
│   │   └── viz/
│   │       └── trainees/*.astro  # as visualizações, agrupadas por trilha
│   ├── layouts/
│   │   ├── Base.astro           # <html>, imports globais (CSS, KaTeX)
│   │   ├── SiteLayout.astro     # casca: barra do topo + lateral da trilha
│   │   ├── Aula.astro           # hero + leitura + rail "nesta aula" + nav
│   │   └── Guia.astro           # igual, sem o prev/next do arco
│   ├── data/
│   │   ├── trilhas/
│   │   │   ├── index.ts          # o REGISTRO das trilhas + helpers de rota
│   │   │   ├── tipos.ts          # o que é uma Trilha
│   │   │   ├── rotas.ts          # urlTrilha / urlAula / urlGuia
│   │   │   ├── trainees.ts       # o arco + os textos da trilha de trainees
│   │   │   ├── agentes.ts        # o arco + os textos da trilha de agentes
│   │   │   └── ml-avancado.ts    # (arco vazio → "em breve")
│   │   └── glossario.ts
│   ├── styles/global.css        # ver [[Sistema de Design]]
│   └── plotly.d.ts              # declara o módulo plotly sem tipos
└── (node_modules, dist → ignorados)
```

## A trilha sai da pasta, não do frontmatter

O conteúdo mora em `src/content/<coleção>/<trilha>/<slug>.mdx`, então o `id` de
cada entrada já vem como `trainees/aula-01`. Não existe campo `trilha` no
frontmatter — ele poderia divergir da pasta e não haveria como saber qual dos
dois está certo.

Para lidar com isso, `src/data/trilhas/index.ts` dá:

- `daTrilha("trainees")` — filtro para o `getCollection`;
- `separarId(id)` — `"trainees/aula-01"` → `{ trilha, slug }`, estourando o build
  com mensagem clara se a pasta não for de uma trilha registrada.

## Fluxo de renderização de uma aula

1. `src/content/aulas/trainees/aula-01.mdx` tem o **frontmatter** (`n`, `titulo`,
   `ordem`, `objetivo`) + o texto + as tags de visualização.
2. `src/pages/[trilha]/aulas/[slug].astro` percorre as trilhas no ar, lê a coleção
   filtrada por cada uma, gera a rota `/trainees/aulas/aula-01/` e embrulha o
   conteúdo em `Aula.astro`. O `prev`/`next` anda **dentro** da trilha.
3. A home da trilha (`[trilha]/index.astro`) lê `src/data/trilhas/<trilha>.ts` +
   a coleção para montar o arco.

## Duas fontes de "lista de aulas" (de propósito)

- `src/data/trilhas/<trilha>.ts` → o **arco completo** (as 13, com desc e contagem
  de vizs) para a home.
- `src/content/aulas/<trilha>/*.mdx` → só as aulas **já escritas** (viram link no
  arco).

Ver [[Como Adicionar uma Trilha]], [[Como Adicionar uma Aula]] e
[[Como Adicionar uma Visualização]].
