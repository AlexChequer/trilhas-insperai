# Trilha de Trainees — InsperAI (26.2)

Site das aulas do programa de trainee: cada aula é uma página de leitura curta
com **visualizações interativas embutidas no meio do texto**. Construído com
[Astro](https://astro.build) — conteúdo em Markdown/MDX, componentes em
TypeScript, e saída 100% estática.

> Documentação completa do projeto (decisões, como montar aulas, status): veja o
> vault do Obsidian em [`docs/`](./docs) — abra a pasta como um vault no Obsidian.

## Rodar localmente

```bash
npm install      # uma vez
npm run dev      # servidor de desenvolvimento em http://localhost:4321
```

Outros comandos:

```bash
npm run build    # gera o site estático em dist/
npm run preview  # serve o build de dist/
npm run check    # checagem de tipos (astro check)
```

## Estrutura

```
src/
├── pages/
│   ├── index.astro          # a home (o "arco" do semestre)
│   └── aulas/[slug].astro    # rota que renderiza cada aula
├── content/aulas/*.mdx        # o CONTEÚDO de cada aula (texto + visualizações)
├── components/
│   ├── VizEmbed.astro         # moldura da viz + botão "tela cheia"
│   ├── EmBreve.astro          # espaço "em breve" no fluxo
│   └── viz/*.astro            # cada visualização (Canvas / Plotly / TS)
├── layouts/                   # Base.astro e Aula.astro (esqueleto das páginas)
├── data/aulas.ts              # o arco do semestre (lista das 13 aulas p/ a home)
└── styles/global.css          # identidade visual compartilhada
```

## Como escrever/editar uma aula

O texto vive em `src/content/aulas/aula-XX.mdx`. É Markdown normal (com fórmulas
LaTeX via `$...$`), e a visualização entra como uma tag no meio:

```mdx
## O modelo é uma reta

previsão = w·x + b. Ajustar é escolher w e b.

<VizEmbed titulo="arraste as pontas da reta">
  <ResiduosECusto />
</VizEmbed>
```

Para uma aula aparecer na home, adicione uma entrada em `src/data/aulas.ts`.
Enquanto o `.mdx` não existir, a estação aparece como "em breve".

## Deploy (Vercel)

O site é estático e vai pra **Vercel**. A integração do Vercel com o GitHub é o
próprio CI/CD: cada push na `main` builda e publica sozinho, e cada PR ganha um
link de preview. Não precisa de workflow no repo nem de configuração no código.

Passo único (uma vez):

1. Em [vercel.com](https://vercel.com), **Add New → Project** e importe o repo
   `AlexChequer/trilha-trainees`.
2. O Vercel detecta o Astro sozinho (build `astro build`, saída `dist/`).
   Clique em **Deploy**.

Daí em diante: `git push` → no ar. Como o site serve na raiz (`/`), não há
`base path` pra configurar.
