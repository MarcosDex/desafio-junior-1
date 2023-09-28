import "../Footer/footer.css";

function Footer() {
  return (
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
        <a href="https://drive.google.com/file/d/1CQGIZZVGxkJ7aevyUgnaWK8PhK_JRreO/view?usp=sharing">
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
}

export default Footer;
