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

## Pendências antes de gerar os notebooks

- **Onde o notebook vive e como o trainee o abre:** GitHub Classroom, Colab, ou
  download direto de `public/notebooks/`? *(É o item 17 do
  [[Comparativo com o Site 2026.1]] — trava toda a Fase 4.)*
- **Lacunas ou completo?** Notebook com células a preencher (`# TODO`) ou
  já resolvido para ler e rodar?
- **Ambiente:** `uv` + `pyproject.toml` versionado, ou tudo no Colab sem setup?
  Se for local, precisa da trilha de setup de ambiente antes.
- **Confirmar a tabela de candidatos** acima, aula por aula.

Ver também [[Como Adicionar uma Aula]] · [[Status do Projeto]]
