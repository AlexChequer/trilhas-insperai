// Índice de busca, montado no build. A sobreposição de busca baixa este arquivo
// na primeira vez que é aberta — assim nenhuma página carrega o índice à toa.
//
// O índice é do site inteiro, não de uma trilha: quem procura "backprop" acha,
// esteja onde estiver. Cada item carrega a trilha de origem para o resultado
// dizer de onde veio.
import type { APIRoute } from "astro";
import { getCollection, render } from "astro:content";
import { TRILHAS_NO_AR, daTrilha, separarId, urlAula, urlGuia } from "@/data/trilhas";

interface Secao {
  texto: string;
  slug: string;
}
interface Item {
  codigo: string;
  titulo: string;
  url: string;
  objetivo: string;
  /** De onde o resultado veio, para o selo no resultado: "Trainees · Aulas". */
  grupo: string;
  secoes: Secao[];
}

const subtitulos = (headings: { depth: number; slug: string; text: string }[]): Secao[] =>
  headings.filter((h) => h.depth === 2).map((h) => ({ texto: h.text, slug: h.slug }));

export const GET: APIRoute = async () => {
  const itens: Item[] = [];

  for (const trilha of TRILHAS_NO_AR) {
    const guias = (await getCollection("guias", daTrilha(trilha.id))).sort(
      (a, b) => a.data.ordem - b.data.ordem,
    );
    for (const g of guias) {
      const { headings } = await render(g);
      itens.push({
        codigo: g.data.codigo,
        titulo: g.data.titulo,
        url: urlGuia(trilha.id, separarId(g.id).slug),
        objetivo: g.data.objetivo,
        grupo: `${trilha.curto} · Antes de começar`,
        secoes: subtitulos(headings),
      });
    }

    const aulas = (await getCollection("aulas", daTrilha(trilha.id))).sort(
      (a, b) => a.data.ordem - b.data.ordem,
    );
    for (const a of aulas) {
      const { headings } = await render(a);
      itens.push({
        codigo: a.data.n,
        titulo: a.data.titulo,
        url: urlAula(trilha.id, separarId(a.id).slug),
        objetivo: a.data.objetivo,
        grupo: `${trilha.curto} · Aulas`,
        secoes: subtitulos(headings),
      });
    }
  }

  return new Response(JSON.stringify(itens), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
