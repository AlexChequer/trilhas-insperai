// Confere que todo link interno do site construído aponta para algo que existe.
//
// Existe por causa de um erro concreto: quando o site virou multi-trilha, todo
// href passou de "/aulas/x" para "/<trilha>/aulas/x". Um link esquecido não
// quebra o build do Astro — vira 404 silencioso em produção. Este script
// transforma isso em falha de CI.
//
// Rode depois do build: `npm run build && npm run checar-links`.
import { readFile, readdir, stat } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import path from "node:path";

const DIST = "dist";
const INDICE_BUSCA = path.join(DIST, "busca.json");

/** Todo href/src que começa com "/" — os externos e âncoras não interessam aqui. */
const LINK_INTERNO = /(?:href|src)="(\/[^"]*)"/g;

async function listarHtml(dir) {
  const entradas = await readdir(dir, { withFileTypes: true });
  const arquivos = await Promise.all(
    entradas.map((e) => {
      const caminho = path.join(dir, e.name);
      if (e.isDirectory()) return listarHtml(caminho);
      return e.name.endsWith(".html") ? [caminho] : [];
    }),
  );
  return arquivos.flat();
}

/** Uma URL do site resolve se existe o arquivo, ou o index.html da pasta. */
function resolve(url) {
  const semAncora = url.split("#")[0].split("?")[0];
  if (semAncora === "") return true; // href="#algo" na própria página
  const base = path.join(DIST, decodeURIComponent(semAncora));
  const candidatos = [base, path.join(base, "index.html")];
  return candidatos.some((c) => existsSync(c) && statSync(c).isFile());
}

async function main() {
  try {
    await stat(DIST);
  } catch {
    console.error(`✗ ${DIST}/ não existe. Rode "npm run build" antes.`);
    process.exit(1);
  }

  const problemas = [];
  let total = 0;

  for (const pagina of await listarHtml(DIST)) {
    const html = await readFile(pagina, "utf8");
    for (const [, url] of html.matchAll(LINK_INTERNO)) {
      total++;
      if (!resolve(url)) {
        problemas.push(`${pagina.replace(DIST, "")} → ${url}`);
      }
    }
  }

  // O índice de busca não é HTML, mas suas URLs viram navegação de verdade.
  let itensBusca = 0;
  if (existsSync(INDICE_BUSCA)) {
    const itens = JSON.parse(await readFile(INDICE_BUSCA, "utf8"));
    itensBusca = itens.length;
    for (const item of itens) {
      if (!resolve(item.url)) problemas.push(`busca.json → ${item.url}`);
    }
  }

  console.log(`${total} links internos e ${itensBusca} itens de busca checados.`);

  if (problemas.length > 0) {
    console.error(`\n✗ ${problemas.length} destino(s) inexistente(s):`);
    for (const p of [...new Set(problemas)]) console.error(`  ${p}`);
    process.exit(1);
  }
  console.log("✓ nenhum link quebrado.");
}

main().catch((erro) => {
  console.error("✗ falha ao checar os links:", erro.message);
  process.exit(1);
});
