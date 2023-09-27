const { DataTypes } = require("sequelize");
const sequelize = require("../bd");
const bcrypt = require("bcrypt");

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
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Proprietario = sequelize.define("Proprietario", {
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
});

// Associações
Animal.belongsTo(Proprietario, { foreignKey: "ProprietarioId" });
Proprietario.hasMany(Animal, { foreignKey: "ProprietarioId" });

// Antes de criar um novo proprietário, faça o hash da senha
Proprietario.beforeCreate(async (proprietario) => {
  if (proprietario.senhaHash) {
    const hash = await bcrypt.hash(proprietario.senhaHash, 10);
    proprietario.senhaHash = hash;
  }
});

module.exports = { Animal, Proprietario };
