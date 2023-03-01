//Importando o express do node_modules
const express = require("express");
const checklistModel = require("../models/checklist");
const router = express.Router();

router.post("/checklist-create", async (req, res) => {
  const checklistCreated = await checklistModel.create(req.body);
  return res.status(200).json(checklistCreated);
});

router.get("/checklist-show", async (req, res) => {
  const checklistsList = await checklistModel.find();
  return res
    .status(200)
    .render("checklists/index", { checklists: checklistsList });
});
/**
 * Metodo para retornar no response o id passado em /checklists/id
 * o ":" significa que a rota em questão recebera um parametro
 */
router.get("/checklist-show/:id", async (req, res) => {
  const { id } = req.params;
  const checklist = await checklistModel.findById(id);
  return res.status(200).render("checklists/show", { checklist: checklist });
});
router.put("/checklist-update/:id", async (req, res) => {
  console.log("Bateu aqui");
  const { id } = req.params;
  const updatedChecklist = await checklistModel.findByIdAndUpdate(id, req.body);
  return res.status(200).json(updatedChecklist);
});
router.delete("/checklist-delete/:id", async (req, res) => {
  const { id } = req.params;
  const checklistDeleted = await checklistModel.findByIdAndDelete(id);
  return res.status(200).json(checklistDeleted);
});

//Exportando a rota /checklists
module.exports = router;
