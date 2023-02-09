/**
 *
 * Funçao para adicionar a DOM os elementos presentes no db.json, para cada artigo
 * resgatado do fetch da função "fetchArticles"
 */

function renderArticle(articleData) {
  const article = document.createElement("article");
  article.classList.add("article");
  article.id = `article-${articleData.id}`;

  const title = document.createElement("h3");
  title.classList.add("article-title");
  title.textContent = articleData.title;

  const content = document.createElement("div");
  content.classList.add("article-content");
  content.innerHTML = articleData.content;

  const author = document.createElement("div");
  author.classList.add("article-author");
  author.textContent = articleData.author;

  article.append(title, author, content);
  document.querySelector("#articles").appendChild(article);
}

/**
 * Função para resgatar do db.json os objetos do array "articles", definido pelo json-server como rota GET e passado cada
 * objeto do array para ser renderizado na DOM
 */
async function fetchArticles() {
  const articles = await fetch("http://localhost:3000/articles").then((res) =>
    res.json()
  );
  articles.forEach(renderArticle);
}

/**
 * Monitor de eventos para quando a pagina e a DOM for carregada, executar a rota GET dos artigos salvos em db.json
 * para renderiza-los na tela
 */
document.addEventListener("DOMContentLoaded", () => {
  fetchArticles();
});

document.querySelector("form").addEventListener("submit", async (ev) => {
  ev.preventDefault();

  /**
   * Objeto com os valores salvos preenchidos no form, para ser enviado via POST ao db.json
   */
  const articleData = {
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    content: document.querySelector("#content").value,
  };

  /**
   * Estrutura padrão do envio de requisições POST para salvar no body da requisição, o objeto articleData acima
   */
  const response = await fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });

  /**
   * Apenas pega os dados da requisição para poder renderizar em tempo real depois
   */
  const savedArticle = await response.json();
  // Reseta os inputs do form
  document.querySelector("form").reset();
  renderArticle(savedArticle);

  console.log(savedArticle);
});
