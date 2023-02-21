//Importando o express do node_modules
const express = require("express");

//Criando uma constante router para a rota /checklists
const router = express.Router();

/**
 * Metodo para quando a rota /checklists for chamada no postman ou browser
 * ele retornar um console log
 */
router.get("/", (req, res) => {
  console.log("teste");
  res.send();
});
/**
 * Metodo para retornar no response o id passado em /checklists/id
 * o ":" significa que a rota em questão recebera um parametro
 */
router.get("/:id", (req, res) => {
  res.send(`ID: ${req.params.id}`);
});
router.put("/:id", (req, res) => {
  res.send(`PUT ID: ${req.params.id}`);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});
//Exportando a rota /checklists
module.exports = router;
