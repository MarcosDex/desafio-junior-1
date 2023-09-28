const cors = require("cors"); // release cors

// app.use(express.json());

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//const testAPIRouter = require("./routes/testAPI");
const userRoutes = require("./routes/users");
//const funcoesRoutes = require("./routes/funcoes");
//const licencaRoutes = require("./routes/licenca");
//const authRoutes = require("./routes/authRoutes"); // Importe suas rotas de autenticação
//const { verifyToken } = require("./middlewares/verifyToken");

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
