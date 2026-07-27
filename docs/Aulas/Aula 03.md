---
aula: A3
bloco: Fundamentos
status: pendente
tags: [aula, fundamentos]
---

# Aula 03 — Classificação

**Status: ⬜ pendente** (0/3) · slug `aula-03`

## Objetivo

O segundo tipo de problema supervisionado e como se mede acerto quando a saída é
uma **classe**, não um número.

## Blocos (roteiro)

Por que regressão linear quebra em classificação → **regressão logística e sigmoid**
(limiar de 0.5 é escolha, não lei) → **fronteira de decisão** (curva com features
polinomiais — conecta com A2) → **cross-entropy** (por que MSE não serve) →
**métricas** (armadilha da acurácia, matriz de confusão, precision × recall, F1).

## Visualizações a construir

1. **Reta × sigmoid** — prever 0 e 1, com um **outlier arrastável**: ao arrastá-lo
   pra longe, a reta gira e erra, a sigmoid aguenta.
2. **Fronteira de decisão** — plano 2D com botão para **ligar features polinomiais**
   e ver a fronteira virar curva.
3. **Matriz de confusão** — slider de **limiar**; precision e recall se movem em
   **direções opostas**. (A que mais rende — o trade-off só fica óbvio vendo os
   dois números brigando.)

## Erros comuns

- Achar que regressão logística é regressão (o nome atrapalha — dizer em voz alta).
- Usar acurácia em dado desbalanceado.
- Confundir precision e recall.
