# Programa de Trainee InsperAI — Roteiro das Aulas

**2º semestre de 2026 · 13 aulas · 90 minutos cada · terças e quintas**

Este documento é a base de conteúdo para o repositório de aulas. Cada aula tem objetivo, pré-requisitos, roteiro com blocos de tempo, sugestões de material visual, erros comuns e o que o trainee deve saber ao sair.

> **Nota sobre as provinhas:** as provinhas semanais acontecem no começo da primeira aula da semana e não consomem os 90 minutos. Cada aula abaixo é tempo limpo de conteúdo.

> **Pendência:** o material de Python self-service e os atendimentos de programação não ocupam slot de aula. Precisam estar prontos e divulgados antes da A1.

---

## Mapa geral

| # | Aula | Bloco | Marco |
|---|------|-------|-------|
| A1 | Intro a ML + Regressão Linear | Fundamentos | |
| A2 | Escalando o Modelo | Fundamentos | |
| A3 | Classificação | Fundamentos | |
| A4 | Do Neurônio à Rede | Redes Neurais | |
| A5 | MLP + Backprop | Redes Neurais | |
| A6 | Treinando na Prática | Redes Neurais | **Lança o MNIST** |
| A7 | Análise de Modelos | Redes Neurais | |
| A8 | Claude Code | Ferramentas | |
| A9 | CNNs pt. 1 | Visão | |
| A10 | CNNs pt. 2 | Visão | |
| A11 | Embeddings *(em aberto)* | Linguagem | |
| A12 | LLMs *(em aberto)* | Linguagem | |
| A13 | Reinforcement Learning + Fechamento | Fronteira | **Lança o Projeto 2** |

---

# Bloco 1 — Fundamentos

## A1. Intro a ML + Regressão Linear

**Objetivo:** o trainee sai tendo visto um ciclo completo de aprendizado. Um modelo, uma medida de erro, e o mecanismo que corrige o erro. Tudo com uma variável só, que é o caso onde dá pra desenhar tudo no gráfico.

**Pré-requisitos:** nenhum além de cálculo básico. Ninguém precisa saber programar.

### Roteiro

**O que é ML (10 min)**
- Programar regras à mão contra aprender regras a partir de dados. Use um exemplo onde escrever as regras é claramente inviável, tipo reconhecer um gato numa foto.
- Aprendizado supervisionado: você tem exemplos com a resposta certa e quer generalizar pra casos novos.
- Deixe claro que o semestre inteiro é supervisionado, até a A13.

**Regressão linear com uma variável (15 min)**
- O modelo como uma reta: previsão = w·x + b.
- O que w e b fazem geometricamente. Inclinação e deslocamento.
- "Ajustar o modelo" quer dizer escolher w e b. Nada mais que isso.
- Exemplo concreto o semestre inteiro pode se apoiar em: prever preço de imóvel a partir de metragem funciona bem.

**Erro de uma previsão (10 min)**
- O resíduo: a distância vertical entre o ponto real e a reta.
- Por que a distância vertical e não a perpendicular. Você está errando na previsão, não na posição.
- Erro positivo e negativo, e por que somar os dois direto dá zero em reta ruim.

**Tipos de erro (15 min)**
- MAE: valor absoluto. Trata todo erro proporcionalmente ao tamanho.
- MSE: eleva ao quadrado. Erro de 10 pesa 100 vezes mais que erro de 1.
- RMSE: raiz do MSE, volta pra unidade original do problema. Erro em reais, não em reais ao quadrado.
- A escolha importa: MSE castiga outlier com força, MAE é mais robusto quando o dado tem ruído grosso. Se um erro grande é catastrófico no seu problema, MSE. Se é só mais um erro, MAE.

**Função de custo (15 min)**
- Agregar o erro de todos os pontos numa medida só, que é o que você quer minimizar.
- A superfície de custo: pra cada par (w, b) existe um valor de custo. Isso desenha uma tigela.
- O ponto mais baixo da tigela é o modelo ótimo. Achar ele é o problema inteiro.

**Gradient descent (20 min)**
- O gradiente aponta pra direção de subida mais íngreme. Anda no sentido contrário e você desce.
- O passo iterativo: calcula gradiente, dá um passo, repete.
- A metáfora da bola descendo a tigela funciona bem, desde que você mostre a superfície antes.

**Learning rate (5 min)**
- Alto demais: pula o fundo e diverge.
- Baixo demais: converge, mas leva uma eternidade.
- Primeiro hiperparâmetro do semestre. Vale nomear como "hiperparâmetro" já aqui.

