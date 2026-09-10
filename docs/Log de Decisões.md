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

## 7. Texto passa a ser autoexplicativo (Aulas 1–3)

Depois de ler as aulas prontas, o Alex achou o texto curto **pouco intuitivo** e
mudou o rumo: o site tem que se explicar **sozinho**, para alguém lendo sem
professor e sem outro apoio. Reescrevi a prosa das Aulas 1, 2 e 3 explicando cada
conceito do zero (com intuição, o "porquê" e os termos definidos), mantendo as
visualizações nos mesmos pontos. É o novo padrão de tom/profundidade — ver
[[Filosofia Pedagógica]].

## 8. Toda aula ganha um notebook prático

Depois do comparativo com o site do Thomas/Gabriel
([[Comparativo com o Site 2026.1]]), o Alex definiu: cada aula terá um
**notebook com o exemplo prático e aplicado do que ele deu naquela aula** — o
mesmo dataset, o mesmo problema, agora em código. A1 em California Housing
(m² × preço); A2 continuando no mesmo dado com `PolynomialFeatures`, mostrando
o grau subir e o modelo melhorar. O princípio completo e os candidatos das 13
aulas estão em [[Notebooks das Aulas]].

Ainda em aberto: onde o notebook vive (Classroom / Colab / download).

## 9. O site passa a ser o material completo (não só as aulas visuais)

Depois do comparativo, o Alex definiu o rumo: **o nosso site substitui o do
Thomas/Gabriel como material principal**. Isso traz para cá o que hoje só existe
lá. Decisões, todas dele:

- **Quizzes** de múltipla escolha, com explicação de **toda** alternativa (por que
  a certa está certa e por que a errada está errada), botão de refazer e suporte a
  imagem. Colocação: **~4 no fim de cada aula + 1–2 no meio**, nos pontos difíceis.
  Referência de estilo: o curso do Andrew Ng — mas as perguntas são **originais em
  pt-BR** (as dele são material protegido; copiar está fora de questão).
- **Caixas destacadas** e **perguntas recolhíveis** no meio do texto.
- **Explicação de termos e variáveis** para quem não tem base: glossário único do
  site, com a definição abrindo **no clique** (hover não existe no celular), mais
  **tabela de símbolos** depois das fórmulas.
- **Trilha de setup de ambiente** no site: Git, GitHub, VS Code, Python + uv.
- **Aula 0 — Fundamentos**: material de **consulta**, **fora do arco** das 13
  aulas. Cobre o conceito: o que é programar, Python, NumPy, estatística e
  matemática, e o básico de Git (o *porquê*; o *como* fica no setup). É onde entra
  quem nunca programou.
- **Prática** = rodar um **notebook pronto** com uma aplicação do que foi dado
  naquele dia. Um notebook por aula, em repositório **público só de leitura**
  (clonar sim, commitar não), com `uv` para o venv e um README explicando o
  básico de git. **O repositório ainda não foi criado** — por ora os notebooks
  ficam em `notebooks/` neste repo. Ver [[Notebooks das Aulas]].
- **Navegação**: a sidebar ganha uma seção **"Antes de começar"** (Setup, Aula 0)
  acima dos 6 blocos, e um rodapé de nav com Projetos e Recursos.
- **Utilidades / links externos**: entram, mas **mais para frente**, junto das
  aulas que os usam.
- **Links úteis e rodapé**: entram. O link do repositório aponta para o site até
  o repo dos notebooks existir.

Ordem de execução combinada: **componentes primeiro, com a Aula 1 de piloto** —
o Alex aprova o padrão numa aula só antes de escalar para as Aulas 2 e 3.

---

### Princípios que se mantêm firmes

- Visualização é o instrumento de ensino ([[Filosofia Pedagógica]]).
- Um controle, uma consequência ([[Princípios das Visualizações]]).
- Projetor + celular, tudo pt-BR.

---

## 6 de agosto de 2026 — a Aula 0 e o que fazer com a home

Depois de rever as Aulas 4 a 10 e a primeira versão da Aula 0, o Alex fechou
quatro pontos:

- **A Aula 0 é pré-requisito**, fora do arco das 13 aulas. Encerra a dúvida que o
  [[Comparativo com o Site 2026.1]] ainda listava em aberto.
