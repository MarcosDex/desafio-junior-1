const { DataTypes } = require("sequelize");
const sequelize = require("../bd");

const Animal = sequelize.define("Animal", {
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
  ProprietarioId: {
    type: DataTypes.INTEGER, // Isso representa a chave estrangeira para o Proprietario
    allowNull: false,
  },
});

module.exports = Animal;