### Material visual sugerido
- Gráfico interativo de dispersão com uma reta que o usuário arrasta, mostrando os resíduos em tempo real e o custo total atualizando.
- Comparação lado a lado de MAE, MSE e RMSE no mesmo conjunto de dados, com um outlier que você pode ligar e desligar.
- Superfície de custo 3D navegável, com o caminho do gradient descent desenhado por cima.
- Animação de três learning rates diferentes na mesma superfície: um que diverge, um lento, um bom.

### Erros comuns
- Achar que "linear" significa que os dados precisam ser uma reta perfeita.
- Confundir função de custo com erro de uma previsão só.
- Achar que o gradiente é a resposta em vez de ser a direção.

### O trainee sai sabendo
Explicar o que é um modelo, o que é ajustar um modelo, por que existe função de custo, e como o gradient descent encontra os parâmetros.

---

## A2. Escalando o Modelo

**Objetivo:** sair do brinquedo de uma variável e chegar em algo que se parece com o mundo real. A aula inteira tem um tema só: seu vetor de entrada pode ter o que você quiser dentro.

**Pré-requisitos:** A1 completa.

### Roteiro

**Múltiplas features e notação vetorial (25 min)**
- Na prática ninguém prevê preço só com metragem. Entram quartos, idade, bairro.
- O modelo vira w₁x₁ + w₂x₂ + ... + b. Escrever isso por extenso não escala.
- w e x como vetores, e a previsão como produto escalar. Compacto e é assim que todo mundo escreve.
- Bloco mais importante da aula pro futuro: sem notação vetorial, a A5 vira um muro.

**Gradient descent com múltiplas features (10 min)**
- É a mesma coisa. Cada parâmetro tem sua derivada parcial, todos atualizam juntos.
- A tigela agora vive em mais dimensões e não dá pra desenhar. A intuição continua valendo.

**Feature engineering (15 min)**
- O que faz uma feature ser boa: ela precisa carregar informação sobre o que você quer prever.
- Combinar features: área é comprimento vezes largura, e às vezes a combinação é melhor que as partes.
- Transformar features: log de renda costuma funcionar melhor que renda crua.
- Feature ruim não é neutra, ela atrapalha.

**Regressão polinomial (15 min)**
- E se a relação não for reta? Crie x², x³ como features novas e rode a mesma regressão linear.
- O ponto que faz a ficha cair: "linear" é sobre os parâmetros, não sobre a curva. Você não mudou o algoritmo, mudou a entrada.
- Regressão polinomial é feature engineering. É o mesmo assunto do bloco anterior.

**Feature scaling (20 min)**
- Metragem vai de 30 a 500, número de quartos vai de 1 a 5. O gradiente sente essas escalas de formas completamente diferentes.
- A superfície de custo vira um vale esticado, e o gradient descent ziguezagueia em vez de descer direto.
- Pior: se você criou x³ no bloco anterior, a escala explodiu.
- Normalização e padronização, e quando usar cada uma.

**Convergência e o gancho (5 min)**
- Como saber que o gradient descent terminou: o custo para de cair de forma significativa.
- Feche mostrando um polinômio de grau 15 passando por todos os pontos de treino. Peça pra guardarem a imagem. Isso volta na A7.

### Material visual sugerido
- Mesma superfície de custo com e sem scaling, mostrando o ziguezague contra a descida direta.
- Slider de grau do polinômio, de 1 a 15, sobre um conjunto de dados com ruído.
- Antes e depois de normalizar um dataset real, com histogramas.

### Erros comuns
- Achar que regressão polinomial é um algoritmo diferente.
- Aplicar scaling calculado no conjunto inteiro em vez de só no treino. Vale mencionar mesmo antes de train/test aparecer formalmente.
- Achar que mais features é sempre melhor.

### O trainee sai sabendo
Montar um modelo com várias entradas, criar features novas, e explicar por que escala atrapalha o treino.

---

## A3. Classificação

**Objetivo:** o segundo tipo de problema supervisionado, e como se mede acerto quando a saída é uma classe e não um número.

**Pré-requisitos:** A1 e A2.

### Roteiro

**Por que regressão linear quebra em classificação (15 min)**
- Tente prever 0 ou 1 com uma reta. A reta passa de 1 e vai abaixo de 0, e não existe "1.7 de spam".
- Um único ponto distante muda a inclinação inteira e move a fronteira.
- Precisa de um modelo que devolva probabilidade.

