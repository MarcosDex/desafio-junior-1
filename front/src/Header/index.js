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
            <a href="#about" className="menu-btn">
              Sobre
            </a>
          </li>
          <li>
            <a href="#services" className="menu-btn">
              Serviços
            </a>
          </li>
          <li>
            <Link to="/Agendamentos">
            <a href="" className="menu-btn">
              Cadastrar
            </a>
            </Link>
          </li>
        </ul>
        </div>
    </nav>
  );
}

export default Header;
