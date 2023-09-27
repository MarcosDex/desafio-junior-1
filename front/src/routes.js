import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Delivery from "./Pages/Delivery";
import Agendamentos from "./Pages/Agendamentos";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/produtos" element={<Produtos />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/agendamentos" element={<Agendamentos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