**Regressão logística e sigmoid (20 min)**
- A sigmoid esmaga qualquer número real entre 0 e 1.
- Você calcula w·x + b igual antes, e passa pela sigmoid. A saída vira probabilidade.
- Limiar de decisão: acima de 0.5 é classe 1. E que 0.5 é uma escolha, não uma lei.

**Fronteira de decisão (15 min)**
- Onde o modelo está em dúvida, a fronteira. Em duas features é uma reta, em três é um plano.
- Com features polinomiais a fronteira vira curva. Conecta direto com a A2.

**Cross-entropy (20 min)**
- Por que MSE não serve: com sigmoid, o MSE cria uma superfície de custo cheia de mínimos locais, e o gradiente morre nas pontas.
- Cross-entropy pune com força a confiança errada. Dizer 0.99 pra algo que era 0 custa muito caro.
- O formato do custo pra cada classe, visualmente. Não precisa derivar.

**Métricas (20 min)**
- A armadilha da acurácia: num problema com 1% de fraude, dizer "não é fraude" sempre acerta 99%.
- Matriz de confusão, e nomear os quatro quadrantes.
- Precision e recall, e o trade-off entre elas. Diagnóstico de câncer quer recall alto, filtro de spam quer precision alta.
- F1 como resumo, e quando ele engana.

### Material visual sugerido
- Comparação lado a lado: reta contra sigmoid tentando prever 0 e 1, com um outlier arrastável.
- Fronteira de decisão desenhada num plano 2D, com botão pra ligar features polinomiais.
- Matriz de confusão interativa com um slider de limiar, mostrando precision e recall se movendo em direções opostas.

### Erros comuns
- Achar que regressão logística é regressão. O nome atrapalha, vale falar isso em voz alta.
- Usar acurácia em dado desbalanceado.
- Confundir precision e recall. A matriz de confusão na frente resolve.

### O trainee sai sabendo
Montar um classificador binário, explicar por que a função de custo muda, e escolher a métrica certa pro problema.

---

# Bloco 2 — Redes Neurais

## A4. Do Neurônio à Rede

**Objetivo:** entender o que é um neurônio, o que é uma ativação, e por que empilhar camadas sem ativação não serve pra nada.

**Pré-requisitos:** A1 a A3. A notação vetorial da A2 é obrigatória aqui.

### Roteiro

**O perceptron (20 min)**
- Soma ponderada das entradas mais um viés. É a mesma conta da regressão linear.
- A analogia com o neurônio biológico, sem forçar demais.
- Um neurônio com sigmoid é exatamente a regressão logística da A3. Vale dizer isso claramente, porque desmistifica.

**Ativações (25 min)**
- Sigmoid: esmaga entre 0 e 1. Já conhecida da A3, mas ali era a resposta final e aqui está no meio da rede.
- Tanh: esmaga entre -1 e 1, centrada no zero.
- ReLU: zera o negativo, deixa o positivo passar. Simples e é o padrão hoje.
- Por que ReLU ganhou: sigmoid e tanh saturam nas pontas, o gradiente vira quase zero e o treino trava. ReLU não tem esse problema no lado positivo.

**Por que precisa de não-linearidade (30 min)**
- Empilhe duas camadas lineares sem ativação. O resultado é uma transformação linear. Você gastou parâmetros e não ganhou nada.
- Demonstre isso algebricamente de forma curta, e depois visualmente.
- A ativação é o que permite que a rede aprenda fronteiras curvas.
- Este é o conceito central da aula. Se sobrar tempo, gaste aqui.

**TensorFlow Playground ao vivo (15 min)**
- Pegue o dataset da espiral. Troque a ativação pra linear e adicione camadas. Mostre que nunca separa, por mais fundo que fique.
- Volte pra ReLU e mostre a espiral sendo resolvida.
- É a prova visual do bloco anterior, e vale mais que qualquer slide.

### Material visual sugerido
- Gráficos das três ativações lado a lado, com as zonas de saturação destacadas.
- Animação mostrando duas camadas lineares colapsando numa só.
- Link direto pro Playground já configurado no dataset da espiral com ativação linear.

### Erros comuns
- Achar que a ativação é a saída final da rede.
- Achar que mais camadas resolve qualquer coisa, inclusive falta de não-linearidade.
- Não perceber que o perceptron é a mesma conta que eles já conhecem.

### O trainee sai sabendo
Explicar o que um neurônio calcula, o papel de cada ativação, e por que rede sem ativação não funciona.

