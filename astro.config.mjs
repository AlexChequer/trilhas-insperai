// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
// site/base ficam vazios (raiz) — servem para Vercel e dev local.
// Para GitHub Pages de projeto, definir site e base: "/trilha-trainees".
// remark-math + rehype-katex → fórmulas LaTeX ($...$ e $$...$$) nos MDX.
export default defineConfig({
  integrations: [mdx()],
  // Os endereços antigos (/aulas/… e /guias/…, de quando o site era só o da
  // trilha de trainees) são páginas de redirecionamento em src/pages/aulas e
  // src/pages/guias — e não `redirects` daqui, que exige que a origem e o
  // destino tenham os mesmos parâmetros dinâmicos (o destino ganhou [trilha]).
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    // Tema claro nos blocos de código: o site inteiro é claro, e fundo escuro
    // no projetor com a luz da sala acesa some. O contêiner (barra com a
    // linguagem + botão de copiar) é montado em SiteLayout.astro.
    shikiConfig: { theme: "github-light" },
  },
});
