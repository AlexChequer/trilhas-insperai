---
aula: A7
bloco: Redes Neurais
status: pendente
tags: [aula, redes-neurais]
---

# Aula 07 — Análise de Modelos

**Status: ✅ pronta** (3/3) · slug `aula-07`

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

## Viz das curvas de treino e validação (13/10/2026)

`CurvasTreinoValidacao` entrou em "O treino-base em 30 epochs" e serve também
aos três cenários (é a visualização 2 da lista acima, numa viz só, não lado a
lado: o controle principal troca o cenário). O que se mexe: o cenário
(treino-base 50 epochs · treinou pouco · overfitting · bom), loss ou acurácia,
e o slider "até o epoch N" com ▶. O que se vê: as duas curvas, a faixa entre
elas, o marcador da menor loss de validação e, no painel, acurácias, distância
em pontos e um diagnóstico por cenário.

Os dados são da **base de churn de telecom** que a aula usa (IBM Telco, 7.032
clientes, 46 entradas, treino 4.500 / validação 1.250 / teste 1.282, 26,6%
cancelaram; `Trilha de Trainees/aula-07/dados/churn.json`), embutidos no
componente, e não do MNIST, para não dar spoiler do desafio do Projeto 1. Os
cenários são os mesmos do deck (`demos/curvas.js`): `base` (46-128-2, 50
epochs, menor loss de validação 0,425 no epoch 7), `sub_taxa` (learning rate
0,00001), `l2_0` (512 neurônios, 100 epochs) e `l2_0.01` (512 + L2). Os
parágrafos da página antes e depois da viz citam esses números. Ver
[[Log de Decisões]].
