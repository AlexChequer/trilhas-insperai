// O formato das URLs em um lugar só: mudar as rotas é mexer aqui e mais nada.
// Vive separado de index.ts para que os arquivos de cada trilha possam montar
// links sem importar o registro que já importa eles de volta.
import type { TrilhaId } from "./tipos";

export const urlTrilha = (trilha: TrilhaId): string => `/${trilha}`;
export const urlAula = (trilha: TrilhaId, slug: string): string => `/${trilha}/aulas/${slug}`;
export const urlGuia = (trilha: TrilhaId, slug: string): string => `/${trilha}/guias/${slug}`;
