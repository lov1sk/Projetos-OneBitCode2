//Importando o express do node_modules
const express = require("express");
const checklist = require("./src/routes/checklist.js");
const index = require("./src/routes/index");
const task = require("./src/routes/task.js");
const path = require("path");
const mongo = require("./src/config/database.js");
/* Salvando na constante app todos os
 * metodos do express, no caso para ser
 * chamados na aplicação */
const app = express();
mongo();

/** Uso de um middleware que processa se possui algum json no body da requisição e salva em req.body
 * Neste caso de midleware, ele deixa sempre em maos a informação do json no body da requisição para ser usada */
app.use(express.json());

app.use(checklist);
app.use(task);
app.use(index);
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

/**
 * Utilizando o middleware router feito para lidar com a rota de /checklists, definido no app.user
 */

/**
 * Definindo que o servidor irá ouvir todas as requisições
 * localhost que cair na porta 3000
 */

app.listen(3000, () => {
  console.log("Servidor Ativo!");
});
