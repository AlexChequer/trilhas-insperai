# Log de Decisões

A trajetória do projeto — as viradas de rumo e o porquê. Ordem cronológica.

## 1. Começou em HTML/CSS/JS puro

O `roteiro.md` pedia: sem build, sem framework, cada viz um arquivo HTML
autocontido, deploy no GitHub Pages. Primeira viz (resíduos/custo) e um índice
foram feitos assim.

## 2. De catálogo → site fluido

O Alex não queria um catálogo de brinquedos isolados, e sim **um site que ensina
o conteúdo com as visualizações no meio da leitura**, texto curto pra não
intimidar. Decisões:
- **Uma página por aula** (home enxuta → cada aula rolável).
- Viz **embutida no fluxo** + botão **"tela cheia"** para o projetor.
- Nasceu a assinatura **"o arco"** (ver [[Sistema de Design]]).

## 3. De HTML puro → Astro + Vercel

Motivo do Alex: HTML puro é muito código e ruim de manter em 30 páginas. Ele é o
dono da regra do roteiro (é o diretor e quem dá as aulas), não precisa de uso
offline, e topou framework + Vercel. Escolha: **Astro** (site de conteúdo com
ilhas), não React SPA/Next. Detalhes em [[Stack e Decisões Técnicas]].
- Ganho concreto: aula em **MDX**, componentes reusáveis, TypeScript, fim do
  cache-bust `?v=`. A viz virou **ilha nativa** (sem iframe).

## 4. Aula 1 completa e depois refinada

Feitas as 4 visualizações. Aí o Alex pediu ajustes (todos implementados):
- **1º gráfico:** trocar arraste por **sliders de w e b**; chamar o número só de
  **"custo"** (o nome MAE/MSE/RMSE fica pro 2º gráfico, evita repetição).
- **Gradient descent:** mostrar a **matemática** (LaTeX) antes da tigela 3D;
  adicionar **"passo a passo"** e deixar a animação mais lenta (dava pra travar a
  rotação enquanto rodava).
- **Learning rate:** trocar a vista de cima da tigela por uma **curva erro ×
  iteração**, bem mais devagar (diverge explode, lento não chega, bom mergulha).
- Adicionado **KaTeX** como infra de matemática para o curso todo.

## 5. Deploy + este vault

Setup do Vercel (código no GitHub) e criação deste vault, porque o Alex limpa as
conversas e o contexto precisa sobreviver.

## 6. Redesign para layout estilo documentação + logos

O Alex achou o layout centralizado feio/incompleto e a home básica. Reformulamos
para o **padrão de página atual** (barra lateral fixa com índice + logo, conteúdo,
rail "nesta aula"). Detalhe completo em [[Sistema de Design]]. Adicionadas as
logos InsperAI em `public/`. Home virou hero + 6 blocos em cards.

Dois bugs consertados junto:

- **Tela cheia:** a viz ficava pequena boiando num vazio; agora preenche a tela
  (o JS lê `document.fullscreenElement` e dimensiona o canvas), e só o botão da
  figura ativa vira "Sair".
- **Girar o 3D durante a descida:** o `setInterval` + `Plotly.restyle` recriava a
  cena a cada passo e **travava a rotação**. Correção definitiva:
  `Plotly.addFrames` + `Plotly.animate` (atualiza sem recriar a cena) **e** pausar
  o avanço enquanto o mouse está pressionado (`mousedown`/`mouseup`). Resultado:
  gira durante a descida; segurar o arraste pausa; soltar continua. (O
  `uirevision` sozinho **não** resolvia — o problema era o restyle, não a câmera.)

---

### Princípios que se mantêm firmes

- Visualização é o instrumento de ensino ([[Filosofia Pedagógica]]).
- Um controle, uma consequência ([[Princípios das Visualizações]]).
- Projetor + celular, tudo pt-BR.
