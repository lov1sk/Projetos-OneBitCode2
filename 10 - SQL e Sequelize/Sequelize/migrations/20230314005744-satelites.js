"use strict";

const SatelitesMigration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("satelites", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      serialNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      planetId: {
        type: Sequelize.INTEGER,
        references: { model: "planets", key: "id" },
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
    await queryInterface.dropTable("satelites");
  },
};

module.exports = SatelitesMigration;
