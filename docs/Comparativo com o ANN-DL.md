# Comparativo com o ANN-DL

Comparação de **conteúdo** com a eletiva de Artificial Neural Networks & Deep
Learning do Insper — [insper.github.io/ann-dl](https://insper.github.io/ann-dl/pt/2026.2/)
—, feita em 14/8/2026 a pedido do Alex, que cursou a matéria.

A pergunta desta nota é curricular: **que assuntos faltam no nosso arco, a ordem
faz sentido, e o conjunto é coerente?** Não é sobre o site dele (isso está no
apêndice, no fim).

> Não confundir com [[Comparativo com o Site 2026.1]], que compara com o material
> da própria entidade no semestre passado.

## Os dois arcos

| # | ANN-DL (24 aulas) | | Nosso — Trainees (13) |
| --- | --- | --- | --- |
| 1 | Concepts | | A1 Intro a ML + Regressão Linear |
| 2 | **Data** (tipos, qualidade, distribuições, desbalanceamento, split, vazamento) | | A2 Escalando o Modelo |
| 3 | Preprocessing (normalização × padronização) | | A3 Classificação |
| 4 | Neural Networks | | A4 Do Neurônio à Rede |
| 5 | Perceptron | | A5 MLP + Backprop |
| 6 | Multi-Layer Perceptron | | A6 Treinando na Prática |
| 7 | Optimization | | A7 Análise de Modelos |
| 8 | Regularization | | A8 Claude Code |
| 9 | **Metrics** (classificação, regressão, generativos, LLM) | | A9 CNNs pt. 1 |
| 10 | Deep Learning (dense, convolucional, dropout, **LSTM**) | | A10 CNNs pt. 2 |
| 11 | Convolutional | | A11 Embeddings *(em aberto)* |
| 12 | **Attention Mechanisms** | | A12 LLMs *(em aberto)* |
| 13 | Transformers | | A13 RL + Fechamento |
| 14 | Vision Transformers | | |
| 15 | Transfer Learning | | **Nosso — Agentes (7)** |
| 16 | LLMs | | A1 Embeddings, Transformers e GPTs |
| 17 | Generative Models | | A2 De Previsor a ChatBot |
| 18 | **VAE** | | A3 Tool Calling |
| 19 | **GAN** | | A4 Contexto e RAG |
| 20 | **CLIP** | | A5 Agente com MCP |
| 21 | **Stable Diffusion** | | A6 N8N *(em aberto)* |
| 22 | **Flow-Matching** | | A7 Prompt Engineering *(em aberto)* |
| 23 | **Diffusion Transformers** | | |
| 24 | **Autoregressive Generation** | | |

Em negrito, o que não existe em lugar nenhum nosso.

A espinha é a mesma, e é a canônica: fundamentos → redes → treino → visão →
linguagem. Isso é bom sinal — a ordem geral do nosso arco não precisa mudar.

## O que ele cobre e nós não

### 1. Dados como assunto próprio

A aula 2 dele é inteira sobre dados, com seis subpáginas: tipos, qualidade,
distribuições, desbalanceamento, separação treino/validação/teste e vazamento.

Conferi um por um no nosso conteúdo, em vez de supor:

| Tópico | No nosso arco |
| --- | --- |
| separação treino/val/teste | **bem coberto** — A7, e citado em 9 arquivos |
| vazamento de dados | **coberto** — A2, A7 e glossário |
| desbalanceamento | **coberto** — A3 (acurácia engana) e A8 |
| distribuições | parcial — só a A2, no contexto de escala |
| **qualidade / dados faltantes** | **ausente** |
| **tipos de dado / categórico / one-hot** | **ausente** |

Os dois últimos são buracos reais. **Nunca dizemos ao trainee o que fazer quando
uma coluna vem vazia, ou como transformar "bairro" em número.** São as primeiras
duas coisas que ele vai encontrar em qualquer dataset de verdade — inclusive no
desafio MNIST, e certamente num projeto próprio.

Vale notar de onde isso vem: o nosso arco entra em modelo na primeira aula e
nunca volta para o dado. É uma escolha defensável (a reta na Aula 1 é ótima
porta de entrada), mas deixa o trainee sem o vocabulário de preparação de dados.

### 2. Sequências: RNN e LSTM

**Ausente no nosso conteúdo inteiro** — nem trainees, nem agentes, nem glossário.

Isso cria uma incoerência concreta que já está no ar: a Aula 1 de agentes diz
*"Antes dos Transformers (2017), usávamos RNNs, que processam tokens um de cada
vez"*. O leitor que veio da trilha de trainees **nunca viu uma RNN** — a frase
compara o Transformer com algo que ele não conhece, e o argumento se perde.

É o buraco mais barato de fechar dos que encontrei, e o de melhor retorno: sem o
contraste "processa em sequência × processa tudo de uma vez", a atenção vira
mágica em vez de solução para um problema.

### 3. Modelos generativos — um terço do curso dele

Oito das 24 aulas: Generative Models, VAE, GAN, CLIP, Stable Diffusion,
Flow-Matching, Diffusion Transformers e Autoregressive Generation. **Nós temos
zero** — nenhuma menção a VAE, GAN, autoencoder ou difusão em nenhum arquivo.

Isso **não é um buraco na trilha de trainees**: seria fora de escopo para quem
está aprendendo o que é uma função de custo. É um buraco em outro lugar — e aqui
está o achado mais útil da comparação:

> **A trilha "ML/DL Avançado" existe registrada, com `blocos: []`, e nunca teve
> arco.** A segunda metade do ANN-DL é, essencialmente, o arco dela pronto.

Se essa trilha for acontecer, não é preciso inventar a sequência: generativos →
VAE → GAN → multimodal (CLIP) → difusão é a progressão que a área usa, e é a
dele.

### 4. Atenção nunca aparece para o trainee

Busquei "atenção" nas 10 aulas de trainees: **zero ocorrências**. Atenção só
existe na trilha de agentes.

Como as A11 (Embeddings) e A12 (LLMs) do arco de trainees ainda estão em aberto,
isso é uma decisão a tomar e não um erro — mas é preciso tomá-la: **não dá para
explicar LLM na A12 sem atenção**, e hoje nada no arco de trainees prepara isso.

### 5. Métricas de generativos e de LLM

Ele tem as quatro famílias (classificação, regressão, generativos, LLM); nós
temos as duas primeiras, distribuídas entre A1 (MAE/MSE/RMSE) e A3 (matriz de
confusão, precision, recall, F1). **Só vira buraco se cobrirmos generativos e
LLMs** — ou seja, depende da decisão da seção 3.

## Problemas de ordem e coerência no nosso arco

Estes não vieram do site dele: apareceram ao olhar o nosso arco inteiro de uma vez.

### 1. A duplicação anunciada entre trainees e agentes

A **A11 (Embeddings)** e a **A12 (LLMs)** de trainees estão em aberto. A **A1 de
agentes** já cobre embeddings — com espaço vetorial, similaridade do cosseno e
uma viz de 12 palavras — e também Transformers e GPTs. A **A2 de agentes** cobre
o que é um modelo de linguagem por dentro.

Ou seja: **quem escrever a A11 e a A12 vai reescrever, pior, o que já existe na
outra trilha.** É preciso decidir antes:

- ou trainees ganha uma versão curta e conceitual, e agentes é o aprofundamento
  (com um link explícito de uma para a outra);
- ou o Bloco 5 de trainees vira outra coisa, e quem quer linguagem faz a trilha
  de agentes.

É a incoerência mais urgente, porque ela custa trabalho jogado fora.

### 2. A8 (Claude Code) parte a progressão em duas

O arco vai redes neurais (A4–A7) → **Claude Code (A8)** → visão (A9–A10). É o
único bloco de ferramenta no meio de uma sequência técnica contínua.

Há argumento a favor: chega depois de a pessoa já ter escrito código suficiente
para ter o que revisar. E há argumento contra: interrompe o fio no pior momento,
entre "diagnostiquei meu modelo" e "agora imagens".

Não é erro — é uma escolha que vale ser consciente. O ANN-DL não tem análogo.

### 3. A13: reinforcement learning e fechamento na mesma aula

Uma aula para "o terceiro paradigma de aprendizado" **e** o fechamento do arco, e
nada antes prepara RL — o semestre inteiro é aprendizado supervisionado, como a
própria A1 avisa.

Ou é uma aula-panorama assumida (legítimo: "existe isto, e não vamos cobrir"), ou
está subdimensionada. Hoje o `desc` não deixa claro qual das duas.

### 4. Distribuições e escala aparecem antes de "o que é o seu dado"

A A2 fala de normalizar e padronizar — o *como* — sem que exista antes um lugar
onde se olhe a cara do dado. É o mesmo buraco da seção 1, visto pela ordem.

## Incoerências no arco dele (para não copiar)

A comparação vale nos dois sentidos:

1. **Convolucional aparece duas vezes.** É subpágina da aula 10 (Deep Learning →
   convolutional) *e* a aula 11 inteira (Convolutional Neural Networks).
2. **Métricas de LLM na aula 9; LLMs só na 16.** Ensina a medir o objeto sete
   aulas antes de apresentá-lo.
3. **"Neural Networks" (4) antes de "Perceptron" (5) e "MLP" (6)** — o todo antes
   da unidade. O nosso caminho (A4 "Do Neurônio à Rede" → A5 "MLP") vai da peça
   para o conjunto, que é mais fácil de seguir sem professor.

## O que fazer, em ordem de valor

| # | Ação | Depende de | Esforço |
| --- | --- | --- | --- |
| 1 | **Decidir a divisão A11/A12 × trilha de agentes** — antes que alguém escreva | decisão do Alex | nenhum (é decisão) |
| 2 | **RNN/LSTM em algum lugar** — nem que seja meia seção na A12, pelo contraste com a atenção | conteúdo novo | baixo |
| 3 | **Dados faltantes e variável categórica** — cabem como seção na A2, que já fala de features | conteúdo novo | baixo |
| 4 | **Definir se a A13 é panorama ou aula de verdade**, e ajustar o `desc` | decisão do Alex | nenhum |
| 5 | **Arco da trilha ML/DL Avançado**, usando a segunda metade do ANN-DL como esqueleto | decisão do Alex | alto |
| 6 | Métricas de generativos/LLM | depende do item 5 | médio |

Os itens 2 e 3 são os que eu consigo fazer sem informação nova — são conteúdo
técnico padrão, e as aulas que os receberiam já existem.

---

## Apêndice — diferenças de site

Levantadas antes de o objetivo ficar claro. Ficam registradas porque são reais,
mas não são o assunto desta nota.

**Ele tem e nós não:** calendário com datas; projetos com rubrica em pontos
(inclusive quais datasets zeram a nota); página de avaliação; bibliografia
acadêmica por aula; código Python executável na própria página (Pyodide);
versionamento por semestre (2025.2 segue no ar ao lado de 2026.2); exercício com
página de gabarito; subpáginas de aprofundamento.

**Nós temos e ele não:** 44 visualizações interativas contra algumas pontuais;
quiz que explica **toda** alternativa (o dele explica só a certa); glossário
clicável com 128 verbetes; texto que se explica sem professor; busca no site;
notebooks executados e commitados.

**Não copiar:** o site bilíngue (dobra o custo de escrita contra uma regra
registrada de tudo em pt-BR) e a densidade acadêmica sem intuição antes — que
funciona com prova marcada e afasta sem ela.

Ver também [[Comparativo com o Site 2026.1]] · [[Status do Projeto]]
