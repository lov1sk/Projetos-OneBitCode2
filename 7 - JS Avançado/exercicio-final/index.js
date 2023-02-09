/**
 * - a aplicação deverá mostrar na página todas as transações salvas no backend.
- a aplicação deverá ter um formulário para criar uma nova transação no backend (sem atualizar a página) através de uma requisição POST.
- novas transações criadas devem aparecer na lista de todas as transações assim que são criadas, tudo isso sem atualizar a página.
- a aplicação deverá permitir editar os dados de uma transação através de uma requisição PUT (o PUT funciona da mesma forma que o POST, enviando dados a serem atualizados no body e com o id do recurso a ser editado na url).
- a aplicação deverá permitir excluir uma transação através de uma requisição DELETE (as requisições DELETE não precisam de um body, apenas do id do recurso a ser excluído na url).
- a aplicação também deverá mostrar na página o saldo total, que é calculado somando todos os valores das transações (que podem ser positivos ou negativos).
- o valor do saldo total deve estar sempre atualizado na tela, ou seja, ao criar, editar ou excluir uma transação o saldo deverá refletir o novo valor.
 */

//Devera ser feito um fetch em /transactions para obter, atraves do metodo GET as transações salvas no db.json
//devera ser criado uma função render e passar essa função como parametro do foreach dos objetos retornados do get
//a função render tera uma variavel do tipo saldo, que sera atualizada a cada chamada
//Deverá ser pego o form atraves do objeto document e adiciona-lo um prevent.default()
//Devera ser adicionado a ele um eventListener do tipo submit
//Devera ser criado uma constante que salva um objeto com os valores a serem salvos no db.json

function render(transaction) {
  const divExists = document.getElementById(`div-${transaction.id}`);

  if (divExists) {
    document.getElementById(`div-${transaction.id}`).remove();
  }
  const div = document.createElement("div");
  div.id = `div-${transaction.id}`;
  div.classList.add("transactions-element")
  const title = document.createElement("h3");
  title.textContent = transaction.name;
  const ul = document.createElement("ul");
  const liID = document.createElement("li");
  const liName = document.createElement("li");
  const liValue = document.createElement("li");
  ul.id = `transaction-${transaction.id}`;
  liID.textContent = `Id: ${transaction.id}`;
  liName.textContent = `Nome: ${transaction.name}`;
  liValue.textContent = `Valor: R\$${transaction.value}`;

  ul.append(liID, liName, liValue);
  div.append(title, ul);
  document.querySelector(".transactions").append(div);
}

// Metodo Get para buscar todos os elementos salvos no db.json e renderizar na DOM cada um dos elementos

async function fetchTransactions() {
  const transactions = await fetch("http://localhost:3000/transactions").then(
    (res) => res.json()
  );
  transactions.forEach(render);
}

/**
 * Quando a DOM for carregada, executa o metodo fetchTransactions() para fazer a requisição GET das 
 * informações
 */
document.addEventListener("DOMContentLoaded", fetchTransactions);

/**
 * Quando o form de adicionar nova transação for "submitado", executa os procedimentos para evitar que 
 * a pagina atualize com o preventDefault, salva os valores preenchidos nos inputs do form para criar um
 * novo Objeto transaction, o mesmo é enviado pelo fetch, utilizando o metodo POST no corpo da requisição
 * 
 * 
 */
document.getElementById("addForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const transaction = {
    name: document.querySelector("#addName").value,
    value: document.querySelector("#addValue").value,
  };
  const response = await fetch("http://localhost:3000/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  });

  /**
   * Apenas pega os dados da requisição para poder renderizar em tempo real depois
   */
  const savedTransaction = await response.json();
  document.querySelector("form").reset();
  render(savedTransaction);
});

document
  .getElementById("removeForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const transactionId = document.querySelector("#removeId").value;

    await fetch(`http://localhost:3000/transactions/${transactionId}`, {
      method: "DELETE",
    });

    document.getElementById(`div-${transactionId}`).remove();
    document.querySelector("form").reset();
    fetchTransactions();
  });

document.getElementById("attForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const transaction = {
    id: document.querySelector("#attId").value,
    name: document.querySelector("#attName").value,
    value: document.querySelector("#attValue").value,
  };

  const response = await fetch(
    `http://localhost:3000/transactions/${transaction.id}`,
    {
      method: "PUT",
      body: JSON.stringify(transaction),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const savedTransaction = await response.json();

  document.getElementById(`div-${transaction.id}`).remove();
  document.querySelector("form").reset();
  render(savedTransaction);
  fetchTransactions();
});