---

## A5. MLP + Backprop

**Objetivo:** entender como neurônios viram uma rede, como a camada de saída se adapta ao problema, e como o erro volta pela rede ajustando os pesos.

**Pré-requisitos:** A4, especialmente a parte de não-linearidade.

### Roteiro

**Arquitetura (20 min)**
- Camada de entrada, camadas ocultas, camada de saída.
- Largura contra profundidade. Mais neurônios por camada ou mais camadas, e o que cada escolha tende a fazer.
- Contagem de parâmetros. Uma rede pequena já tem milhares, e isso prepara o terreno pra A9.

**Camada de saída (20 min)**
- O eixo que organiza tudo: **ativação de camada oculta cria não-linearidade, ativação de saída formata a resposta.**
- Regressão: um neurônio, sem ativação. A saída é o número.
- Classificação binária: um neurônio com sigmoid. Já conhecido da A3.
- Classificação multiclasse: dez neurônios com softmax. As saídas somam 1 e viram uma distribuição de probabilidade entre as classes.
- Softmax como generalização da sigmoid, e por que ReLU nunca vai no final.
- Este bloco é o que faz a camada de saída do MNIST fazer sentido na A6.

**TensorFlow Playground: arquitetura (20 min)**
- Mexa em profundidade e largura no mesmo dataset e veja a fronteira ficar mais complexa.
- Mostre uma rede grande demais decorando o ruído. É o segundo gancho pra A7.

**Backprop (30 min)**
- O problema: você sabe o erro no final, mas precisa ajustar pesos que estão lá atrás.
- A ideia central: cada peso recebe uma parcela da culpa, proporcional a quanto ele contribuiu pro erro.
- O erro caminhando de trás pra frente, camada por camada.
- Mencione que o mecanismo formal é a regra da cadeia, mas não desenvolva a conta. Visual e intuição resolvem melhor aqui.
- Forward pass produz previsão, backward pass produz correção, e o ciclo repete.

### Material visual sugerido
- Diagrama de rede com pesos que acendem conforme o erro se propaga de trás pra frente.
- Comparação das três camadas de saída lado a lado com um exemplo numérico de cada.
- Softmax interativo: mexer nos logits e ver as probabilidades se redistribuindo.

### Erros comuns
- Achar que backprop é o mesmo que gradient descent. Backprop calcula os gradientes, o gradient descent usa eles pra atualizar.
- Colocar ReLU ou softmax no lugar errado.
- Achar que softmax é só uma normalização simples.

### O trainee sai sabendo
Desenhar a arquitetura certa pro problema, escolher a ativação de saída, e explicar em palavras como o erro volta pela rede.

---

## A6. Treinando na Prática

**Objetivo:** ver uma rede treinando de verdade, entender o loop de treino, e receber o MNIST.

**Pré-requisitos:** A4 e A5.

### Roteiro

**Loop de treino (20 min)**
- Epoch, batch e iteração, e a diferença entre os três. É a confusão mais comum do bloco.
- Por que treinar em lotes em vez do dataset inteiro de uma vez: memória e velocidade.
- Batch size como hiperparâmetro, e o que muda entre batch pequeno e grande.

**Otimizadores (15 min)**
- SGD puro, que é o que eles já conhecem da A1 aplicado a lotes.
- O problema: learning rate fixo pra todos os parâmetros, em todas as fases do treino.
- Momentum como ideia: acumular direção pra atravessar regiões planas.
- Adam: adapta o passo por parâmetro. É o padrão e é o que eles vão usar.
- A regra prática: comece com Adam. Se quiser entender por que funciona, aí sim vá atrás.

**Demo ao vivo (30 min)**
- Uma MLP treinando de verdade, com a curva de loss caindo na tela.
- Suba muito o learning rate e mostre divergindo. Baixe demais e mostre travando.
- Mude o batch size e mostre o efeito no ruído da curva.
- O objetivo é que eles vejam a relação entre hiperparâmetro e comportamento, não que decorem código.

**Lançamento do MNIST (25 min)**
- O problema: classificar dígitos de 0 a 9.
- A restrição: só MLP. Nada de convolução. Isso é intencional e volta na A9.
- Formato de competição individual com leaderboard.
- Prazo, formato de entrega, critério de avaliação.
- O recado sobre uso de IA: podem usar, e a provinha semanal e a apresentação é que medem se entenderam. Vale dizer isso explicitamente, sem rodeio.

