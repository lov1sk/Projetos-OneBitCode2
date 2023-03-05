/**
 **************************************
 * Importando o express do node_modules
 **************************************
 */
const express = require("express");
const checklistModel = require("../models/checklist");
const router = express.Router();

/**
 *******************************
 * Rotas para criar um checklist
 *******************************
 */
router.get("/new", (req, res) => {
  let checklists = new checklistModel();
  return res.status(200).render("checklists/new", { checklist: checklists });
});
router.post("/", async (req, res) => {
  const newChecklist = await checklistModel.create(req.body.checklist);
  console.log({ newChecklist });
  res.status(200).redirect("/checklists");
});

/**
 ****************************************************************
 * Rotas para ver um checklist ou todos os checklists cadastrados
 ****************************************************************
 */
router.get("/checklists", async (req, res) => {
  const checklistsList = await checklistModel.find();
  return res
    .status(200)
    .render("checklists/index", { checklists: checklistsList });
});

router.get("/checklists/:id", async (req, res) => {
  const { id } = req.params;
  const checklist = await checklistModel.findById(id).populate("tasks");
  return res.status(200).render("checklists/show", { checklist: checklist });
});

/**
 *********************************************************
 * Rotas para a view edit e para poder editar os checklists
 *********************************************************
 */
router.get("/:id/edit", async (req, res) => {
  const { id } = req.params;
  const checklist = await checklistModel.findById(id);
  console.log(checklist);
  res.status(200).render("checklists/edit", { checklist: checklist });
});
router.put("/:id", async (req, res) => {
  let { name } = req.body.checklist;
  console.log(req.params);
  let checklist = await checklistModel.findById(req.params.id, { name });
  try {
    await checklist.updateOne({ name });
    res.status(200).redirect("/checklists");
  } catch (error) {}
});

/**
 ********************************
 * Rota para deletar um checklist
 ********************************
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await checklistModel.findByIdAndDelete(id);
  res.status(200).redirect("/checklists");
});

//Exportando a rota /checklists como um middleware
module.exports = router;
