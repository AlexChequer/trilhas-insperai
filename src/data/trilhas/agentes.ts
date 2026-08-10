// Trilha de Deploy de Agentes.
//
// TODO(Alex): o arco ainda não foi definido. Enquanto `blocos` estiver vazio a
// trilha aparece como "em breve" no hub e não gera páginas — nada de link que
// não leva a lugar nenhum. Para publicar: preencha `blocos` e crie os MDX em
// src/content/aulas/agentes/.
//
// Os textos abaixo são um rascunho: ajuste antes de anunciar para a entidade.
import type { Trilha } from "./tipos";

export const AGENTES: Trilha = {
  id: "agentes",
  nome: "Deploy de Agentes",
  curto: "Agentes",
  chamada: "Do <em>protótipo no notebook</em> ao <em>agente que roda sozinho</em>.",
  sub:
    "Ferramentas, memória, avaliação e deploy — as partes que separam uma demo " +
    "que funciona na sua máquina de um agente que outras pessoas usam.",
  resumo:
    "Como sair de um script que chama uma API e chegar num agente com ferramentas, memória e um deploy que aguenta gente usando.",
  publico: "Quem já fez a trilha de trainees ou já programa, e quer colocar algo no ar.",
  ritmo: "a definir",
  mecanica: [],
  blocos: [],
};
