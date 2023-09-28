import Header from "../../Header/index";
import Footer from "../../Footer/index";

function Sobre() {
  return (
    <>
      <Header />
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">Sobre nós</h2>
          <div className="about-content">
            <div className="column left">
              <img src="/welcome.png" alt="" />
            </div>
            <div className="column right">
              <div className="text">História da criação do Petshop</div>
              <p className="abouti">
                Somos uma petshop que visa cuidar do bem estar do seu
                amiguinho(o), pensando também no bem estar financeiro do(a)
                dono(a), Fundada em 2012 pelo nosso saudosista Kunikuzushi
                Walker, que dedicou sua vida a medicina veterinaria. Teve então
                por clemencia de sua cidade (Inazuma) decidiu criar um petshop
                que seria capaz de atender com delivery para a popolução. A loja
                então foi passada para seu neto WalkerAway que acabou colocando
                o nome da loja como "Walkers"
              </p>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <Footer />
    </>
  );
}

export default Sobre;
