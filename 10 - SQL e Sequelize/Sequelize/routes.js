const express = require("express");
const PlanetController = require("./controllers/PlanetController");
const SatelitesController = require("./controllers/SatelitesController");
const CaptainsController = require("./controllers/CaptainsController");
const SpaceshipController = require("./controllers/SpaceshipController");
const routes = express.Router();

/**
 * Rotas para criação apenas de planetas
 */
routes.post("/planets", PlanetController.createPlanet);
routes.get("/planets", PlanetController.showPlanets);
routes.put("/planets/:id", PlanetController.updatePlanet);
routes.delete("/planets/:id", PlanetController.deletePlanet);

/**
 * Rotas para criação de planetas contendo 1 Satelite
 */
routes.post("/planets/:planetId/satelites", SatelitesController.create);
routes.get("/planets/:planetId/satelites", SatelitesController.show);
/*
routes.put("/planets/:planetId/:sateliteId", SatelitesController.update);
routes.delete("/planets/:planetId/:sateliteId", SatelitesController.delete);
*/

/**
 * Rotas para criar uma capitao
 */
routes.post("/captains", CaptainsController.create);
routes.get("/captains", CaptainsController.show);

/**
 * Rotas para criar um espaconave
 */
routes.post("/captains/:captainId/spaceship", SpaceshipController.create);
routes.get("/captains/:captainId/spaceship", SpaceshipController.show);
module.exports = routes;