### Material visual sugerido
- Notebook comentado do treino, pronto pra rodar, no repo da aula.
- Painel comparando curvas de loss com diferentes learning rates.
- Visualização do dataset MNIST, com exemplos difíceis e ambíguos.

### Erros comuns
- Confundir epoch com iteração.
- Achar que Adam resolve learning rate ruim. Ajuda, mas não salva.
- Começar o MNIST na véspera do prazo.

### O trainee sai sabendo
Explicar o loop de treino, escolher otimizador e batch size, e ter o MNIST rodando.

---

## A7. Análise de Modelos

**Objetivo:** a aula de diagnóstico. Como saber se o modelo está bom, o que está errado quando não está, e o que fazer a respeito.

**Pré-requisitos:** A6, e idealmente já ter batido a cabeça no MNIST alguns dias.

### Roteiro

**Overfitting e underfitting (25 min)**
- Retome o polinômio de grau 15 da A2 e a rede grande demais da A5.
- Underfitting: o modelo é simples demais pro padrão que existe nos dados.
- Overfitting: o modelo decorou o treino, inclusive o ruído.
- Bias e variance como os dois lados, e por que reduzir um costuma aumentar o outro.

**Train, validation e test (20 min)**
- Por que medir no dado de treino é se enganar.
- Por que dois conjuntos não bastam: se você escolhe hiperparâmetro olhando o teste, você contaminou o teste.
- Validação é onde você toma decisões, teste é onde você mede uma vez no fim.
- Vazamento de dados, com exemplos concretos de como acontece sem querer.

**Learning curves (15 min)**
- Curvas de treino e validação no mesmo gráfico.
- As duas altas e juntas: underfitting.
- Treino baixa e validação alta, com o gap crescendo: overfitting.
- As duas baixas e juntas: está bom.
- É a ferramenta de diagnóstico mais prática da aula e a que eles mais vão usar no MNIST.

**Regularização L1 e L2 (20 min)**
- A ideia: penalizar peso grande dentro da própria função de custo.
- L2 encolhe todos os pesos suavemente. L1 zera alguns de vez, o que dá seleção de feature de graça.
- Lambda como hiperparâmetro, e o que acontece nos dois extremos.

**Dropout e early stopping (10 min)**
- Dropout: desligar neurônios aleatoriamente durante o treino, pra rede não depender de nenhum caminho específico.
- Early stopping: parar quando a validação para de melhorar, mesmo que o treino ainda esteja caindo.
- São os dois mais baratos de aplicar e os que mais rendem no MNIST.

### Material visual sugerido
- Painel com slider de complexidade mostrando as duas curvas de erro se separando.
- Learning curves reais dos três cenários, lado a lado, pra eles reconhecerem o padrão.
- Comparação visual de uma rede com e sem dropout durante o treino.

### Erros comuns
- Usar o conjunto de teste pra escolher hiperparâmetro.
- Achar que qualquer gap entre treino e validação é overfitting. Um gap pequeno é normal.
- Empilhar todas as regularizações de uma vez e não saber qual ajudou.

### O trainee sai sabendo
Diagnosticar overfitting e underfitting a partir de curvas, separar dados corretamente, e escolher a regularização certa.

---

# Bloco 3 — Ferramentas

## A8. Claude Code

**Objetivo:** ganhar a ferramenta e a postura de revisor junto. Aula prática.

**Pré-requisitos:** A7. Idealmente eles já sabem quais são as decisões de um projeto de ML, porque a aula inteira depende de distinguir decisão de execução.

### Roteiro

**Prompt engineering (20 min)**
- Contexto antes de pedido. O modelo não sabe o que você não contou.
- Ser específico sobre formato, restrição e critério de sucesso.
- Dar exemplo do que você quer funciona melhor que descrever.
- Pedir raciocínio antes da resposta em problema difícil.
- O que não funciona: prompt mágico, pedido vago, esperar que ele adivinhe o contexto do projeto.

**Janela de contexto (10 min)**
- O modelo só enxerga o que está na janela. Fora dela, não existe.
- Por que conversa longa degrada, e por que recomeçar às vezes é melhor que insistir.
- Como isso muda o jeito de trabalhar: sessões curtas e focadas.

