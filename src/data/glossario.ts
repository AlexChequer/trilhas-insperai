// Glossário único do site. O componente <Termo id="..."> puxa daqui, então o
// mesmo termo se explica igual em qualquer aula.
//
// Regra de escrita: uma ou duas frases, sem jargão que exija outro verbete, e
// sempre amarrando no exemplo do curso (o imóvel) quando ajudar.

export const GLOSSARIO: Record<string, string> = {
  modelo:
    "O formato que você chuta para a relação entre a entrada e a resposta. Na Aula 1 o modelo é uma reta; mais para frente vira uma rede neural.",

  parametro:
    "Um número que o modelo aprende sozinho durante o treino. Na reta, os parâmetros são a inclinação (w) e o deslocamento (b).",

  hiperparametro:
    "Um número que você escolhe antes de treinar e que o modelo não aprende sozinho — o learning rate é o primeiro do curso.",

  feature:
    "Cada informação de entrada que o modelo usa para prever. No exemplo do imóvel, a metragem é uma feature; bairro e número de quartos seriam outras.",

  dataset: "O conjunto de exemplos usado para treinar e avaliar o modelo.",

  "aprendizado-supervisionado":
    "Treinar mostrando exemplos que já vêm com a resposta certa. É supervisionado justamente porque alguém forneceu a resposta de cada exemplo.",

  generalizar:
    "Acertar em casos novos, que o modelo nunca viu. É o objetivo real do treino — decorar os exemplos não serve para nada.",

  treinar:
    "Ajustar os parâmetros do modelo até que ele erre o mínimo possível nos exemplos que você tem.",

  residuo:
    "A diferença entre o valor real e o valor previsto, lida na vertical. Positivo quer dizer que o modelo previu a menos; negativo, a mais.",

  custo:
    "Um número só que resume o quanto o modelo erra no conjunto inteiro. Treinar é procurar os parâmetros que deixam esse número o menor possível.",

  outlier:
    "Um ponto muito fora do padrão dos demais. Pode ser erro de medição ou um caso raro de verdade — e muda bastante algumas métricas de erro.",

  mae: "Erro absoluto médio: a média do tamanho dos resíduos, ignorando o sinal. Um erro de 10 pesa 10 vezes um erro de 1.",

  mse: "Erro quadrático médio: a média dos resíduos elevados ao quadrado. Um erro de 10 pesa 100 vezes um erro de 1, então erros grandes dominam a conta.",

  rmse:
    "A raiz quadrada do MSE. Serve para trazer o erro de volta à unidade original e virar um número que dá para interpretar.",

  derivada:
    "A inclinação de uma curva num ponto: quanto a saída muda quando você mexe um tiquinho na entrada.",

  gradiente:
    "O conjunto das derivadas em relação a cada parâmetro. Ele aponta para a direção de subida mais íngreme — por isso o treino anda no sentido contrário.",

  "gradient-descent":
    "O algoritmo que ajusta os parâmetros em passos pequenos na direção contrária ao gradiente, descendo até o fundo da função de custo.",

  "learning-rate":
    "O tamanho do passo do gradient descent. Grande demais faz o erro explodir; pequeno demais faz o treino demorar uma eternidade.",

  iteracao:
    "Uma rodada do treino: calcular o erro, calcular o gradiente e dar um passo corrigindo os parâmetros.",

  convergir:
    "Chegar e permanecer perto do melhor conjunto de parâmetros — na prática, o erro para de cair de forma significativa.",

  divergir:
    "O contrário de convergir: o erro cresce a cada iteração em vez de cair, em geral por causa de um learning rate grande demais.",

  // --- Aula 2 ---

  vetor:
    "Uma lista ordenada de números tratada como um objeto só. As features de um imóvel — metragem, quartos, idade — formam um vetor de entrada.",

  "produto-escalar":
    "A operação que multiplica cada número de um vetor pelo número na mesma posição do outro e soma tudo. É o que transforma a soma de pesos vezes features numa conta compacta.",

  "feature-engineering":
    "O trabalho de escolher, combinar e transformar as features que entram no modelo. É onde mora boa parte do julgamento de um projeto de ML.",

  overfitting:
    "Quando o modelo decora os exemplos de treino, ruído incluído, em vez de aprender a tendência. Erra pouco no que já viu e muito no que é novo.",

  underfitting:
    "O contrário do overfitting: o modelo é simples demais para o padrão dos dados e erra bastante até nos exemplos de treino.",

  normalizacao:
    "Espremer cada feature para um intervalo fixo, em geral de 0 a 1, para que features de escalas diferentes fiquem comparáveis.",

  padronizacao:
    "Recentrar cada feature para ter média 0 e desvio 1. Resolve o mesmo problema da normalização e costuma ser a escolha padrão.",

  // --- Aula 3 ---

  regressao:
    "O tipo de problema em que a resposta é um número contínuo: um preço, uma temperatura, um tempo de entrega.",

  classificacao:
    "O tipo de problema em que a resposta é uma classe, não um número: spam ou não, fraude ou não, benigno ou maligno.",

  sigmoid:
    "A função em formato de S que esmaga qualquer número real para o intervalo de 0 a 1. Valores muito negativos viram quase 0, muito positivos quase 1, e o zero vira 0,5.",

  "regressao-logistica":
    "O modelo que calcula w·x + b e passa o resultado pela sigmoid, devolvendo uma probabilidade. Apesar do nome, é um classificador, não uma regressão.",

  limiar:
    "O valor de corte que transforma a probabilidade em decisão: acima dele, classe 1. O padrão é 0,5, mas é uma escolha sua — mexer nele troca recall por precision.",

  "cross-entropy":
    "A função de custo da classificação. Ela pune com força a confiança errada: dizer “99% spam” para um e-mail legítimo custa muito mais caro do que dizer “60%” e errar.",

  "fronteira-decisao":
    "O lugar onde o modelo está em dúvida — onde a probabilidade cruza o limiar. Com duas features é uma reta; com features polinomiais, pode virar círculo ou curva.",

  "matriz-confusao":
    "A tabela que separa acertos e erros em quatro caixas: verdadeiros positivos, falsos positivos, falsos negativos e verdadeiros negativos. É a forma honesta de olhar um classificador.",

  acuracia:
    "A fração de exemplos que o modelo acertou. Engana em dados desbalanceados: num problema com 1% de fraude, dizer “não é fraude” para tudo acerta 99%.",

  precision:
    "Dos exemplos que o modelo chamou de positivo, quantos eram positivos de verdade. Mede o quanto se pode confiar num alarme.",

  recall:
    "Dos positivos que existiam, quantos o modelo pegou. Mede o quanto escapa.",

  f1: "Um resumo de precision e recall num número só. Útil como visão geral, mas engana justamente quando o problema pede priorizar uma das duas.",

  // --- Aula 4 ---

  neuronio:
    "A unidade de cálculo de uma rede: soma as entradas com pesos, adiciona o viés e passa o resultado por uma ativação. É a mesma conta da regressão linear, com uma função por cima.",

  perceptron:
    "O nome clássico de um neurônio isolado: soma ponderada das entradas mais um viés. Um perceptron com sigmoid é exatamente a regressão logística da Aula 3.",

  peso: "Cada número que multiplica uma entrada dentro de um neurônio — o w da conta w·x + b. É o que a rede aprende, junto com o viés.",

  vies: "O termo somado no fim da conta do neurônio (o b de w·x + b). Ele desloca o resultado para cima ou para baixo, independentemente das entradas.",

  ativacao:
    "A função aplicada ao resultado da soma ponderada dentro de um neurônio — sigmoid, tanh ou ReLU. É ela que quebra a linearidade e permite que a rede aprenda curvas.",

  relu: "A ativação padrão hoje: devolve zero para entrada negativa e a própria entrada para positiva. Simples, e não satura no lado positivo.",

  tanh: "Ativação em formato de S que esmaga qualquer número real entre −1 e 1. É a irmã da sigmoid, centrada no zero.",

  saturacao:
    "A região achatada nas pontas da sigmoid e da tanh, onde a curva fica quase horizontal. Ali a derivada é quase zero, o gradiente some e o neurônio praticamente para de aprender.",

  camada: "Um grupo de neurônios que recebe as mesmas entradas e calcula em paralelo. A saída de uma camada é a entrada da próxima.",

  "rede-neural":
    "Camadas de neurônios empilhadas: a saída de uma vira a entrada da seguinte. Sem ativação entre elas, a pilha inteira desaba numa única transformação linear.",

  "nao-linearidade":
    "Aquilo que uma reta não consegue fazer: dobrar, curvar, mudar de comportamento. Numa rede, quem fornece isso é a ativação — nunca o empilhamento de camadas.",

  // --- Aula 5 ---

  mlp: "Multilayer perceptron: a rede mais simples que existe — camadas de neurônios em sequência, cada neurônio ligado a todos os da camada seguinte.",

  "camada-oculta":
    "Qualquer camada entre a entrada e a saída. “Oculta” porque você não vê o que ela produz: os valores dela não são nem o dado que entrou nem a resposta que saiu.",

  arquitetura:
    "As escolhas de formato da rede: quantas camadas, quantos neurônios em cada uma, e qual ativação em cada lugar. É decisão sua, não algo que a rede aprende.",

  profundidade: "Quantas camadas a rede tem. Mais profundidade permite combinar padrões em vários níveis, um construído em cima do outro.",

  largura: "Quantos neurônios há numa camada. Mais largura permite guardar mais padrões diferentes no mesmo nível.",

  logit:
    "O número que sai de um neurônio da camada de saída antes de virar probabilidade — o z, cru, podendo ser qualquer valor real. É o que entra na sigmoid ou na softmax.",

  softmax:
    "A ativação da camada de saída em problemas de várias classes. Transforma um vetor de logits num vetor de probabilidades que somam 1, exponenciando cada um antes de dividir pela soma.",

  "forward-pass":
    "A passada para a frente: os dados entram, atravessam camada por camada e saem como previsão. É a metade do ciclo que produz a resposta.",

  backprop:
    "A passada para trás: partindo do erro na saída, calcula quanto cada peso da rede contribuiu para ele. Backprop calcula os gradientes; quem usa esses gradientes para mexer nos pesos é o gradient descent.",

  "regra-da-cadeia":
    "A regra de derivação que permite ir do erro na saída até um peso lá no começo, multiplicando as derivadas de cada etapa do caminho. É o mecanismo formal por trás do backprop.",

  // --- Aula 6 ---

  batch: "O lote de exemplos usado numa única atualização de pesos. Em vez de olhar o dataset inteiro de uma vez, o treino avança de lote em lote.",

  epoch:
    "Uma passada completa por todos os exemplos de treino. Com 640 exemplos e batch de 32, um epoch são 20 iterações — epoch e iteração não são a mesma coisa.",

  otimizador:
    "A regra que decide o passo a partir dos gradientes que o backprop calculou. SGD, momentum e Adam são otimizadores diferentes usando exatamente os mesmos gradientes.",

  sgd: "Stochastic gradient descent: o gradient descent da Aula 1 aplicado a lotes. Anda na direção contrária ao gradiente, com um learning rate único para todos os parâmetros.",

  momentum:
    "Acumular a direção dos passos anteriores para atravessar regiões planas sem perder embalo — como uma bola pesada descendo, que não para a cada irregularidade do terreno.",

  adam: "O otimizador padrão hoje. Junta momentum com um passo adaptado por parâmetro: quem recebe gradiente grande e instável anda menos, quem recebe gradiente pequeno e constante anda mais.",

  // --- Aula 7 ---

  validacao:
    "O conjunto separado do treino em que você mede para tomar decisões: escolher arquitetura, hiperparâmetro, quando parar. O modelo nunca treina nele.",

  teste:
    "O conjunto guardado para medir uma única vez, no fim de tudo. Assim que você usa o teste para escolher alguma coisa, ele deixa de ser teste e vira uma segunda validação.",

  bias:
    "O erro que vem de o modelo ser simples demais para o padrão que existe nos dados. Bias alto é underfitting: ele erra do mesmo jeito no treino e na validação.",

  variance:
    "O erro que vem de o modelo ser sensível demais ao conjunto específico em que treinou. Variance alta é overfitting: vai bem no treino e mal em dado novo.",

  regularizacao:
    "Qualquer coisa que se acrescenta ao treino para o modelo não decorar: penalizar peso grande, desligar neurônios, parar mais cedo. Todas trocam um pouco de erro no treino por menos erro na validação.",

  lambda:
    "O hiperparâmetro que controla a força da regularização L1 ou L2. Zero é não regularizar; alto demais achata os pesos e leva a underfitting.",

  dropout:
    "Desligar neurônios ao acaso a cada passagem do treino, para a rede não depender de nenhum caminho específico. Na hora de prever, a rede volta inteira.",

  "early-stopping":
    "Parar o treino quando o erro de validação para de melhorar, mesmo que o de treino ainda esteja caindo. É a regularização mais barata que existe.",

  "vazamento-de-dados":
    "Quando informação do conjunto de validação ou de teste entra no treino sem querer — por exemplo, calcular a média para normalizar usando o dataset inteiro. O resultado fica bom demais e não se sustenta na vida real.",

  "learning-curve":
    "O gráfico do erro de treino e do de validação lado a lado ao longo do treino. O formato dos dois juntos é a ferramenta de diagnóstico mais prática: altos e juntos é underfitting, separados é overfitting.",

  // --- Aula 8 ---

  "janela-de-contexto":
    "Tudo o que o modelo enxerga numa conversa: instruções, arquivos, mensagens anteriores. O que está fora dela simplesmente não existe para ele.",

  spec: "A descrição em português, escrita antes do prompt, do que você quer: o objetivo, as restrições e o critério de pronto. Quem não consegue escrever a spec não consegue revisar o resultado.",

  "fluxo-agentico":
    "Delegar uma tarefa de várias etapas — ler o projeto, propor, editar arquivos, rodar testes — em vez de pedir um trecho de código isolado.",

  // --- Aula 9 ---

  convolucao:
    "A operação em que uma janelinha de pesos desliza pela imagem, multiplicando e somando em cada posição. O resultado diz onde aquele padrão apareceu.",

  filtro:
    "A janelinha de pesos da convolução, também chamada de kernel. Numa CNN ela não é escolhida à mão: é aprendida pelo treino, como qualquer outro peso.",

  "feature-map":
    "A saída de um filtro: um mapa que acende onde o padrão procurado apareceu na imagem. Um filtro por mapa.",

  stride: "De quantos em quantos pixels a janela do filtro anda. Stride 1 anda de um em um; stride 2 pula, e a saída sai com metade do tamanho.",

  padding:
    "Uma moldura de zeros em volta da imagem, para a janela também poder se centrar nos pixels da borda. Sem ela, a saída encolhe e a borda é subamostrada.",

  pooling:
    "Reduzir o tamanho do mapa resumindo cada bloco de pixels num valor só — o máximo, no max pooling. Diminui a dimensão e dá tolerância a pequenos deslocamentos.",

  "compartilhamento-de-pesos":
    "O mesmo filtro é aplicado na imagem inteira, em vez de haver um peso por posição. É o que faz a CNN ter poucos parâmetros e reconhecer um padrão em qualquer lugar da imagem.",

  "invariancia-a-translacao":
    "Reconhecer o mesmo padrão independentemente de onde ele esteja na imagem. Uma MLP não tem isso; a convolução tem, porque o filtro percorre tudo.",

  // --- Aula 10 ---

  "transfer-learning":
    "Aproveitar uma rede já treinada em milhões de imagens, trocando só o final pelo seu problema. Funciona porque as camadas iniciais aprendem borda e textura, que servem em qualquer domínio.",

  "fine-tuning":
    "Descongelar parte das camadas da rede pré-treinada e treiná-las junto, com learning rate baixo. Learning rate alto aqui destrói o que a rede já sabia.",

  "skip-connection":
    "Um atalho que deixa o sinal pular camadas e ser somado adiante. É a ideia da ResNet, e foi ela que tornou possível treinar redes muito profundas.",

  flatten:
    "Esticar o mapa de features tridimensional num vetor, para entregá-lo à parte densa da rede. É onde a MLP reaparece, no fim da CNN.",

  "campo-receptivo":
    "O pedaço da imagem original que influencia um neurônio. Na primeira camada convolucional é só 3×3 pixels; a cada camada ele cresce, e é por isso que a hierarquia vai de borda a objeto.",
};
