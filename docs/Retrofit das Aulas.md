# Retrofit das Aulas

Nota de trabalho: passar **todas as aulas** para o formato novo (quiz, caixa,
pergunta, termo, símbolos). Encomendado pelo Alex em agosto/2026, depois de
aprovar a Aula 1 de piloto. **Mantida atualizada a cada aula concluída** — a
conversa pode acabar a qualquer momento e a próxima sessão continua daqui.

## Ordem pedida

Aula 2 → Aula 3 → **até o fim do Bloco 2** (A4, A5, A6, A7). Em 6/8/2026 o Alex
estendeu o pedido: **seguir até a segunda aula de CNNs** (A8, A9, A10), deixando
as escolhas que dependem dele numa lista — que é [[Decisões Pendentes]].

## Estado

| Aula | Texto | Vizs | Retrofit | Observação |
|---|---|---|---|---|
| A1 | ✅ | 4/4 | ✅ **aprovada** | é o piloto — copie a estrutura dela |
| A2 | ✅ | 3/3 | ✅ | |
| A3 | ✅ | 3/3 | ✅ | |
| A4 | ✅ | 2/2 | ✅ | construída do zero — registro no fim desta nota |
| A5 | ✅ | 3/3 | ✅ | construída do zero |
| A6 | ✅ | 2/2 | ✅ | construída do zero |
| A7 | ✅ | 2/2 | ✅ | construída do zero |
| A8 | ✅ | 1/1 | ✅ | ganhou uma viz que não estava no plano |
| A9 | ✅ | 3/3 | ✅ | construída do zero |
| A10 | ✅ | 2/2 | ✅ | construída do zero |

**Ao terminar cada aula:** marcar a linha aqui, preencher o registro no fim desta
nota e atualizar o [[Status do Projeto]]. Uma aula por vez, do começo ao fim —
não adianta deixar quatro pela metade.

> Atenção ao tamanho real do pedido: A2 e A3 foram **retrofit** (o texto e as
> visualizações já existiam, era só aplicar os componentes). **A4 a A10 foram
> aulas inteiras construídas do zero** — 7 textos a partir do `roteiro.md` mais
> **14 visualizações interativas novas**. É um trabalho de outra ordem de grandeza.

## A receita, aula por aula

Segue-se sempre a mesma sequência. A Aula 1 (`src/content/aulas/aula-01.mdx`) é a
referência viva; consulte [[Componentes de Conteúdo]] para a API de cada bloco.

1. **Importar** os componentes usados no topo do `.mdx`.
2. **Caixa de abertura** (`tipo="dica"`, título "Como ler esta página") só na
   Aula 1 — nas outras é repetição desnecessária.
3. **`<Simbolos>`** depois de **toda** fórmula em display, explicando cada letra
   no exemplo do curso, não em abstrato.
4. **`<Caixa tipo="erro">`** para cada item de "Erros comuns" do `roteiro.md`
   daquela aula. Eles já estão escritos lá — é só transpor.
5. **`<Pergunta>`**: 1 ou 2, nos pontos onde vale o professor pausar no projetor.
6. **`<Termo>`**: 5 a 8 por aula, seguindo a regra de densidade de
   [[Componentes de Conteúdo]]. Verbete novo entra em `src/data/glossario.ts`.
7. **Quizzes**: 1–2 no meio (depois das seções mais duras) e **4 no fim**, dentro
   de `<QuizBloco>`, precedido de um `## Teste o que entendeu` em Markdown (para
   a seção aparecer no rail).
8. **Conferir**: `npx astro check`, abrir a página, responder um quiz errado e
   um certo, testar a 375px de largura.
9. **Atualizar esta nota** e o [[Status do Projeto]].

### Como escrever as perguntas

Os "Erros comuns" do `roteiro.md` são a melhor matéria-prima: cada um vira um
distrator que alguém escolheria de verdade. Estilo de referência é o curso do
Andrew Ng (cenário curto e concreto, alternativas plausíveis) — mas as perguntas
são **originais em pt-BR**, ancoradas nos exemplos daqui. As dele são material
protegido.

