const CaptainsModel = require("../models/Captains");
const SpaceshipModel = require("../models/Spaceship");

//routes.post("/captains/:captainId/spaceships", SpaceshipsController.create);
const SpaceshipController = {
  create: async (req, res) => {
    const { captainId } = req.params;
    const { name } = req.body;
    const captain = await CaptainsModel.findByPk(captainId);

    if (!captain) {
      return res.status(400).json({ message: "captain not found" });
    }

    const [spaceship] = await SpaceshipModel.findOrCreate({
      where: { name },
    });
    console.log(captain);
    console.log(spaceship);
    const created = await captain.addSpaceships(spaceship);
    return res.status(200).json(created);
  },
  show: async (req, res) => {
    const { captainId } = req.params;
    const cap = await CaptainsModel.findByPk(captainId, {
      include: { association: "spaceships" },
    });
    res.status(200).json(cap);
  },
};

module.exports = SpaceshipController;
