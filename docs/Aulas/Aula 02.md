---
aula: A2
bloco: Fundamentos
status: completa
tags: [aula, fundamentos]
---

# Aula 02 — Escalando o Modelo

**Status: ✅ COMPLETA** (3/3) · slug `aula-02`
Componentes: `GrauPolinomio`, `NormalizacaoZigzag`, `HistogramasNormalizacao`.

## Objetivo

Sair do brinquedo de uma variável para algo parecido com o mundo real. Tema único:
**seu vetor de entrada pode ter o que você quiser dentro**.

## Blocos (roteiro)

Múltiplas features + **notação vetorial** (produto escalar — base obrigatória para
a A5) → gradient descent com várias features → **feature engineering** → **regressão
polinomial** ("linear é sobre os parâmetros, não sobre a curva") → **feature
scaling** (o vale esticado, o ziguezague) → convergência e o gancho do **polinômio
de grau 15** (volta na A7).

## Visualizações a construir

1. **Com e sem normalização** — mesma superfície; um botão **alterna** ziguezague
   vs descida reta (mais forte que dois gráficos lado a lado).
2. **Grau do polinômio** — slider de 1 a 15 sobre dados com ruído; deixar o grau
   15 (passando por todos os pontos) fácil de alcançar — é o gancho da A7.
3. **Histogramas** de um dataset antes e depois de normalizar.

## Erros comuns

- Achar que regressão polinomial é outro algoritmo.
- Aplicar scaling no conjunto inteiro em vez de só no treino.
- Achar que mais features é sempre melhor.
