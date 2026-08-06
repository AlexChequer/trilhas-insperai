# Componentes de Conteúdo

Os blocos que uma aula pode usar além do texto e das visualizações. Vivem em
`src/components/`, o CSS de todos está em `src/styles/global.css`. Foram criados
em agosto/2026 (decisão 9 do [[Log de Decisões]]); a **Aula 1 é o piloto** e
serve de referência de uso.

## Como importar

Todos entram por `import` no topo do `.mdx`, como as visualizações:

```mdx
import Termo from "../../components/Termo.astro";
import Caixa from "../../components/Caixa.astro";
import Pergunta from "../../components/Pergunta.astro";
import Simbolos from "../../components/Simbolos.astro";
import Quiz from "../../components/Quiz.astro";
import QuizBloco from "../../components/QuizBloco.astro";
```

---

## `<Termo>` — glossário no clique

A palavra fica com sublinhado pontilhado; a definição abre num balão **ao
clicar** (hover não existe no celular; um só balão aberto por vez; `Esc` fecha).

```mdx
Isso se chama <Termo id="aprendizado-supervisionado">aprendizado supervisionado</Termo>.
```

- O texto do verbete vem de **`src/data/glossario.ts`** — um dicionário único do
  site, para o mesmo termo se explicar igual em qualquer aula.
- `id` inexistente **quebra o build de propósito** (erro claro dizendo o que
  fazer). É melhor falhar no build do que publicar termo mudo.
- Não precisa de `**negrito**` junto: o componente já dá o peso visual.

### A regra de densidade (importante)

A primeira versão da Aula 1 tinha **19** termos marcados e o Alex reprovou:
sublinhado demais vira ruído. A regra que ficou, depois do corte para **7**:

> **Marque o termo onde ele é usado _sem estar sendo definido ali_.** Onde o
> próprio texto define o termo — o que é a norma, já que a aula tem de se
> explicar sozinha —, use só `**negrito**`: a definição está a dois centímetros
> de distância, o balão não acrescenta nada. O bom lugar para marcar costuma ser
> a **segunda** aparição, numa seção posterior, quando o leitor já pode ter
> esquecido.
>
> Teto: **um termo marcado por parágrafo**, e algo entre **5 e 8 por aula**.

Na Aula 1 sobraram: `hiperparametro` (na caixa de abertura, como demonstração do
recurso), `parametro`, `residuo`, `outlier`, `custo`, `gradiente`, `iteracao`.

### Detalhe de CSS que já custou caro

O sublinhado usa `text-decoration: underline dotted` com
`text-underline-offset: 0.2em` — **não** `border-bottom`. A borda assenta na base
da caixa da linha, então a distância até a palavra mudava conforme o
`line-height` de cada contexto (parágrafo, item de lista, caixa). O `display` é
`inline` para o termo quebrar linha junto com o texto.

## `<Caixa>` — bloco destacado

```mdx
<Caixa tipo="erro">
Custo **não** é o erro de uma previsão…
</Caixa>
```

`tipo`: `nota` (azul, padrão) · `atencao` (âmbar) · `dica` (verde) · `erro`
(coral, rótulo "Erro comum"). `titulo` troca o rótulo padrão.

> Os **erros comuns** de cada aula já estão no `roteiro.md`. Vire cada um numa
> `<Caixa tipo="erro">` — antes eles se diluíam no texto corrido.

## `<Pergunta>` — pergunta recolhível

Pergunta visível, resposta escondida até clicar. Serve para o professor pausar no
projetor e para quem lê sozinho tentar antes de ver.

```mdx
<Pergunta pergunta="Por que o resíduo é a distância vertical?">
Porque o que você está errando é a **previsão**…
</Pergunta>
```

A pergunta aceita LaTeX (`$...$`); a resposta é Markdown normal.

## `<Simbolos>` — tabela da fórmula

Vai logo depois de uma fórmula em display, explicando cada letra **no exemplo do
curso** (não em abstrato).

```mdx
<Simbolos
  itens={[
    { simbolo: "$x$", significado: "a metragem do imóvel, em m²" },
    { simbolo: "$\\alpha$", significado: "o learning rate: o tamanho do passo" },
  ]}
/>
```

Atenção: dentro de string JSX a barra invertida **dobra** (`$\\alpha$`).

## `<Quiz>` e `<QuizBloco>`

Múltipla escolha com explicação em **toda** alternativa. Enviar trava a resposta,
mostra o porquê da escolhida e — se errou — marca a certa e explica também.
"Refazer" limpa. A escolha fica no `localStorage`, por página e por `id`.

```mdx
<Quiz
  id="a1-soma-residuos"
  pergunta="…"
  imagem="/quiz/a1-grafico.png"   {/* opcional; se usar, `alt` é obrigatório */}
  alternativas={[
    { texto: "…", porque: "por que está errada" },
    { texto: "…", certa: true, porque: "por que está certa" },
  ]}
/>
```

