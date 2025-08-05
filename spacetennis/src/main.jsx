import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CarrinhoProvider } from "./contexts/CartContext";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Envolvemos a aplicação com o CarrinhoProvider para permitir acesso ao carrinho globalmente
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarrinhoProvider>
      <App />
    </CarrinhoProvider>
  </React.StrictMode>
);
