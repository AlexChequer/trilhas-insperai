# Comparativo com o Site 2026.1

Levantamento do que existe no site do **Thomas e do Gabriel**
([insperai-trainee.github.io/InsperAI26.1](https://insperai-trainee.github.io/InsperAI26.1/),
repo `InsperAI-Trainee/InsperAI26.1`, pasta `handout/`) e **não** existe no
nosso. Feito em 30/07/2026.

> **Contexto que muda a leitura:** os dois sites resolvem problemas diferentes.
> O deles é um **handout operacional** — MkDocs Material, texto + PNG/GIF,
> notebooks, GitHub Classroom, quizzes. O nosso é uma **aula visual** — Astro
> com visualizações interativas no meio do texto. Nem tudo que eles têm deve
> ser copiado; o que interessa é o que resolve um problema real nosso (ver
> [[Filosofia Pedagógica]]).

## Stack deles, em uma linha

MkDocs Material (pt-BR), plugin `mkdocs_quiz`, MathJax via arithmatex,
admonitions + `pymdownx.details`, deploy em `gh-pages` via Makefile,
notebooks e ambiente `uv` versionados dentro do próprio repo.

---

## A. Plataforma (o site em si)

| # | O que eles têm | Nós temos? |
|---|---|---|
| A1 | **Busca full-text** em todo o site | ❌ |
| A2 | **Alternância claro/escuro** (palette toggle) | ❌ — tema claro fixo |
| A3 | **Botão "copiar" nos blocos de código** | ❌ |
| A4 | **Link para o repositório** no cabeçalho | ❌ |
| A5 | **Rodapé** com responsáveis e contato | ❌ |
| A6 | **Permalink (âncora ⚓) em cada título** | ❌ |
| A7 | **TOC que acompanha o scroll** (`toc.follow`) | ⚠️ temos o rail, mas estático |
| A8 | **Breadcrumb / caminho na nav** (`navigation.path`) | ❌ |
| A9 | Navegação instantânea (SPA-like) | ⚠️ Astro já é rápido; baixa prioridade |

## B. Recursos pedagógicos dentro da página

| # | O que eles têm | Nós temos? |
|---|---|---|
| B1 | **Quiz interativo inline** — múltipla escolha, feedback por alternativa (certa **e** errada), contador "Answered: x/y", botão "mudar resposta" | ❌ |
| B2 | **Admonitions** — caixas `note` / `warning` / `tip` destacadas | ❌ |
| B3 | **Pergunta recolhível** (`??? question`) — pergunta visível, resposta escondida até clicar. Usam muito, e funciona bem em aula | ❌ |
| B4 | **Tabelas de símbolos** ("o que cada letra da fórmula significa") | ⚠️ eventual, sem padrão |
| B5 | **Ponte para a próxima aula** ao final de cada página | ⚠️ temos prev/next, não o texto |
| B6 | **Leitura complementar** por aula | ❌ |
| B7 | **Vídeos do Andrew Ng mapeados por tópico** (ex.: "vídeos 9 a 14") | ❌ |

## C. Conteúdo e páginas que não existem no nosso arco

| # | O que eles têm | Nós temos? |
|---|---|---|
| C1 | **Trilha de Setup de Ambiente** — 6 páginas: Git, GitHub, VS Code, UV, primeiro handout, fluxo Git+GitHub | ✅ condensado na seção "Montar o ambiente" da [[Aula 0 e os Guias\|Aula 0]] |
| C2 | **Aula 0 — Fundamentos** — história da IA, Python e NumPy, estatística e probabilidade, atividades | ✅ em `/guias/aula-0`, com 3 visualizações |
| C3 | **Página de Prática por aula** — o que fazer passo a passo + notebook | ❌ |
| C4 | **Notebooks versionados** (`.ipynb`) com **gabarito separado** | ❌ |
| C5 | **GitHub Classroom** — link de aceite da atividade por aula | ❌ |
| C6 | **Página de Projetos/Challenges** — Challenge 1 (MNIST): repo, data de entrega, leaderboard | ❌ |
| C7 | **Página de Utilidades** — TensorFlow Playground, Transformer Explainer, Seeing Theory, Gem "Newton da AI" | ❌ |
| C8 | **Links úteis e referências na home** — SIGE, playlists do Andrew Ng, Hands-On ML (Géron) | ❌ |
| C9 | **Responsáveis com e-mail** | ❌ |
| C10 | **Página de atividades/exercícios** separada da teoria | ❌ |
| C11 | **Ambiente reproduzível** (`pyproject.toml` + `uv.lock`) junto do notebook | ❌ |
| C12 | Scripts `gerar_graficos.py` que produzem os PNGs versionados | ➖ não se aplica (nossas vizs são interativas) |

## D. O que eles têm e **não** devemos copiar

- **Uma aula quebrada em 4–6 páginas** (visão geral / teoria / prática / …).
  A nossa aposta é a página única contínua, que se lê de cima a baixo. Manter.
- **PNG e GIF estáticos** como material visual. É exatamente o que a nossa
  visualização interativa substitui — ver [[Princípios das Visualizações]].
- **MkDocs Material.** Trocar de stack não está em discussão; ver
  [[Stack e Decisões Técnicas]].

---

## Lista de implementação

Ordenada por **retorno / esforço**. Fases independentes entre si.

### Fase 1 — Plataforma (fecha as lacunas baratas)

1. **Tema claro/escuro** — tokens CSS já existem em `:root`; criar o bloco
   `[data-theme="dark"]`, botão na topbar, `localStorage` + respeito ao
   `prefers-color-scheme`. Atenção: as vizs Plotly precisam reagir ao tema.
2. **Busca full-text** — `astro-pagefind`. Indexa no build, roda 100% estático,
   sem servidor. Caixa de busca no topo da sidebar.
3. **Rodapé + link do repo** — responsáveis, e-mail de contato, link para o
   GitHub e para a InsperAI.
4. **Permalinks nos títulos** — `rehype-autolink-headings` + `rehype-slug`.
5. **Rail com scrollspy** — `IntersectionObserver` marcando a seção ativa em
   `Aula.astro`.
6. **Botão de copiar código** — Astro já usa Shiki; falta o botão + `aria-live`.

### Fase 2 — Componentes MDX (o que muda a escrita das aulas)

7. **`<Quiz>`** — o item de maior valor. Múltipla escolha, feedback por
   alternativa, estado em `localStorage`, contador de respondidas na página.
   Substitui o `mkdocs_quiz` deles com melhor acabamento.
8. **`<Nota tipo="...">`** — admonition (nota / atenção / dica / erro-comum).
   O "erro comum" já está no `roteiro.md` de toda aula e hoje se perde no texto.
9. **`<Pergunta>`** — `<details>` estilizado: pergunta visível, resposta ao
   clicar. Serve para o professor pausar no projetor.
10. **`<Simbolos>`** — tabela padrão símbolo → significado, para as fórmulas.
11. **Bloco final padrão da aula** — "o que você sai sabendo" + ponte para a
    próxima + leitura complementar. Vira parte do template em
    [[Como Adicionar uma Aula]].

### Fase 3 — Páginas novas (estrutura do site)

12. ~~**Coleção `guias`** com a trilha de setup~~ ✅ **a coleção existe** e o
    setup foi para dentro da Aula 0, em versão condensada (uv, VS Code, Git,
    clone + `uv sync`). Quebrar em 6 páginas ficou descartado por ora.
13. ~~**Aula 0 — Fundamentos**~~ ✅ **feita** em 6/8/2026. O Alex decidiu:
    **pré-requisito, fora do arco**, acesso pela sidebar, e com o **setup dentro
    dela** — a trilha de 6 páginas do item 12 não será copiada. Ver
    [[Aula 0 e os Guias]].
14. **Página `/recursos`** — utilidades externas (TensorFlow Playground,
    Transformer Explainer, Seeing Theory), playlists do Andrew Ng, Hands-On ML,
    SIGE.
15. **Coleção `projetos`** — Challenge MNIST (lançado na A6) e Projeto 2
    (lançado na A13): enunciado, entrega, critério, link do Classroom.
16. **Home** — o Alex quer **refazer a página inteira**, não só acrescentar
    seções (6/8/2026). Links úteis, referências, responsáveis e o rodapé entram
    nessa refação. Ver [[Decisões Pendentes]].

### Fase 4 — Prática (a parte que hoje não existe no nosso site)

✅ **Já decidido:** toda aula terá um notebook com o exemplo prático e aplicado
do que foi dado nela. O princípio e os candidatos por aula estão em
[[Notebooks das Aulas]].

17. **Decidir onde o notebook vive.** Eles usam GitHub Classroom + notebook no
    repo. Alternativas: link direto para o Colab, ou notebook baixável em
    `public/notebooks/`. **Falta a decisão do Alex** — trava os itens 18 e 19.
18. **`<Pratica>`** — bloco no fim da aula com passo a passo, link do notebook
    e link do Classroom/Colab.
19. **Notebooks por aula** + gabarito separado, com `pyproject.toml`/`uv.lock`
    se forem rodar local. Ver [[Notebooks das Aulas]].

---

## Decisões pendentes (precisam do Alex)

- ~~**Setup de ambiente**~~ ✅ guia no site, dentro da Aula 0 (6/8/2026).
- ~~**Aula 0**: entra no arco ou fica como pré-requisito?~~ ✅ **pré-requisito**,
  fora do arco (6/8/2026).
- **Notebooks**: onde vivem — Classroom, Colab ou download? (item 17;
  o *que* eles contêm já está definido em [[Notebooks das Aulas]])
- **Quiz**: por aula, ou uma página de atividades separada?
- **Nosso site substitui o deles ou convive?** Se convive, vale um link cruzado
  em vez de duplicar setup, notebooks e projetos.

Ver também [[Status do Projeto]] · [[Log de Decisões]]
