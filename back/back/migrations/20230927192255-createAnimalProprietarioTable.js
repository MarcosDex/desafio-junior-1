"use strict";
const { DataTypes } = require("sequelize"); // Importe o DataTypes do Sequelize

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Animals", {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      raca: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    await queryInterface.createTable("Proprietarios", {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endereco: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senhaHash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ProprietarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Proprietarios",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });

    // Adicione quaisquer comandos adicionais necessários, como chaves estrangeiras
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Animals");
    await queryInterface.dropTable("Proprietarios");
  },
};
