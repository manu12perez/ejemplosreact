import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SumarNumeros from "./components/SumarNumeros/SumarNumeros";
import App from "./components/App/App";
import SaludoPadre from "./components/SaludoPadre";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SumarNumeros numero1="5" numero2="3" />
    <SumarNumeros numero1="84" numero2="116" /> */}
    <SaludoPadre />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
