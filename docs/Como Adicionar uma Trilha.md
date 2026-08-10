# Como Adicionar uma Trilha

Uma trilha é um curso da entidade. Hoje são três: **Trainees** e **Deploy de
Agentes** (as duas no ar) e **ML/DL Avançado** (em breve). Todas vivem no mesmo repositório
e no mesmo site — ver [[Log de Decisões]] para o porquê.

## Regra que governa tudo

**Uma trilha está no ar quando tem `blocos`.** Não existe campo `ativa` para
esquecer de virar: com o arco vazio ela aparece como "em breve" no hub e na barra
do topo, e **não gera nenhuma página** — logo, não há como criar um link para o
vazio.

## Passo a passo

1. **Registrar a trilha** em `src/data/trilhas/<id>.ts`:

```ts
import type { Trilha } from "./tipos";

export const MINHA: Trilha = {
  id: "minha-trilha",           // vira o primeiro segmento da URL: /minha-trilha/…
  nome: "Nome Completo",         // barra do topo e <title>
  curto: "Curto",                // seletor de trilhas e selo da busca
  chamada: "Uma <em>manchete</em>.",  // aceita <em> para o destaque
  sub: "O parágrafo abaixo da manchete.",
  resumo: "Uma linha, para o card do hub.",
  publico: "Para quem é — é o que separa uma trilha da outra no hub.",
  ritmo: "13 aulas · uma por semana",
  mecanica: [],                  // os números do "Como funciona"; vazio = seção some
  blocos: [],                    // o arco; vazio = "em breve"
};
```

2. **Somar ao registro** em `src/data/trilhas/index.ts`: importar e incluir em
   `TRILHAS` (a ordem da lista é a ordem no hub), e somar o `id` ao tipo
   `TrilhaId` em `tipos.ts`.

3. **Criar a pasta de conteúdo**: `src/content/aulas/<id>/`. O nome da pasta tem
   que ser **igual ao `id`** — se não bater com nenhuma trilha registrada, o build
   estoura com a mensagem dizendo qual pasta está órfã.

4. **Escrever o arco** em `blocos` e as aulas em `.mdx` — daí em diante é
   [[Como Adicionar uma Aula]], igual para qualquer trilha.

## Visualizações entre trilhas

As de hoje estão em `src/components/viz/trainees/`, porque são de fundamentos de
ML. Quando uma servir a **duas** trilhas, mova para `src/components/viz/comum/` e
atualize o import nos MDX. Enquanto serve a uma só, deixe na pasta dela — é mais
fácil mover depois do que adivinhar agora.

## O que já é de graça

Ao registrar a trilha, sem escrever mais nada, ela ganha:

- o card no hub (`/`), com a contagem "N de M no ar";
- o item no seletor de trilhas da barra do topo;
- as rotas `/<id>`, `/<id>/aulas/<slug>` e `/<id>/guias/<slug>`;
- a barra lateral com o arco dela (e só o dela);
- as entradas no `busca.json`, marcadas com o nome curto da trilha.
