// routes/users.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { nome, email, telefone, endereco, senhaHash } = req.body;

    // Verifica se a licença está ativa e se está de acordo com a função
    // Implemente a lógica de validação aqui

    const newUser = await User.create({
      nome,
      email,
      telefone,
      endereco,
      senhaHash,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar usuário." });
  }
});

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  // Recupere o registro do usuário com base no email
  const user = await User.findOne({ where: { email } });

  // Verifique se o usuário existe
  if (!user) {
    return res.status(401).json({ mensagem: "Email ou senha inválidos" });
  }

  // Compare a senha fornecida pelo usuário com a senha criptografada no banco de dados
  const isPasswordValid = await bcrypt.compare(senha, user.senha);

  if (isPasswordValid) {
    // Senha correta, autenticação bem-sucedida
    res.json({ mensagem: "Login bem-sucedido" });
  } else {
    // Senha incorreta, exiba uma mensagem de erro
    res.status(401).json({ mensagem: "Email ou senha inválidos" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar usuários." });
  }
});


router.delete("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    await user.destroy();

    res.status(200).json({ message: "Usuário excluído com sucesso." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao excluir usuário." });
  }
});

router.get("/check-matricula/:matricula", async (req, res) => {
  try {
    const { matricula } = req.params;
    const existingUser = await User.findOne({ where: { matricula } });

    if (existingUser) {
      // Se uma matrícula com o mesmo valor já existe
      res.json({ exists: true });
    } else {
      // Se a matrícula não existe
      res.json({ exists: false });
    }
  } catch (error) {
    console.error("Erro ao verificar matrícula:", error);
    res.status(500).json({ error: "Erro ao verificar matrícula" });
  }
});

module.exports = router;