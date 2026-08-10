# Stack e Decisões Técnicas

## A stack

| Camada | Ferramenta | Por quê |
|---|---|---|
| Framework | **Astro** | Site de conteúdo com "ilhas" interativas — o encaixe exato. Gera estático. |
| Conteúdo | **MDX** | Cada aula é Markdown + componentes (`<ResiduosECusto />`) no meio. |
| Tipos | **TypeScript** | Segurança e manutenção nos componentes. |
| Matemática | **KaTeX** (remark-math + rehype-katex) | Fórmulas LaTeX `$...$` no MDX. |
| Gráfico 2D | **Canvas puro** | Leve, controle total do desenho e da interação. |
| Superfície 3D | **Plotly** (`plotly.js-dist-min`) | Rotação/zoom de graça; carregado sob demanda (`import()`). |
| Deploy | **Vercel** | Estático, CI/CD nativo pelo GitHub. Ver [[Deploy]]. |

Versões vivem no `package.json`. Node 25 / npm 11 no ambiente de dev.

## Por que Astro (e não React SPA / Next)

O site é **90% conteúdo com interativos no meio**. Astro é o especialista nisso:

- **Manda ~zero JS por padrão** — páginas viram HTML estático (rápido, robusto);
  o JS liga só nas "ilhas" (as visualizações). É a estrutura que a gente já queria.
- **MDX** torna escrever 13 aulas de prosa+viz o mais simples possível.
- **Continua estático** → publica em qualquer host (Vercel ou Pages), sem servidor.
- Next é feito pra _aplicação_ e é mais peso; **React SPA** renderiza tudo no
  cliente (ruim pra site de leitura, prosa em JSX é chata).

## Por que Vercel (e não GitHub Pages)

Vercel serve na **raiz (`/`)** → sem `base path` (o footgun do Pages de projeto,
que serviria em `/trilhas-insperai` e exigiria reescrever links). Integração Git =
CI/CD de graça, com preview por PR. Detalhes e passo a passo em [[Deploy]].

## Convenções que caíram fora na migração

- A viz **não** é mais um arquivo HTML autocontido embutido via `<iframe>` (era
  assim no HTML puro). Agora é um **componente/ilha nativa** — sem iframe, sem
  sincronizar altura, sem cache-bust `?v=`. Ver [[Log de Decisões]].
