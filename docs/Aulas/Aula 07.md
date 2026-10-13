---
aula: A7
bloco: Redes Neurais
status: pendente
tags: [aula, redes-neurais]
---

# Aula 07 — Análise de Modelos

**Status: ⬜ pendente** (0/2) · slug `aula-07`

## Objetivo

A aula de **diagnóstico**: saber se o modelo está bom, o que está errado quando não
está, e o que fazer. (Idealmente eles já bateram a cabeça no MNIST alguns dias.)

## Blocos (roteiro)

Overfitting × underfitting (retoma o polinômio grau 15 da A2 e a rede grande da A5;
bias × variance) → **train / validation / test** (validação decide, teste mede uma
vez; vazamento de dados) → **learning curves** (as 3 imagens: ambas altas =
underfitting; gap crescente = overfitting; ambas baixas = ok) → **regularização L1/L2**
(L2 encolhe, L1 zera → seleção de feature) → **dropout e early stopping** (os mais
baratos e que mais rendem no MNIST).

## Visualizações a construir

1. **Slider de complexidade** — as duas curvas (treino e validação) se **separando**.
   A imagem canônica de overfitting; precisa ficar boa.
2. **Learning curves dos 3 cenários** lado a lado, para reconhecer o padrão de olho.
3. (Ideia) rede com e sem dropout durante o treino.

## Erros comuns

- Usar o conjunto de teste para escolher hiperparâmetro.
- Achar que qualquer gap treino/validação é overfitting (um gap pequeno é normal).
- Empilhar todas as regularizações e não saber qual ajudou.

## Roteiro detalhado (13/10/2026)

O Alex escreveu o roteiro detalhado da aula (PDF "A7 — Análise de Modelos",
7/10/2026) e a página passou a seguir a ordem dele: overfitting e underfitting
→ treino, validação e teste → curvas de aprendizado → L1 e L2 → dropout e early
stopping → do sintoma ao remédio. Os números de MNIST da página são os medidos
no roteiro (mesma rede e divisão da A6: 50.000 de treino, 10.000 de validação).
As duas visualizações continuam as mesmas. Erros comuns que entraram como
caixa, além dos três acima: diminuir a rede para combater overfitting,
regularizar demais, esquecer o `modelo.eval()`, early stopping sem restaurar os
melhores pesos. Detalhes e adaptações em [[Log de Decisões]].
