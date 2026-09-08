# Notebooks das Aulas

Decisão do Alex (agosto/2026): **toda aula ganha um notebook**. Esta nota guarda
o princípio e a linha de raciocínio, para que a geração dos notebooks depois já
comece com o rumo definido.

## O princípio

O notebook é a **aplicação prática e aplicada do que foi dado naquela aula** —
não um exercício avulso, não um desafio novo, não um assunto paralelo. Se a aula
explicou um conceito, o notebook mostra esse mesmo conceito **rodando em dado
real**, no mesmo exemplo que o Alex usou no projetor.

A regra de ouro: **um trainee que acabou de ler a página da aula deve reconhecer
o notebook imediatamente.** Mesmo problema, mesmo dataset, mesma história — agora
em código.

## A linha de raciocínio (exemplos do Alex)

Os dois exemplos abaixo foram os que o Alex deu para ilustrar o padrão. Não são
uma lista fechada: são o **modelo de pensamento** que vale para as 13 aulas.

**Aula 1 — Intro a ML + Regressão Linear**
California Housing. Olhar a relação entre **metragem (m²) e preço**, ajustar a
reta, ver o erro. É exatamente o exemplo do imóvel que a página da aula usa —
o notebook só troca o slider por código.

**Aula 2 — Escalando o Modelo**
Mesmo dataset, agora com `PolynomialFeatures`: mostrar como **aumentar o grau do
polinômio / o grau das features** captura relações que a reta não capturava e
**melhora o modelo** — até o ponto em que passa a piorar.

O que esses dois exemplos revelam sobre o padrão:

1. **Continuidade de dataset.** A2 continua no dado da A1. O trainee não gasta
   energia reaprendendo o contexto; gasta no conceito novo. Trocar de dataset
   só quando o conceito exigir (imagem, texto).
2. **O notebook persegue o efeito, não a API.** O ponto da A2 não é "como se
   chama a função do sklearn", é **ver o modelo melhorar quando o grau sobe**.
   A biblioteca é meio, não fim.
3. **O conceito da aula é o eixo.** Um notebook por aula, uma ideia central por
   notebook.
4. **Mostrar também onde quebra.** Grau alto demais → overfitting; escala errada
   → treino ruim. O contraste é o que fixa o conceito (ver
   [[Filosofia Pedagógica]]).

## Candidatos por aula

⚠️ **A confirmar com o Alex.** Abaixo, o que o exemplo do notebook seria se
seguíssemos o padrão acima — derivado do `roteiro.md`, não decidido ainda.

| Aula | Dataset / exemplo candidato | O efeito a ser visto |
|---|---|---|
| A1 · Regressão Linear | **California Housing** — m² × preço ✅ *(do Alex)* | ajustar a reta, medir o erro, ver o custo cair |
| A2 · Escalando o Modelo | **California Housing** + `PolynomialFeatures` ✅ *(do Alex)* | grau ↑ melhora — até começar a piorar; e o efeito da normalização |
| A3 · Classificação | dataset binário tabular (ex.: Breast Cancer) | sigmoid, fronteira de decisão, e por que acurácia engana |
| A4 · Do Neurônio à Rede | **espiral** (o mesmo do Playground) | sem ativação não separa, por mais fundo que fique |
| A5 · MLP + Backprop | espiral / dataset tabular | largura e profundidade mudando a fronteira |
| A6 · Treinando na Prática | **MNIST** (lançamento do desafio) | o loop de treino de ponta a ponta, otimizador e batch size |
| A7 · Análise de Modelos | MNIST | curvas de treino/validação: diagnosticar over e underfitting |
| A8 · Claude Code | — | aula prática de ferramenta; provavelmente sem notebook |
| A9 · CNNs pt. 1 | MNIST | o que uma convolução calcula, e por que a MLP falhava |
| A10 · CNNs pt. 2 | MNIST + modelo pré-treinado | montar a CNN e usar transfer learning |
| A11 · Embeddings | *em aberto* | distância entre vetores |
| A12 · LLMs | *em aberto* | — |
| A13 · RL | *em aberto* | — |

## Como o notebook conversa com a página da aula

- A página continua sendo o material principal: **texto autoexplicativo +
  visualização interativa**. O notebook não substitui nem repete a explicação.
- O notebook entra **ao final da aula**, como "agora faça isso rodar".
- A ideia é um bloco `<Pratica>` no fim de cada `.mdx` com o link (ver a Fase 4
  em [[Comparativo com o Site 2026.1]]).
- Provável ter **duas versões**: a do trainee (com lacunas) e o **gabarito** —
  é o que o site do Thomas/Gabriel faz e funciona bem.

## Decidido (10/8/2026), com as Aulas 1 e 2 no ar

