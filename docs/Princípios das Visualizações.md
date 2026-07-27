# Princípios das Visualizações

As regras de construção de cada visualização (do prompt original do professor).
Toda viz nova deve respeitá-las.

## 1. Uma coisa que se manipula, uma consequência que se vê

- Se o usuário não mexe em nada, é um slide — não precisa ser página interativa.
- Se mexe em cinco coisas ao mesmo tempo, ninguém isola o efeito. **Um controle
  principal, no máximo dois secundários.**

## 2. Estado inicial já mostra algo que faz sentido

Nada de tela vazia esperando o usuário descobrir o que fazer. Quem abre no celular
às 23h entende do que se trata em 5 segundos.

## 3. Número e desenho juntos

Se o slider muda o learning rate, o **valor** aparece, a **curva** muda e o
**custo final** aparece. Ver a curva sem o número deixa a intuição vaga.

## 4. Texto mínimo na página

Título curto e rótulos nos eixos bastam. Explicação longa é do professor e do
[[roteiro|roteiro.md]]. (A narrativa leve das páginas de aula é a exceção
consciente — ver [[Filosofia Pedagógica]].)

## 5. Projetor + celular

- Projetor: fonte grande, alto contraste, fundo claro (luz de sala mata fundo escuro).
- Celular: cabe sem rolagem horizontal, controles tocáveis (alvo ≥ 44px).

## 6. Português do Brasil em tudo

Rótulo de eixo, legenda, nome de botão — tudo pt-BR.

## Restrições técnicas herdadas

- **Gráfico 2D e animação:** Canvas puro (leve, controle total).
- **Superfície 3D:** Plotly (rotação e zoom de graça).
- Ver como isso vira código em [[Como Adicionar uma Visualização]].
