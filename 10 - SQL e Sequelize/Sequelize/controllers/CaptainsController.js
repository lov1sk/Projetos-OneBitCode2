const CaptainsModel = require("../models/Captains");

const CaptainsController = {
  create: async (req, res) => {
    const { name } = req.body;

    const newCaptain = await CaptainsModel.create({
      name,
    });
    return res.status(200).json(newCaptain);
  },
  show: async (req, res) => {
    const captains = await CaptainsModel.findAll();
    res.status(200).json(captains);
  },
};

module.exports = CaptainsController;
