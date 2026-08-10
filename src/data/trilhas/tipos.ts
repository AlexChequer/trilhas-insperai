// Os tipos que descrevem uma trilha. Uma trilha é um curso da entidade: tem um
// arco de aulas (os blocos) e a identidade que aparece no hub e na barra do topo.
//
// Não existe campo "ativa": uma trilha está no ar quando tem `blocos`. Assim não
// há um booleano para esquecer de virar — publicar é escrever o arco.

/** O identificador da trilha. É também o primeiro segmento da URL: /trainees/… */
export type TrilhaId = "trainees" | "agentes" | "ml-avancado";

export interface AulaArco {
  n: string;
  titulo: string;
  desc: string;
  slug: string;
  prontas: number;
  total: number;
  aberto?: boolean;
  pratica?: boolean;
}

export interface BlocoArco {
  nome: string;
  /** Rótulo curto, para o arco da home. */
  curto: string;
  /** Uma linha sobre o que o bloco cobre. */
  resumo: string;
  aulas: AulaArco[];
}

/** Um dos números do "Como funciona" na home da trilha. */
export interface MecanicaItem {
  numero: string;
  titulo: string;
  texto: string;
}

export interface Trilha {
  id: TrilhaId;
  /** Nome completo, na barra do topo e no <title>. */
  nome: string;
  /** Nome curto, para o seletor de trilha. */
  curto: string;
  /** A manchete da home da trilha. Aceita <em> para o destaque. */
  chamada: string;
  /** O parágrafo abaixo da manchete. */
  sub: string;
  /** Uma linha, para o card no hub. */
  resumo: string;
  /** Para quem é a trilha — o que separa uma da outra no hub. */
  publico: string;
  /** O ritmo em uma expressão curta: "13 aulas · 1 por semana". */
  ritmo: string;
  /** Os números do "Como funciona". Vazio = a seção não aparece. */
  mecanica: MecanicaItem[];
  /** O segundo botão do hero, quando a trilha tem um guia de entrada. */
  acaoSecundaria?: { rotulo: string; guia: string };
  /** Recado no fim do "Como funciona". Aceita HTML — é texto nosso, não de fora. */
  nota?: string;
  /** O arco. Vazio = a trilha aparece como "em breve" e não gera páginas. */
  blocos: BlocoArco[];
}
