//Importando o express do node_modules
const express = require("express");

const checklists = require("./src/routes/checklist.js");

/* Salvando na constante app todos os
 * metodos do express, no caso para ser
 * chamados na aplicação */
const app = express();

const log = (req, res, next) => {
  console.log(`Data agora : ${Date.now()}`);
  next();
};

/** Uso de um middleware que processa se possui algum json no body da requisição e salva em req.body
 * Neste caso de midleware, ele deixa sempre em maos a informação do json no body da requisição para ser usada */
app.use(express.json());

//app.use(log);

/**
 * Utilizando o middleware router feito para lidar com a rota de /checklists, definido no app.user
 */
app.use("/checklists", checklists);
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
  console.log(req.body);
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