Toda alternativa precisa do campo `porque`. Numa errada, diga **onde o raciocínio
escorrega**, não só "está errado".

`id` do quiz: `a<N>-assunto-curto` (ex.: `a2-polinomial-nao-e-algoritmo`). Trocar
o `id` depois faz o aluno perder o que respondeu.

## Registro por aula

### Aula 2 — Escalando o Modelo ✅

- **Termos** (6): `feature`, `produto-escalar`, `feature-engineering`,
  `overfitting`, `underfitting`, `padronizacao`. Verbetes novos no glossário.
- **Símbolos**: 2 tabelas — a soma com várias features e o produto escalar.
- **Caixas** (3, os três erros comuns do roteiro): polinomial não é algoritmo
  novo; escala calculada só no treino; mais features não é sempre melhor.
- **Pergunta**: por que "linear" continua valendo numa curva.
- **Quizzes** (6): 2 no meio (produto escalar; grau do polinômio) + 4 no fim.

### Aula 3 — Classificação ✅

- **Termos** (6): `produto-escalar` (recall da A2), `sigmoid`, `acuracia`
  (marcada onde aparece **antes** de ser definida), `fronteira-decisao`,
  `limiar`, `recall`. Doze verbetes novos no glossário.
- **Símbolos**: 1 tabela — a fórmula da sigmoid ($z$, $\sigma$, $p$), que a aula
  não tinha por escrito e agora tem.
- **Caixas** (3): regressão logística não é regressão; acurácia em dado
  desbalanceado; e uma `dica` — "como não trocar precision e recall" (olhe de
  onde parte a fração).
- **Pergunta**: a fronteira virou círculo, o modelo deixou de ser linear?
- **Quizzes** (5): 1 no meio (o que é o 0,82 que o modelo devolveu) + 4 no fim.

### Aula 4 — Do Neurônio à Rede ✅

Primeira aula construída **do zero** (texto + visualizações), não retrofit.

- **Termos** (7): `produto-escalar` e `regressao-logistica` (recall da A2/A3),
  `gradiente` (recall da A1, na explicação da saturação), `saturacao`,
  `ativacao`, `camada`, `fronteira-decisao`. Onze verbetes novos no glossário
  (`neuronio`, `perceptron`, `peso`, `vies`, `ativacao`, `relu`, `tanh`,
  `saturacao`, `camada`, `rede-neural`, `nao-linearidade`).
- **Símbolos**: 3 tabelas — a conta do neurônio, a ativação $a = g(z)$, e o
  colapso das duas camadas.
- **Caixas** (3, os três erros comuns do roteiro): o perceptron é a conta que
  eles já conhecem; a ativação não é a saída final da rede; profundidade não
  substitui ativação.
- **Pergunta**: se a ReLU é reta dos dois lados, como ela produz curva?
- **Quizzes** (6): 2 no meio (sigmoid saturada; mais camadas não resolve) + 4 no fim.
- **Playground**: link já configurado na espiral com ativação linear, no fim da aula.

**Visualizações**

1. **`Ativacoes`** — as três lado a lado com as zonas de saturação sombreadas. O
   controle é um slider de $z$; o que se vê é a **inclinação** (uma reta curta
   desenhada sobre o ponto) e os três cartões com $f(z)$ e $f'(z)$, verde quando
   o gradiente passa e vermelho quando morre. A ReLU mostra a zona morta do lado
   negativo — é honesto e vira argumento: ela tem um lado inteiro vivo.
   Esta viz **não usa o painel lateral** (`.viz-corpo`): as três precisam da
   largura inteira para ficarem lado a lado. A classe é `.viz-ativ`, com os
   cartões numa grade de 3 embaixo do gráfico, empilhando a partir de 620px.
