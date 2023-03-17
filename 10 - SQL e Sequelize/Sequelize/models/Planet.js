const Sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const PlanetModel = Sequelize.define("planets", {
  name: DataTypes.STRING,
  position: DataTypes.INTEGER,
});

module.exports = PlanetModel;
