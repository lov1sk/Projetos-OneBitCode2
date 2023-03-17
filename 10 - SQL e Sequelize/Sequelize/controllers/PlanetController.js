const PlanetModel = require("../models/Planet");

/**
 * Criando um objeto app que recebe como atributos, metodos CRUD para manipulação do
 * banco de dados PostgreSQL com o sequelize
 */
const PlanetController = {
  createPlanet: async (req, res) => {
    const { name, position } = req.body;
    console.log(name);

    const newPlanet = await PlanetModel.create({
      name: name,
      position: position,
    });
    res.status(200).json(newPlanet);
  },
  showPlanets: async (req, res) => {
    const planets = await PlanetModel.findAll();
    return res.status(200).json(planets);
  },
  updatePlanet: async (req, res) => {
    const { id } = req.params;
    const { name, position } = req.body;
    const planetToUpdate = await PlanetModel.findByPk(id);
    planetToUpdate.name = name;
    planetToUpdate.position = position;
    const planetUpdated = await planetToUpdate.save();
    return res.status(200).json(planetUpdated);
  },
  deletePlanet: async (req, res) => {
    const { id } = req.params;
    const planetToRemove = await PlanetModel.findByPk(id);
    await planetToRemove.destroy();
    return res.status(200).json(planetToRemove);
  },
};

/**
 * Exportando o objeto App
 */
module.exports = PlanetController;
