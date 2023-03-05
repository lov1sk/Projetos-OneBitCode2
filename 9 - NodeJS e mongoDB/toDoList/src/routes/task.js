/**
 * Importando o express, os models de task e checklist e
 * criação de rotas dependentes e independentes de checklist
 */
const express = require("express");
const taskModel = require("../models/Task");
const checklistModel = require("../models/checklist");
const checklistDependentRoute = express.Router();
const simpleRoute = express.Router();

/**
 *********************************************************
 * Rotas para adicionar tarefas a um determinado checklist
 *********************************************************
 */
checklistDependentRoute.get("/checklists/:id/tasks/new", async (req, res) => {
  let task = taskModel();
  return res
    .status(200)
    .render("tasks/new", { checklistId: req.params.id, task: task });
});

checklistDependentRoute.post("/:id/tasks", async (req, res) => {
  let { name } = req.body.task;
  let task = new taskModel({ name, checklist: req.params.id });
  await task.save();
  let checklist = await checklistModel.findById(req.params.id);
  checklist.tasks.push(task);
  await checklist.save();
  res.redirect(`/checklists/${req.params.id}`);
});

/**
 *****************************************************
 * Rotas para mudar o estado de uma task: Done, Undone
 *****************************************************
 */
simpleRoute.put("/task/:id", async (req, res) => {
  let task = await taskModel.findById(req.params.id);
  task.set(req.body.task);
  await task.save();
  return res.status(200).json({ task });
});
simpleRoute.delete("/task/:id", async (req, res) => {
  let task = await taskModel.findByIdAndDelete(req.params.id);
  let checklist = await checklistModel.findById(task.checklist);
  let taskToRemove = checklist.tasks.indexOf(task._id);
  checklist.tasks.slice(taskToRemove, 1);
  checklist.save();
  res.redirect(`/checklists`);
});

/**
 ***********************************************************
 * Exportando as rotas checklistDependentRoute e simpleRoute
 * como metodos de um objeto
 ***********************************************************
 */

module.exports = {
  checklistDependent: checklistDependentRoute,
  simpleRoute: simpleRoute,
};
