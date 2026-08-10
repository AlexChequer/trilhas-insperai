// O arco do semestre — fonte única para a home.
// `slug` casa com o arquivo em src/content/aulas/<slug>.mdx quando a página existir;
// enquanto não existir, a estação aparece muda ("em breve").

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

export const BLOCOS: BlocoArco[] = [
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
