import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Prestadores from "../pages/Prestadores/Prestadores";
import Voluntariado from "../pages/Voluntariado/Voluntariado";
import Sobre from "../pages/Sobre/Sobre";
import Contato from "../pages/Contato/Contato";
import Login from "../pages/Login/Login";

export function AppRoutes() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prestadores" element={<Prestadores />} />
            <Route path="/voluntariado" element={<Voluntariado />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    );
}