- `id` **estável e único na página** — é a chave que lembra a resposta. Padrão
  usado: `a1-assunto-curto`. Trocar o `id` faz o aluno perder o que respondeu.
- Exatamente **uma** alternativa `certa` — o contrário quebra o build.
- `imagem` sem `alt` quebra o build.
- Pergunta, alternativas e explicações aceitam LaTeX (`$...$`), renderizado no
  build por `src/lib/mat.ts`.

**Colocação** (decidida pelo Alex): **~4 no fim da aula** dentro de um
`<QuizBloco>`, mais **1–2 soltos no meio**, logo depois das seções mais duras.

```mdx
## Teste o que entendeu

<QuizBloco intro="Responda, veja a explicação e refaça quantas vezes quiser.">
  <Quiz … /> <Quiz … />
</QuizBloco>
```

O contador "respondidas x/y" conta só os quizzes **dentro** do bloco. Deixe o
`titulo` do `QuizBloco` de fora e escreva um `##` em Markdown antes dele — assim
a seção aparece no rail "Nesta aula".

### Sobre as perguntas em si

O curso do Andrew Ng é a referência de **estilo**: cenário curto e concreto,
alternativas plausíveis, distratores que atacam o erro comum de verdade. As
perguntas do curso dele são **material protegido** — as nossas são originais, em
pt-BR e ancoradas nos exemplos daqui (o imóvel, os nossos gráficos).

Uma boa explicação de alternativa errada diz **onde o raciocínio escorrega**, não
só "está errado".

## Bloco de código

Bloco de código em Markdown normal (três crases + a linguagem) sai no **padrão
GitHub**: caixa arredondada com borda, fundo cinza-claro, uma barra em cima com o
nome da linguagem e um **botão de copiar**.

````mdx
```python
precos = np.array([250, 310, 180])
```
````

Não há componente a importar — a estrutura é montada em JS no `SiteLayout.astro`,
que envolve cada `pre.astro-code` da `.leitura` num `.bloco-codigo`. O CSS está em
`global.css`, junto do resto da leitura.

Três detalhes que já custaram decisão:

- **Tema claro** (`shikiConfig: { theme: "github-light" }` no `astro.config.mjs`).
  O primeiro tema era escuro e ficava feio no site claro — e fundo escuro some no
  projetor com a luz da sala acesa, que é a regra 5 de
  [[Princípios das Visualizações]]. O Shiki escreve o fundo num `style` inline,
  então o CSS precisa de `!important` para sobrescrever.
- **O rótulo da barra é traduzido**: `bash`, `sh` e `console` viram **Terminal**,
  `powershell` vira **PowerShell**. O mapa está no script do `SiteLayout`.
- **Só pega `pre.astro-code`**, que é a classe que o Shiki carimba. Blocos de
  código que fazem parte de uma visualização (como o da `Vetorizacao`) usam `pre`
  sem essa classe, de propósito, e não ganham barra nem botão.

Se a área de transferência estiver bloqueada (fora de HTTPS, ou permissão
negada), o botão **seleciona** o código em vez de fingir que copiou, e o rótulo
vira "Selecionado".

Código no meio da frase (uma crase só) vira uma pílula cinza discreta — de
propósito mais apagada que o `<Termo>`, que é o único elemento clicável da leitura.

---

## Armadilha: CSS com escopo do Astro em elemento criado por JS

O `<style>` de um `.astro` é **escopado por atributo**: o Astro carimba um
`data-astro-cid-*` nos elementos **do template** e prefixa os seletores com ele.
Elemento criado em JavaScript não recebe esse carimbo — e o CSS simplesmente não
aplica. O sintoma é traiçoeiro: a página funciona, só fica sem estilo naquele
pedaço.

Aconteceu duas vezes (a `RevisaoCodigo` da A8 e a galeria da `DatasetMNIST` da
A6). A solução é envolver a parte dinâmica em `:global()`, sob um ancestral que
**esteja** no template:

```css
/* não funciona: o <li> nasce em JS */
.lista li { ... }

/* funciona: o escopo fica em .lista, que é do template */
.lista :global(li) { ... }
```

Vale para `innerHTML` também — `<strong>` e `<code>` inseridos por script são
elementos novos e seguem a mesma regra.

## `src/lib/mat.ts`

Converte `$...$` em HTML do KaTeX e escapa o resto. Serve para o texto que chega
por **prop** (quiz, símbolos) e que, por isso, não passa pelo Markdown do MDX.
Roda no build — nenhum KaTeX vai para o navegador.

Ver também [[Como Adicionar uma Aula]] · [[Sistema de Design]]
