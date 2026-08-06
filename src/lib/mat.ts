import katex from "katex";

const ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
};

const escapar = (texto: string) => texto.replace(/[&<>"]/g, (c) => ESCAPES[c]);

/**
 * Converte os trechos entre `$...$` em HTML do KaTeX e escapa o resto.
 *
 * Serve para o texto que chega por propriedade (quiz, tabela de símbolos) e que,
 * por isso, não passa pelo pipeline de Markdown do MDX. Roda no build — nenhum
 * KaTeX é carregado no navegador (o CSS já vem do `Base.astro`).
 */
export function mat(texto: string): string {
  return texto
    .split(/(\$[^$\n]+\$)/g)
    .map((parte) =>
      parte.length > 2 && parte.startsWith("$") && parte.endsWith("$")
        ? katex.renderToString(parte.slice(1, -1), { throwOnError: false })
        : escapar(parte),
    )
    .join("");
}
