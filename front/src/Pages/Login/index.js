import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import cadastrologo from "../../imgs/cadastrologo.png";
import axios from "axios";
import Footer from "../../Footer";
import "../Cadastro/cadastro.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/users/login", {
        email: email,
        senhaHash: password,
      });

      if (response.data.mensagem === "Login bem-sucedido") {
        console.log("Login bem-sucedido!");
        console.log(response);
        navigate("/agendamentos");
      } else {
        console.log("Login Incorreto!");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Não foi encontrado nenhum usuário com este email ou senha...");
    }
  };

  return (
    <>
      <Header />
      <div>
        <div className="banner">
          <div className="logo">
            <img
              src={cadastrologo}
              alt="logo-cadastro"
              style={{ float: "right", width: "90%" }}
              height={250}
              width={350}
            />
          </div>
        </div>
        <div className="full-page">
          <div className="side-image">
            <div className="image-text">
              <p></p>
            </div>
          </div>
          <div className="login-welcome">
            <p className="login-text"></p>
          </div>
          <form onSubmit={handleSubmit} style={{ width: "50%" }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              id="email"
              required
              onChange={(e) => handleEmailChange(e)}
            />
            <br />
            <label>Senha:</label>
            <br />
            <input
              type="password"
              value={password}
              required
              onChange={(e) => handlePasswordChange(e)}
            />
            <p className="cadastrar">
              Ainda não possui uma conta?{" "}
              <a
                href="./cadastro"
                style={{
                  color: "#88005B",
                  textDecoration: "underline",
                }}
              >
                Registre-se
              </a>
            </p>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
