import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ParaEmpresa from "./pages/ParaEmpresa";
import Test from "./pages/Test";

export default function Rotas() {
  return (
    <Router>
      <Header btn1="SOBRE" btn2="PARA EMPRESAS" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<ParaEmpresa />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}
