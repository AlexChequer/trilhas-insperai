// Trilha de Deploy de Agentes — o arco da trilha extra de LLMs e agentes.
//
// A fonte do conteúdo é o repositório `Trilha-Agents` (os notebooks das aulas e
// o README com o plano das 7 semanas). As Aulas 1–5 têm notebook escrito e são
// as que ganharam página; as Aulas 6 e 7 entram como `aberto` porque o material
// delas ainda não existe — estação muda no arco, sem link para o vazio.
//
// `slug` casa com o arquivo em src/content/aulas/agentes/<slug>.mdx quando a
// página existir.
import type { BlocoArco, MecanicaItem, Trilha } from "./tipos";

const BLOCOS: BlocoArco[] = [
  {
    nome: "Bloco 1 · O que é um LLM",
    curto: "O modelo",
    resumo: "De texto para números, e de previsor de texto para assistente.",
    aulas: [
      {
        n: "A1", slug: "aula-01", titulo: "Embeddings, Transformers e GPTs",
        desc: "Como texto vira número, como a atenção lê a frase e por que gerar texto é prever o próximo token.",
        prontas: 4, total: 4,
      },
      {
        n: "A2", slug: "aula-02", titulo: "De Previsor a ChatBot",
        desc: "O modelo não responde perguntas — quem faz isso é o texto em volta. System prompt, histórico e guardrails.",
        prontas: 3, total: 3,
      },
    ],
  },
  {
    nome: "Bloco 2 · Construindo o agente",
    curto: "O agente",
    resumo: "Ferramentas, memória e conhecimento — o agente montado do zero.",
    aulas: [
      {
        n: "A3", slug: "aula-03", titulo: "Tool Calling",
        desc: "O que separa um chatbot de um agente: gerar texto que a gente detecta, parseia e executa.",
        prontas: 3, total: 3,
      },
      {
        n: "A4", slug: "aula-04", titulo: "Contexto e RAG",
        desc: "A janela de contexto é finita e cara. Como podar histórico e como buscar só o pedaço de conhecimento que importa.",
        prontas: 4, total: 4,
      },
    ],
  },
  {
    nome: "Bloco 3 · Como se faz em produção",
    curto: "Frameworks",
    resumo: "O mesmo agente, reconstruído sobre protocolo e sobre plataforma visual.",
    aulas: [
      {
        n: "A5", slug: "aula-05", titulo: "Agente com MCP",
        desc: "Jogar fora o parser artesanal: um protocolo padronizado para conectar modelo e ferramenta.",
        prontas: 2, total: 2,
      },
      {
        n: "A6", slug: "aula-06", titulo: "Agente com N8N", aberto: true,
        desc: "A mesma coisa em low-code: o que se ganha em velocidade e o que se perde em controle.",
        prontas: 0, total: 2,
      },
    ],
  },
  {
    nome: "Bloco 4 · A habilidade transversal",
    curto: "Prompting",
    resumo: "A técnica que melhora tudo o que veio antes.",
    aulas: [
      {
        n: "A7", slug: "aula-07", titulo: "Prompt Engineering", aberto: true,
        desc: "Few-shot, chain-of-thought, saída estruturada — e por que isso multiplica a qualidade de todo o resto.",
        prontas: 0, total: 2,
      },
    ],
  },
];

// Os números seguem a lógica da trilha de trainees: o programa primeiro (o que
// é, como funciona uma semana), o arco depois. O "3" é o argumento pedagógico
// da trilha — o mesmo agente escrito de três jeitos é o que mostra o que é
// essencial e o que era só andaime.
const MECANICA: MecanicaItem[] = [
  {
    numero: "7",
    titulo: "aulas, uma por semana",
    texto:
      "A sequência vai de “o que é um token” até um agente rodando sobre um protocolo de produção. Cada aula acrescenta uma camada à anterior — e a numeração carrega essa ordem.",
  },
  {
    numero: "4",
    titulo: "semanas construindo do zero",
    texto:
      "Nas Aulas 1 a 4 o agente é montado à mão, peça por peça: geração, contexto, parser de ferramentas, busca. Nada de framework — o objetivo é ver o mecanismo.",
  },
  {
    numero: "3",
    titulo: "versões do mesmo agente",
    texto:
      "A artesanal, a com MCP e a com N8N. Escrever o mesmo agente três vezes é o que revela o que era essencial e o que era só andaime da primeira versão.",
  },
  {
    numero: "1",
    titulo: "notebook por aula",
    texto:
      "Cada aula tem um notebook que roda o que foi visto — do tokenizador ao servidor MCP. A página explica o porquê; o notebook mostra o código de pé.",
  },
];

export const AGENTES: Trilha = {
  id: "agentes",
  nome: "Deploy de Agentes",
  curto: "Agentes",
  chamada: "De um <em>previsor de texto</em> até um <em>agente que age</em>.",
  sub:
    "Sete aulas que abrem o LLM por dentro e montam um agente camada por camada — " +
    "geração, contexto, ferramentas, conhecimento e protocolo. Cada peça vira algo " +
    "que você mexe na tela antes de virar código.",
  resumo:
    "Sete aulas que vão de “o que é um token” até um agente com ferramentas, memória e busca, rodando sobre um protocolo de produção.",
  publico:
    "Quem já fez a trilha de trainees ou já programa em Python, e quer entender o que existe dentro de um agente antes de usar framework.",
  ritmo: "7 aulas · uma por semana",
  mecanica: MECANICA,
  nota:
    "As Aulas 1 a 5 estão no ar. As duas últimas — N8N e prompt engineering — " +
    "entram quando o material delas ficar pronto.",
  blocos: BLOCOS,
};
