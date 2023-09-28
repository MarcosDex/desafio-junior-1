const { DataTypes } = require("sequelize");
const sequelize = require("../bd"); // Conexão com o banco de dados
const bcrypt = require("bcrypt");

const Users = sequelize.define("Users", {
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

Users.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.senhaHash, 10);
  user.senhaHash = hashedPassword;
});

module.exports = Users;
