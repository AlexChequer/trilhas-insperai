# Trilhas — InsperAI

O site acadêmico da entidade: uma porta de entrada única, com **três trilhas**
dentro. Cada aula é uma página de leitura curta com **visualizações interativas
embutidas no meio do texto**. Construído com [Astro](https://astro.build) —
conteúdo em Markdown/MDX, componentes em TypeScript, e saída 100% estática.

| Trilha | Rota | Estado |
| --- | --- | --- |
| Trilha de Trainees | `/trainees` | no ar — 13 aulas |
| Deploy de Agentes | `/agentes` | em breve |
| ML/DL Avançado | `/ml-avancado` | em breve |

> **Vai editar este repo?** Comece por [`CLAUDE.md`](./CLAUDE.md) — o padrão do
> projeto, os invariantes e onde cada coisa vive. Ele é lido automaticamente pelo
> Claude Code, e serve igualmente para gente.
>
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
│   ├── index.astro              # o hub: os cards das três trilhas
│   ├── [trilha]/
│   │   ├── index.astro          # a home de cada trilha (o "arco" do semestre)
│   │   ├── aulas/[slug].astro   # rota que renderiza cada aula
│   │   └── guias/[slug].astro   # rota do material de consulta (Aula 0)
│   └── aulas|guias/[slug].astro # redirecionamento dos endereços antigos
├── content/
│   ├── aulas/<trilha>/*.mdx     # o CONTEÚDO de cada aula (texto + visualizações)
│   └── guias/<trilha>/*.mdx     # material fora do arco
├── components/
│   ├── VizEmbed.astro           # moldura da viz + botão "tela cheia"
│   ├── BarraTopo.astro          # marca + seletor de trilhas + busca
│   └── viz/<trilha>/*.astro     # cada visualização (Canvas / Plotly / TS)
├── layouts/                     # Base, SiteLayout, Aula e Guia
├── data/trilhas/                # o REGISTRO das trilhas e o arco de cada uma
└── styles/global.css            # identidade visual compartilhada
```

Uma trilha está **no ar quando tem `blocos`** em `src/data/trilhas/<id>.ts`. Com
o arco vazio ela aparece como "em breve" e não gera páginas — sem link para o
vazio, e sem flag `ativa` para esquecer de virar.

## Como escrever/editar uma aula

O texto vive em `src/content/aulas/<trilha>/aula-XX.mdx`. É Markdown normal (com
fórmulas LaTeX via `$...$`), e a visualização entra como uma tag no meio:

```mdx
import VizEmbed from "@/components/VizEmbed.astro";
import ResiduosECusto from "@/components/viz/trainees/ResiduosECusto.astro";

## O modelo é uma reta

previsão = w·x + b. Ajustar é escolher w e b.

<VizEmbed titulo="arraste as pontas da reta">
  <ResiduosECusto />
</VizEmbed>
```

Os imports usam o alias `@/` (definido em `tsconfig.json`) para o conteúdo não
depender da profundidade da pasta.

Para uma aula aparecer na home da trilha, adicione uma entrada em
`src/data/trilhas/<trilha>.ts`. Enquanto o `.mdx` não existir, a estação aparece
como "em breve".

## Como adicionar uma trilha

1. Criar `src/data/trilhas/<id>.ts` exportando um `Trilha`.
2. Somar ao `TRILHAS` em `src/data/trilhas/index.ts` e ao tipo `TrilhaId` em
   `tipos.ts`.
3. Criar `src/content/aulas/<id>/` — o nome da pasta tem que ser igual ao `id`.

Passo a passo completo em [`docs/Como Adicionar uma Trilha.md`](./docs/Como%20Adicionar%20uma%20Trilha.md).

## Deploy (Vercel)

O site é estático e vai pra **Vercel**. A integração do Vercel com o GitHub é o
próprio CI/CD: cada push na `main` builda e publica sozinho, e cada PR ganha um
link de preview. Não precisa de workflow no repo nem de configuração no código.

Passo único (uma vez):

1. Em [vercel.com](https://vercel.com), **Add New → Project** e importe o repo.
2. O Vercel detecta o Astro sozinho (build `astro build`, saída `dist/`).
   Clique em **Deploy**.

Daí em diante: `git push` → no ar. Como o site serve na raiz (`/`), não há
`base path` pra configurar.
