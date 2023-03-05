/**
 ****************************************
 * Importando o express do node_modules
 ****************************************
 **/
const express = require("express");
const checklist = require("./src/routes/checklist.js");
const index = require("./src/routes/index");
const task = require("./src/routes/task.js");
const path = require("path");
const mongo = require("./src/config/database.js");
const methodOverride = require("method-override");
const app = express();
mongo();

/**
 ****************************************
 * Utilização de middlewares do expressJS
 ****************************************
 **/
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method", { methods: ["GET", "POST"] }));
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(index);
app.use(checklist);
app.use(task.checklistDependent);
app.use(task.simpleRoute);

/**
 *********************************************************
 * Definindo que o servidor irá ouvir todas as requisições
 * localhost que cair na porta 3000
 *********************************************************
 **/
app.listen(3000, () => {
  console.log("Servidor Ativo!");
});
