# Deploy

Host escolhido: **Vercel** (site estático, CI/CD nativo pelo GitHub). Motivo em
[[Stack e Decisões Técnicas]].

## Conectar (passo único, feito pelo Alex na conta dele)

1. Em [vercel.com](https://vercel.com) → **Add New → Project**.
2. Importar o repo `AlexChequer/trilha-trainees`.
3. O Vercel detecta o Astro sozinho (build `astro build`, saída `dist/`). **Deploy**.

Depois disso é automático: **`git push` na `main` → no ar**, com link de preview
por PR. Sem workflow no repo, sem configuração no código.

## Por que não precisa de `base path`

O Vercel serve na raiz (`/`), então os links absolutos (`/`, `/aulas/...`)
funcionam como estão. (No GitHub Pages de projeto seria `/trilha-trainees` e
exigiria configurar `site`/`base` no `astro.config.mjs` e revisar os links.)

## Status atual

- Código **no GitHub**. Falta o **passo de conectar o Vercel** (só o Alex faz, é
  na conta dele). Ver [[Status do Projeto]].

## Rodar/checar localmente antes de publicar

```bash
npm run build && npm run preview   # confere o build de produção
npm run check                      # tipos (astro check)
```
