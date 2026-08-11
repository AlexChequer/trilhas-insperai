---
name: nova-aula
description: Monta uma aula do site de trilhas da InsperAI — o MDX e as visualizações — a partir do roteiro do coordenador, no padrão da casa. Use ao criar, escrever, montar ou continuar uma aula de qualquer trilha (trainees, agentes, ml-avancado), e também ao revisar se uma aula já escrita segue o padrão.
---

# Montar uma aula

Este site tem um padrão fechado: toda aula tem a mesma anatomia, o mesmo tom e os
mesmos componentes. **O coordenador traz o conteúdo; o padrão é seu trabalho.**

Se algo aqui conflitar com o que o coordenador pediu, siga o coordenador e avise
qual regra está sendo quebrada — mas não invente conteúdo pedagógico para
preencher lacuna (ver "O que nunca fazer").

## Antes de escrever qualquer coisa

Leia, nesta ordem — são curtos e valem mais que qualquer resumo meu:

1. **`src/content/aulas/trainees/aula-01.mdx`** — a aula de referência. Tom,
   profundidade, ordem, densidade de componentes. Quando tiver dúvida de estilo,
   a resposta está aqui.
2. **`docs/Filosofia Pedagógica.md`** — por que a visualização é o instrumento
   central, e não enfeite.
3. **`docs/Princípios das Visualizações.md`** — as seis regras de uma viz.

Se a aula é de uma trilha específica, leia também a aula anterior **daquela**
trilha: as trilhas têm exemplos e vocabulário próprios que precisam de
continuidade.

## O processo

### 1 · Levantar o conteúdo com o coordenador

Precisa existir, antes de escrever:

- **o objetivo da aula** em uma frase (vira o campo `objetivo` do frontmatter);
- **os conceitos**, na ordem em que devem ser apresentados;
- **o exemplo concreto** que atravessa a aula (o imóvel, na trilha de trainees);
- **os erros comuns** — cada um vira uma `<Caixa tipo="erro">`;
- **o que dá para mexer na tela** — cada ideia central quer uma viz.

Faltou alguma dessas? **Pergunte.** Não preencha por conta própria.

### 2 · Registrar a aula no arco

Em `src/data/trilhas/<trilha>.ts`, a aula precisa existir em `blocos` com `n`,
`slug`, `titulo`, `desc` e a contagem `prontas`/`total` de visualizações. A
estação vira link sozinha assim que o `.mdx` existir.

### 3 · Escrever o MDX

Em `src/content/aulas/<trilha>/<slug>.mdx`. Copie a estrutura de
`referencia/modelo-aula.mdx` (nesta pasta) e veja a anatomia abaixo.

### 4 · Construir as visualizações

Em `src/components/viz/<trilha>/`. Copie `referencia/modelo-viz.astro`.

### 5 · Passar no portão

Nada está pronto antes disso — ver "O portão", no fim.

### 6 · Registrar no vault

Se a aula envolveu uma **decisão** (e não só execução), acrescente em
`docs/Log de Decisões.md`: o que se decidiu, por quê, e o que faria mudar de
ideia. Atualize `docs/Status do Projeto.md`.

## A anatomia de uma aula

Na ordem, sempre:

```mdx
---
n: "A4"                    # o código no arco
titulo: "Do Neurônio à Rede"
ordem: 4                   # posição na trilha; prev/next saem daqui
objetivo: "Uma frase sobre o que a pessoa sai sabendo fazer."
---

(imports — sempre com o alias @/, nunca ../../)

Parágrafo de abertura: onde a aula anterior parou e o que esta resolve.

## Seção                   (## vira o rail "Nesta aula" automaticamente)

Texto que se explica sozinho, e a viz logo depois da ideia que ela mostra.

<p class="nota">Fechamento curto: o que ficou e o gancho da próxima aula.</p>

## Teste o que entendeu

<QuizBloco intro="…"> …4 quizzes… </QuizBloco>

<Pratica caminho="…" resumo="…" />   (se a aula já tem notebook)
```

### Densidade dos componentes

Medida nas aulas que existem. Fique nessa faixa:

| componente | quanto | onde |
|---|---|---|
| `<Termo>` | **5 a 8** por aula, no máximo 1 por parágrafo | onde o termo é usado **sem estar sendo definido ali** |
| `<Caixa tipo="erro">` | 1 por erro comum do roteiro | logo depois do trecho que o erro ataca |
| `<Pergunta>` | 1 a 2 | onde vale pausar antes de contar a resposta |
| `<Simbolos>` | 1 por fórmula em display | imediatamente depois da fórmula |
| `<Quiz>` | **~4 no fim** dentro de `<QuizBloco>` + **1 a 2 soltos** no meio | os soltos vão depois das seções mais duras |
| `<VizEmbed>` | 2 a 4 | depois da ideia que a viz mostra, nunca antes |

**A regra do `<Termo>` que já custou retrabalho:** onde o próprio texto define o
termo — que é a norma, já que a aula tem de se explicar sozinha — use só
`**negrito**`. O balão serve para a **segunda** aparição, numa seção posterior,
quando o leitor pode ter esquecido. A primeira versão da Aula 1 tinha 19 termos
marcados e foi reprovada: sublinhado demais vira ruído.

Detalhe de cada componente: **`docs/Componentes de Conteúdo.md`**.

## O tom

