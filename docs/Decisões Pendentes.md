# Decisões Pendentes

Lista para o Alex consultar. Tudo o que dependia de escolha dele e **não** era
bloqueante já foi construído sob uma decisão explícita — está anotado aqui o que
foi decidido e por quê, para ele confirmar ou mandar mudar. Nada aqui impede o
site de funcionar; são pontos onde outra escolha produziria outro resultado.

Criada em 6 de agosto de 2026, ao terminar as Aulas 4 a 10.

---

## 🔴 Precisa de informação que só o Alex tem

### 1. Logística do desafio do MNIST (Aula 6)

O roteiro pede "prazo, formato de entrega, critério de avaliação" e um
leaderboard. **Não inventei nada disso** — data errada numa página que o aluno lê
sozinho é pior que ausência de data.

O que está no ar: uma `<Caixa tipo="atencao">` dizendo que prazo, entrega,
avaliação e leaderboard são combinados em aula e valem pelo comunicado oficial.
O que já está afirmado como definido: competição **individual** e **MLP apenas**.

**Decidir:** os quatro campos, e se a página deve passar a ser a fonte oficial
deles ou continuar remetendo ao comunicado.

### 2. O notebook de cada aula

[[Notebooks das Aulas]] registra a decisão de ter um notebook por aula, e o
repositório ainda não existe. A Aula 6 menciona "o notebook de partida sai junto
com o lançamento" e a Aula 8 seria o lugar natural para o "caso do erro sutil
documentado no repo".

**Decidir:** onde o repositório vai viver e se as páginas devem linkar para ele.

### 3. Visualizações de filtros reais (Aula 10)

O roteiro chama isto de "o momento mais impressionante do semestre": galeria de
filtros aprendidos por camada e mapa de ativação sobreposto, **de redes reais**.

Não dá para gerar isso honestamente aqui — as imagens vêm de redes treinadas em
datasets que não cabem no repositório. O que fiz: uma `<Caixa tipo="nota">` que
descreve a hierarquia (borda → textura → parte → objeto), explica **por que** ela
emerge (o campo receptivo, na `<Pergunta>` da aula) e aponta os acervos públicos
(Distill "Feature Visualization" e OpenAI Microscope).

**Decidir** entre: (a) fica como está, com as imagens projetadas em aula;
(b) baixar um punhado de imagens desses acervos para `public/` e embutir na
página, conferindo licença de cada uma; (c) gerar as nossas treinando uma CNN
pequena e exportando os filtros da primeira camada — factível, mas só a primeira
camada fica interessante.

---

## 🟡 Decidi por conta e vale confirmar

### 4. A Aula 8 ganhou uma visualização (não estava no plano)

O [[Status do Projeto]] previa A8 sem visualização. Mas o roteiro chama o "erro
sutil embutido" de **o momento mais importante da aula**, e isso é interativo por
natureza.

Construí a `RevisaoCodigo`: dois trechos de código de ML gerados por IA que
rodam, dão um número bonito e estão errados — um com vazamento do scaler antes do
split, outro com acurácia em dado 0,7% desbalanceado. O aluno **clica na linha**
que acha errada e recebe a explicação, inclusive das linhas que parecem
suspeitas e não são.

Isso mudou o total do arco de 30 para **31** visualizações.

**Confirmar:** manter, ou tirar e deixar a A8 sem viz como estava planejado.

### 5. A viz 8 da A7 absorveu as "learning curves dos três cenários"

O plano pedia duas coisas para a mesma visualização: o slider de complexidade
**e** as learning curves dos três cenários lado a lado.

Fiz uma coisa só: o slider de grau do polinômio, com o painel de diagnóstico
dizendo em qual dos três cenários você está ("Simples demais" / "No ponto" /
"Começando a decorar" / "Decorou o treino"). O aluno **produz** cada cenário em
vez de olhar três painéis prontos, e os três padrões de leitura ficaram no texto
da seção "Ler uma learning curve".

**Confirmar:** se ainda quiser os três painéis estáticos lado a lado, é uma viz a
mais na A7.

