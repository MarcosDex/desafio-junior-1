import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Delivery from "./Pages/Delivery";
import Sobre from "./Pages/Sobre";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Agendamentos from "./Pages/Agendamentos";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/produtos" element={<Produtos />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/agendamentos" element={<Agendamentos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
