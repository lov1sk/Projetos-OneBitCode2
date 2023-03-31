const Sequelize = require("sequelize");
const database = require("./config");

module.exports = new Sequelize(database);