- **O acesso é pela sidebar** ("a aula pode aparecer na sidebar"), na seção
  "Antes de começar". Sem card na home por enquanto.
- **O setup de ambiente mora dentro da Aula 0**, não numa trilha de guias
  separada. A trilha de 6 páginas do site 2026.1 não será copiada.
- **A home será refeita inteira**, e não incrementada. Nada foi mexido nela.

O conteúdo da Aula 0 ficou a meu critério ("faz a aula zero como vc achar melhor
e depois eu julgo") — o que entrou e por quê está em [[Aula 0 e os Guias]], e
falta o julgamento dele.

Antes disso, na mesma conversa, ele reprovou a primeira `CamadasColapsando` da
Aula 4 por ser abstrata demais. A regra que saiu dali — **toda visualização
precisa de uma tarefa visível na tela** — está registrada em
[[Retrofit das Aulas]].

---

## 9 de agosto de 2026 — home e navegação refeitas

O Alex abriu dizendo que não sabia descrever o que queria, então a conversa foi
por maquetes: eu propunha formas em ASCII e ele reagia. Ficou assim.

**O diagnóstico que destravou:** a home e a barra lateral faziam **o mesmo
trabalho**. As duas listavam as 13 aulas nos mesmos 6 blocos. Quem chegava via o
índice duas vezes e não ganhava nada — e a home ainda dava o lugar mais nobre da
página a "25 de 31 visualizações prontas", que mede o quanto o *site* está
construído e não interessa ao trainee.

**Decisões dele:**

- **Navegação: barra no topo + lateral só da seção atual.** Escolhida entre três
  formatos. Resolve a lista lateral, que estava com 15 itens e ia crescer.
- **A home fala do programa.** Não é índice de aulas. Ordem: o programa primeiro
  (o que é, como funciona uma semana), o arco depois.
- **Do "falando do trainee", só a mecânica do programa** — quantas aulas, o que
  acontece numa semana, as provinhas, os dois desafios. Ele não quis "o que você
  sai sabendo", nem "quem são os trainees", nem a aposta pedagógica.
- **Calendário e Projetos ficam para depois**, porque eu não tinha as datas nem a
  logística do MNIST — e ele preferiu adiar as duas seções a construí-las com
  marcadores "a definir".

**O que eu decidi no caminho** (e vale ele julgar):

- **A busca foi junto**, porque a maquete que ele escolheu tinha a lupa e uma
  barra de navegação com busca morta seria pior que nenhuma. É um `busca.json`
  montado no build, sem dependência nova.
- **"Aulas" na barra aponta para o arco da home**, em vez de uma página `/aulas`
  separada — criar uma seria repetir a mesma lista de novo, que é justamente o
  problema que estávamos resolvendo.
- **Projetos e Recursos aparecem marcados "em breve" e não são links.** Preferi
  isso a esconder as seções: mostra para onde o site vai sem criar caminho que
  não leva a lugar nenhum.
- **O logo teve de ser recortado por CSS.** O arquivo é um quadrado de 200×200
  com marca em cima e wordmark embaixo; numa barra horizontal de 60px ele virava
  um borrão. Medi o grafo no pixel e recortei só ele, com o nome em texto ao
  lado. Se um dia existir um SVG horizontal da marca, o recorte sai.

---

## 9 de agosto de 2026 — o site vira o das três trilhas

O Alex vai ter **três trilhas** (Trainees, Deploy de Agentes, ML/DL Avançado) e
quer **uma página acadêmica única** por onde todo membro da entidade entra. A
pergunta que ele trouxe: repositórios separados amarrados por **submódulos git**?

**Decisão: um repositório, um site Astro, trilhas como pastas de conteúdo.**
Submódulos foram descartados por quatro motivos:

- **Contradizem "uma página só".** Um site = um build. Como submódulo, cada
  trilha seria conteúdo puro, incapaz de buildar sozinha — e aí o submódulo não
  compra nada. Como site inteiro, viram três deploys, que é o oposto do pedido.
- **Ponteiro por SHA.** Toda edição numa trilha exigiria um segundo commit no
  repo pai para mover o ponteiro. Esquecer = o site no ar não muda, calado.
- **Atrito com o Vercel.** Submódulo privado pede deploy key, e preview de PR não
  enxerga branch de submódulo não mergeada — piora justamente a ferramenta de
  revisão.
- **Quem contribui é trainee.** `git submodule update --init --recursive`,
  detached HEAD, trabalho perdido. Custo alto para quem está aqui para aprender
  ML, não plumbing de git.

O que se queria com submódulo — **editar cada trilha em separado** — sai de graça
no monorepo: pastas distintas (conflito é quase impossível), branches, preview
por PR e `CODEOWNERS` por caminho.

**O que pesou a favor de juntar:** o design system *é* o produto. `global.css`, o
`VizEmbed` e a sidebar são o que faz três trilhas parecerem uma entidade só. E a
trilha de ML/DL Avançado herda as **25 visualizações** de trainees por import, em
vez de cópia ou pacote npm.

**Mudaria a resposta se** a trilha de Agentes precisasse de backend (playground
de deploy, sandbox rodando agente). Aí seria uma aplicação, não uma coleção de
conteúdo, e mereceria repo próprio. O Alex confirmou: **conteúdo estático**.

**O que eu decidi no caminho** (e vale ele julgar):

- **A trilha sai da pasta, não do frontmatter.** Um campo `trilha` no MDX poderia
  divergir da pasta, e não haveria como saber qual dos dois manda.
- **Sem flag `ativa`:** a trilha está no ar quando tem arco. Um booleano a mais é
  um booleano para esquecer de virar.
- **As duas trilhas novas entraram como rascunho**, com nome, resumo e público
  preenchidos por mim e marcados `TODO` no código — para ele reescrever antes de
  anunciar.
- **Os endereços antigos viraram redirecionamento**, pelos links já salvos.
- **A barra do topo ficou com duas navegações** (trilhas × seções da trilha). Não
  cabiam: a busca era empurrada para fora entre 1000 e 1290px. Medi a largura
  necessária no navegador, tirei o selo "em breve" da nav de trilhas (item
  apagado e sem link já diz isso) e o limite caiu para ~1085px, com as seções
  sumindo abaixo disso. As trilhas sobrevivem mais que os placeholders de
  Projetos e Recursos, de propósito.

## 10 de agosto de 2026 — a trilha de Agentes entra no ar (Aulas 1–5)

O Alex clonou `Trilha-Agents`, o repositório dos notebooks da trilha extra de
LLMs e agentes, e pediu as **cinco primeiras aulas** no site — as que falam de
agentes, antes das duas de deploy/plataforma. Fonte do conteúdo: os cinco
notebooks e o `README.md` do repositório, do mesmo jeito que o `roteiro.md` é a
fonte da trilha de trainees.

**O arco ficou com as 7 aulas do README**, e não só com as 5 escritas: as Aulas 6
(N8N) e 7 (prompt engineering) entram como `aberto`, estação muda no arco. Assim
o aluno vê onde a trilha vai dar sem que exista link para o vazio.

**O nome continua "Deploy de Agentes"**, embora o repositório chame a trilha de
"LLMs e Agents". O hub, a URL `/agentes` e o `TrilhaId` já usavam esse nome, e
renomear custaria redirecionamento sem ganho nenhum — os textos de rascunho é que
foram reescritos, que era o `TODO` que estava no arquivo.

**As 16 visualizações são novas, em `viz/agentes/`.** Nenhuma foi promovida para
`viz/comum/`: não há ainda uma que sirva a duas trilhas. A A1 de trainees e a A1
de agentes falam as duas de softmax, e de coisas diferentes o bastante (camada de
saída × distribuição do próximo token) para não valer unificar agora.

### O que eu decidi no caminho (e vale o Alex julgar)

- **Preferi mecanismo real a número inventado, sempre que deu.** O tokenizador da
  A1 usa casamento guloso de verdade sobre um vocabulário de brinquedo; o previsor
  de próximo token é um bigrama montado na hora a partir de um corpusinho, com a
  temperature aplicada na distribuição real; o parser da A3 é o parser mesmo,
  rodando regex, `JSON.parse` e validação sobre o texto que a pessoa digitar. Só
  onde era impossível (pesos de atenção, embeddings) os números são ilustrativos —
  e a viz diz isso no comentário do topo.
- **A calculadora da A3 é um parser recursivo escrito à mão, não `eval`.** A viz
  executa expressão digitada pelo usuário; `eval` ali seria abrir a porta à toa.
- **As vizzes de segurança mostram a defesa falhando.** Na `PromptInjection`, dos
  quatro ataques com guardrail ligado, dois passam. Se todos fossem barrados, a
  viz ensinaria o contrário do que a aula diz.
- **As perguntas da `BuscaSemantica` foram escritas para ter zero palavra em comum
  com o chunk certo**, e a tabela mostra as duas colunas lado a lado. Sem esse
  contraste, "busca semântica" vira palavra bonita; com ele, a pessoa vê por que
  não dá para usar Ctrl+F.
- **Nada de tabela em Markdown nas aulas.** O `global.css` nunca estilizou
  `table`, e nenhuma aula de trainees usa — a comparação manual × MCP virou a viz
  `ManualVsMCP` e listas, em vez de eu acrescentar CSS novo por causa de uma aula.

**Mudaria de ideia se** o Alex quiser as Aulas 6 e 7 antes de o material existir:
aí valeria uma página de "em construção" em vez de estação muda. Como está, o
padrão do site é não gerar página sem conteúdo.

## 11 de agosto de 2026 — o padrão das aulas vira uma skill

O Alex vai chamar os **coordenadores das trilhas** para escreverem as aulas, todos
usando Claude Code. O pedido: que o padrão se mantenha igual em todas, e que eles
só precisem preencher o conteúdo.

**Decisão: uma skill de projeto, `.claude/skills/nova-aula/`.** Entre um documento
no vault, um slash command e uma skill, a skill ganhou por um motivo só: ela
**carrega sozinha**. Documento depende de alguém ir atrás; comando depende de
lembrar que existe. Como `.claude/` é versionado, ela chega junto no clone e
aparece no Claude Code do coordenador sem ele saber que ela existe.

A skill cobre **a aula e as visualizações** — são a mesma entrega, e a viz é a
parte que mais escapa do padrão. O notebook ficou de fora: mora em outro
repositório e é outro ato. Se virar necessidade, vira uma segunda skill.

**A entrada é o roteiro do coordenador**, e a skill manda **perguntar** quando
faltar objetivo, exemplo concreto ou erros comuns — em vez de preencher com o que
parece razoável. É a regra "não invente conteúdo pedagógico" aplicada a quem não
conhece o repositório.

### Sobre verificação automática, o Alex cortou uma ideia minha

Eu propus um `checar-aula.mjs` no CI, reprovando densidade de termos, contagem de
quizzes e afins. Ele recusou: o verificador tem que impedir que **o site caia**,
não policiar quiz. Está certo, e ao conferir eu vi que a proteção já existe:

- a `main` já está protegida com o check "Tipos, build e links" **obrigatório**;
- o build já falha de propósito em `<Termo>` com id fora do glossário, `<Quiz>`
  sem exatamente uma resposta certa, imagem sem `alt`, MDX em pasta que não é
  trilha, e link interno morto.

A brecha que sobra é outra, e nenhuma CI de conteúdo pegaria: **uma viz com erro
de JavaScript compila normal e só quebra no navegador.** Foi o que aconteceu
comigo montando a trilha de agentes. Por isso o portão de conclusão da skill
exige, além do `npm run verificar`, abrir a página, conferir o console em zero
erro, mexer em cada controle e estreitar para 390px.

Também acrescentei `.claude` ao `exclude` do `tsconfig.json`: os modelos da skill
têm placeholders de propósito (`@/components/viz/<trilha>/…`) e, sem isso, um dia
derrubariam o build — exatamente o que o Alex não quer.

## 14 de agosto de 2026 — comparativo curricular com o ANN-DL

O Alex cursou a eletiva de redes neurais do Insper e pediu a comparação. Eu
comecei olhando o **site** (calendário, rubricas, bibliografia) e ele corrigiu o
rumo: o que interessa é **o conteúdo** — que assuntos faltam, se a ordem faz
sentido, se o conjunto é coerente. A análise refeita está em
[[Comparativo com o ANN-DL]]; o levantamento de site virou apêndice.

**A espinha dos dois arcos é a mesma** (fundamentos → redes → treino → visão →
linguagem), o que é bom sinal: a ordem geral não precisa mudar.

**Os buracos de conteúdo, verificados um a um no nosso material** (e não supostos):

- **RNN/LSTM não existe em lugar nenhum nosso.** Isso já produz uma incoerência
  no ar: a Aula 1 de agentes compara o Transformer com RNNs que o leitor nunca viu.
- **Dados faltantes e variável categórica são ausentes.** O arco entra em modelo
  na primeira aula e nunca volta para o dado. Split, vazamento e desbalanceamento,
  por outro lado, **estão** cobertos — conferi antes de chamar de buraco.
- **Generativos (VAE, GAN, CLIP, difusão) são um terço do curso dele e zero do
  nosso** — mas isso é escopo, não falha: seria fora de lugar na trilha de
  trainees. O achado útil é outro: a trilha **ML/DL Avançado** está registrada com
  `blocos: []`, e a segunda metade do ANN-DL é o arco dela praticamente pronto.

**A incoerência mais urgente é nossa e não veio dele:** as Aulas 11 e 12 de
trainees (Embeddings e LLMs) estão em aberto e **duplicam** a Aula 1 e a Aula 2 da
trilha de agentes, que já cobrem embeddings, Transformers e o que é um modelo de
linguagem — com mais profundidade. Quem escrever a A11 vai reescrever pior o que
já existe. Precisa de decisão antes de alguém trabalhar à toa.

**Também registrei incoerências no arco dele**, para não copiarmos: convolucional
aparece duas vezes (subpágina da aula 10 e aula 11 inteira), e métricas de LLM são
ensinadas na aula 9 enquanto LLMs só aparecem na 16.

**Uma correção que saiu daqui:** ao conferir os números, vi que os docs diziam "17
visualizações" na trilha de agentes quando são **16**. O arco (4+3+3+4+2) sempre
esteve certo; o erro era só na prosa.

## 31 de agosto de 2026 — a Aula 0 ganha notebook, e a intro vira três partes

A trilha de trainees começa em poucos dias. O Alex pediu duas coisas: ajustar a
intro da Aula 0 e **dar a ela um notebook que ensine a usar notebook**.

**O que estava errado na página.** A abertura anunciava "duas metades — conceito e
prática", e a seção 4 do setup mandava clonar `<endereço do repositório>` com uma
caixa avisando que o repositório "ainda não existe". Ele existe desde 10/8, com as
Aulas 1 e 2 dentro. Um trainee chegando agora leria uma instrução impossível de
seguir logo no primeiro contato com o curso. Corrigido: o endereço real entrou no
lugar do placeholder, e a caixa virou **"Como saber se deu certo"** — rode a
primeira célula do notebook da A0 e veja as versões saírem.

**O notebook** é `trainees/aula-00-primeiro-notebook.ipynb`. Ele acumula três
papéis de propósito, e cada um resolve um problema que existia:

1. **Teste do ambiente.** O setup da A0 terminava sem nenhuma forma de o trainee
   confirmar que funcionou. Agora a primeira célula imprime as versões — se rodou,
   acabou. Esse era o buraco mais concreto da página.
2. **A mecânica da ferramenta.** Célula, o `[n]` como *ordem de execução*, a
   memória do kernel, a armadilha de rodar fora de ordem (com Restart & Run All
   como regra de ouro), e como ler um traceback de baixo para cima. Nenhuma das 13
   aulas para para explicar isso, e todas assumem.
3. **Um gostinho de ML de ponta a ponta**, escolha do Alex sabendo que roçava na
   Aula 1.

**Como o gostinho evita pisar na Aula 1.** A A1 é Ames, dado real, e o aluno
escreve o gradient descent na mão. Aqui é o oposto: **nós inventamos a regra**
(`nota = 4,0 + 0,8 × horas`), escondemos ela sob ruído, e o `LinearRegression().fit()`
a recupera — 4,23 e 0,73 contra 4,00 e 0,80. O `fit()` fica **explicitamente** uma
caixa fechada, e o texto diz que abri-la é a Aula 1. Cria apetite em vez de gastar
o assunto.

**Dado sintético, contra o invariante do repo de notebooks** (que manda o dado
morar em `dados/`). É deliberado: a A0 é lida por quem **ainda não** tem ambiente,
então ela não pode depender de arquivo nem de rede. Fabricar o dado com NumPy
também dá a única coisa que dado real não dá — **a resposta certa conhecida**, que
é o que torna "a máquina achou a regra" verificável em vez de mágico. O README do
outro repo registra a exceção.

**O que faria mudar de ideia:** se o gostinho de ML começar a ser tratado como
"já vi regressão", tirar a seção 4 e deixar o notebook só na mecânica. O valor dele
está em ser uma *demonstração*, não uma aula.

**Um erro pego pelo portão, que vale registrar.** A primeira versão do Desafio 2
afirmava que 8 alunos dariam inclinações "bem diferentes" entre si. Rodei: 0,85,
0,82 e 0,76 — perto demais, e o trainee pegaria a mentira na primeira tentativa.
Medi de verdade (200 sementes) e troquei para 5 alunos, onde o efeito é real
(0,52 a 1,02 contra 0,72 a 0,93 com 40). É exatamente o "não deixe número no texto
sem conferir na saída" do CLAUDE.md de lá — e ele pegou.

## 8 de setembro de 2026 — uma página de aula pode ter mais de um notebook

O Alex escreveu um **laboratório de revisão das Aulas 1 e 2** — 15 minutos, para
rodar em sala fechando o Bloco 1 — e pediu que ele entrasse no fim da Aula 2, no
mesmo esquema de abrir no Colab. Ele está em
`trainees/aula-revisao-a1-a2.ipynb`, no repositório de notebooks.

**A decisão de fundo:** até aqui valia "um notebook por aula", e o `<Pratica>` foi
desenhado para isso — rótulo fixo "Agora rode", e o comentário no `global.css`
registra que ele é *o único* bloco com gradiente cheio porque precisa ler como
"acabou, agora vá fazer". Agora a A2 tem dois. Em vez de criar um componente novo,
o `<Pratica>` ganhou uma prop `titulo` opcional (default "Agora rode"): dois blocos
com o mesmo rótulo não diriam qual é qual. O segundo se chama "Revisão · Aulas 1 e
2" e vem depois do da aula — a leitura fecha em "acabou a A2, agora revise as duas".

**Por que ele quebra a continuidade de dataset de propósito.** Os notebooks das A1
e A2 rodam em Ames, 1.460 imóveis. Este volta aos **cinco apartamentos da lousa**.
Não é descuido: com cinco pontos o trainee confere cada erro e cada erro² na tabela
impressa, e é justamente essa conta que ele viu na mão. Com 1.460 linhas, a tabela
vira um resumo estatístico e a revisão perde o que tinha de concreto. O CLAUDE.md
do repo de notebooks passa a registrar a exceção para os `aula-revisao-*`.

**O custo visual, assumido:** dois blocos de gradiente cheio empilhados no fim da
página. Os rótulos separam bem, mas é bastante roxo. **O que faria mudar de ideia:**
se uma terceira página precisar de dois notebooks, vale desenhar uma variante mais
leve para o bloco secundário em vez de repetir o gradiente.

**Dois pontos apontados no notebook e ainda não resolvidos**, para não se perderem:
a Pergunta 2 diz que o `w` "praticamente chega no valor certo" quando a saída dá
3,47 contra o alvo 3 (o `b` de fato fica preso em 0,06, então o argumento se
sustenta — o "praticamente" é que está generoso); e o `# MUDE AQUI: acrescente
0.001` da seção 3 chega depois que o `alpha = 0.0004` já explodiu, então o convite
perde o efeito. Conteúdo pedagógico é do Alex, então ficaram como estão.

## 10 de setembro de 2026 — o notebook vira exercício, e por que não tem autograder

O Alex pediu um notebook de classificação **no estilo do Andrew Ng**: a
matemática da sigmoid antes, e depois o trainee implementando. E levantou a
questão maior — *"eu pensei em fazer um autograder, mas preciso saber o quão
difícil é"* —, junto com a vontade de gerir quem entregou e quem não.

**O que a pesquisa achou, e que mudou a resposta.** A org `InsperAI-Trainee` já
existe no GitHub, com repos no padrão do GitHub Classroom (`mlp-AlexChequer`,
`mnist-challenge-AlexChequer`), um pipeline de entrega funcionando em
`.github/workflows/submit.yml` e o servidor `challenge.insperai.com.br` ainda
respondendo. E o dado mais útil: os notebooks semanais de 2026.1 **não tinham
nada** — nenhum `assert`, nenhum `### START CODE HERE`, nenhum CI. Só o desafio
do MNIST era corrigido.

**A decomposição que resolveu a conversa:** corrigir e rastrear são dois
problemas, e só o segundo é caro. O autograder do Ng é literalmente um arquivo
de testes rodando na máquina do aluno — meio dia de trabalho. E não é ele que
mata o "Run all e pronto": é o `raise NotImplementedError` na célula. Rastrear é
que exige identidade e um lugar para guardar.

**A decisão do Alex: só os testes, sem servidor e sem Classroom.** O argumento
dele é o que fecha a questão — *"todo mundo teria que dar commit e nem todos têm
familiaridade com GitHub"*. Exigir `git push` na **Aula 3** filtraria trainee por
ferramenta, não por entendimento, e ainda antes da Aula 8, que é a aula de
ferramentas. O Colab é o caminho principal justamente por não exigir setup.

**O que se abre mão:** rastreio automático. Descobre-se em aula quem fez. Se um
dia precisar de sinal sem exigir git, o meio-termo é o notebook imprimir um
código de conclusão que eles colam num Google Form (~2h) — anotado aqui para não
se reinventar a discussão.

**Achado de segurança, para quem for reusar o pipeline do MNIST:** o
`submit.yml` traz a `SUBMISSION_API_KEY` **em texto puro no arquivo**, enquanto o
README afirma que a Action "inherits org-level secrets". Não herda. Os repos são
privados, mas cada trainee tinha esse arquivo, então a chave circulou pela turma
inteira — e o `github_actor` vai no corpo do POST como dado do cliente, então
com a chave dá para submeter no nome de qualquer um. Rotacionar, mover para
secret de org e derivar o autor do contexto do Actions. Não testei a chave.

### O notebook em si

`trainees/aula-03-classificacao.ipynb`, 8 funções para implementar, cada uma com
enunciado (matemática deduzida, não entregue), lacuna e célula de teste. A forma
completa está no CLAUDE.md do repo de notebooks.

**Dataset: Breast Cancer**, que vem dentro do sklearn. Quebra a continuidade com
Ames porque o conceito exige — Ames é regressão, não há o que classificar nele —
e casa com o exemplo que a própria página usa para justificar recall alto.

**Sem saídas commitadas**, contra o invariante 2. Metade das células depende de
código que o trainee ainda não escreveu; uma sequência de `NotImplementedError`
commitada não serve de consulta a ninguém.

**O portão mudou de forma em vez de sumir.** Como o notebook não roda de ponta a
ponta como sai, `scripts/verificar_exercicios.py` extrai o gabarito do primeiro
bloco de código de cada `<details>`, injeta na lacuna e roda tudo — falhando se
alguma célula estourar ou se algum `verificar()` imprimir ✗. Efeito colateral: o
`<details>` deixou de ser só texto e virou fonte de verdade executável.

Ele se pagou na primeira execução: pegou um valor esperado que eu tinha chutado
(0,6478 contra os 0,5914 reais) e um teste que afirmava que a sigmoid nunca
chega a 1 — em float64 ela chega a partir de ±37, e isso virou nota no gabarito.

**O que faria mudar de ideia:** se os trainees pularem direto para o `<details>`
sem tentar, o conserto não é esconder a resposta (eles achariam de qualquer
jeito) — é a Aula 8 passar a exigir o notebook feito como pré-requisito, ou o
Alex olhar o resultado em aula. Se em algum momento virar nota, aí sim vale
reabrir o Classroom, quando a turma já tiver git na mão.
