import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Professionals from "./pages/Professionals";
import Home from "./pages/Home";
import InitialClient from "./pages/InitialClient";
import NotFound from "./pages/NotFound";
import ParaEmpresa from "./pages/ParaEmpresa";
import Test from "./pages/Test";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<ParaEmpresa />} />
        <Route path="/inicio-cliente" element={<InitialClient />} />
        <Route path="/profissionais/:categoria" element={<Professionals />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
