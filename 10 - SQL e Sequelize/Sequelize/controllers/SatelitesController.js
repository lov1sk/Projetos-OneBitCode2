const PlanetModel = require("../models/Planet");
const SateliteModel = require("../models/Satelites");

//:planetId/satelites
const SatelitesController = {
  create: async (req, res) => {
    const { planetId } = req.params;
    const { name, serialNumber } = req.body;
    const planet = await PlanetModel.findByPk(planetId);

    if (!planet) {
      return res.status(400).json({ message: "Planet not found" });
    }

    const sateliteCreated = await SateliteModel.create({
      name: name,
      serialNumber: serialNumber,
      planetId: planetId,
    });

    return res.status(200).json(sateliteCreated);
  },
  show: async (req, res) => {
    const { planetId } = req.params;
    const planet = await PlanetModel.findByPk(planetId, {
      include: SateliteModel,
    });

    if (!planet) {
      return res.status(400).json({ message: "Planet not found" });
    }

    return res.status(200).json(planet);
  },
};

module.exports = SatelitesController;
