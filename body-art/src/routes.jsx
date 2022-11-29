import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Professionals from "./pages/Professionals";
import Home from "./pages/Home";
import InitialClient from "./pages/InitialClient";
import NotFound from "./pages/NotFound";
import ParaEmpresa from "./pages/ParaEmpresa";
import Portifolio from "./pages/portifolio/Portifolio";
import Test from "./pages/Test";
import View from "./pages/portifolio/View";
import Header from "./components/Header";
import TesteNotification from "./pages/TesteNotification";
import { color } from "./assets/colors";
import ProfessionalSelect from "./pages/ProfessionalSelect";

const PageRoute = ({
  page,
  headerTransparent,
  backgroundColor,
  logoDark,
  homeEnabled,
}) => {
  return (
    <>
      <Header
        role={sessionStorage.userRole}
        headerTransparent={headerTransparent}
        backgroundColor={backgroundColor}
        logoDark={logoDark}
        homeEnabled={homeEnabled}
      />
      {page}
    </>
  );
};

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<PageRoute page={<Home />} headerTransparent homeEnabled />}
        />
        <Route path="/empresa" headerTransparent homeEnabled element={<PageRoute page={<ParaEmpresa />} />} />
        <Route
          path="/inicio-cliente"
          element={
            <PageRoute
              page={<InitialClient />}
              backgroundColor={color.beigeDark}
              logoDark
            />
          }
        />
        <Route
          path="/profissionais/:categoria"
          element={
            <PageRoute
              page={<ProfessionalSelect />}
              backgroundColor={color.beigeDark}
              logoDark
            />
          }
        />
        <Route
          path="/profissional/:id/:nome"
          element={
            <PageRoute
              page={<Professionals />}
              backgroundColor={color.beigeDark}
              logoDark
            />
          }
        />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route
          path="/portifolio/view/:idProfissional/:idPortifolio"
          element={<View />}
        />
        <Route path="/test" element={<PageRoute page={<Test />} />} />
        <Route path="/teste-notification" element={<TesteNotification />} />
        <Route path="*" element={<PageRoute page={<NotFound />} />} />
      </Routes>
    </Router>
  );
}
