# Status do Projeto

_Atualizar esta nota sempre que algo mudar — é o primeiro lugar que uma nova
sessão deve olhar._

## Resumo

- **Duas trilhas no ar:** Trainees (Aulas 1–10) e **Deploy de Agentes (Aulas
  1–5)**, esta desde 10/8/2026 — ver [[#Trilha de Agentes — Aulas 1 a 5]].
  ML/DL Avançado segue sem arco, aparecendo como "em breve" no hub.
- **Aulas 1 a 10 de trainees: COMPLETAS** — 25 visualizações funcionando.
- **Aulas 11, 12 e 13:** aparecem no arco da home como "em breve"; ainda sem
  página `.mdx`. As 11 e 12 dependem do conteúdo do Bloco 5, que está **em
  aberto** no próprio `roteiro.md`.
- **Aula 0 no ar** em `/trainees/guias/aula-0`: **pré-requisito, fora do arco**,
  com o **setup de ambiente dentro dela**, 3 visualizações e, desde 31/8/2026,
  **notebook próprio** (`aula-00-primeiro-notebook.ipynb`) que ensina a usar a
  ferramenta e serve de teste do setup. Acesso pela seção "Antes de começar" da
  sidebar. Ver [[Aula 0 e os Guias]].
- **Home e navegação refeitas** (9/8/2026): barra no topo com as seções e a
  busca, lateral só com o índice da seção atual, home falando do programa em vez
  de repetir o índice. Detalhe em [[Sistema de Design]].
- **Decisões esperando o Alex:** [[Decisões Pendentes]] — nada bloqueante, mas
  há pontos onde outra escolha mudaria o resultado.
- **Infra pronta:** Astro + MDX + KaTeX + Plotly, layout de documentação com
  **barra no topo** (seções + busca) e lateral por seção. Ver [[Sistema de Design]].
- **Deploy:** **no ar na Vercel** (push na `main` = deploy automático).

## Aulas

| # | Nota | Página | Visualizações |
|---|------|--------|---------------|
| A1 | [[Aula 01]] | ✅ pronta | 4/4 ✅ |
| A2 | [[Aula 02]] | ✅ pronta | 3/3 ✅ |
| A3 | [[Aula 03]] | ✅ pronta | 3/3 ✅ |
| A4 | [[Aula 04]] | ✅ pronta | 2/2 ✅ |
| A5 | [[Aula 05]] | ✅ pronta | 3/3 ✅ |
| A6 | [[Aula 06]] | ✅ pronta | 2/2 ✅ |
| A7 | [[Aula 07]] | ✅ pronta | 2/2 ✅ |
| A8 | [[Aula 08]] | ✅ pronta | 1/1 ✅ (era "sem viz" — ver [[Decisões Pendentes]]) |
| A9 | [[Aula 09]] | ✅ pronta | 3/3 ✅ |
| A10 | [[Aula 10]] | ✅ pronta | 2/2 ✅ |
| A11 | [[Aula 11]] | ⬜ | em aberto |
| A12 | [[Aula 12]] | ⬜ | em aberto |
| A13 | [[Aula 13]] | ⬜ | 0/2 |

Total no arco: **25 de 31** visualizações prontas (mais 1 fora do arco, na Aula 0). (Eram 30; a A8 ganhou uma
visualização que não estava no plano — ver [[Decisões Pendentes]].)

## Aula 1 — visualizações prontas

1. **ResiduosECusto** — sliders de `w` e `b`, resíduos em tempo real, custo total.
2. **ErrosMaeMseRmse** — outlier liga/desliga; MSE explode (×~21), MAE quase não muda (×~2).
   Também dá para **clicar no gráfico e colocar os pontos que quiser** (clicar em
   cima tira; "Limpar pontos" zera). A reta é fixa de propósito — só os números
   mudam. O selo de cada métrica compara com o conjunto original.
3. **SuperficieCusto3D** — tigela `J(w,b)` (Plotly), descida do gradiente passo a passo.
4. **LearningRates** — erro × iteração: diverge / lento demais / bom.

## Aula 4 — visualizações prontas

1. **Ativacoes** — sigmoid, tanh e ReLU lado a lado. Um slider de $z$ move o
   ponto nas três ao mesmo tempo e desenha a **inclinação** ali; as faixas
   sombreadas são onde ela é quase zero. Cartões com $f(z)$ e $f'(z)$, verdes
   quando o gradiente passa, vermelhos quando morre.
2. **CamadasColapsando** — liga/desliga a ReLU, de 1 a 3 camadas ocultas. Sem
   ativação a **distância até a melhor reta é 0,00** em qualquer profundidade, e
   o painel mostra a reta equivalente. Com ReLU vai a 1,1–1,6 e aparecem as dobras.

## Fora do arco: a Aula 0

`/guias/aula-0` · coleção `guias`, layout `Guia.astro`, rota `/guias/[slug]`.
Três partes: **conceito** (programar, Python, NumPy, matemática, Git),
**prática** (montar o ambiente com uv, VS Code, Git e `uv sync`) e o **notebook**
no fim, via `<Pratica>`. Três visualizações — `Inclinacao`, `MediaDesvio` e
`Vetorizacao` —, 6 caixas, 1 pergunta e 4 quizzes. Detalhe em
[[Aula 0 e os Guias]].

Os comandos do `uv` foram conferidos na documentação oficial (Context7) antes de
irem para a página — é instrução que o aluno vai colar no terminal.

## Aulas 5 a 10 — visualizações prontas

**A5 · MLP + Backprop**
1. **CamadasDeSaida** — um slider de $z$ alimenta as três camadas de saída ao
   mesmo tempo (linear, sigmoid, softmax) e mostra as três garantias diferentes.
2. **SoftmaxInterativo** — três logits, e a softmax lado a lado com a
   "normalização simples" que muita gente acha que ela é. Logit negativo produz
   "probabilidade" negativa na coluna da direita: é a refutação do erro comum.
3. **RedeBackprop** — uma MLP 2→4→3→1 treinando XOR de verdade, com o ciclo
   desmontado em **8 etapas**. As etapas 5–7 são o backprop calculando; a 8 é o
   gradient descent andando. É a separação que a aula precisa fazer.

**A6 · Treinando na Prática**
4. **TreinoLoteOtimizador** — batch size de 8 a 512 sobre um treino real, com
   SGD e Adam na mesma tela e o contador "1 epoch = N iterações" se recalculando.
   Eixo y em **escala log** (sem isso o erro cai de 4 para 0,1 no primeiro epoch
   e o resto vira uma linha rente ao chão).
5. **DatasetMNIST** — 28×28 = 784 números, e um slider de ambiguidade que mistura
   o dígito com o que mais se confunde com ele. Os dígitos são desenhados aqui,
   não são o dataset real, e a página diz isso.

**A7 · Análise de Modelos**
6. **ComplexidadeErro** — slider de grau do polinômio (0 a 12), com o ajuste em
   cima dos pontos e as duas curvas de erro se separando. O painel diagnostica:
   "Simples demais" → "No ponto" → "Decorou o treino".
7. **Dropout** — a mesma rede 1→12→12→1 treinada com cinco taxas. Em 0 ela decora
   (gap 0,19), em 0,05 a faixa fecha, em 0,30 ela para de aprender.

**A8 · Claude Code**
8. **RevisaoCodigo** — dois códigos de ML gerados por IA que rodam e estão
   errados (vazamento; acurácia em dado desbalanceado). O aluno clica na linha.

**A9 · CNNs pt. 1**
9. **ParametrosMlpCnn** — a explosão: 19,3 milhões de pesos na MLP contra 896 na
   camada convolucional, em 224×224 colorida. Barras em escala log.
10. **ConvolucaoPasso** — a janela deslizando, o feature map se formando, o max
    pooling no fim, e a conta do tamanho de saída viva no painel enquanto se
    mexe em stride e padding.
11. **FiltrosImagem** — seis kernels aplicados a uma imagem, com os nove pesos à
    mostra. A imagem é desenhada por código.

**A10 · CNNs pt. 2**
12. **ArquiteturaCNN** — acrescente blocos conv+pool e veja a forma do tensor
    mudando camada a camada, com a contagem de parâmetros e o aviso de quando a
    resolução espacial acaba.
13. **TransferLearning** — congele até onde quiser e veja quanto sobra para
    treinar (contagem real da VGG-16), com o aviso sobre learning rate no
    fine-tuning.

## Formato novo — Aulas 1 a 10 completas

`<Quiz>` + `<QuizBloco>`, `<Caixa>`, `<Pergunta>`, `<Termo>` (glossário de 40
verbetes) e `<Simbolos>`. API em [[Componentes de Conteúdo]], andamento em
[[Retrofit das Aulas]]. O Alex **aprovou o formato** na Aula 1 e pediu duas
correções, já feitas: a dica da viz saiu do painel (a caixa ficava torta) e os
termos marcados caíram de 19 para 7 (regra de densidade documentada).

| Aula | Termos | Símbolos | Caixas | Pergunta | Quizzes |
|---|---|---|---|---|---|
| A1 | 7 | 2 | 4 | 1 | 6 |
| A2 | 6 | 2 | 3 | 1 | 6 |
| A3 | 6 | 1 | 3 | 1 | 5 |
| A4 | 7 | 3 | 3 | 1 | 6 |
| A5 | 7 | 2 | 3 | 2 | 6 |
| A6 | 7 | 2 | 4 | 1 | 6 |
| A7 | 7 | 1 | 4 | 1 | 6 |
| A8 | 6 | 0 | 3 | 1 | 5 |
| A9 | 7 | 1 | 3 | 1 | 6 |
| A10 | 6 | 0 | 4 | 1 | 5 |

Regra nova saída da A4: **fórmula em display longa quebra em duas linhas**
(`\begin{aligned}`), senão ela estoura a largura no celular. O
`.katex-display { overflow-x: auto }` do `global.css` é só o para-quedas.

## Trilha de Agentes — Aulas 1 a 5

No ar desde **10/8/2026**. Fonte do conteúdo: o repositório `Trilha-Agents` (os
cinco notebooks e o `README.md`), do mesmo jeito que o `roteiro.md` é a fonte de
trainees. Decisões da entrada em [[Log de Decisões]].

O arco tem as **7 aulas do README**; as Aulas 6 (N8N) e 7 (prompt engineering)
entram como `aberto` — estação muda, sem página. As 5 primeiras estão completas.

| # | Aula | Página | Visualizações |
|---|------|--------|---------------|
| A1 | Embeddings, Transformers e GPTs | ✅ pronta | 4/4 ✅ |
| A2 | De Previsor a ChatBot | ✅ pronta | 3/3 ✅ |
| A3 | Tool Calling | ✅ pronta | 3/3 ✅ |
| A4 | Contexto e RAG | ✅ pronta | 4/4 ✅ |
| A5 | Agente com MCP | ✅ pronta | 2/2 ✅ |
| A6 | Agente com N8N | ⬜ | em aberto (sem material) |
| A7 | Prompt Engineering | ⬜ | em aberto (sem material) |

**16 visualizações**, todas em `src/components/viz/agentes/`. Nenhuma foi
promovida a `viz/comum/`: ainda não há uma que sirva a duas trilhas.

**A1 · Embeddings, Transformers e GPTs**
1. **Tokenizacao** — digite uma frase e veja o contador de caracteres por token:
   5,0 em inglês contra 2,8 em português. Casamento guloso de verdade sobre um
   vocabulário de brinquedo — o algoritmo é o real, é por isso que a palavra rara
   se estilhaça na tela.
2. **EspacoEmbeddings** — 12 palavras como setas a partir da origem; escolha uma
   e a lista se reordena por cosseno. "Python" já vem escolhida: fica perto de
   "Java" (0,99) **e** de "cobra" (0,81), que é o gancho para a atenção.
3. **AtencaoFrase** — o par de Winograd: *"…porque **ele** estava cansado"* →
   gato; troca-se a última palavra para *"sujo"* → tapete. Mostra também a
   máscara causal (tokens à frente apagados).
4. **ProximoToken** — um bigrama montado na hora a partir de um corpusinho, com
   temperature de verdade em cima da distribuição real. Em T≈0,15 o texto entra
   em laço — que é exatamente a lição sobre geração gulosa.

**A2 · De Previsor a ChatBot**
5. **MontandoContexto** — três interruptores (diálogo, system prompt, stop
   sequence) com o texto exato que entra e o que sai. Desligado, o modelo devolve
   uma lista de exercícios; ligado, obedece. Nada nele muda — só o texto em volta.
6. **HistoricoCresce** — cinco turnos, com o contexto do turno e o total
   processado lado a lado. É o argumento do $N^2$, visto acontecer.
7. **PromptInjection** — quatro ataques × guardrail ligado/desligado. Com
   guardrail, **dois dos quatro ainda passam**, de propósito: o de ficção e o
   vazamento parcial do system prompt.

**A3 · Tool Calling**
8. **LoopToolCalling** — os seis passos, com o crachá de quem age. O placar final
   é o ponto: duas gerações do modelo, três ações do nosso código.
9. **ParserToolCall** — o parser **rodando de verdade** no navegador (regex,
   `JSON.parse`, validação, execução) sobre um texto editável. Os cinco exemplos
   derrubam um estágio cada. A calculadora é um parser recursivo escrito à mão,
   não `eval`.
10. **FerramentaNoPrompt** — desligue a ferramenta que a pergunta usa e veja o
    agente responder assim mesmo, com número inventado. É a demonstração de
    alucinação da trilha.

**A4 · Contexto e RAG**
11. **JanelaDeContexto** — a janela como orçamento, com o histórico crescendo até
    estourar; o seletor de modelo mostra que janela maior adia e não resolve.
12. **PodaDoHistorico** — janela deslizante × orçamento de tokens, com uma
    pergunta pendente que só se responde se o turno 1 sobreviver. Quando ele sai,
    o agente **não avisa**: inventa.
13. **Chunking** — o algoritmo do notebook rodando; aperte o tamanho até separar
    o par de frases destacado, depois suba a sobreposição.
14. **BuscaSemantica** — duas colunas lado a lado: palavras em comum × cosseno.
    As perguntas foram escritas para o chunk certo ter **zero** palavra em comum.

**A5 · Agente com MCP**
15. **FluxoMCP** — sete passos pelas quatro camadas. O passo 0 (descoberta) é o
    que não existia na Aula 3.
16. **ManualVsMCP** — a mesma tarefa nos dois mundos, com as edições para clicar.
    Marcar 2 das 3 do lado manual produz o pior caso: a ferramenta existe e o
    modelo não sabe.

| Aula | Termos | Símbolos | Caixas | Pergunta | Quizzes |
|---|---|---|---|---|---|
| A1 | 7 | 2 | 4 | 2 | 6 |
| A2 | 7 | 1 | 3 | 1 | 6 |
| A3 | 6 | 0 | 3 | 1 | 6 |
| A4 | 8 | 1 | 3 | 2 | 5 |
| A5 | 7 | 0 | 2 | 1 | 5 |

O glossário ganhou **36 verbetes** de LLM e agentes (de `token` a
`descoberta-de-ferramentas`), numa seção própria no fim de `glossario.ts`. As
Aulas 3 e 5 não têm `<Simbolos>` porque não têm fórmula em display — é conteúdo
de engenharia, não de matemática.

## Verificado em produção (14/8/2026)

Depois dos merges dos PRs #2, #3 e #4, conferi o site no ar, e não só o build:

- **CI verde** nos três merges; produção publicada do commit `cb5ffc7`.
- **Rotas**: hub, trainees, agentes, aulas, guia e `busca.json` respondendo 200.
  `/aulas/aula-01/` (endereço antigo) ainda redireciona. `/agentes/aulas/aula-06/`
  e `/aula-07/` dão **404 de propósito** — aula sem material não gera página.
- **Busca**: 16 itens indexados, com "Agentes · Aulas: 5".
- **Visualizações rodando em produção** — o que nem o build nem a CI pegam. Testei
  a poda da A4 (o agente esquece a Ana quando o turno 1 sai), a busca semântica e
  o chunking. **Zero erro de JavaScript.**
- **Sem regressão**: a Aula 1 de trainees está com as 4 vizzes originais, todos os
  canvas dimensionados, e o bloco de prática novo.
- **A skill chega no clone**: `git ls-tree origin/main` confirma os 3 arquivos em
  `.claude/skills/nova-aula/`.

**Uma pendência cosmética:** não existe favicon. O único erro de console em
produção é `/favicon.ico` 404 — o navegador pede por padrão e `public/` só tem os
dois logos. Resolve com um arquivo e uma linha no layout.

## Próximos passos

- **Notebooks:** a Aula 0 e as Aulas 1, 2 e 3 de trainees já têm notebook, mais
  um **laboratório de revisão das A1+A2** no fim da página da Aula 2, em
  [notebooks-insperai](https://github.com/AlexChequer/notebooks-insperai) — ver
  [[Notebooks das Aulas]]. A A3 estreia o **formato de exercício** (o trainee
  implementa, com testes no notebook) — o Alex precisa julgá-lo antes de eu
  escalar. Faltam as Aulas 4 a 10.
- **Trilha de Agentes:** falta o Alex julgar as 5 aulas, e faltam as Aulas 6
  (N8N) e 7 (prompt engineering) — bloqueadas por não haver material no
  repositório de origem.
- **Ler [[Decisões Pendentes]] primeiro.** Três pontos precisam de informação que
  só o Alex tem (logística do MNIST, repositório dos notebooks, imagens de
  filtros reais) e cinco são escolhas que tomei e que ele pode reverter.
- **Aulas 11, 12 e 13** — bloqueadas pelo conteúdo em aberto do Bloco 5.
- **Páginas novas**: setup de ambiente, Aula 0, recursos, projetos, e a seção
  "Antes de começar" na sidebar — decididas, ainda não começadas.
- **Notebook por aula** — princípio e candidatos em [[Notebooks das Aulas]]. O
  repositório existe desde 10/8, com quatro notebooks dentro; o que falta são as
  Aulas 3 a 10.
- **Lacunas frente ao site 2026.1** (busca, tema escuro, rodapé) — lista
  priorizada em [[Comparativo com o Site 2026.1]].

## Prioridade das visualizações (do prompt original)

1. Aulas 1–3 (as que mais dependem de visual). 2. Aulas 4–7. 3. Aulas 9–10.
4. Aulas 11–13 (só depois de confirmar o conteúdo em aberto).
