import { Link } from "react-router-dom";
import logo from "../Header/logo.png";
import "../Header/header.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="max-width">
        <Link to="/">
          <div className="logo">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "190px", height: "auto" }}
            />
          </div>
        </Link>
        <ul className="menu">
          <li>
            <Link to="/" className="menu-btn">
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="menu-btn">
              Sobre
            </Link>
          </li>
          <li>
            <a href="" className="menu-btn">
              Serviços
            </a>
            <ul class="dropdown">
              <li>
                <Link to="/Produtos">Produtos</Link>
              </li>
              <li>
                <Link to="/Delivery">Delivery</Link>
              </li>
              <li>
                <Link to="/Agendamentos">Agendamento</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Cadastro" className="menu-btn">
              {" "}
              Cadastrar
            </Link>
          </li>
          <li>
            <Link to="/login" className="menu-btn">
              {" "}
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
