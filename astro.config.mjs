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
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
