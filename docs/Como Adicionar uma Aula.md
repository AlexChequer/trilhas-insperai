# Como Adicionar uma Aula

## Passo a passo

1. **Criar o conteúdo** em `src/content/aulas/<trilha>/aula-XX.mdx` — a pasta da
   trilha é o que diz a qual curso a aula pertence (ver [[Como Adicionar uma Trilha]]):

```mdx
---
n: "A2"
titulo: "Escalando o Modelo"
ordem: 2
objetivo: "Sair do brinquedo de uma variável e chegar em algo que se parece com o mundo real."
---

import VizEmbed from "@/components/VizEmbed.astro";
import AlgumaViz from "@/components/viz/trainees/AlgumaViz.astro";

Texto curto em Markdown, com fórmulas via $w \cdot x + b$.

## Um bloco

Mais texto...

<VizEmbed titulo="mexa aqui">
  <AlgumaViz />
</VizEmbed>
```

2. **Ativar no arco da home**: em `src/data/trilhas/<trilha>.ts`, a aula já está
   listada (as 13 de trainees estão). Ajuste `prontas` conforme as visualizações
   forem ficando prontas. Assim que o `.mdx` existir, a estação vira **link**
   automaticamente.

3. Conferir: `npm run dev`, abrir `/<trilha>/aulas/aula-XX/`, testar no desktop e
   no celular.

> **Imports usam o alias `@/`** (`@/components/…`), não caminho relativo. Assim o
> MDX não depende de quantas pastas fundo ele está — e continua válido se a
> trilha ganhar subpastas depois. O alias está em `tsconfig.json`.

## Convenções de conteúdo

- **Texto que se explica sozinho**: escreva para alguém lendo sem professor —
  explique do zero, com intuição e o "porquê", definindo os termos (ver
  [[Filosofia Pedagógica]]). As Aulas 1–3 são a referência de tom/profundidade.
- Títulos de seção = `##` (viram `.secao-titulo` automaticamente).
- Instrução de "mexa aqui" antes de uma viz: **negrito**, e só. A classe
  `.destaque` foi removida — o traço roxo fazia o texto parecer clicável e
  competia com o `<Termo>`, que é o único elemento clicável da leitura.
- Fórmulas: inline `$...$`, display `$$...$$` (KaTeX já configurado).
- **Blocos de apoio** — ver [[Componentes de Conteúdo]] para a referência completa:
  - `<Termo id="...">` para termo do glossário (primeira ocorrência de cada);
  - `<Simbolos>` depois de toda fórmula em display;
  - `<Caixa tipo="erro">` para cada "erro comum" do `roteiro.md`;
  - `<Pergunta>` onde couber pausar e pensar;
  - `<Quiz>` — ~4 no fim, dentro de `<QuizBloco>`, e 1–2 no meio.
  - A **Aula 1** é o piloto: copie a estrutura dela.
- O `objetivo` do frontmatter aparece no hero da aula.
- `prev`/`next` no rodapé saem sozinhos da `ordem` entre as aulas escritas.

## De onde tirar o conteúdo

O `roteiro.md` (raiz) tem o roteiro de cada aula com blocos de tempo e o campo
**"material visual sugerido"** — é a lista de visualizações a construir. As notas
[[Aula 02]]…[[Aula 13]] resumem cada uma para consulta rápida.
