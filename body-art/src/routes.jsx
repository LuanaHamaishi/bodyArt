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
import Agendamentos from "./pages/gerenciarAgendamento/Agendamentos";
import AgendamentosCliente from "./pages/gerenciarAgendamento/AgendamentosCliente";
import Dashboard from "./pages/Dashboard/Dashboard";

const PageRoute = ({
  page,
  headerTransparent,
  backgroundColor,
  logoDark,
  homeEnabled,
  company,
}) => {
  return (
    <>
      <Header
        role={sessionStorage.getItem("userRole")}
        headerTransparent={headerTransparent}
        backgroundColor={backgroundColor}
        logoDark={logoDark}
        homeEnabled={homeEnabled}
        company={company}
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
        <Route
          path="/empresa"
          element={
            <PageRoute page={<ParaEmpresa />} headerTransparent company />
          }
        />
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
        <Route
          path="/agendamentos"
          element={
            <PageRoute
              page={<Agendamentos />}
              backgroundColor={color.beigeDark}
              logoDark
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PageRoute
              page={<Dashboard />}
              backgroundColor={color.beigeDark}
              logoDark
            />
          }
        />
        <Route
          path="/agendamentos-cliente"
          element={
            <PageRoute
              page={<AgendamentosCliente />}
              backgroundColor={color.beigeDark}
              logoDark
            />
          }
        />
        <Route path="*" element={<PageRoute page={<NotFound />} />} />
      </Routes>
    </Router>
  );
}
