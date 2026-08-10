// Trilha de ML/DL Avançado.
//
// TODO(Alex): o arco ainda não foi definido. Enquanto `blocos` estiver vazio a
// trilha aparece como "em breve" no hub e não gera páginas. Para publicar:
// preencha `blocos` e crie os MDX em src/content/aulas/ml-avancado/.
//
// Boa parte das visualizações de trainees serve aqui — reaproveite importando de
// "@/components/viz/trainees/…" ou promova a visualização para
// "@/components/viz/comum/" quando ela passar a servir às duas trilhas.
//
// Os textos abaixo são um rascunho: ajuste antes de anunciar para a entidade.
import type { Trilha } from "./tipos";

export const ML_AVANCADO: Trilha = {
  id: "ml-avancado",
  nome: "ML/DL Avançado",
  curto: "Avançado",
  chamada: "Depois do <em>básico funcionar</em>, entender <em>por que funciona</em>.",
  sub:
    "Arquiteturas modernas, o que acontece de fato durante o treino, e os papers " +
    "que fundaram cada ideia — lidos, não citados.",
  resumo:
    "A continuação natural da trilha de trainees: arquiteturas modernas, o que acontece de fato no treino, e os papers que fundaram cada ideia.",
  publico: "Quem fechou a trilha de trainees e quer profundidade, não mais um tutorial.",
  ritmo: "a definir",
  mecanica: [],
  blocos: [],
};
