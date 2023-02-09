function render(country) {
  /**
   * Criando o cartao (div) do pais equivalente e aplicando a classe de
   * estilização ".country", previamente definida no css
   */
  const card = document.createElement("div");
  card.classList.add("country");

  /**
   * Criando o titulo do cartao (div), definindo seu texto e id como o nome do
   * pais.
   */
  const title = document.createElement("h2");
  title.classList.add("country-h2");
  title.textContent = country.name.common;
  title.id = country.name.common;

  /**
   * Criando a imagem do cartao (div), definindo seu caminho atraves do atributo
   * flag.svg
   */
  const flag = document.createElement("img");
  flag.src = country.flags.svg;

  /**
   * Acoplando o titulo e imagem aos cartoes e acoplando
   * os cartoes ao conteudo do main do HTML
   */
  card.append(title, flag);
  document.querySelector("#countries").append(card);
}

/**
 *  
 */
async function getCountries() {
  const response = await (
    await fetch("https://restcountries.com/v3.1/all")
  ).json();
  setTimeout(() => {
    response.forEach((country) => {
      render(country);
    });
    console.log("API carregada com sucesso!");
  }, 1000 * 5);

  console.log("Carregando a API...");
}

getCountries();

// temos que criar primeiro o conteudo da div para aplicar a classe .country
// apos criar a classe, devemos criar o elemento h2 com o country.name.common
// por fim, criar a img buscando a url
// inserir com o append child no countries as divs .country
