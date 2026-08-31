# Aula 0 e os Guias

Como funciona o material de **consulta** do site — o que fica **fora** do arco
das 13 aulas. Criado em 6 de agosto de 2026, junto com a Aula 0.

## A decisão que veio antes

Do [[Log de Decisões]], palavra do Alex:

> **Aula 0 — Fundamentos**: material de **consulta**, **fora do arco** das 13
> aulas. Cobre o conceito: o que é programar, Python, NumPy, estatística e
> matemática, e o básico de Git (o *porquê*; o *como* fica no setup). É onde
> entra quem nunca programou.
>
> **Navegação**: a sidebar ganha uma seção **"Antes de começar"** (Setup, Aula 0)
> acima dos 6 blocos.

**Confirmado pelo Alex em 6/8/2026**, ao rever a primeira versão da página:

> "a aula 0 fica como prerequisito" · "a aula pode aparecer na sidebar" ·
> "a parte de setup em teoria seria junto com a aula 0"

Ou seja: fora do arco, acesso só pela sidebar (sem card na home por enquanto), e
**o setup não é um guia separado** — mora dentro da própria Aula 0. A linha do
[[Comparativo com o Site 2026.1]] que ainda listava isso como pendente foi
corrigida.

## Como está montado

Uma **coleção nova**, separada de `aulas`, para o arco da home, a contagem de
visualizações e o prev/next continuarem falando de 13 aulas e só delas.

| Peça | Onde |
|---|---|
| Coleção `guias` | `src/content.config.ts` |
| Conteúdo | `src/content/guias/aula-0.mdx` |
| Layout | `src/layouts/Guia.astro` |
| Rota | `src/pages/guias/[slug].astro` → `/guias/aula-0` |
| Índice | seção "Antes de começar" em `SiteLayout.astro`, acima dos blocos |

**Frontmatter de um guia:**

```yaml
titulo: "Aula 0 — Fundamentos"   # o h1
rotulo: "Fundamentos"            # o texto curto da sidebar
codigo: "A0"                     # o selo do índice
ordem: 0                         # posição dentro de "Antes de começar"
objetivo: "..."                  # a linha embaixo do título
```

**Diferenças em relação a uma aula:** o selo do topo é discreto (`.badge-guia`,
contorno em vez de gradiente) porque a página está fora do semestre; o rail
chama-se "Nesta página" e não "Nesta aula"; e o rodapé não tem prev/next do arco
— tem "voltar para a home" e "quando estiver pronto, Aula 1".

**Para acrescentar outro guia** (a trilha de setup, por exemplo): crie o `.mdx`
em `src/content/guias/` com o frontmatter acima. A rota, a sidebar e o índice
saem sozinhos.

## O que a Aula 0 cobre

A página é dividida em **três partes independentes**, e o texto de abertura diz
isso: **conceito** (o que entender para as aulas fazerem sentido), **prática**
(deixar a máquina pronta) e o **notebook** no fim, via `<Pratica>`. Cada seção é
consultável sozinha — a caixa de abertura dá a ordem que funciona: montar o
ambiente uma vez, rodar o notebook para confirmar que deu certo, e ir para a
Aula 1, voltando aqui quando esbarrar em algo.

A terceira parte entrou em 31/8/2026, junto com a correção do setup: ele mandava
clonar `<endereço do repositório>` e avisava que o repo "ainda não existe", o que
deixou de ser verdade em 10/8. Ver o [[Log de Decisões]].

**Conceito**

1. **O que é programar** — variável, função, repetição. E a caixa de erro que
   mais importa para este público: ninguém decora sintaxe, e errar vírgula não é
   sinal de falta de jeito.
2. **Python** — listas (com o índice começando em zero), laços, funções, import.
3. **NumPy** — array, **vetorização** (com viz) e **formato** (_shape_), porque
   quase todo erro de notebook de ML é dois arrays que não batem. Amarra com a
   notação da A2.
4. **A matemática** — probabilidade, **média e desvio** (com viz) e
   **inclinação** (com viz). A caixa de erro desarma o medo de cálculo: ninguém
   vai derivar nada à mão neste curso.
5. **Git e GitHub** — o *porquê*: repositório, clonar, commit, push.

**Prática**

6. **Montar o ambiente** — quatro passos numerados: `uv` (que instala o Python
   junto), VS Code com as extensões Python e Jupyter, Git configurado, e
   `git clone` + `uv sync` + escolher o kernel `.venv`. Os comandos do uv foram
   **conferidos na documentação oficial** via Context7, não escritos de memória.
   Tem uma caixa de atenção avisando que o endereço do repositório ainda vai
   sair, e uma caixa de erro contra `pip install` solto sem ambiente isolado.

Mais 3 visualizações, 6 caixas, 1 pergunta e 4 quizzes.

### As três visualizações

- **`Inclinacao`** — arraste o ponto pela curva e veja a reta que encosta nela
  mudar de ângulo. É a mais importante das três: a inclinação sustenta o gradient
  descent da A1, a saturação da A4 e as curvas da A7. Usa de propósito a **mesma
  linguagem visual** da `Ativacoes` da Aula 4 (ponto + reta tangente colorida por
  sinal), para a leitura já chegar familiar lá. O fundo da tigela fica em x = 0,4
  e não em zero, para "inclinação zero" não se confundir com "x = 0".
- **`MediaDesvio`** — as notas são bolinhas que se arrastam, e a faixa vermelha é
  um desvio para cada lado da média. Os dois botões de turma são o argumento:
  **as duas têm média 7,00** e desvios de 0,43 e 2,89. A frase do texto vira
  evidência, e já prepara a padronização da Aula 2.
- **`Vetorizacao`** — o mesmo trabalho por dois caminhos, com os dois códigos
  lado a lado. O laço acende um número por vez; o NumPy acende todos de uma vez.
  O par que fecha o argumento é o contador de voltas (12 → 1.000.000) contra o
  código, que **não muda**.

**Sem `<Termo>` de propósito.** A regra de densidade de [[Componentes de
Conteúdo]] manda marcar o termo onde ele é usado **sem** estar sendo definido
ali — e nesta página tudo está sendo definido. Negrito em toda parte, glossário
em nenhuma.

## Em aberto

- **A home vai ser refeita inteira** (decisão do Alex, 6/8/2026). Quando isso
  acontecer, vale decidir se a Aula 0 ganha um lugar lá. Por ora, sidebar basta —
  ele confirmou isso explicitamente.
- **O endereço do repositório dos notebooks**, que o passo 4 do setup espera.
  Ver [[Decisões Pendentes]].
- **A trilha de setup de 6 páginas do site 2026.1 não será copiada**: tudo o que
  ela cobre está na seção "Montar o ambiente" desta página, em versão condensada.
  Se a experiência mostrar que falta detalhe, aí sim vale quebrar em guias.

Ver também [[Status do Projeto]] · [[Log de Decisões]] · [[Decisões Pendentes]]
