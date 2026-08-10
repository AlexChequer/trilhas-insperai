// O registro das trilhas da entidade — fonte única para o hub, para a barra do topo
// e para as rotas. Adicionar uma trilha é: criar o arquivo dela ao lado deste,
// somar em TRILHAS, e criar a pasta de conteúdo com o mesmo `id`.
import type { Trilha, TrilhaId } from "./tipos";
import { TRAINEES } from "./trainees";
import { AGENTES } from "./agentes";
import { ML_AVANCADO } from "./ml-avancado";

export type { AulaArco, BlocoArco, MecanicaItem, Trilha, TrilhaId } from "./tipos";
export { urlAula, urlGuia, urlTrilha } from "./rotas";

/** Todas as trilhas, na ordem em que aparecem no hub e no seletor. */
export const TRILHAS: readonly Trilha[] = [TRAINEES, AGENTES, ML_AVANCADO];

/** As que já têm arco publicado. Só estas geram páginas. */
export const TRILHAS_NO_AR: readonly Trilha[] = TRILHAS.filter((t) => t.blocos.length > 0);

const POR_ID = new Map<string, Trilha>(TRILHAS.map((t) => [t.id, t]));

export function ehTrilhaId(valor: string): valor is TrilhaId {
  return POR_ID.has(valor);
}

/** A trilha pelo id. Estoura no build se o id não existir — melhor que uma página torta. */
export function trilhaPorId(id: string): Trilha {
  const trilha = POR_ID.get(id);
  if (!trilha) {
    throw new Error(
      `Trilha desconhecida: "${id}". As válidas são ${[...POR_ID.keys()].join(", ")}. ` +
        `Registre a nova em src/data/trilhas/index.ts.`,
    );
  }
  return trilha;
}

/**
 * Separa o id de uma entrada de coleção. O conteúdo mora em
 * src/content/<coleção>/<trilha>/<slug>.mdx, então o id vem como "trainees/aula-01".
 */
export function separarId(id: string): { trilha: TrilhaId; slug: string } {
  const barra = id.indexOf("/");
  if (barra < 0) {
    throw new Error(
      `Conteúdo fora de uma trilha: "${id}". Todo MDX precisa morar em ` +
        `src/content/<coleção>/<trilha>/ — mova o arquivo para a pasta da trilha.`,
    );
  }
  const trilha = id.slice(0, barra);
  if (!ehTrilhaId(trilha)) {
    throw new Error(
      `A pasta "${trilha}" (em "${id}") não corresponde a nenhuma trilha registrada. ` +
        `As válidas são ${[...POR_ID.keys()].join(", ")}.`,
    );
  }
  return { trilha, slug: id.slice(barra + 1) };
}

/** Filtro para getCollection: só as entradas da trilha pedida. */
export const daTrilha =
  (trilha: TrilhaId) =>
  ({ id }: { id: string }): boolean =>
    id.startsWith(`${trilha}/`);
