const CaptainsModel = require("../models/Captains");
const PlanetsModel = require("../models/Planet");
const SatelitesModel = require("../models/Satelites");
const SpaceshipModel = require("../models/Spaceship");

/*
 * Relacionamento 1 x 1,o planeta tem 1 satelite e 1 satelite pertence a 1 planeta
PlanetsModel.hasOne(SatelitesModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
SatelitesModel.belongsTo(PlanetsModel, {
  foreignKey: "planetId",
  as: "planets",
});*/

/**
 * Relacionamento 1 para muitos, 1 planeta pode ter varios satelites,
 *  mas 1 satelite só opde pertencer a 1 planeta
 */
PlanetsModel.hasMany(SatelitesModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
SatelitesModel.belongsTo(PlanetsModel, {
  foreignKey: "planetId",
  as: "planets",
});

CaptainsModel.belongsToMany(SpaceshipModel, {
  foreignKey: "captainId",
  through: "captain_spaceship",
  as: "spaceship",
});
SpaceshipModel.belongsToMany(CaptainsModel, {
  foreignKey: "spaceshipId",
  through: "captain_spaceship",
  as: "captains",
});
module.exports = {
  PlanetsModel,
  SatelitesModel,
  CaptainsModel,
  SpaceshipModel,
};
