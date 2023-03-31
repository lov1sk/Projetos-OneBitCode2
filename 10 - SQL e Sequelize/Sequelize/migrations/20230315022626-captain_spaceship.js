"use strict";

const Captain_spaceship = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("captain_spaceship", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      spaceshipId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "spaceship", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      captainId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "captains", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("captain_spaceship");
  },
};

module.exports = Captain_spaceship;
