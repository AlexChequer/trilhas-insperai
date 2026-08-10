# CLAUDE.md — como trabalhar neste repositório

Site acadêmico da InsperAI: **um repositório, um site Astro, três trilhas**
(Trainees no ar; Deploy de Agentes e ML/DL Avançado em breve). Saída 100%
estática, publicada na Vercel a cada push na `main`.

> **Leia antes de mexer:** o vault do Obsidian em [`docs/`](./docs) é a
> documentação viva do projeto. Comece por `docs/Home.md` → `Visão Geral` →
> `Estrutura do Repositório`. Este arquivo é o resumo operacional; o vault é o
> porquê de cada decisão.

## Antes de dizer que terminou

```bash
npm run verificar   # astro check + astro build + checar-links
```

Os três têm que passar. É exatamente o que o CI roda — se falhar aqui, falha lá.
Para conferir no navegador: `npm run dev` (http://localhost:4321).

## Os invariantes

Estas são as regras que sustentam a arquitetura. Quebrar qualquer uma delas quebra
o site de um jeito que o build **não** acusa.

1. **A trilha sai da pasta, não do frontmatter.** Conteúdo mora em
   `src/content/<coleção>/<trilha>/<slug>.mdx`. Nunca adicione um campo `trilha`
   no frontmatter: ele poderia divergir da pasta e não haveria como saber qual
   dos dois manda.

2. **Nunca escreva URL na mão.** Use `urlTrilha()`, `urlAula()` e `urlGuia()` de
   `src/data/trilhas`. Uma string `/trainees/aulas/x` espalhada pelo código é o
   que torna impossível mudar as rotas depois.

3. **Uma trilha está no ar quando tem `blocos`.** Não existe flag `ativa`, e não
   crie uma: seria mais um booleano para esquecer de virar. Arco vazio = "em
   breve" no hub, sem gerar página.

4. **Imports em MDX usam o alias `@/`**, não `../../`. Assim o conteúdo não
   depende de quantas pastas fundo ele está.

5. **Não invente conteúdo pedagógico.** A fonte das aulas de trainees é
   `roteiro.md` na raiz. Se o roteiro não cobre, pergunte ao Alex — não preencha.

## Onde cada coisa vive

| Vou mexer em… | Vá para | E leia |
| --- | --- | --- |
| texto de uma aula | `src/content/aulas/<trilha>/` | `docs/Como Adicionar uma Aula.md` |
| uma visualização | `src/components/viz/<trilha>/` | `docs/Como Adicionar uma Visualização.md` |
| o arco / os textos de uma trilha | `src/data/trilhas/<trilha>.ts` | `docs/Como Adicionar uma Trilha.md` |
| criar uma trilha nova | `src/data/trilhas/` + `src/content/aulas/<id>/` | `docs/Como Adicionar uma Trilha.md` |
| quiz, caixa, termo, símbolos | `src/components/` | `docs/Componentes de Conteúdo.md` |
| cores, tipografia, layout | `src/styles/global.css` | `docs/Sistema de Design.md` |
| rotas | `src/pages/` | `docs/Estrutura do Repositório.md` |
| deploy | — | `docs/Deploy.md` |

## Tom e idioma

- **Tudo em pt-BR** — código, comentários, commits, interface. Sem exceção.
- **O texto se explica sozinho.** Escreva para alguém lendo sem professor: do
  zero, com intuição e o "porquê", definindo os termos. As Aulas 1–3 são a
  referência de tom e profundidade (`docs/Filosofia Pedagógica.md`).
- **Comentário explica o porquê, não o quê.** O código já diz o que faz; o
  comentário registra a decisão e o que se tentou antes. Os arquivos existentes
  são o padrão — siga a densidade deles.
- **Toda visualização precisa de uma tarefa visível na tela.** Regra que nasceu
  de uma viz reprovada por abstrata (`docs/Princípios das Visualizações.md`).

## Ao terminar uma mudança de rumo

Se a mudança envolveu uma **decisão** (e não só execução), registre em
`docs/Log de Decisões.md`: o que se decidiu, o porquê, e o que faria mudar de
ideia. O Alex limpa as conversas com frequência — o que não está no vault se
perde. Atualize também `docs/Status do Projeto.md` se o estado mudou.

## O que nunca fazer

- **Não commite `.env`** nem qualquer credencial. Ver `.gitignore`.
- **Não mexa em `dist/`, `.astro/` ou `node_modules/`** — são gerados.
- **Não crie página para trilha sem arco.** Link que não leva a lugar nenhum é
  pior que ausência: o padrão é aparecer apagado e marcado "em breve".
- **Não copie material protegido** (o curso do Andrew Ng é referência de estilo;
  as perguntas são originais em pt-BR).
- **Não mude as rotas sem redirecionar.** Os endereços antigos `/aulas/…` viraram
  páginas de redirecionamento porque os trainees têm links salvos; qualquer
  mudança futura de URL merece o mesmo cuidado (`src/components/Redirecionar.astro`).

## Commits

Formato convencional, em pt-BR, no imperativo:

```
feat: aula 11 completa (embeddings)
fix: sidebar não destacava o guia ativo
docs: registra a decisão de juntar as trilhas
```

Tipos: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `ci`.
