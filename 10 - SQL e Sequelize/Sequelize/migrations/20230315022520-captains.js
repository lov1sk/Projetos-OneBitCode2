"use strict";

const CaptainsMigration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("captains", {
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
    await queryInterface.dropTable("captains");
  },
};

module.exports = CaptainsMigration;