**Fluxo de dev agêntico (20 min)**
- A diferença entre pedir um trecho de código e delegar uma tarefa com várias etapas.
- **A regra da aula: você pode delegar a escrita, não pode delegar a decisão.** Arquitetura, hiperparâmetro, diagnóstico e o que fazer quando não converge continuam sendo de vocês.
- Spec antes de prompt: escrever em português o que você quer, com precisão, antes de pedir. Quem não consegue descrever não consegue revisar.
- **O momento mais importante da aula:** peça um modelo com um erro sutil embutido, tipo vazamento do teste no treino ou métrica errada pro problema. Mostre a ferramenta entregando isso com total confiança, código rodando, acurácia linda. É o que ensina a revisar.

**Construção ao vivo (40 min)**
- Construir algo pequeno do zero, com a turma dirigindo.
- Escolha um problema onde as decisões apareçam, não só a digitação.
- Pare em cada decisão e pergunte pra turma o que fazer antes de pedir pro modelo.

### Material visual sugerido
- Exemplos lado a lado de prompt ruim e prompt bom pro mesmo objetivo.
- O caso do erro sutil, documentado no repo, com o código e a explicação do que estava errado.
- Checklist de revisão pra código de ML gerado por IA.

### Erros comuns
- Aceitar código que roda sem checar se ele faz o que deveria.
- Delegar a decisão junto com a escrita.
- Conversa gigante em vez de recomeçar limpo.

### O trainee sai sabendo
Usar a ferramenta bem e revisar o que ela produz. E saber quais decisões continuam sendo dele.

---

# Bloco 4 — Visão

## A9. CNNs pt. 1

**Objetivo:** entender por que MLP não serve pra imagem e o que a convolução faz.

**Pré-requisitos:** A5, A6, e ter passado pelo MNIST.

### Roteiro

**Por que a MLP de vocês é limitada (25 min)**
- Esta abertura só funciona porque eles fizeram o MNIST com MLP. Use isso.
- Explosão de parâmetros: uma imagem de 28x28 vira 784 entradas. Numa imagem de verdade, de 224x224 colorida, são mais de 150 mil, e a primeira camada sozinha já tem milhões de pesos.
- Perda de estrutura espacial: achatar a imagem num vetor joga fora a informação de que dois pixels eram vizinhos.
- Sem invariância a translação: desloque o dígito dois pixels e a MLP vê uma entrada completamente diferente.

**Convolução (35 min)**
- O filtro como uma janelinha de pesos que desliza pela imagem.
- A operação em si, passo a passo, num exemplo pequeno.
- O feature map como resultado: onde no imagem aquele padrão apareceu.
- Filtros clássicos feitos à mão: detector de borda vertical, horizontal. Mostre o resultado numa imagem real.
- O pulo do gato: na CNN os filtros não são escolhidos, são aprendidos.
- Compartilhamento de pesos: o mesmo filtro é usado na imagem inteira, e é isso que resolve os três problemas do bloco anterior.

**Stride e padding (15 min)**
- Stride: de quantos em quantos pixels a janela anda, e o efeito no tamanho da saída.
- Padding: por que a borda é subamostrada e como o zero padding resolve.
- A conta do tamanho de saída, que eles vão precisar pra montar arquitetura.

**Pooling (15 min)**
- Max pooling e average pooling.
- Reduzir dimensão mantendo o que importa.
- Como o pooling contribui pra invariância a pequenos deslocamentos.

### Material visual sugerido
- Animação da janela deslizando com o feature map se formando ao lado.
- Aplicador de filtro interativo: escolher o kernel e ver o efeito numa imagem real na hora.
- Comparação de contagem de parâmetros entre MLP e CNN pra mesma imagem.

### Erros comuns
- Achar que o filtro é escolhido à mão numa CNN.
- Errar a conta de tamanho de saída e travar montando arquitetura.
- Confundir stride com tamanho do kernel.

### O trainee sai sabendo
Explicar por que MLP falha em imagem, o que uma convolução calcula, e como stride, padding e pooling afetam a saída.

---

## A10. CNNs pt. 2

**Objetivo:** montar uma arquitetura completa, entender o que a rede aprende em cada profundidade, e saber usar modelo pré-treinado.

**Pré-requisitos:** A9.

### Roteiro

**Arquitetura completa (25 min)**
- O padrão: conv, pool, conv, pool, flatten, dense, saída.
- Por que o número de filtros costuma crescer conforme a profundidade e a resolução espacial diminui.
- Onde a MLP reaparece no final, e por quê. Conecta com a A5.
- Montar uma arquitetura pro MNIST junto com a turma, decidindo cada camada.

