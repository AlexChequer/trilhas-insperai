// Os notebooks práticos vivem em outro repositório, público e só de leitura:
// github.com/AlexChequer/notebooks-insperai
//
// Como no caso das rotas do site, o endereço fica num lugar só — mudar de repo,
// de organização ou de branch é mexer aqui e mais nada. O `caminho` que as aulas
// passam é relativo à raiz daquele repositório.

const REPO = "AlexChequer/notebooks-insperai";
const BRANCH = "main";

/** Abre o notebook no Google Colab, sem o aluno instalar nada. */
export const urlColab = (caminho: string): string =>
  `https://colab.research.google.com/github/${REPO}/blob/${BRANCH}/${caminho}`;

/** A versão renderizada no GitHub — dá para ler com os gráficos, sem rodar. */
export const urlGitHub = (caminho: string): string =>
  `https://github.com/${REPO}/blob/${BRANCH}/${caminho}`;

/** A raiz do repositório, para o "como rodar na sua máquina". */
export const urlRepo = (): string => `https://github.com/${REPO}`;
