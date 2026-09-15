# Deploy

Host: **Vercel**. Mas a publicação **não** é a integração Git dela — é o
**GitHub Actions**, desde 14/9/2026. A integração Git está desconectada de
propósito; o porquê está logo abaixo e, por extenso, no [[Log de Decisões]].

## Como funciona hoje

Tudo mora em `.github/workflows/ci.yml`:

| Gatilho | Job | O que faz |
| --- | --- | --- |
| push na `main` | `Publicar em produção` | `vercel pull` → `build --prod` → `deploy --prebuilt --prod` |
| pull request | `Prévia do PR` | o mesmo sem `--prod`, e comenta o endereço no PR |
| ambos | `Tipos, build e links` | `npm run verificar` |

Os dois jobs de publicação dependem do `verificar` passar. Isso é diferente de
antes: a Vercel publicava **em paralelo** ao CI, então um build quebrado ia ao ar
do mesmo jeito e o vermelho só aparecia depois.

Precisa de três secrets no repositório — `VERCEL_TOKEN`, `VERCEL_ORG_ID` e
`VERCEL_PROJECT_ID`. Os dois ids saem de `.vercel/repo.json` depois de um
`npx vercel link` (atenção: `repo.json`, não `project.json`, quando o link é de
repositório).

## O repositório é público de propósito (desde 15/9/2026)

**Não é só preferência: é o que faz o deploy funcionar.** A Vercel recusa
deployment cujo autor do commit não esteja vinculado à conta, e a mensagem dela
diz o porquê em letras miúdas — *"The Hobby Plan does not support collaboration
for **private** repositories"*. Repositório público, a restrição some.

Se algum dia isto voltar a ser privado, os deploys de todo colaborador que não
seja o dono da conta Vercel voltam a ser bloqueados. Verificado em 15/9 com um
commit de autor sem acesso nenhum: prévia publicou em 2s.

## Por que saiu da integração Git da Vercel

Ela **recusa deployment cujo autor do commit não esteja vinculado à conta
Vercel**. Em plano Hobby, isso é todo mundo menos o dono. Quando a Bianca entrou
como colaboradora, todo merge dela voltou como `Deployment was blocked`, e o site
ficou quatro dias mostrando uma versão sem a trilha de ML/DL Avançado enquanto a
`main` já estava certa.

A pegadinha que faz PR não resolver: **o merge commit é assinado por quem clica
em "Merge"**. Se ela mergeia, o commit é dela, e bloqueia.

Descartadas com evidência, para não se reinvestigar: não era limite de plano (um
deploy do dono nove horas antes passou), não era Deployment Protection (aquilo
controla quem *vê*, não o build) e não era integração quebrada (ela criava
deployment e reportava status em todos os commits). A correlação era só com o
autor.

Sai de graça: os 2.000 minutos/mês de Actions do plano free cobrem de sobra um
build de ~2 min — e, em repositório público, Actions é ilimitado.

**Atenção a uma coisa que eu afirmei errado na época:** achei que deploy por CLI
fosse autenticado só pelo token e portanto imune à checagem de autor. **Não é.**
A CLI lê o metadado do Git do diretório onde roda e anexa o autor do commit ao
deployment, e a Vercel bloqueia do mesmo jeito. A migração para o Actions pareceu
resolver porque todos os commits daquele dia eram do dono da conta; o primeiro
merge de outra pessoa depois dela voltou a travar. **Quem resolveu foi tornar o
repositório público.** O Actions continua valendo pelo resto (publicar depende do
CI passar, prévia por PR), mas não era a cura.

**O custo assumido:** o token alcança todos os projetos da conta na Vercel (o
escopo de projeto único não serve — ver o Log), e vive nos secrets de um
repositório onde cinco pessoas têm push. É o mesmo círculo de confiança de quem
já podia publicar, mas é mais largo do que gostaríamos.

## ⚠️ O token expira em 12/9/2027

Nesse dia os deploys param sem aviso e nada no site vai explicar o porquê. O
sintoma é o job `Publicar em produção` falhando com
`The token provided via VERCEL_TOKEN environment variable is not valid`.

O conserto é criar outro em Vercel → Account Settings → Tokens, com escopo
**da conta inteira** (`chequer70117-g…`, o do selo Hobby), e:

```bash
# Copie o token pelo botão da Vercel, e então:
TOKEN="$(pbpaste | tr -d '\r\n ')" \
  && VERCEL_TOKEN="$TOKEN" npx vercel whoami \
  && printf %s "$TOKEN" | gh secret set VERCEL_TOKEN --repo AlexChequer/trilhas-insperai
```

O `tr -d` não é frescura: dois tokens seguidos chegaram inválidos por sujeira de
cópia, e o `whoami` no meio existe para validar **antes** de gravar o secret.

## Publicar na mão, se o Actions estiver fora

O resgate não depende de token nem do workflow — só de estar logado na CLI:

```bash
npm ci
export VERCEL_ORG_ID=team_ACl8Tu8wfRI1aFOED5VMgI9d
export VERCEL_PROJECT_ID=prj_zr37815FyAi9Ydq6r7NnAYvY3bcB
npx vercel pull --yes --environment=production
npx vercel build --prod
npx vercel deploy --prebuilt --prod
```

Foi assim que o site voltou ao ar em 12/9, antes de a migração ficar pronta.

## O repositório mudou de nome (feito em 9/8/2026)

Era `AlexChequer/trilha-trainees`, de quando o site era só o da trilha de
trainees. Agora que guarda as três, virou **`AlexChequer/trilhas-insperai`**.
Quem tiver um clone antigo só precisa apontar o remote:

```bash
git remote set-url origin git@github.com:AlexChequer/trilhas-insperai.git
```

O projeto na Vercel ainda se chama `trilha-trainees` — o nome antigo. Não vale a
pena renomear: o `VERCEL_PROJECT_ID` é que manda, e mexer nele é trocar secret
para ganhar cosmética.

## Por que não precisa de `base path`

A Vercel serve na raiz (`/`), então os links absolutos (`/`,
`/trainees/aulas/...`) funcionam como estão. (No GitHub Pages de projeto seria
`/trilhas-insperai` e exigiria configurar `site`/`base` no `astro.config.mjs` e
revisar os links. E Pages em repo privado exige plano pago.)

## Os endereços antigos continuam funcionando

As aulas moravam em `/aulas/aula-01`; agora estão em `/trainees/aulas/aula-01`.
Os endereços antigos viraram páginas de redirecionamento
(`src/pages/aulas/[slug].astro` e `src/pages/guias/[slug].astro`, montadas com
`Redirecionar.astro`), pelos links que os trainees já têm salvos.

Não dá para usar o `redirects` do `astro.config.mjs` aqui: ele exige que origem e
destino tenham os **mesmos parâmetros dinâmicos**, e o destino ganhou `[trilha]`.

## Antes de publicar

```bash
npm run verificar   # astro check + build + checar-links — o mesmo que o CI roda
npm run dev         # http://localhost:4321
```
