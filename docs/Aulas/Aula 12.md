---
aula: A12
bloco: Linguagem
status: em-aberto
tags: [aula, linguagem, em-aberto]
---

# Aula 12 — LLMs

**Status: ⬜ pendente · ⚠️ CONTEÚDO EM ABERTO** (0/2) · slug `aula-12`

## ⚠️ Decisão pendente (até outubro)

Mesma situação da [[Aula 11]]: pode virar conteúdo aplicado ao Projeto 2. Não
investir pesado antes de confirmar.

## Objetivo (versão base)

Entender em alto nível **o que é um modelo de linguagem** e por que ele se comporta
como se comporta.

## Blocos (roteiro base)

**Tokenização** (texto vira números; token ≠ palavra; por que erra contando letra) →
**previsão do próximo token** (o único objetivo de treino; temperatura e amostragem)
→ **atenção vista de fora** (cada token olha os outros com pesos; manter no nível de
intuição — "no primeiro slide de matriz de atenção a aula quebra") → escala (pré-treino,
custo) → **alucinação e limites** (prevê texto plausível, não consulta fato; conecta
com a postura de revisor da A8).

## Visualizações candidatas

1. **Tokenizador interativo** — colar texto e ver a quebra em tokens.
2. **Próximo token + temperatura** — probabilidades e slider de temperatura.
3. Diagrama de **atenção** com um token de consulta e o leque de pesos.
