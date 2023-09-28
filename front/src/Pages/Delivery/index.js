import React from "react";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import "./delivery.css";

function Delivery() {
  return (
    <>
      <Header />
      <div className="delivery-container">
        <h1>Política de Entrega</h1>

        <h2>Área de Cobertura</h2>
        <p>Atendemos as seguintes áreas: Caruaru e Região.</p>

        <h2>Taxas de Entrega</h2>
        <p>
          As taxas de entrega variam de acordo com a distância e o valor do
          pedido. Entre em contato para obter informações detalhadas sobre as
          taxas.
        </p>

        <h2>Prazo de Entrega</h2>
        <p>
          O prazo de entrega estimado é de 1 a 3 dias úteis após a confirmação
          do pedido.
        </p>

        <h2>Horário de Entrega</h2>
        <p>Realizamos entregas das 9h às 18h, de segunda a sexta-feira.</p>

        <h2>Política de Devolução</h2>
        <p>
          Aceitamos devoluções de produtos entregues com defeito dentro de 7
          dias úteis a partir da data de entrega. Entre em contato conosco para
          iniciar o processo de devolução.
        </p>

        <h2>Métodos de Pagamento</h2>
        <p>
          Aceitamos os seguintes métodos de pagamento para a taxa de entrega:
          Dinheiro, Pix, Credito e Debito.
        </p>

        <h2>Contato</h2>
        <p>
          Se tiver alguma dúvida ou precisar de mais informações sobre nossa
          política de entrega, não hesite em nos contatar:
        </p>
        <p>Telefone: +55 81 99952-8282</p>
        <p>Email: walkerspetshop@gmail.com</p>
      </div>
      <Footer />
    </>
  );
}

export default Delivery;
