---
aula: A10
bloco: Visão
status: pendente
tags: [aula, visao]
---

# Aula 10 — CNNs pt. 2

**Status: ⬜ pendente** (0/2) · slug `aula-10`

## Objetivo

Montar uma arquitetura completa, entender **o que a rede aprende em cada
profundidade**, e saber usar **modelo pré-treinado**.

## Blocos (roteiro)

Arquitetura completa (conv→pool→...→flatten→dense→saída; nº de filtros cresce, resolução
cai; a MLP reaparece no fim) → **o que os filtros aprendem** (bordas → texturas/partes →
objetos; "o momento mais impressionante do semestre", escolher bem as imagens) →
panorama (LeNet, AlexNet, VGG, **ResNet**/skip connection — entender qual problema cada
uma resolveu) → **transfer learning** (congelar camadas iniciais, treinar o final;
fine-tuning; "borda é borda em qualquer domínio").

## Visualizações a construir

1. **Galeria de filtros aprendidos** por camada, de uma rede real.
2. **Mapa de ativação** sobreposto na imagem original — onde a rede está olhando.
3. (Ideia) diagrama comparando as arquiteturas, com a inovação de cada uma.

## Erros comuns

- Montar arquitetura sem calcular tamanho.
- Fine-tuning com learning rate alto destrói o que a rede pré-treinada sabia.
- Achar que precisa de dataset gigante mesmo com transfer learning.
