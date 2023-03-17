"use strict";

const SpaceshipMigration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("spaceship", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("spaceship");
  },
};

module.exports = SpaceshipMigration;
