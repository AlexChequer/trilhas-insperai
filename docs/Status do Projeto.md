# Status do Projeto

_Atualizar esta nota sempre que algo mudar — é o primeiro lugar que uma nova
sessão deve olhar._

## Resumo

- **Aulas 1 a 10: COMPLETAS** — 25 visualizações funcionando.
- **Aulas 11, 12 e 13:** aparecem no arco da home como "em breve"; ainda sem
  página `.mdx`. As 11 e 12 dependem do conteúdo do Bloco 5, que está **em
  aberto** no próprio `roteiro.md`.
- **Aula 0 no ar** em `/guias/aula-0`: **pré-requisito, fora do arco**, com o
  **setup de ambiente dentro dela** e 3 visualizações. Acesso pela seção "Antes
  de começar" da sidebar. Ver [[Aula 0 e os Guias]].
- **A home vai ser refeita inteira** — pedido do Alex em 6/8/2026. Nada foi
  tocado nela.
- **Decisões esperando o Alex:** [[Decisões Pendentes]] — nada bloqueante, mas
  há pontos onde outra escolha mudaria o resultado.
- **Infra pronta:** Astro + MDX + KaTeX + Plotly, **layout estilo documentação**
  (barra lateral com índice + logos InsperAI), home rica com cards. Ver [[Sistema de Design]].
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
Duas metades: **conceito** (programar, Python, NumPy, matemática, Git) e
**prática** (montar o ambiente com uv, VS Code, Git e `uv sync`). Três
visualizações — `Inclinacao`, `MediaDesvio` e `Vetorizacao` —, 6 caixas, 1
pergunta e 4 quizzes. Detalhe em [[Aula 0 e os Guias]].

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

## Próximos passos

- **Ler [[Decisões Pendentes]] primeiro.** Três pontos precisam de informação que
  só o Alex tem (logística do MNIST, repositório dos notebooks, imagens de
  filtros reais) e cinco são escolhas que tomei e que ele pode reverter.
- **Aulas 11, 12 e 13** — bloqueadas pelo conteúdo em aberto do Bloco 5.
- **Páginas novas**: setup de ambiente, Aula 0, recursos, projetos, e a seção
  "Antes de começar" na sidebar — decididas, ainda não começadas.
- **Notebook por aula** — decidido, ainda não começado. Princípio e candidatos
  em [[Notebooks das Aulas]]; o repositório ainda não existe.
- **Lacunas frente ao site 2026.1** (busca, tema escuro, rodapé) — lista
  priorizada em [[Comparativo com o Site 2026.1]].

## Prioridade das visualizações (do prompt original)

1. Aulas 1–3 (as que mais dependem de visual). 2. Aulas 4–7. 3. Aulas 9–10.
4. Aulas 11–13 (só depois de confirmar o conteúdo em aberto).
