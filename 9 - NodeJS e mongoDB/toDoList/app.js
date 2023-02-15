//Importando o express do node_modules
const express = require("express");

/* Salvando na constante app todos os
 * metodos do express, no caso para ser
 * chamados na aplicação */
const app = express();

app.use(express.json());
/**
 * Criando um novo endpoint no root da aplicaçõa, e caso caia nele
 * o mesmo devolvera para o brownser o "MyList"
 */
app.get("/", (req, res) => {
  console.log("Bem Vindo!");
  res.send("<h1> My List </h1>");
});

/**
 * Criação de endpoint /json que retorna um objeto json para
 * quem fizer essa requisição
 */
app.get("/json", (req, res) => {
  res.json({ title: "Tarefa 1", done: true });
});

app.get("/teste", (req, res) => {
  res.send("<h1> Parabens, voce fez uma nova requisição ao /teste </h1>");
});
/**
 * Definindo que o servidor irá ouvir todas as requisições
 * localhost que cair na porta 3000
 */
app.listen(3000, () => {
  console.log("Servidor Ativo!");
});