2. **`CamadasColapsando`** — liga/desliga a ReLU e muda de 1 a 3 camadas
   ocultas. O número que fecha o argumento é a **distância até a melhor reta**:
   `0,00` em qualquer profundidade sem ativação (e o painel mostra a reta
   equivalente, `y = −0,81·x + 1,03`), contra 1,1–1,6 com ReLU. Os pesos são
   fixos e foram **escolhidos por busca**: com os primeiros que testei, a curva
   com ReLU em 3 camadas saía quase reta (RMSE 0,19) e desmentia a aula.

**Três coisas que apareceram na verificação e viraram regra**

1. **Fórmula em display longa estoura o celular.** Duas fórmulas da A4 passavam
   de 420px num viewport de 375 e empurravam a página inteira (`scrollWidth`
   505). Resolvido quebrando as duas em `\begin{aligned}` de duas linhas, mais
   uma rede de segurança nova em `global.css`: `.katex-display { overflow-x:
   auto }`. **Ao escrever fórmula longa, quebre em duas linhas** — o scroll é só
   o para-quedas.
2. **Rótulo dentro do gráfico vai no meio, não no topo.** O "satura" da faixa
   sombreada colidia com a curva da tanh, que chega em 1 e passa perto do topo.
3. **A largura estreita do gráfico é o padrão do site**, não um defeito: com
   `.viz-corpo` o canvas fica em ~215–240px porque o painel leva 320px. Confirmei
   na A1 antes de mudar. Só saia desse layout quando a viz precisar mesmo da
   largura (foi o caso da `Ativacoes`, e aí acrescente a classe nova à regra de
   tela cheia em `global.css`).

### Aula 5 — MLP + Backprop ✅

- **Termos** (7): `parametro` (recall A1), `ativacao` (recall A4),
  `camada-oculta`, `logit`, `softmax`, `gradiente` (recall A1), `overfitting`
  (recall A2, no gancho para a A7). Onze verbetes novos.
- **Símbolos**: 2 tabelas — a contagem de parâmetros e a fórmula da softmax.
- **Caixas** (3): ReLU nunca na saída e softmax nunca em camada oculta; softmax
  não é normalização simples; backprop não é gradient descent.
- **Perguntas** (2): por que a saída de regressão não tem ativação; e por que
  softmax em vez de 10 sigmoids independentes (multiclasse × multi-rótulo).
- **Quizzes** (6): 2 no meio + 4 no fim.
- **Contagem do MNIST**: 784 → 128 → 64 → 10 dá **109.386** parâmetros, e quase
  tudo está na primeira camada. É o gancho que a A9 cobra.

**Visualizações**

1. **`CamadasDeSaida`** — um slider de $z$ alimenta as três colunas ao mesmo
   tempo. Barras em CSS, não canvas: são medidores, não gráficos de função, e em
   CSS ficam mais nítidos no projetor.
2. **`SoftmaxInterativo`** — três logits, e a softmax lado a lado com "dividir
   pela soma". O estado inicial **já entra com um logit negativo**, que é onde a
   normalização simples produz −20% e quebra na cara do aluno.
3. **`RedeBackprop`** — MLP 2→4→3→1 treinando XOR de verdade (seed 7, lr 1,2), com
   o ciclo em **8 etapas**. Etapas 5–7: backprop calcula. Etapa 8: gradient
   descent anda. O erro só muda depois da etapa 8 — é isso que separa os dois.

### Aula 6 — Treinando na Prática ✅

- **Termos** (7): `iteracao` e `hiperparametro` (recall A1), `learning-rate`
  (recall A1), `adam`, e mais. Seis verbetes novos (`batch`, `epoch`,
  `otimizador`, `sgd`, `momentum`, `adam`).
- **Símbolos**: 2 — iterações por epoch, e a fórmula do momentum.
- **Caixas** (4): epoch não é iteração; Adam não salva learning rate ruim; não
  começar o MNIST na véspera; e uma `atencao` para a logística do desafio, que
  **não foi inventada** (ver [[Decisões Pendentes]]).
- **Pergunta**: se lote grande dá curva melhor, por que não usar o dataset
  inteiro? (memória, número de passos, e o ruído como recurso).
- **Quizzes** (6): 2 no meio + 4 no fim.