**O que os filtros aprendem (25 min)**
- Primeira camada: bordas, cores, gradientes simples.
- Camadas do meio: texturas, padrões, partes de objeto.
- Camadas profundas: objetos inteiros e conceitos.
- Mostre visualizações de filtros e ativações de redes treinadas de verdade.
- Este é o momento mais impressionante do semestre. Vale investir tempo e escolher bem as imagens.

**Panorama de arquiteturas (20 min)**
- LeNet: a original, pra dígitos.
- AlexNet: o que mudou o campo em 2012, e por que GPU importou.
- VGG: profundidade com blocos simples e repetidos.
- ResNet: o problema de treinar rede muito funda, e a skip connection como solução. A ideia de deixar o sinal pular camadas.
- Não precisa decorar arquitetura, precisa entender qual problema cada uma resolveu.

**Transfer learning (20 min)**
- Ninguém treina do zero na prática. Você pega uma rede treinada em milhões de imagens.
- Congelar as camadas iniciais e treinar só o final.
- Fine-tuning como o passo seguinte.
- Por que funciona: borda é borda em qualquer domínio.
- É a técnica mais útil da aula pra quem for fazer projeto com imagem.

### Material visual sugerido
- Galeria de filtros aprendidos por camada, de uma rede real.
- Mapa de ativação sobreposto na imagem original, mostrando onde a rede está olhando.
- Diagrama comparando as arquiteturas do panorama, com a inovação de cada uma destacada.

### Erros comuns
- Montar arquitetura sem calcular tamanho e descobrir na hora do erro.
- Fazer fine-tuning com learning rate alto e destruir o que a rede pré-treinada já sabia.
- Achar que precisa de dataset gigante mesmo usando transfer learning.

### O trainee sai sabendo
Montar uma CNN, ler o que a rede aprendeu, e usar modelo pré-treinado no próprio problema.

---

# Bloco 5 — Linguagem *(conteúdo em aberto)*

> ## ⚠️ Estas duas aulas estão em aberto
>
> **O conteúdo abaixo é a versão base, não a versão final.** A trilha de Agentes já cobre embeddings, transformers, GPTs, tool calling, RAG e agentes com MCP em profundidade, com notebooks próprios. Isso significa que A11 e A12 são as únicas aulas do programa que duplicam material de trilha.
>
> **A ideia em avaliação** é trocar parte deste conteúdo por temas aplicados que sirvam direto ao Projeto 2, como redes siamesas, detecção de anomalia, sistemas de recomendação, ou outra técnica que renda projeto bom. Embeddings continuaria como base, já que rede siamesa depende do conceito de espaço vetorial e similaridade.
>
> **Decisão pendente.** Vale decidir isso em outubro, quando já der pra saber se as CNNs esticaram e quantos trainees seguiram pra qual lado.

## A11. Embeddings

**Objetivo:** entender representação vetorial e o que significa distância entre vetores.

### Roteiro base

**De one-hot pra vetor denso (20 min)**
- One-hot: um vetor gigante com um 1 e o resto zero. Não escala e não carrega significado.
- Todo par de palavras fica à mesma distância, o que é claramente errado.
- Vetor denso: poucas dimensões, valores contínuos, aprendidos a partir de dados.

**Espaço latente e similaridade (25 min)**
- Cada dimensão captura alguma característica, e ninguém definiu quais.
- Similaridade por cosseno, e por que ângulo funciona melhor que distância euclidiana aqui.
- Visualização de embeddings projetados em 2D, com os agrupamentos aparecendo.

**Word2vec e as analogias (20 min)**
- A ideia de aprender representação a partir do contexto onde a palavra aparece.
- A aritmética de vetores: rei menos homem mais mulher se aproxima de rainha.
- Onde a analogia funciona e onde ela quebra. Vale mostrar os dois.

**Embedding de qualquer coisa (25 min)**
- Imagem, documento, produto, usuário. Qualquer coisa vira vetor.
- Busca vetorial: encontrar o item mais próximo num espaço de milhões.
- RAG apresentado como conceito, sem entrar em implementação.

### Material visual sugerido
- Projeção 2D navegável de embeddings de palavras, com os agrupamentos visíveis.
- Calculadora de analogia interativa.
- Demo de busca por similaridade num conjunto pequeno.

---

## A12. LLMs

**Objetivo:** entender em alto nível o que é um modelo de linguagem e por que ele se comporta como se comporta.

### Roteiro base

**Tokenização (20 min)**
- Texto vira números antes de qualquer coisa.
- Token não é palavra. Subpalavras, e por que isso resolve vocabulário infinito.
- Por que o modelo erra contando letra, e por que língua que não seja inglês gasta mais token.

