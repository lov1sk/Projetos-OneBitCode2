/**
 ***********************
 * Importação do express
 ***********************
 */
const express = require("express");
const routes = express.Router();

/**
 * Rota base para redirecionar a base do website
 */
routes.get("/", async (req, res) => {
  res.render("pages/index");
});

module.exports = routes;
