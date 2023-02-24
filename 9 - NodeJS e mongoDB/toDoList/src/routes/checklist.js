//Importando o express do node_modules
const express = require("express");
const mongoose = require("mongoose");
const checklistModel = require("../models/checklist");
const taskModel = require("../models/Task");

//Criando uma constante router para a rota /checklists
const router = express.Router();

/**
 * Metodo para quando a rota /checklists for chamada no postman ou browser
 * ele retornar um console log
 */
router.get("/task", async (req, res) => {
  const taskCreated = await taskModel.create(req.body);
  return res.status(200).json(taskCreated);
});

router.get("/checklist-create", async (req, res) => {});

router.get("/checklist-show", async (req, res) => {
  const checklistsList = await checklistModel.find();
  return res.status(200).json(checklistsList);
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

router.post("/checklist-create", async (req, res) => {
  console.log("Bateu aqui");
  const checklistCreated = await checklistModel.create(req.body);
  return res.status(200).json(checklistCreated);
});

router.post("/task-create", async (req, res) => {
  console.log("Bateu aqui");
  const taskCreated = await taskModel.create(req.body);
  return res.status(200).json(taskCreated);
});
//Exportando a rota /checklists
module.exports = router;