### 6. Os dígitos do MNIST são desenhados, não são o dataset real (Aula 6)

Não tenho o MNIST aqui. Os dígitos da `DatasetMNIST` são **desenhados por
código** em 28×28 com tons de cinza, e o slider de ambiguidade faz uma mistura
entre o dígito e o que mais se confunde com ele (4↔9, 3↔8, 1↔7...). No meio da
mistura nem uma pessoa decide — que é exatamente o ponto pedagógico.

A página **diz isso explicitamente**, numa `<Caixa tipo="nota">`: "são desenhados
aqui, não são amostras do dataset real".

**Confirmar:** aceitar assim, ou embutir ~20 amostras reais do MNIST em
`public/` quando o notebook existir.

### 7. A `TransferLearning` usa a contagem da VGG-16

Os números de parâmetros por bloco são os reais da VGG-16 (arquitetura pública,
contagem verificável). Não há "acurácia esperada" inventada na viz — só
parâmetros treináveis e o que isso implica em volume de dados.

**Confirmar:** VGG-16 é a referência certa, ou prefere ResNet-50 (mais atual, mas
a contagem por bloco é menos didática).

### 8. Momentum saiu do gráfico da A6, ficou só no texto

Testei SGD × momentum × Adam nas quatro escolhas de batch size. O momentum
oscilava feio em batch grande e a curva dele passava a mensagem errada ("o do
meio é o pior"). O gráfico ficou com **SGD × Adam**, que é o contraste que
importa, e o momentum está no texto como a **ideia** que leva ao Adam — com a
fórmula e a metáfora da bola pesada.

**Confirmar:** ok assim, ou vale forçar as três curvas.

---

## 🔵 Encomendado e ainda não feito

### 9. Refazer a home inteira

Pedido do Alex em 6/8/2026: **"a página principal (home) quero refazer inteira
depois"**. Nada foi tocado nela — o arco, os cards de bloco e o contador de
visualizações continuam como estavam.

Quando for a hora, três coisas já sabidas entram na conversa: se a **Aula 0**
ganha lugar lá (hoje só na sidebar), a seção de **links úteis e responsáveis**
que o [[Comparativo com o Site 2026.1]] lista, e o **rodapé**, que não existe.

---

## 🟢 Decisões que já foram tomadas e estão registradas

- **Viz 6 da A6** — batch size + otimizador, com o contador de epoch × iteração
  dentro do mesmo painel. Decidido pelo Alex em 6/8/2026. Não é sobre learning
  rates (isso repetiria a viz da Aula 1). Detalhe em [[Retrofit das Aulas]].
- **A distinção epoch × iteração** ganhou o contador ao vivo dentro da viz do
  batch size, em vez de uma visualização própria. Decidido pelo Alex na mesma
  conversa.
- **A Aula 0 é pré-requisito, fora do arco**, e o acesso é pela **sidebar** —
  sem card na home por enquanto. Decidido pelo Alex em 6/8/2026, encerrando a
  dúvida que o [[Comparativo com o Site 2026.1]] ainda listava.
- **O setup de ambiente mora dentro da Aula 0**, não é uma trilha de guias
  separada. Também dele, na mesma conversa: "a parte de setup em teoria seria
  junto com a aula 0". Está na seção "Montar o ambiente".
- **O conteúdo da Aula 0 ficou a meu critério** ("faz a aula zero como vc achar
  melhor e depois eu julgo") — entraram as três visualizações e o setup. Detalhe
  do que foi escolhido e por quê em [[Aula 0 e os Guias]]. **Falta o julgamento
  dele.**

---

## O que ainda não foi tocado

- **Aulas 11, 12 e 13** — o Bloco 5 (Linguagem) está marcado como **conteúdo em
  aberto** no próprio `roteiro.md`, e a A13 depende dele. Nada foi construído.
- A **Aula 0 já está feita**, setup incluído (ver [[Aula 0 e os Guias]]). Faltam
  as outras páginas fora do arco: recursos e projetos.
- As lacunas do [[Comparativo com o Site 2026.1]]: busca, tema escuro, rodapé.
