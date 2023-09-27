const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("southland", "postgres", "marcantoniosantos1", {
  host: "localhost",
  dialect: "postgres", // ou outro dialect apropriado
});

module.exports = sequelize;