O Alex fechou as pendências que estavam nesta nota, e os dois primeiros notebooks
existem: **[notebooks-insperai](https://github.com/AlexChequer/notebooks-insperai)**,
repositório próprio, público e só de leitura.

- **Repositório separado do site.** Notebook é artefato de execução, não de build;
  misturar com o Astro só faria o site carregar peso que ele não usa.
- **Formato: completo, com desafio no fim.** O corpo todo resolvido e rodando —
  é o que serve para consultar durante e depois da aula —, mais 3 exercícios no
  fim, cada um com a resposta dentro de um `<details>`. Nada de versão com
  lacunas: seriam dois arquivos por aula para manter em sincronia.
- **Colab é o caminho principal**, com badge no topo de cada notebook. Zero setup,
  abre no navegador, funciona no laptop da faculdade. Rodar local com `uv`
  continua documentado no README, para quem já fez a Aula 0.
- **As saídas vão commitadas.** O notebook precisa ser legível no GitHub sem rodar
  nada. Deixa o diff feio, e é um preço aceito de propósito.
- **O dado é commitado, não baixado.** `dados/imoveis.csv`, 44 KB. `fetch_openml`
  é lento, depende de rede e é exatamente o tipo de coisa que falha na hora da
  aula. A primeira célula tenta dois caminhos locais e cai na URL bruta do GitHub
  — que é o caso do Colab.

### O dataset mudou: Ames, não California Housing

A tabela de candidatos abaixo dizia California Housing para A1 e A2. **Ele não
serve**: as colunas são `MedInc`, `HouseAge`, `AveRooms`, `AveBedrms`,
`Population`, `AveOccup`, `Lat`, `Long` — **não existe metragem**. Como a página
da Aula 1 conta a história inteira em cima de "preço a partir da metragem", o
notebook contradiria a aula logo na primeira célula.

Trocado por **Ames Housing** (OpenML 42165), que tem `GrLivArea` de verdade:
1.460 imóveis, mediana de 136 m², preços de US$ 35 mil a 755 mil. A história da
página sobrevive intacta, e a A2 ganha features boas para o polinômio.

### O que os dois notebooks acabaram ensinando

Vale registrar duas coisas que só apareceram ao rodar o dado de verdade:

- **A Aula 1 termina num mistério, de propósito.** No dado cru, o gradient descent
  acha o `w` certo e deixa o `b` preso perto de zero (0,03 contra 18,57 do
  gabarito). Não é bug: é o mau condicionamento que a Aula 2 explica. A Aula 2
  abre resolvendo isso — padronizando, o mesmo código chega no gabarito exato em
  50 iterações, contra 300 que não chegam.
- **Um outlier se dilui em 1.460 pontos.** A viz da página usa uma dúzia de pontos
  e o MSE explode; com o conjunto inteiro ele sobe só 1,8×. O notebook mostra os
  dois casos e nomeia a lição — métrica de erro sempre depende do `n`.

### Como a página chama o notebook

Componente `<Pratica>` no fim do `.mdx`, com dois links: **Abrir no Colab**
(principal) e **ler no GitHub** (para consultar sem rodar). As URLs saem de
`src/data/notebooks.ts` — mesmo princípio do `rotas.ts`, o endereço num lugar só.

### A Aula 0 ganhou notebook (31/8/2026)

Fora do padrão dos outros, de propósito — e por isso registrado aqui. Ele é sobre
a **ferramenta**, não sobre ML: célula, kernel, ordem de execução, Restart & Run
All e como ler um traceback. Acumula três papéis: ensinar a mecânica, **testar o
ambiente** que o setup da A0 monta (a primeira célula imprime as versões), e dar
um gostinho de ML de ponta a ponta.

Duas quebras deliberadas do padrão desta nota:

- **O dado é sintético**, não vem de `dados/`. A A0 é lida por quem ainda não tem
  ambiente: não pode depender de arquivo nem de rede. E fabricar o dado dá a única
  coisa que dado real não dá — a resposta certa conhecida.
- **Ele não é o par de uma aula do arco**, porque a A0 também não é.

Para não pisar na Aula 1 (Ames, gradient descent na mão), o gostinho vai pelo
avesso: inventamos `nota = 4,0 + 0,8 × horas`, escondemos sob ruído, e o
`fit()` do sklearn recupera 4,23 e 0,73. O `fit()` fica declaradamente uma caixa
fechada — abri-la é a A1.

O raciocínio completo está no [[Log de Decisões]], em 31 de agosto de 2026.

### Um notebook de revisão, e o fim de "um por aula" (8/9/2026)

O Alex escreveu `trainees/aula-revisao-a1-a2.ipynb`: um laboratório de 15 minutos
que **fecha o Bloco 1**, para rodar em sala. Ele mora no fim da página da Aula 2,
num segundo `<Pratica titulo="Revisão · Aulas 1 e 2">`.

O que isso muda no princípio desta nota:

- **Uma página pode ter mais de um notebook.** O `<Pratica>` ganhou uma prop
  `titulo` (default "Agora rode") justamente para isso.
- **Notebook de revisão não segue a continuidade de dataset.** Os das A1 e A2
  rodam em Ames; este volta aos cinco apartamentos da lousa, porque com cinco
  pontos o trainee confere erro e erro² na tabela impressa — que é a conta que ele
  fez na mão. O invariante continua valendo para os notebooks *de aula*.
- **O que ele não faz:** não introduz nada. Revisita custo, gradient descent, taxa
  de aprendizado e padronização, e cada seção termina numa pergunta para discutir.

O raciocínio completo está no [[Log de Decisões]], em 8 de setembro de 2026.

### O que falta

- **Aulas 3 a 10.** A tabela de candidatos abaixo continua valendo como ponto de
  partida, com a ressalva do dataset acima. Confirmar aula por aula com o Alex.
- **A8 (Claude Code)** provavelmente não tem notebook — é aula de ferramenta.
- **A11 a A13** dependem do conteúdo do Bloco 5, que segue em aberto.

Ver também [[Como Adicionar uma Aula]] · [[Status do Projeto]]
