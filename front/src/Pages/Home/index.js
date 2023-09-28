import React from "react";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import "../../App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>

      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-2">Bem vindo(a) ao WalkersPetshop</div>
            <div className="text-3">
              Venha conferir nossos preços que são caobinados para caberem no
              seu bolso <span className="typing"></span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
