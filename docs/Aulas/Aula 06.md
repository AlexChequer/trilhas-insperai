---
aula: A6
bloco: Redes Neurais
status: pendente
tags: [aula, redes-neurais, marco]
---

# Aula 06 — Treinando na Prática

**Status: ⬜ pendente** (0/2) · slug `aula-06` · **Marco: lança o MNIST**

## Objetivo

Ver uma rede treinando de verdade, entender o **loop de treino**, e receber o MNIST.

## Blocos (roteiro)

Loop de treino (**epoch × batch × iteração** — a confusão mais comum) → otimizadores
(SGD → momentum → **Adam** é o padrão; "comece com Adam") → demo ao vivo (loss caindo;
subir/baixar learning rate; mudar batch size) → **lançamento do MNIST** (classificar
dígitos 0–9, **só MLP** — intencional, volta na A9; competição individual com
leaderboard; uso de IA liberado, a provinha e a apresentação medem entendimento).

## Visualizações a construir

1. **Curvas de loss por learning rate** — painel comparando; dado **pré-computado**
   (não precisa treinar no navegador).
2. **Visualizador do MNIST** — explorar exemplos, achar casos ambíguos/difíceis.
3. (Material) notebook comentado do treino no repo da aula.

## Erros comuns

- Confundir epoch com iteração.
- Achar que Adam resolve learning rate ruim.
- Começar o MNIST na véspera do prazo.
