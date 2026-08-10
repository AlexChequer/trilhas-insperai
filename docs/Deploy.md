# Deploy

Host escolhido: **Vercel** (site estático, CI/CD nativo pelo GitHub). Motivo em
[[Stack e Decisões Técnicas]].

## Conectar (passo único, feito pelo Alex na conta dele)

1. Em [vercel.com](https://vercel.com) → **Add New → Project**.
2. Importar o repo `AlexChequer/trilhas-insperai`.
3. O Vercel detecta o Astro sozinho (build `astro build`, saída `dist/`). **Deploy**.

Depois disso é automático: **`git push` na `main` → no ar**, com link de preview
por PR. Sem workflow no repo, sem configuração no código.

## O repositório mudou de nome (feito em 9/8/2026)

Era `AlexChequer/trilha-trainees`, de quando o site era só o da trilha de
trainees. Agora que guarda as três, virou **`AlexChequer/trilhas-insperai`**.

Renomear no GitHub **não quebra o Vercel**: a integração guarda o *id* numérico
do repo, não o nome. Quem tiver um clone antigo só precisa apontar o remote:

```bash
git remote set-url origin git@github.com:AlexChequer/trilhas-insperai.git
```

O GitHub mantém um redirecionamento do nome antigo, então nada quebra na hora.

## Por que não precisa de `base path`

O Vercel serve na raiz (`/`), então os links absolutos (`/`, `/trainees/aulas/...`)
funcionam como estão. (No GitHub Pages de projeto seria `/trilhas-insperai` e
exigiria configurar `site`/`base` no `astro.config.mjs` e revisar os links.)

## Os endereços antigos continuam funcionando

As aulas moravam em `/aulas/aula-01`; agora estão em `/trainees/aulas/aula-01`.
Os endereços antigos viraram páginas de redirecionamento
(`src/pages/aulas/[slug].astro` e `src/pages/guias/[slug].astro`, montadas com
`Redirecionar.astro`), pelos links que os trainees já têm salvos.

Não dá para usar o `redirects` do `astro.config.mjs` aqui: ele exige que origem e
destino tenham os **mesmos parâmetros dinâmicos**, e o destino ganhou `[trilha]`.

## Status atual

- Código **no GitHub**. Falta o **passo de conectar o Vercel** (só o Alex faz, é
  na conta dele). Ver [[Status do Projeto]].

## Rodar/checar localmente antes de publicar

```bash
npm run build && npm run preview   # confere o build de produção
npm run check                      # tipos (astro check)
```
