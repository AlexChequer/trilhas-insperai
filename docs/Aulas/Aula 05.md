---
aula: A5
bloco: Redes Neurais
status: pendente
tags: [aula, redes-neurais]
---

# Aula 05 — MLP + Backprop

**Status: ⬜ pendente** (0/3) · slug `aula-05`

## Objetivo

Como neurônios viram rede, como a **camada de saída** se adapta ao problema, e como
o erro **volta pela rede** ajustando os pesos.

## Blocos (roteiro)

Arquitetura (entrada/ocultas/saída; largura × profundidade; contagem de parâmetros
— prepara a A9) → **camada de saída** (o eixo: ativação oculta cria não-linearidade,
ativação de saída formata a resposta; regressão=1 neurônio sem ativação;
binária=sigmoid; multiclasse=softmax) → Playground (arquitetura, decorar ruído =
gancho A7) → **backprop** (cada peso recebe parcela da culpa; regra da cadeia sem
desenvolver a conta; forward produz previsão, backward produz correção).

## Visualizações a construir

1. **Erro propagando na rede** — diagrama com pesos que **acendem** conforme o erro
   volta; botão **avançar passo a passo** (não só animação corrida).
2. **Softmax interativo** — sliders para os logits; barras de probabilidade se
   redistribuindo, somando 1.
3. **Três camadas de saída** lado a lado, com um exemplo numérico de cada.

## Erros comuns

- Confundir backprop com gradient descent (backprop calcula os gradientes; o GD usa).
- Colocar ReLU ou softmax no lugar errado.
- Achar que softmax é só uma normalização simples.
