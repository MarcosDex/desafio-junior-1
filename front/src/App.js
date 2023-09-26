import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Produtos from "./Pages/Produtos";
import Tabs from "./components/Tabs"; // Importando a partir do diretório 'components'
import Tab from "./components/Tab"; // Importando a partir do diretório 'components'
import Sidebar from "./components/Sidebar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/produtos" element={<Produtos />} />{" "}
        {/* Página de Produtos */}
      </Routes>

      <div className="App">
        <div className="scroll-up-btn">
          <i className="fas fa-angle-up"></i>
        </div>
        <nav className="navbar">
          <div className="max-width">
            <div className="logo">
              <a href="#"></a>
            </div>
            <ul className="menu">
              <li>
                <a href="#home" className="menu-btn">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="menu-btn">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="menu-btn">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="menu-btn">
                  Skills
                </a>
              </li>
              <li>
                <a href="#teams" className="menu-btn">
                  Tools
                </a>
              </li>
              <li>
                <a href="#contact" className="menu-btn">
                  Contact
                </a>
              </li>
            </ul>
            <div className="menu-btn">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </nav>
        <section className="home" id="home">
          <div className="max-width">
            <div className="home-content">
              <div className="text-2">Bem vindo(a) ao WalkersPetshop</div>
              <div className="text-3">
                Venha conferir nossos preços que são caobinados para caberem no
                seu bolso <span className="typing"></span>
              </div>
              <a href="mailto:marcantoniosantosilva@gmail.com">
                Crie sua conta agora mesmo!
              </a>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="max-width">
            <h2 className="title">Sobre nós</h2>
            <div className="about-content">
              <div className="column left">
                <img src="/welcome.png" alt="" />
              </div>
              <div className="column right">
                <div className="text">
                  História da criação do Petshop
                  <span className="typing-2"></span>
                </div>
                <p>
                  Somos uma petshop que visa cuidar do bem estar do seu
                  amiguinho(o), pensando também no bem estar financeiro do(a)
                  dono(a), Fundada em 2012 pelo nosso saudosista Kunikuzushi
                  Walker, que dedicou sua vida a medicina veterinaria. Teve
                  então por clemencia de sua cidade (Inazuma) ele decidiu criar
                  um petshop que seria capaz de atender delivery para a
                  popolução. A loja então foi passada para seu neto WalkerAway
                  que acabou colocando o nome da loja como "Walkers"
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="max-width">
            <h2 className="title">Serviços</h2>
            <div className="serv-content">
              <div className="card">
                <div className="box">
                  <i className="fa-solid fa-gears"></i>
                  Produtos
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fa-solid fa-database"></i>
                  <div className="text">Delivery</div>
                </div>
              </div>
              <div className="card">
                <a href="https://portfolio-de-trabalhos.vercel.app">
                  <div className="box">
                    <i className="fa-solid fa-file"></i>
                    <div className="text">Agendamento</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <span>
            {" "}
            © {new Date().getFullYear()}{" "}
            <a href="https://www.linkedin.com/in/marcosdex/">
              Marcantonio Santos Silva
            </a>
            <span className="far fa-copyright"></span> All rights reserved.
          </span>
          <div className="footer-links">
            <a href="">Contato</a> {""}
            <a href="/politica-de-privacidade">Política de Privacidade</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