**Visualizações**

4. **`TreinoLoteOtimizador`** — regressão logística real em 640 exemplos, num
   vale alongado de propósito (features em escala 0,06 e 3,0) que é onde o
   learning rate único sofre. Slider de batch size; SGD e Adam sempre na tela.
   Duas decisões que custaram tentativa: (a) plotar a **perda do lote**, não a do
   dataset — é ela que produz o ruído que o roteiro pede; (b) **eixo y em escala
   log**, senão o erro cai de 4 para 0,1 no primeiro epoch e o resto vira uma
   linha rente ao chão.
5. **`DatasetMNIST`** — dígitos desenhados por código em 28×28, com slider de
   ambiguidade misturando o dígito com o que mais se confunde com ele. Em 50% nem
   uma pessoa decide, que é o argumento de por que ninguém acerta 100%.

### Aula 7 — Análise de Modelos ✅

- **Termos** (7): `overfitting` (recall A2), `underfitting` (recall A2), `teste`,
  `validacao`, `vazamento-de-dados`, `regularizacao`, `dropout`. Dez verbetes novos.
- **Símbolos**: 1 — as penalidades L1 e L2 na mesma fórmula.
- **Caixas** (4): nem todo gap é overfitting; usar o teste para escolher
  hiperparâmetro; empilhar regularizações sem saber qual ajudou; e o alerta do
  fine-tuning.
- **Pergunta**: como sei que o teste não é mais difícil que a validação? (mesma
  distribuição, sorteio aleatório, e validação cruzada quando o dado é pouco).
- **Quizzes** (6): 2 no meio + 4 no fim.

**Visualizações**

