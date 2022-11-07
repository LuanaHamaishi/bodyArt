import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import ParaEmpresa from "./pages/ParaEmpresa";
import Portifolio from "./pages/portifolio/Portifolio";
import Test from "./pages/Test";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<ParaEmpresa />} />
        <Route path="/test" element={<Test />} />
        <Route path="/portifolio" element={<Portifolio />} />
      </Routes>
    </Router>
  );
}
