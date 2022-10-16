import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import ParaEmpresa from "./pages/ParaEmpresa";
import Test from "./pages/Test";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<ParaEmpresa />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}