6. **`ComplexidadeErro`** — slider de grau (0 a 12) sobre 13 pontos de treino e
   60 de validação, com mínimos quadrados de verdade. Grau 0: 0,770/0,781.
   Grau 4: 0,135/0,145. Grau 12: 0,070/**6,027**. O painel diagnostica em qual
   cenário você está, e o eixo corta em 0,9 para a validação sair por cima.
   **Absorveu as "learning curves dos três cenários"** do plano — ver
   [[Decisões Pendentes]].
7. **`Dropout`** — rede 1→12→12→1 treinada de verdade com cinco taxas, e o
   diagrama mostrando os neurônios sorteados fora a cada passagem. Taxa 0: gap
   0,192. Taxa 0,05: gap 0,113 e a melhor validação. Taxa 0,30: os dois erros
   sobem juntos (dropout demais vira underfitting).

### Aula 8 — Claude Code ✅

Aula prática. O plano dizia "sem viz"; ela ganhou uma — ver [[Decisões Pendentes]].

- **Termos** (6): `hiperparametro` (A1), `vazamento-de-dados` (A7), `acuracia`
  (A3), `janela-de-contexto`, `spec`, `fluxo-agentico`. Três verbetes novos.
- **Caixas** (3): a spec antes do prompt (`dica`); insistir em conversa gigante;
  aceitar código que roda sem checar se faz o que deveria.
- **Pergunta**: se preciso saber tudo para revisar, qual é o ganho da ferramenta?
- **Quizzes** (5): 1 no meio + 4 no fim.

**Visualização**

8. **`RevisaoCodigo`** — dois códigos de ML que rodam e estão errados. O aluno
   clica na linha; as linhas que *parecem* suspeitas têm explicação própria (o
   `random_state=42`, a arquitetura, o `stratify`). O caso 2 usa como distrator o
   `fit` correto do scaler, que era o erro do caso 1 — quem aprendeu no primeiro
   caso é premiado no segundo.

### Aula 9 — CNNs pt. 1 ✅

- **Termos** (7): `convolucao`, `filtro`, `feature-map`, `stride`, `padding`,
  `pooling`, `invariancia-a-translacao`. Nove verbetes novos.
- **Símbolos**: 1 — a conta do tamanho de saída, com o chão explicado.
- **Caixas** (3): filtros não são escolhidos à mão; confundir stride com kernel;
  e a caixa `nota` de que os três problemas da MLP têm a mesma raiz.
- **Pergunta**: se o filtro é 3×3, como a rede vê algo maior? (campo receptivo).
- **Quizzes** (6): 2 no meio + 4 no fim.

**Visualizações**

9. **`ParametrosMlpCnn`** — 100.480 contra 320 no MNIST; 19,3 milhões contra 896
   em 224×224 colorida. Barras em escala log, senão a da CNN some.
10. **`ConvolucaoPasso`** — janela deslizando sobre um L de 8×8, feature map se
    formando célula a célula, max pooling no fim, e a conta $(N+2P-K)/E+1$ viva
    no painel enquanto se mexe em stride e padding.
11. **`FiltrosImagem`** — seis kernels sobre uma imagem desenhada por código
    (retângulo, círculo, diagonal, listras, degradê). O detector vertical acende
    as laterais e reduz as listras horizontais a pontinhos: a demonstração é
    imediata.

### Aula 10 — CNNs pt. 2 ✅

- **Termos** (6): `pooling` (recall A9), `flatten`, `campo-receptivo`,
  `skip-connection`, `fine-tuning`, `transfer-learning`. Cinco verbetes novos.
- **Caixas** (4): montar arquitetura sem calcular tamanho; fine-tuning com
  learning rate alto; achar que precisa de dataset gigante; e uma `nota` sobre as
  imagens de filtros reais não estarem na página (ver [[Decisões Pendentes]]).
- **Pergunta**: por que a hierarquia borda → textura → objeto aparece sempre na
  mesma ordem? (porque o campo receptivo impõe).
- **Quizzes** (5): 1 no meio + 4 no fim.

**Visualizações**

12. **`ArquiteturaCNN`** — de 0 a 4 blocos conv+pool. Com 0 blocos é literalmente
    a MLP do MNIST; com 2, 95% dos parâmetros estão na parte densa; com 4, só 8%.
    Avisa em vermelho quando a resolução espacial acaba.
13. **`TransferLearning`** — contagem real da VGG-16 por bloco. Congelando 5
    blocos sobram 262.400 parâmetros (1,8%); descongelando tudo, 15 milhões — e o
    texto muda para o alerta sobre destruir os pesos pré-treinados.

## Correções pedidas pelo Alex ao rever as Aulas 4 a 10 (6/8/2026)

Quatro pitacos, todos atendidos. Ficam registrados porque três viraram regra.

### 1. `CamadasColapsando` (A4) refeita — "confuso e não intuitivo"

O veredito foi direto e estava certo. A primeira versão mostrava eixos abstratos
("entrada x" → "saída da rede"), três curvinhas de neurônio ao fundo e uma métrica
derivada — a "distância até a melhor reta". Nada disso tem significado para quem
está aprendendo: não havia **tarefa** nenhuma na tela, então não havia como julgar
se a rede estava indo bem ou mal.

A versão 2 põe uma tarefa visível: **22 pontos formando uma onda**, e a rede
tentando passar por eles, com traços vermelhos marcando o erro em cada ponto.
Sem ativação ela só consegue traçar uma reta, e isso se vê — a reta passa longe.
Com ReLU ela acompanha a curva. As redes são treinadas de verdade (Adam, 600
epochs, 6 treinos em cache).

O número que fecha o argumento continua lá, mas agora é concreto: **o erro é
0,243 com 1, 2 ou 3 camadas** sem ativação — o mesmo valor, porque a melhor reta
é a mesma. Com ReLU cai para 0,059.

> **Regra que fica:** uma visualização precisa de uma **tarefa visível**. Se o
> aluno não consegue olhar a tela e dizer "está indo bem" ou "está indo mal" sem
> ler o painel, a viz está abstrata demais. Métrica derivada não substitui isso.

### 2. `DatasetMNIST` (A6) ganhou modo de desenho

Pedido do Alex: "deixa a gente desenhar os números aqui também". Feito — a viz
agora tem dois modos, **Exemplos** (o que já existia) e **Desenhe você**. No
segundo, o traço é feito num buffer de 280×280 e reduzido para 28×28 pela média
de cada bloco de 10×10, que é como uma imagem de verdade vira entrada de rede —
o cinza das bordas aparece sozinho. Funciona com mouse e com dedo (`pointer
events` + `touch-action: none`).

O painel conta quantos dos 784 pixels acenderam e quantos ficaram em tom
intermediário. E o texto aproveita para plantar o gancho da A9: você desenha uma
linha **contínua** e a rede recebe uma **fila de 784 números soltos**.

### 3. A7 — explicar melhor validação, under/overfitting e early stopping

Dois pedidos, os dois na Aula 7.

**No gráfico de complexidade:** o painel de erro × complexidade ganhou **três
faixas coloridas de diagnóstico** (underfitting / bom / overfitting) pintadas ao
fundo, e os rótulos do painel agora dizem de onde vem cada número ("treino (dado
que ele viu)" e "validação (dado novo)"), com uma nota fixa explicando a
diferença. O texto da aula ganhou uma seção inteira **antes** da viz explicando o
que cada curva mede, por que a de validação tem formato de **U** e por que a de
treino **não tem fundo nenhum** — que é o argumento de por que não se escolhe
modelo olhando o treino. Depois da viz, as três faixas são nomeadas uma a uma.

**No gráfico de dropout:** ele agora marca o **early stopping** — linha verde
vertical no epoch de menor erro de validação, com a região descartada sombreada,
e o painel dizendo em número quanto se ganharia entregando os pesos daquele
momento (0,044 melhor, sem dropout). A linha **se move** quando a taxa muda, o
que é a observação interessante. O texto virou uma seção `###` própria com o
procedimento em 4 passos — e com o alerta do passo 4, que é o que as pessoas
erram: parar no momento certo e mesmo assim entregar os pesos do fim.

A viz também passou para **largura cheia** (rede em cima, curvas embaixo) porque
na coluna estreita o rótulo do early stopping não cabia.

### 4. CNNs

A9 aprovada. A10 o Alex ainda não revisou.

## Correções pedidas pelo Alex depois de rever as três aulas

Todas feitas. Ficam registradas porque cada uma virou regra:

1. **`.destaque` removido do site.** O traço roxo embaixo de "mexa nos sliders de
   w e b" fazia o texto parecer clicável e competia com o `<Termo>`, que é o
   **único** elemento clicável da leitura. Instrução de "mexa aqui" agora é só
   negrito. A classe saiu do CSS e da convenção em [[Como Adicionar uma Aula]].
2. **Dígito em subscrito/expoente.** O "1" de $w_1$ saía 27% mais alto que o "n"
   de $w_n$ — algarismo é desenhado na altura de caixa alta, minúscula na altura
   de x. Regra nova em `global.css` mirando
   `.katex .mtight.mord:not(.mathnormal)`, que é o que sobra para os algarismos.
   Razão de altura caiu de 1,27 para 1,08.
3. **`RetaVsSigmoid` refeita.** Não conseguia mostrar a reta perdendo para a
   sigmoid: com 3 pontos de cada classe e um vão largo entre eles, a fronteira
   se deslocava mas nunca chegava a errar. Agora são **5 pontos da classe 0 e só
   2 da classe 1** — com a classe 1 em minoria, o outlier domina os poucos
   pontos dela e arrasta a fronteira de verdade. Arrastando de x=9 a x=24 a reta
   vai de **7/7 → 6/7 → 5/7** enquanto a sigmoid fica em 7/7, e os pontos que a
   reta erra ganham **anel vermelho**.
4. **`FronteiraDecisao`:** a fronteira não aparecia, nem no modo linear nem no
   polinomial — só havia o fundo colorido. Agora o contorno é desenhado
   explicitamente, varrendo o plano em coluna **e** em linha atrás da troca de
   lado em 0,5 (as duas passadas garantem contorno contínuo tanto onde ele é
   íngreme quanto onde é deitado). Funciona igual para a reta e para o círculo.
5. **"Respondidas 0/4"** com maiúscula no contador do `<QuizBloco>`.

## Bloco 2 — construído

✅ **A4, A5, A6 e A7 prontas**, e o trabalho seguiu até a A10 (ver o registro de
cada uma acima). O que sobrou de decisão está em [[Decisões Pendentes]].

Para cada aula: texto autoexplicativo (padrão das Aulas 1–3) + as visualizações
+ a receita de componentes acima. Os **erros comuns** de cada aula já estão no
roteiro e servem para duas coisas: viram `<Caixa tipo="erro">` e viram os
distratores dos quizzes.

### A4 — Do Neurônio à Rede · 2 visualizações ✅ FEITA

Ver o registro da Aula 4 acima.

### A5 — MLP + Backprop · 3 visualizações

Objetivo: como neurônios viram rede, como a camada de saída se adapta ao
problema, e como o erro volta ajustando os pesos.

3. **Diagrama de rede com o erro voltando** — pesos acendendo conforme a
   propagação vai de trás para frente.
4. **As três camadas de saída lado a lado** — linear, sigmoid e softmax, cada
   uma com um exemplo numérico.
5. **Softmax interativo** — mexer nos logits e ver as probabilidades se
   redistribuindo (mostra que não é normalização simples).

Erros comuns: confundir backprop com gradient descent (backprop **calcula** os
gradientes, o gradient descent **usa** eles); pôr ReLU ou softmax no lugar
errado; achar que softmax é só uma normalização.

### A6 — Treinando na Prática · 2 visualizações

Objetivo: ver uma rede treinando de verdade, entender o loop de treino, e
receber o MNIST. É a aula que **lança o desafio do MNIST** (só MLP, sem
convolução — intencional, volta na A9).

6. **Painel de curvas de loss por batch size e otimizador.** ✅ **Decidido pelo
   Alex** (agosto/2026): a viz **não** é sobre learning rates — isso repetiria a
   `LearningRates` da Aula 1. É sobre o que é novo na A6:
   - **batch size** (8 / 32 / 128 / 512): batch pequeno dá curva ruidosa e muitas
     iterações; batch grande dá curva lisa e lenta;
   - **otimizador** (SGD × momentum × Adam), na mesma tela.
   - E, **dentro do mesmo painel**, um contador ao vivo de
     **epoch × iteração × batch** — "batch 8 · 625 exemplos → 1 epoch = 79
     iterações" — recalculado quando o batch muda. Também decidido pelo Alex:
     ataca "a confusão mais comum do bloco" sem gastar uma viz inteira com ela.
7. **O dataset MNIST**, com exemplos difíceis e ambíguos — o 4 que parece 9.

Erros comuns: confundir epoch com iteração (→ o contador da viz 6, mais caixa e
quiz); achar que Adam salva learning rate ruim; começar o MNIST na véspera.

### A7 — Análise de Modelos · 2 visualizações

Objetivo: a aula de diagnóstico. Fecha o arco aberto na A2, quando o polinômio
de grau 15 passou por todos os pontos.

8. **Slider de complexidade** com as duas curvas de erro (treino e validação) se
   separando — e as learning curves dos três cenários para eles reconhecerem o
   padrão.
9. **Rede com e sem dropout** durante o treino.

Erros comuns: usar o teste para escolher hiperparâmetro (amarra com a caixa de
escala só-no-treino da A2); achar que qualquer gap treino/validação é
overfitting; empilhar todas as regularizações de uma vez sem saber qual ajudou.

### Ganchos entre aulas que já estão plantados

Vale honrá-los, porque as Aulas 1–3 prometem:

- **A2 → A7:** "guarde essa imagem do grau 15; ela volta com esse nome na Aula 7."
- **A2 → A5:** "sem notação vetorial, a Aula 5 vira um muro."
- **A2 → A7:** a caixa de erro sobre calcular a escala só no treino diz "volta
  com todo o rigor na Aula 7."
- **A1/A3 → A4:** o gradiente que morre nas pontas da sigmoid é a saturação.
