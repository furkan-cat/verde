import { Route, Routes } from "react-router-dom";
import Home from "@pages/home/home";
import "./App.css";
import { routes } from "@constants/routes";
import Layout from "./layout/layout";
import Detail from "@pages/detail/detail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} path={routes.home} />
        <Route element={<Detail />} path={routes.details} />
      </Route>
    </Routes>
  );
}

export default App;
