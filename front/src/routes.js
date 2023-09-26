import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/produtos" element={<Produtos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
