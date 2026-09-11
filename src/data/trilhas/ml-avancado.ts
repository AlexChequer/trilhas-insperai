// Trilha de ML/DL Avançado — o arco da terceira trilha da entidade.
//
// A fonte do conteúdo é o "Documento Consolidado" da trilha (roteiro das 10
// aulas + guia didático + vídeos de apoio por aula). O documento traz 10 aulas
// em dois blocos; a trilha no site tem 11 — a Aula 11 fecha o arco e ainda está
// sendo definida, então entra como `aberto` (estação no menu, página com
// conteúdo "a definir").
//
// `slug` casa com o arquivo em src/content/aulas/ml-avancado/<slug>.mdx. Todas as
// 11 páginas existem; as visualizações interativas ficam para uma passada
// futura, por isso `prontas`/`total` = 0.
import type { BlocoArco, MecanicaItem, Trilha } from "./tipos";

const BLOCOS: BlocoArco[] = [
  {
    nome: "Bloco 1 · Feature Engineering, EDA, Validação e Ensemble",
    curto: "ML Tabular",
    resumo: "O ciclo de um modelo tabular: explorar, validar, criar e selecionar features, combinar modelos.",
    aulas: [
      {
        n: "A1", slug: "aula-01", titulo: "Análise Exploratória de Dados (EDA) Avançada",
        desc: "Ir além do .describe(): assimetria, outliers, tipos de dado faltante e relações entre variáveis.",
        prontas: 0, total: 0,
      },
      {
        n: "A2", slug: "aula-02", titulo: "Validação de Modelos, Métricas e Data Leakage",
        desc: "Montar uma validação correta e escolher a métrica certa — antes de mexer em features.",
        prontas: 0, total: 0,
      },
      {
        n: "A3", slug: "aula-03", titulo: "Feature Engineering Avançado",
        desc: "Encoding de categóricas, features de data e de séries temporais, e quando escalar.",
        prontas: 0, total: 0,
      },
      {
        n: "A4", slug: "aula-04", titulo: "Seleção de Features e Redução de Dimensionalidade",
        desc: "Filtro, wrapper e embutidos; PCA, t-SNE/UMAP, autoencoders e SHAP.",
        prontas: 0, total: 0,
      },
      {
        n: "A5", slug: "aula-05", titulo: "Modelos de Ensemble: Bagging, Boosting e Stacking",
        desc: "Random Forest, gradient boosting (XGBoost, LightGBM, CatBoost) e meta-modelos.",
        prontas: 0, total: 0,
      },
    ],
  },
  {
    nome: "Bloco 2 · Deep Learning Avançado",
    curto: "Deep Learning",
    resumo: "De redes recorrentes a Transformers e ao fine-tuning eficiente de LLMs.",
    aulas: [
      {
        n: "A6", slug: "aula-06", titulo: "Redes Neurais Recorrentes (RNN)",
        desc: "Estado oculto, BPTT e o problema do gradiente que some — a base das arquiteturas de sequência.",
        prontas: 0, total: 0,
      },
      {
        n: "A7", slug: "aula-07", titulo: "LSTM e GRU",
        desc: "As portas que deixam a rede lembrar de longo prazo, e quando usar cada arquitetura.",
        prontas: 0, total: 0,
      },
      {
        n: "A8", slug: "aula-08", titulo: "Embeddings + Encoder-Decoder e Atenção",
        desc: "Word2Vec/GloVe, o gargalo do vetor de contexto fixo e o mecanismo de atenção.",
        prontas: 0, total: 0,
      },
      {
        n: "A9", slug: "aula-09", titulo: "Transformers: arquitetura técnica completa",
        desc: "Self-attention, multi-head, positional encoding e as famílias BERT / GPT / T5.",
        prontas: 0, total: 0,
      },
      {
        n: "A10", slug: "aula-10", titulo: "Fine-tuning Avançado e LoRA/PEFT",
        desc: "Adaptar um LLM sem re-treinar bilhões de parâmetros: LoRA, QLoRA e o ecossistema PEFT.",
        prontas: 0, total: 0,
      },
    ],
  },
  {
    nome: "Bloco 3 · A definir",
    curto: "A definir",
    resumo: "A última aula da trilha ainda está sendo planejada.",
    aulas: [
      {
        n: "A11", slug: "aula-11", titulo: "A definir", aberto: true,
        desc: "O tema da aula de fechamento ainda não foi definido.",
        prontas: 0, total: 0,
      },
    ],
  },
];

// O documento define a estrutura: 2 blocos, aulas de 2 horas, dificuldade
// progressiva dentro de cada bloco, e uma seção "Aplicação no mercado" fechando
// toda aula. Os números abaixo descrevem isso — não antecipam conteúdo que ainda
// não existe.
const MECANICA: MecanicaItem[] = [
  {
    numero: "11",
    titulo: "aulas, em dois blocos",
    texto:
      "O Bloco 1 percorre o ciclo de um modelo tabular — EDA, validação, feature engineering, seleção e ensembles. O Bloco 2 vai das redes recorrentes até os Transformers e o fine-tuning com LoRA. A dificuldade sobe dentro de cada bloco.",
  },
  {
    numero: "2h",
    titulo: "por aula",
    texto:
      "Cada aula é uma sessão de duas horas com a teoria construída do zero: a analogia antes da matemática, e a matemática explicada peça por peça, nunca solta.",
  },
  {
    numero: "1",
    titulo: "seção de mercado por aula",
    texto:
      "Toda aula fecha em “Aplicação no mercado”: onde a técnica é usada em produção hoje e por que ela cai em entrevista técnica.",
  },
  {
    numero: "1",
    titulo: "notebook por aula",
    texto:
      "Cada aula terá um notebook para rodar o que foi visto. Os notebooks estão em construção — por ora a página traz a teoria e os vídeos de apoio.",
  },
];

export const ML_AVANCADO: Trilha = {
  id: "ml-avancado",
  nome: "ML/DL Avançado",
  curto: "Avançado",
  chamada: "Depois do <em>básico funcionar</em>, entender <em>por que funciona</em>.",
  sub:
    "Onze aulas que vão do ciclo de um modelo tabular — EDA, validação, features, " +
    "ensembles — até as arquiteturas de sequência, os Transformers e o fine-tuning " +
    "eficiente de LLMs. A matemática, sempre explicada passo a passo.",
  resumo:
    "Do ciclo de um modelo tabular (EDA, validação, features, ensembles) às arquiteturas de sequência, aos Transformers e ao fine-tuning eficiente de LLMs.",
  publico: "Quem fechou a trilha de trainees e quer profundidade, não mais um tutorial.",
  ritmo: "11 aulas · 2 horas cada",
  mecanica: MECANICA,
  nota:
    "As Aulas 1 a 10 estão no ar com a teoria e os vídeos de apoio. A Aula 11 " +
    "ainda está sendo definida, e os notebooks de todas as aulas entram quando ficarem prontos.",
  blocos: BLOCOS,
};
