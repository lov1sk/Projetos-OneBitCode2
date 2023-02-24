//Importando o express do node_modules
const express = require("express");
const mongoose = require("mongoose");
const taskModel = require("../models/Task");

//Criando uma constante router para a rota /checklists
const router = express.Router();

/**
 * Metodo para quando a rota /checklists for chamada no postman ou browser
 * ele retornar um console log
 */
router.get("/task-show", async (req, res) => {
  console.log("Bateu aqui");
  const taskList = await taskModel.find();
  return res.status(200).json(taskList);
});

router.post("/task-create", async (req, res) => {
  console.log("Bateu aqui");
  const taskCreated = await taskModel.create(req.body);
  return res.status(200).json(taskCreated);
});
//Exportando a rota /checklists
module.exports = router;
