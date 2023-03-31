const express = require("express");
const routes = require("./routes");
const app = express();
require("./config/associations");

/**
 * Middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

/**
 * Habilitando o servidor na porta 3000
 */
app.listen(3000, () => {
  console.log("Servidor expressJS ativo na porta 3000");
});
