---
aula: A9
bloco: Visão
status: pendente
tags: [aula, visao]
---

# Aula 09 — CNNs pt. 1

**Status: ⬜ pendente** (0/3) · slug `aula-09`

## Objetivo

Entender **por que MLP não serve pra imagem** e o que a convolução faz. (Abertura só
funciona porque eles fizeram o MNIST com MLP na A6 — usar isso.)

## Blocos (roteiro)

Por que a MLP é limitada (explosão de parâmetros; perda de estrutura espacial; sem
invariância a translação) → **convolução** (filtro que desliza; feature map; filtros
clássicos de borda; **os filtros são aprendidos, não escolhidos**; compartilhamento
de pesos resolve os 3 problemas) → **stride e padding** (efeito no tamanho da saída;
a conta) → **pooling** (max/average; invariância a pequenos deslocamentos).

## Visualizações a construir

1. **Janela deslizando** — o filtro varre a imagem e o **feature map se forma ao lado**,
   passo a passo, com controle de velocidade.
2. **Aplicador de filtro interativo** — escolher o kernel numa **grade 3×3 editável**
   e ver o efeito numa imagem real na hora; presets de borda vertical/horizontal e blur.
3. **Parâmetros MLP × CNN** para a mesma imagem — os números grandes.

## Erros comuns

- Achar que o filtro é escolhido à mão numa CNN.
- Errar a conta de tamanho de saída e travar montando arquitetura.
- Confundir stride com tamanho do kernel.
