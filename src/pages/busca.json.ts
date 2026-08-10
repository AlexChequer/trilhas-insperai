// Índice de busca, montado no build. A sobreposição de busca baixa este arquivo
// na primeira vez que é aberta — assim nenhuma página carrega o índice à toa.
import type { APIRoute } from "astro";
import { getCollection, render } from "astro:content";

interface Secao {
  texto: string;
  slug: string;
}
interface Item {
  codigo: string;
  titulo: string;
  url: string;
  objetivo: string;
  grupo: string;
  secoes: Secao[];
}

export const GET: APIRoute = async () => {
  const itens: Item[] = [];

  const guias = (await getCollection("guias")).sort((a, b) => a.data.ordem - b.data.ordem);
  for (const g of guias) {
    const { headings } = await render(g);
    itens.push({
      codigo: g.data.codigo,
      titulo: g.data.titulo,
      url: `/guias/${g.id}`,
      objetivo: g.data.objetivo,
      grupo: "Antes de começar",
      secoes: headings.filter((h) => h.depth === 2).map((h) => ({ texto: h.text, slug: h.slug })),
    });
  }

  const aulas = (await getCollection("aulas")).sort((a, b) => a.data.ordem - b.data.ordem);
  for (const a of aulas) {
    const { headings } = await render(a);
    itens.push({
      codigo: a.data.n,
      titulo: a.data.titulo,
      url: `/aulas/${a.id}`,
      objetivo: a.data.objetivo,
      grupo: "Aulas",
      secoes: headings.filter((h) => h.depth === 2).map((h) => ({ texto: h.text, slug: h.slug })),
    });
  }

  return new Response(JSON.stringify(itens), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
