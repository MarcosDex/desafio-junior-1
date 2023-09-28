import React, { useState } from "react";
import Header from "../../Header/index";
import axios from "axios";
import logocadastro from "../../imgs/cadastrologo.png";

import "./cadastro.css";
import Footer from "../../Footer";

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setMatricula] = useState("");
  const [endereco, setLicenca] = useState("");
  const [senhaHash, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleMatriculaChange = (e) => {
    setMatricula(e.target.value);
  };

  const handleLicencaChange = (e) => {
    setLicenca(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senhaHash !== confPassword) {
      alert("Senhas não são iguais");
      return;
    }

    try {
      // Verifique se o email já existe no banco de dados
      const emailexists = await axios.get(
        `http://localhost:9000/users/check-email/${email}`
      );

      if (emailexists.data.exists) {
        alert(
          "Já existe uma conta associada a esta matrícula. Para mais informações entrar em contato com algum(a) administrador(a)"
        );
        return;
      }

      // Se o email não existe, continue com o cadastro
      const response = await axios.post(
        "http://localhost:9000/users/register",
        {
          nome: name,
          email: email,
          telefone: telefone,
          endereco: endereco,
          senhaHash: senhaHash,
        }
      );

      setMessage(response.data.mensagem);

      setName("");
      setMatricula("");
      setLicenca("");
      setEmail("");
      setPassword("");
      setConfPassword("");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Ocorreu um erro ao cadastrar o usuário.");
    }
  };
  return (
    <>
      <Header />
      <div>
        <div className="banner">
          <div className="logo">
            <img src="" alt="logo-wyden" />
          </div>
        </div>
        <div className="full-page">
          <div className="side-image">
            <div className="image-text">
              <p>
                Agende com facilidade na Clínica Walkers! Atendimento de
                qualidade e para cuidar da saúde do seu pet com comodidade.
              </p>
            </div>
            <img src={logocadastro} alt="clinica" height={350} width={350} />
          </div>
          <div className="side-content">
            <div className="container">
              <div className="cadastro-welcome">
                <p>
                  Bem-vindo ao{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Agendamentos da Clínica Walkers! <br />
                  </span>
                  Estamos comprometidos em oferecer aos nossos pacientes um{" "}
                  <span style={{ fontWeight: "bold" }}>
                    atendimento de saúde excepcional. <br />
                  </span>
                  Venha conferir! 😷
                </p>
              </div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <label>Nome:</label>
                <br />
                <input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => handleChange(e)}
                />
                <br />
                <label>Email:</label>
                <br />
                <input
                  type="text"
                  value={email}
                  required
                  onChange={(e) => handleEmailChange(e)}
                />
                <br />
                <label>telefone:</label>
                <br />
                <input
                  type="text"
                  value={telefone}
                  required
                  onChange={(e) => handleMatriculaChange(e)}
                />
                <br />
                <label>endereco:</label>
                <br />
                <input
                  id="endereco"
                  type="text"
                  value={endereco}
                  required
                  onChange={(e) => handleLicencaChange(e)}
                />
                <br />
                <label>Senha:</label>
                <br />
                <input
                  type="password"
                  value={senhaHash}
                  required
                  onChange={(e) => handlePasswordChange(e)}
                />
                <br />
                <label>Confirmar Senha:</label>
                <br />
                <input
                  type="password"
                  value={confPassword}
                  required
                  onChange={(e) => handleConfPasswordChange(e)}
                />
                <br />
                <input type="submit" id="castra" value="Cadastrar" />
                <p className="logar">
                  Já possuo conta.{" "}
                  <a
                    href="./login"
                    style={{
                      color: "#88005B",
                      textDecoration: "underline",
                    }}
                  >
                    Entrar
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cadastro;
