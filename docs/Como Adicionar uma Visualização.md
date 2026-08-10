# Como Adicionar uma Visualização

Cada viz é um componente Astro em `src/components/viz/<trilha>/NomeDaViz.astro`,
usado no MDX dentro de um `<VizEmbed>`. As de hoje estão em `viz/trainees/` — quando
uma passar a servir duas trilhas, promova para `viz/comum/`
(ver [[Como Adicionar uma Trilha]]).

## Anatomia (padrão dos componentes de A1)

```astro
---
// comentário sobre o que a viz ensina
---
<div class="viz-corpo" data-viz="chave-unica">
  <div class="viz-grafico-caixa"><canvas class="viz-canvas"></canvas></div>
  <aside class="viz-painel"> ...sliders / stats / botões... </aside>
</div>

<script>
  document.querySelectorAll('[data-viz="chave-unica"]').forEach((raiz) => {
    const canvas = raiz.querySelector(".viz-canvas");
    // ... desenha, escuta eventos ...
    // ResizeObserver na .viz-grafico-caixa → redesenha (pega tela cheia também)
  });
</script>
```

## Convenções que evitam dor

- **Escopar por `raiz`** (`[data-viz="..."]`) e usar `data-*` em vez de `id`, para
  a mesma viz poder repetir na página sem colisão.
- **Canvas em alta resolução**: multiplicar por `devicePixelRatio` e `ctx.setTransform`.
- **Responsivo + tela cheia**: `ResizeObserver` na caixa do gráfico, com guarda de
  largura (só redesenha se a largura mudou → evita loop).
- **Cores e fontes**: usar as variáveis do [[Sistema de Design]]
  (`getComputedStyle(document.body).fontFamily` para o texto do canvas).
- **Números em pt-BR**: `new Intl.NumberFormat("pt-BR", ...)`.

## Usar no MDX

```mdx
import VizEmbed from "@/components/VizEmbed.astro";
import NomeDaViz from "@/components/viz/trainees/NomeDaViz.astro";

<VizEmbed titulo="frase curta de instrução">
  <NomeDaViz />
</VizEmbed>
```

`VizEmbed` dá a moldura (barra + botão "Tela cheia") e o padding. A viz preenche.

## Plotly (só quando precisa de 3D)

Ver `SuperficieCusto3D.astro`: `const Plotly = (await import("plotly.js-dist-min")).default;`
(import dinâmico → chunk separado, não pesa as outras páginas). `ResizeObserver` →
`Plotly.Plots.resize(div)`. Títulos de eixo em objeto: `title: { text: "w" }`.

## Princípios (não esquecer)

Sempre reler [[Princípios das Visualizações]]: um controle, uma consequência,
estado inicial com sentido, número + desenho juntos, projetor + celular, pt-BR.
