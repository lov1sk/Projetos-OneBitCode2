const Sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const SpaceshipModel = Sequelize.define(
  "spaceship",
  {
    name: DataTypes.STRING,
  },
  { tablename: "spaceship " }
);

module.exports = SpaceshipModel;
