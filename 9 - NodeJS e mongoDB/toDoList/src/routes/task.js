//Importando o express do node_modules
const express = require("express");
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

router.get("/task-show/:id", async (req, res) => {
  const { id } = req.params;
  const tasks = await taskModel.findById(id);
  return res.status(200).render("tasks/show", { tasks: tasks });
});
router.put("/task-update/:id", async (req, res) => {
  console.log("Bateu aqui");
  const { id } = req.params;
  const taskUpdated = await taskModel.findByIdAndUpdate(id, req.body);
  return res.status(200).json(taskUpdated);
});
router.delete("/task-delete/:id", async (req, res) => {
  const { id } = req.params;
  const taskDeleted = await taskModel.findByIdAndDelete(id);
  return res.status(200).json(taskDeleted);
});
//Exportando a rota /checklists
module.exports = router;