- **Tudo em pt-BR** — texto, código, comentário, rótulo de eixo, commit. Sem exceção.
- **Escreva para alguém lendo sem professor.** Do zero, com intuição e o porquê,
  definindo os termos. Não é resumo de slide: é o material principal.
- **Explique antes de nomear.** Primeiro o que a coisa faz e por que ela existe;
  o nome técnico vem depois, quando já há onde pendurá-lo.
- **Comentário no código explica o porquê, não o quê.** A linha já diz o que faz;
  o comentário registra a decisão e o que se tentou antes.
- Frase curta. Voz ativa. Nada de "trivialmente" ou "basta ver que".

## As visualizações

As seis regras estão em `docs/Princípios das Visualizações.md`. As que mais
reprovam trabalho na revisão:

1. **Uma coisa que se manipula, uma consequência que se vê.** Um controle
   principal, no máximo dois secundários. Se o usuário não mexe em nada, é um
   slide — e slide não precisa ser componente.
2. **Toda viz precisa de uma tarefa visível na tela.** Uma viz já foi reprovada
   por ser abstrata demais. O texto de instrução (o `titulo` do `<VizEmbed>`)
   tem que dizer o que fazer: "arraste o grau", "clique em ele", "ligue o outlier".
3. **Estado inicial já mostra algo que faz sentido.** Nada de tela vazia esperando
   descoberta. Quem abre no celular às 23h entende em 5 segundos.
4. **Número e desenho juntos.** O slider muda o valor, a curva muda, e o número
   aparece. Curva sem número deixa a intuição vaga.
5. **Projetor e celular.** Fonte grande, alto contraste, fundo claro. No celular,
   cabe sem rolagem horizontal e com alvo tocável de 44px.

E uma regra que vale a pena seguir sempre que der:

> **Prefira o mecanismo real ao número inventado.** Se dá para rodar a conta de
> verdade no navegador — o algoritmo, a softmax, o parser, o chunking —, rode. A
> viz fica honesta e o aluno pode quebrá-la de propósito, que é quando ele
> aprende. Quando não der (pesos de um modelo que não roda no browser), diga no
> comentário do topo do arquivo que os números são ilustrativos.

Mecânica de construção (canvas em alta resolução, `ResizeObserver`, escopo por
`data-viz`, tela cheia): **`docs/Como Adicionar uma Visualização.md`** e o modelo
em `referencia/modelo-viz.astro`.

## Os invariantes do repositório

Quebrar qualquer um destes quebra o site de um jeito que o build **não** acusa:

1. **A trilha sai da pasta, não do frontmatter.** Conteúdo em
   `src/content/<coleção>/<trilha>/<slug>.mdx`. Nunca crie um campo `trilha` no
   frontmatter.
2. **Nunca escreva URL na mão.** Use `urlTrilha()`, `urlAula()`, `urlGuia()` de
   `src/data/trilhas`, e `urlColab()`/`urlGitHub()` de `src/data/notebooks`.
3. **Uma trilha está no ar quando tem `blocos`.** Não existe flag `ativa`.
4. **Imports em MDX usam o alias `@/`**, nunca `../../`.

## O que o build já barra de propósito

Estas você não precisa checar na mão — o build falha com mensagem clara, e a CI
barra o merge:

- `<Termo id="...">` com id que não existe em `src/data/glossario.ts`;
- `<Quiz>` sem **exatamente uma** alternativa `certa`;
- `<Quiz imagem="...">` sem `alt`;
- MDX numa pasta que não corresponde a nenhuma trilha registrada;
- link interno para página que não existe (`checar-links`).

Termo novo? Acrescente o verbete em `src/data/glossario.ts` — uma ou duas frases,
sem jargão que exija outro verbete, amarrando no exemplo do curso.

## O portão

**Nada está pronto antes de passar aqui.**

```bash
npm run verificar   # astro check + astro build + checar-links
```

Os três têm que passar — é exatamente o que a CI roda, e a `main` está protegida
com esse check obrigatório.

**E depois, no navegador** (`npm run dev`), porque o `verificar` **não executa o
JavaScript das visualizações** — uma viz com erro de runtime compila normal e só
quebra na tela:

- [ ] abrir a página da aula e **conferir o console: zero erro**;
- [ ] mexer em **cada** controle de **cada** viz e ver a consequência acontecer;
- [ ] estreitar para **390px** e conferir que nada estoura a largura;
- [ ] conferir que o `<Termo>` abre, o `<Quiz>` trava ao responder e o
      `<Pergunta>` expande.

Esse passo não é zelo: é onde os bugs de viz aparecem, todos eles.

## O que nunca fazer

- **Não invente conteúdo pedagógico.** A fonte é o roteiro do coordenador. Se ele
  não cobre, **pergunte** — não preencha com o que parece razoável.
- **Não copie material protegido.** O curso do Andrew Ng é referência de *estilo*;
  as perguntas são originais, em pt-BR, ancoradas nos exemplos daqui.
- **Não mexa em `dist/`, `.astro/` ou `node_modules/`** — são gerados.
- **Não crie página para trilha sem arco**, nem link para aula que não existe.
- **Não mude rota sem redirecionar** — os trainees têm links salvos.
- **Não commite `.env`** nem credencial.

## Referências nesta pasta

- `referencia/modelo-aula.mdx` — o esqueleto do MDX, para copiar.
- `referencia/modelo-viz.astro` — o esqueleto de uma visualização.
