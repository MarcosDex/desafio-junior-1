// Contato.js
import React from "react";
import Header from "../../Header/index";
import "./produtos.css";

function Produtos() {
  // Aqui você pode adicionar a lógica para listar os produtos, por exemplo, buscá-los de uma fonte de dados.
  // Vamos criar uma lista de produtos fictícia para demonstração.

  const produtos = [
    { id: 1, nome: "Produto 1", descricao: "Descrição do Produto 1" },
    { id: 2, nome: "Produto 2", descricao: "Descrição do Produto 2" },
    { id: 3, nome: "Produto 3", descricao: "Descrição do Produto 3" },
  ];

  return (
    <>
      <Header />
      <div>
        <h1>Produtos</h1>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Produtos;