**Previsão do próximo token (25 min)**
- O objetivo de treino é só esse: dado o que veio antes, qual o próximo token.
- Como isso vira conversa, código e resumo sem nunca ter sido o objetivo explícito.
- Temperatura e amostragem: por que a mesma pergunta dá respostas diferentes.

**Atenção vista de fora (20 min)**
- Cada token olha pros outros com pesos diferentes.
- Como isso resolve dependência longa, que era o problema das arquiteturas anteriores.
- Mantenha no nível de intuição. No primeiro slide de matriz de atenção a aula quebra.

**Escala (15 min)**
- Pré-treino em quantidade absurda de texto.
- Por que tamanho de modelo e de dado importam tanto.
- Ordem de grandeza de custo, pra dar noção real.

**Alucinação e limites (10 min)**
- Por que o modelo inventa com confiança: ele está prevendo texto plausível, não consultando fato.
- Onde confiar e onde verificar. Conecta direto com a postura de revisor da A8.

### Material visual sugerido
- Tokenizador interativo, colando texto e vendo a quebra.
- Visualização de próximo token com as probabilidades, e slider de temperatura.
- Diagrama de atenção com um token de consulta e o leque de pesos.

---

# Bloco 6 — Fronteira

## A13. Reinforcement Learning + Fechamento

**Objetivo:** entender o terceiro paradigma de aprendizado, fechar o semestre e lançar o Projeto 2.

**Pré-requisitos:** todas.

### Roteiro

**Agente, ambiente, recompensa (20 min)**
- Por que isso não é supervisionado: não existe resposta certa por exemplo, existe consequência.
- Agente, ambiente, estado, ação, recompensa, e o loop entre eles.
- Recompensa atrasada: a jogada que ganhou a partida pode ter sido vinte lances atrás.
- Exemplos concretos: jogo, robótica, otimização de sistema.

**Exploração contra explotação (10 min)**
- Usar o que já se sabe que funciona ou testar algo novo.
- Epsilon-greedy como a estratégia mais simples.
- A analogia do restaurante conhecido contra o restaurante novo funciona bem.

**Política e Q-learning (20 min)**
- Política: a função que mapeia estado em ação.
- Valor de um par estado-ação, e a ideia de aprender esse valor por tentativa.
- A tabela Q num ambiente pequeno, e por que ela não escala. Rede neural entra aí, o que fecha o arco com o resto do semestre.
- Se o tempo apertar, este é o bloco que encolhe primeiro. A intuição de política sobrevive sem Q-learning.

**RLHF (10 min)**
- O LLM cru prevê texto plausível, não texto útil.
- Humano compara respostas, isso vira modelo de recompensa, o modelo de linguagem é ajustado contra ele.
- É a ponte que explica por que o ChatGPT responde do jeito que responde. Conecta A12 com esta aula.

**Lançamento do Projeto 2 (20 min)**
- Tema livre dentro do que foi visto no semestre.
- Formação de grupos, prazo, formato de entrega e critério de avaliação.
- Novembro inteiro disponível, com atendimento.
- Vale mostrar dois ou três exemplos de escopo bom e um de escopo grande demais.

**Fechamento (10 min)**
- Retrospectiva do arco: de uma reta em duas dimensões até agente e linguagem.
- Deploy como o que falta: modelo treinado parado num notebook não serve pra nada. É a ponte pra trilha de Agentes e Deployment.
- Como funciona a passagem pra membro e o que são as duas trilhas.

### Material visual sugerido
- Ambiente simples de RL rodando, tipo um agente aprendendo a atravessar uma grade.
- Diagrama do loop agente-ambiente.
- Linha do tempo do semestre inteiro, mostrando como cada aula se conecta.

### Erros comuns
- Achar que RL é supervisionado com passos extras.
- Escolher escopo grande demais no Projeto 2.

---

## Pendências

- **Calendário.** Confirmar o calendário acadêmico de 2026 e as semanas de prova dos dois grupos de curso antes de fixar datas. O calendário usado numa sessão anterior era de outro ano.
- **A11 e A12.** Decidir até outubro se ficam como estão ou viram conteúdo aplicado pro Projeto 2.
- **Material de Python.** Precisa estar publicado antes da A1, junto com o horário dos atendimentos.
- **Slot de folga.** Sobra uma aula de reserva nas 14 disponíveis. A candidata mais provável a usar é uma terceira aula de CNN.
