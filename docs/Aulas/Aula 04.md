---
aula: A4
bloco: Redes Neurais
status: pendente
tags: [aula, redes-neurais]
---

# Aula 04 — Do Neurônio à Rede

**Status: ⬜ pendente** (0/2) · slug `aula-04`

## Objetivo

Entender o que é um neurônio, o que é uma ativação, e por que **empilhar camadas
sem ativação não serve pra nada**. (Notação vetorial da A2 é obrigatória aqui.)

## Blocos (roteiro)

O **perceptron** (mesma conta da regressão linear; neurônio com sigmoid = regressão
logística da A3) → **ativações** (sigmoid, tanh, ReLU; por que ReLU ganhou:
saturação mata o gradiente) → **por que precisa de não-linearidade** (duas camadas
lineares colapsam numa só — conceito central) → **TensorFlow Playground ao vivo**
(espiral: linear nunca separa, ReLU resolve).

## Visualizações a construir

1. **Três ativações lado a lado** — sigmoid, tanh, ReLU com as **zonas de saturação**
   destacadas; hover mostra o valor da **derivada** (o que explica a saturação).
2. **Duas camadas lineares colapsando** — animação virando uma só transformação.
3. (Material) link direto pro Playground na espiral com ativação linear.

## Erros comuns

- Achar que a ativação é a saída final da rede.
- Achar que mais camadas resolve falta de não-linearidade.
- Não perceber que o perceptron é a conta que já conhecem.
