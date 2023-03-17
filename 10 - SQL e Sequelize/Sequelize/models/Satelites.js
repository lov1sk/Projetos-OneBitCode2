const Sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const SatelitesModel = Sequelize.define("satelites", {
  name: DataTypes.STRING,
  serialNumber: DataTypes.STRING,
  planetId: DataTypes.INTEGER,
});

module.exports = SatelitesModel;
