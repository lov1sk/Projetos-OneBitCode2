const Sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const CaptainsModel = Sequelize.define("captains", {
  name: DataTypes.STRING,
});

module.exports = CaptainsModel;
