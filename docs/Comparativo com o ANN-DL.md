# Comparativo com o ANN-DL

Análise do site da eletiva de **Artificial Neural Networks & Deep Learning** do
Insper — [insper.github.io/ann-dl](https://insper.github.io/ann-dl/pt/2026.2/) —,
feita em 14/8/2026 a pedido do Alex, que cursou a matéria e achou o site bom.

O objetivo é achar buracos no nosso. Não é para copiar o formato: são coisas
diferentes, e a diferença importa para ler o resto desta nota.

> **Não confundir com [[Comparativo com o Site 2026.1]]**, que compara com o site
> do Thomas/Gabriel — o material da própria entidade no semestre passado.

## São coisas diferentes

| | **ANN-DL** | **Nosso** |
| --- | --- | --- |
| O que é | Eletiva de graduação, com nota | Trilhas de uma entidade estudantil |
| Quem escreve | Um professor | Coordenadores de trilha, com Claude Code |
| Quem lê | Aluno matriculado, com prova marcada | Membro voluntário, sem nota |
| A alavanca | A nota | O interesse |

A última linha é a que muda tudo. Um site de matéria com prova pode ser denso:
o aluno lê porque cai na prova. O nosso concorre com o resto da vida de um
universitário — daí a aposta em visualização e texto que se explica sozinho.

## Os números

| | ANN-DL 2026.2 | Nosso |
| --- | --- | --- |
| Aulas | 25 | 15 escritas (10 trainees + 5 agentes), 21 no arco |
| Quizzes | 27 (≈1 por aula) | 89 |
| Visualizações interativas | poucas, pontuais | **44** |
| Glossário clicável | não tem | 128 verbetes |
| Idiomas | inglês + português | pt-BR (decisão nossa) |
| Versionamento | por semestre (2025.2, 2026.2) | não tem |
| Stack | Material for MkDocs | Astro + MDX |

## O que ele tem e nós não

### 1. Calendário com datas

A visão geral traz os dias e horários (terças e quintas, 9h45–11h45),
atendimento, e o calendário de agosto a novembro com exercícios, provas e
entregas marcadas.

**Nós não temos nada disso.** O `ritmo` de cada trilha diz "13 aulas · uma por
semana" e para por aí. Quem entra não sabe quando a próxima aula acontece.

### 2. Projetos com rubrica de verdade

Três projetos (classificação, regressão, generativo), e cada um traz:

- **restrição de dataset** — mínimo de 1.000 amostras e 5 features, e datasets
  clássicos (Titanic, Iris, Wine) **zeram a nota**;
- **as 8 etapas** que a entrega precisa cobrir, explicitadas;
- **rubrica com pontos**: dataset e preparação (2), implementação e análise (6),
  qualidade do relatório (2);
- **prazo** com data e hora, sem prorrogação;
- **bônus de competição** (+0,5 por submissão válida no Kaggle/DrivenData/Zindi,
  +0,5 por ficar na metade de cima);
- política explícita sobre **uso de IA** (permitido desde que a pessoa entenda o
  que entregou, com arguição oral possível).

**No nosso site, "Projetos" é um item de menu marcado "em breve".** É o buraco
mais visível dos que encontrei.

### 3. Página de avaliação

Como a nota é composta, incluindo a regra de combinação entre nota individual e
de equipe. **Nós não temos** — e a trilha de trainees tem provinha semanal e
critério de efetivação (média 7,5 e 75% de presença) que hoje só existem em
conversa e no notebook de RAG.

### 4. Bibliografia acadêmica

Cada aula fecha com referências reais (Haykin, Bishop, Goodfellow) e há uma
página de referências do curso.

**Nosso "Recursos" também está "em breve".** As nossas aulas citam fontes no meio
do texto (o paper do Transformer, a documentação do MCP), mas não há onde
alguém encontrar isso reunido.

### 5. Código executável na própria página

O site carrega **Pyodide** (`_markdown_exec_pyodide.js`): o aluno roda Python no
navegador, sem sair da leitura.

Nós resolvemos isso mandando para o **Colab**, o que tem vantagens (GPU, ambiente
completo, o notebook é um artefato que a pessoa guarda) e uma desvantagem real:
**tira a pessoa da página**.

### 6. Versionamento por semestre

`2025.2` continua no ar inteiro, ao lado de `2026.2`. O material de quem cursou
ano passado não some.

**No nosso, o semestre que vem sobrescreve este.** Um trainee de 2026.2 que
quiser rever a aula que fez vai encontrar outra coisa no lugar.

### 7. Exercício com gabarito separado

Há páginas de exercício com uma página de resposta ao lado
(`exercises/data/` e `exercises/data/answer/`). É diferente do nosso quiz: são
questões abertas, para trabalhar antes de ver a solução.

### 8. Subpáginas de aprofundamento

Uma aula pode ter filhas: `data/` tem `leakage/`, `splitting/`, `imbalance/`,
`quality/`, `distributions/`, `types/`. Quem quer só o essencial fica na página
mãe; quem quer o detalhe desce.

**As nossas aulas são uma página só**, o que já deixou algumas longas.

## O que nós temos e ele não

Vale registrar para não corrermos atrás do que já ganhamos:

- **Visualização como instrumento central.** Ele tem alguns visualizadores
  pontuais (o forward pass do MLP com sliders é bom). Nós temos 44, com a regra
  de que toda viz precisa de uma tarefa na tela.
- **Quiz que explica *toda* alternativa.** O dele é `{q, opts, ans, exp}` — uma
  explicação, só da certa. O nosso diz por que cada errada escorrega, que é onde
  o aprendizado acontece.
- **Glossário clicável**, com 128 verbetes e o mesmo termo se explicando igual em
  qualquer aula.
- **Texto que se explica sozinho.** O dele é denso e acadêmico, escrito para
  acompanhar a aula presencial. O nosso funciona sem professor.
- **Busca** no site inteiro.
- **Notebooks executados e commitados**, legíveis no GitHub sem rodar nada.

## O que ele tem e nós **não** devemos copiar

- **Bilíngue.** Duplicaria o custo de escrever e revisar, e a regra "tudo em
  pt-BR" é uma decisão registrada, não um descuido.
- **Densidade acadêmica.** Fórmula matricial e derivada parcial sem intuição
  antes funcionam para quem tem prova marcada. Para nós, afastam.
- **Aula sem admonition nenhuma.** O ANN-DL usa texto corrido; as nossas caixas
  de "erro comum" são um dos recursos que mais funcionam aqui.

## Os buracos, em ordem de valor

| # | Buraco | Depende de | Esforço |
| --- | --- | --- | --- |
| 1 | **Projetos** (menu "em breve") | informação do Alex | alto |
| 2 | **Calendário / datas** | informação do Alex | baixo |
| 3 | **Avaliação** (provinha, efetivação, presença) | informação do Alex | baixo |
| 4 | **Recursos / bibliografia** (menu "em breve") | dá para rascunhar do que as aulas já citam | médio |
| 5 | **Versionamento por semestre** | decisão de arquitetura | alto |
| 6 | **Exercício com gabarito** | conteúdo novo | médio |
| 7 | **Subpáginas de aprofundamento** | decisão de formato | médio |
| 8 | **Código executável na página** | temos o Colab; é um *ou* | alto |

Os três primeiros travam no mesmo lugar: **são informação que só o Alex tem.**
Não dá para inventar data de prova nem critério de nota — é exatamente o tipo de
coisa que o CLAUDE.md proíbe preencher por conta própria.

Ver também [[Comparativo com o Site 2026.1]] · [[Status do Projeto]]
