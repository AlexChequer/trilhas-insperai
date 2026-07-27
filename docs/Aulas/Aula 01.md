---
aula: A1
bloco: Fundamentos
status: completa
tags: [aula, fundamentos]
---

# Aula 01 — Intro a ML + Regressão Linear

**Status: ✅ COMPLETA** (4/4 visualizações) · slug `aula-01`

## Objetivo

O trainee sai tendo visto um **ciclo completo de aprendizado**: um modelo, uma
medida de erro, e o mecanismo que corrige o erro — tudo com **uma variável só**,
onde dá pra desenhar tudo no gráfico.

## Blocos (roteiro)

O que é ML → regressão linear com 1 variável (`w·x + b`) → erro de uma previsão
(resíduo) → tipos de erro (MAE/MSE/RMSE) → função de custo (a tigela) → gradient
descent → learning rate (1º hiperparâmetro).

## Visualizações (todas prontas)

1. **`ResiduosECusto.astro`** — dispersão preço × metragem; **sliders de w e b**
   ajustam a reta; resíduos (2 cores: previu a menos / a mais) e **custo** ao vivo;
   botão "mostrar melhor reta" (mínimos quadrados).
2. **`ErrosMaeMseRmse.astro`** — mesma dispersão com reta fixa; botão **liga/desliga
   outlier**; MAE/MSE/RMSE com fator ×N. Lição: MSE explode (×~21), MAE mal se move (×~2).
3. **`SuperficieCusto3D.astro`** — tigela `J(w,b)` em 3D (Plotly, dados
   padronizados p/ bowl redondo); descida do gradiente **passo a passo**; math LaTeX
   antes ($w \leftarrow w - \alpha\,\partial J/\partial w$).
4. **`LearningRates.astro`** — **erro × iteração** (curva de loss); 3 taxas:
   α=1,05 diverge / α=0,02 lento demais / α=0,2 bom.

## Erros comuns (do roteiro)

- Achar que "linear" exige dados numa reta perfeita.
- Confundir função de custo com erro de uma previsão só.
- Achar que o gradiente é a resposta, não a direção.

## Pendências / ideias futuras

- Alex sinalizou que **vai querer mudar mais coisa** aqui depois.

Ver [[Status do Projeto]] · [[Como Adicionar uma Visualização]].
