const express = require("express");
const router = express.Router();

/**
 * Criando um novo endpoint no root da aplicaçõa, e caso caia nele
 * o mesmo devolvera para o brownser o "MyList"
 */
router.get("/", (req, res) => {
  console.log("Bem Vindo!");
  res.send("<h1> Pagina Principal </h1>");
});
/**
 * Criação de endpoint /json que retorna um objeto json para
 * quem fizer essa requisição
 */

router.get("/json", (req, res) => {
  console.log(req.body);
  res.json({ title: "Tarefa 1", done: true });
});

module.exports = router;
