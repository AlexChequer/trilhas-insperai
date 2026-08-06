import { defineCollection } from "astro:content";
import { z } from "astro:schema";
import { glob } from "astro/loaders";

// Cada aula é um arquivo MDX em src/content/aulas/.
const aulas = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/aulas" }),
  schema: z.object({
    n: z.string(), // "A1"
    titulo: z.string(),
    ordem: z.number(), // posição no arco do semestre
    objetivo: z.string(),
  }),
});

// Material de consulta que NÃO faz parte do arco das 13 aulas — a Aula 0 e, mais
// para frente, a trilha de setup de ambiente. Fica fora da coleção `aulas` de
// propósito: assim o arco da home, a contagem de visualizações e o prev/next das
// aulas continuam com 13 itens. Decisão registrada em docs/Log de Decisões.md.
const guias = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/guias" }),
  schema: z.object({
    titulo: z.string(),
    rotulo: z.string(), // o que aparece na sidebar, curto
    codigo: z.string(), // o selo do índice: "A0", "S1"…
    ordem: z.number(),
    objetivo: z.string(),
  }),
});

export const collections = { aulas, guias };
