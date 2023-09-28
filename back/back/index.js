const cors = require("cors"); // release cors

// app.use(express.json());

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(authRoutes);
app.use("/users", userRoutes);
//app.use("/funcoes", verifyToken, funcoesRoutes);
//app.use("/licenca", verifyToken, licencaRoutes);

app.listen(9000, () => {
  console.log("Servidor iniciado na porta 9000");
});
