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

export const collections = { aulas };
