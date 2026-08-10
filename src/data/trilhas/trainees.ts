// Trilha de Trainees — o arco do semestre.
// `slug` casa com o arquivo em src/content/aulas/trainees/<slug>.mdx quando a
// página existir; enquanto não existir, a estação aparece muda ("em breve").
import type { BlocoArco, MecanicaItem, Trilha } from "./tipos";
import { urlGuia } from "./rotas";

const BLOCOS: BlocoArco[] = [
  {
    nome: "Bloco 1 · Fundamentos",
    curto: "Fundamentos",
    resumo: "Regressão, custo, gradient descent e classificação.",
    aulas: [
      {
        n: "A1", slug: "aula-01", titulo: "Intro a ML + Regressão Linear",
        desc: "Um modelo, uma medida de erro e o gradient descent que corrige. Tudo com uma variável.",
        prontas: 4, total: 4,
      },
      {
        n: "A2", slug: "aula-02", titulo: "Escalando o Modelo",
        desc: "Várias features, regressão polinomial e por que a escala atrapalha o treino.",
        prontas: 3, total: 3,
      },
      {
        n: "A3", slug: "aula-03", titulo: "Classificação",
        desc: "Prever classe em vez de número: sigmoid, fronteira de decisão e a métrica certa.",
        prontas: 3, total: 3,
      },
    ],
  },
  {
    nome: "Bloco 2 · Redes Neurais",
    curto: "Redes Neurais",
    resumo: "Do neurônio ao MLP, backprop e o treino na prática.",
    aulas: [
      {
        n: "A4", slug: "aula-04", titulo: "Do Neurônio à Rede",
        desc: "O que um neurônio calcula e por que rede sem ativação não serve pra nada.",
        prontas: 2, total: 2,
      },
      {
        n: "A5", slug: "aula-05", titulo: "MLP + Backprop",
        desc: "Como neurônios viram rede e como o erro volta ajustando os pesos.",
        prontas: 3, total: 3,
      },
      {
        n: "A6", slug: "aula-06", titulo: "Treinando na Prática",
        desc: "O loop de treino, os otimizadores e o lançamento do MNIST.",
        prontas: 2, total: 2,
      },
      {
        n: "A7", slug: "aula-07", titulo: "Análise de Modelos",
        desc: "Diagnosticar overfitting e underfitting, e as regularizações que resolvem.",
        prontas: 2, total: 2,
      },
    ],
  },
  {
    nome: "Bloco 3 · Ferramentas",
    curto: "Ferramentas",
    resumo: "Usar IA para programar — e revisar o que ela produz.",
    aulas: [
      {
        n: "A8", slug: "aula-08", titulo: "Claude Code", pratica: true,
        desc: "Usar a ferramenta e revisar o que ela produz — e saber o que não dá pra delegar.",
        prontas: 1, total: 1,
      },
    ],
  },
  {
    nome: "Bloco 4 · Visão",
    curto: "Visão",
    resumo: "Convolução, CNNs e transfer learning.",
    aulas: [
      {
        n: "A9", slug: "aula-09", titulo: "CNNs pt. 1",
        desc: "Por que MLP falha em imagem e o que uma convolução calcula.",
        prontas: 3, total: 3,
      },
      {
        n: "A10", slug: "aula-10", titulo: "CNNs pt. 2",
        desc: "Montar uma CNN, ler o que ela aprendeu e usar modelo pré-treinado.",
        prontas: 2, total: 2,
      },
    ],
  },
  {
    nome: "Bloco 5 · Linguagem (em aberto)",
    curto: "Linguagem",
    resumo: "Embeddings e modelos de linguagem.",
    aulas: [
      {
        n: "A11", slug: "aula-11", titulo: "Embeddings", aberto: true,
        desc: "Representação vetorial e o que significa distância entre vetores.",
        prontas: 0, total: 2,
      },
      {
        n: "A12", slug: "aula-12", titulo: "LLMs", aberto: true,
        desc: "O que é um modelo de linguagem e por que ele se comporta como se comporta.",
        prontas: 0, total: 2,
      },
    ],
  },
  {
    nome: "Bloco 6 · Fronteira",
    curto: "Fronteira",
    resumo: "Reinforcement learning e o fechamento do arco.",
    aulas: [
      {
        n: "A13", slug: "aula-13", titulo: "Reinforcement Learning + Fechamento",
        desc: "O terceiro paradigma de aprendizado, e o fechamento do arco.",
        prontas: 0, total: 2,
      },
    ],
  },
];

// Ordem decidida com o Alex: o programa primeiro (o que é, como funciona uma
// semana), o arco depois. Calendário e Projetos entram quando as datas e a
// logística do MNIST estiverem definidas.
const MECANICA: MecanicaItem[] = [
  {
    numero: "13",
    titulo: "aulas, uma por semana",
    texto:
      "O semestre é uma sequência só, da regressão linear às redes convolucionais. Cada aula depende da anterior — e a numeração carrega essa ordem.",
  },
  {
    numero: "2h",
    titulo: "de aula, e um notebook depois",
    texto:
      "A teoria vem com visualizações para mexer, não com slides. Depois da aula, um notebook pronto para rodar aplica o que foi dado naquele dia.",
  },
  {
    numero: "1",
    titulo: "provinha por semana",
    texto:
      "É ela, com a apresentação, que mede se você entendeu. Pode usar IA para escrever código — mas a provinha você faz sozinho com o que sabe.",
  },
  {
    numero: "2",
    titulo: "desafios ao longo do semestre",
    texto:
      "O primeiro é o MNIST, lançado na Aula 6, com a restrição de usar só MLP. O segundo fecha o arco, na Aula 13.",
  },
];

export const TRAINEES: Trilha = {
  id: "trainees",
  nome: "Trilha de Trainees",
  curto: "Trainees",
  chamada: "De uma <em>reta</em> até um <em>agente que aprende</em>.",
  sub:
    "Treze aulas que vão da regressão linear às redes neurais e à visão " +
    "computacional. Cada conceito vira um gráfico que você mexe — porque é assim " +
    "que eles entram na cabeça de verdade.",
  resumo:
    "Treze aulas que vão da regressão linear às redes neurais e à visão computacional, com um gráfico para mexer em cada conceito.",
  publico: "Quem está entrando na entidade. Não pressupõe ML — só disposição para mexer nos gráficos.",
  ritmo: "13 aulas · uma por semana",
  mecanica: MECANICA,
  acaoSecundaria: { rotulo: "Nunca programei", guia: "aula-0" },
  nota:
    `Nunca programou? A <a href="${urlGuia("trainees", "aula-0")}">Aula 0</a> é o ` +
    "pré-requisito: o mínimo de Python, NumPy e matemática, mais o passo a passo " +
    "para deixar a máquina pronta.",
  blocos: BLOCOS,
};
