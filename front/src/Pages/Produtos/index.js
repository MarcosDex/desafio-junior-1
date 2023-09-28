import React, { useState } from "react";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import logocima from "../Produtos/logocima.jpg";
import bolinha from "../Produtos/41DEl3vmZVL._AC_UF1000,1000_QL80_.jpg";
import arranhador from "../Produtos/arra.jpg";
import kit from "../Produtos/24092c5a2b15208a109e5ca67834a929.jpg";
import peddog from "../Produtos/81SE1Pw7rdL._AC_UF1000,1000_QL80_.jpg";
import wiskascat from "../Produtos/179178_racao-pedigree-para-gato-adulto-carne-900gr-p562053_m1_638144105143963040.png";
import "./produtos.css";

function Produtos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const produtos = [
    {
      id: 1,
      nome: "Bolinha Anti-Stress",
      categoria: "Brinquedos",
      imagem: bolinha,
      preço: "R$20,00",
    },
    {
      id: 2,
      nome: "Arranhador",
      categoria: "Brinquedos",
      imagem: arranhador,
      preço: "R$100,00",
    },
    {
      id: 3,
      nome: "Kit Caes/Gatos",
      categoria: "Brinquedos",
      imagem: kit,
      preço: "R$85,00",
    },
    {
      id: 4,
      nome: "Pedigree Cachorro",
      categoria: "Raçoes",
      imagem: peddog,
      preço: "R$150,00",
    },
    {
      id: 5,
      nome: "Whiskas Gato",
      categoria: "Raçoes",
      imagem: wiskascat,
      preço: "R$120,00",
    },
  ];

  const filteredProdutos =
    categoriaSelecionada === "Todos"
      ? produtos
      : produtos.filter(
          (produto) => produto.categoria === categoriaSelecionada
        );

  return (
    <>
      <Header />
      <div id="container">
        <header>
          <picture>
            <img
              src={logocima}
              alt="logo"
              style={{ width: "250px", height: "auto" }}
            />
          </picture>
        </header>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                className={
                  categoriaSelecionada === "Todos"
                    ? "abaescolha selecionado"
                    : "abaescolha"
                }
                onClick={() => setCategoriaSelecionada("Todos")}
              >
                Todos
              </a>
            </li>
            <li>
              <a
                href="#"
                className={
                  categoriaSelecionada === "Brinquedos"
                    ? "abaescolha selecionado"
                    : "abaescolha"
                }
                onClick={() => setCategoriaSelecionada("Brinquedos")}
              >
                Brinquedos
              </a>
            </li>
            <li>
              <a
                href="#"
                className={
                  categoriaSelecionada === "Raçoes"
                    ? "abaescolha selecionado"
                    : "abaescolha"
                }
                onClick={() => setCategoriaSelecionada("Raçoes")}
              >
                Rações
              </a>
            </li>
            {/* Adicione mais categorias aqui */}
          </ul>
        </nav>

        <main>
          <header>
            <h1>{categoriaSelecionada}</h1>
          </header>
          <section className="produtos">
            {filteredProdutos.map((produto) => (
              <section className="produto" key={produto.id}>
                <img src={produto.imagem} alt={produto.nome} />
                <p onClick={() => alert("Adicionado ao Carrinho!")}>
                  {produto.nome}
                  <br></br>
                  {produto.preço}
                </p>
              </section>
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Produtos;
