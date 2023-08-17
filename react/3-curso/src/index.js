import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Link, Outlet, Route, Routes
} from "react-router-dom";
import NetworkCall from "./8_network";
import HelloJSXSample from "./1_hello";
import Expresiones from "./2_expresiones";
import Clock from "./3_clock";
import { ActionLink, Toggle } from "./4_eventos";
import { NumberList, NumberList2 } from "./5_listas";
import { NameForm } from "./6_forms";
import EjemploRedux from "./10_redux_example";
import { StyleCSS, StyleCssFile, StyleModuleCssFile, StyleObject } from "./7_css";
import { ReactReducer } from "./9_react_reducer";
import { JsRxReducer } from "./11_isrx_example";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link><br />
        <Link to="/helloFunc">Hola Funcional y JSX</Link><br />
        <Link to="/expresions">Expresiones </Link><br />
        <Link to="/estado">Estado en clases </Link><br />
        <Link to="/eventos">Eventos </Link><br />
        <Link to="/listas">Listas </Link><br />
        <Link to="/forms">Formularios </Link><br />
        <Link to="/css">Estilos CSS </Link><br />
        <Link to="/network">Acceso a red</Link><br />
        <Link to="/reducer">React Reducer</Link><br />
        <Link to="/redux">Redux </Link><br />
        <Link to="/jsrx">JsRx </Link><br />

        <Routes>
          <Route path="/helloFunc" element={<HelloJSXSample />} />
          <Route path="/expresions" element={<Expresiones />} />
          <Route path="/estado" element={<Clock />} />
          <Route path="/eventos" element={
            <div>
              <ActionLink />
              <Toggle />
            </div>
          } />
          <Route path="/listas" element={
            <div>
              <NumberList />
              <NumberList2 numbers={[1, 2, 3]} />
            </div>
          } />
          <Route path="/forms" element={<NameForm />} />
          <Route path="/css" element={
            <div>
              <StyleCSS />
              <StyleObject />
              <StyleCssFile />
              <StyleModuleCssFile />
            </div>
          } />
          <Route path="/network" element={<NetworkCall />} />
          <Route path="/reducer" element={<ReactReducer />} />
          <Route path="/redux" element={<EjemploRedux />} />
          <Route path="/jsrx" element={<JsRxReducer />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Outlet />
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

