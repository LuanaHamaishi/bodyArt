import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
