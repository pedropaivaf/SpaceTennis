import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductPage from './ProductPage.jsx'
import CartPage from './CartPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { CarrinhoProvider } from './contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarrinhoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/produto/:id" element={<ProductPage />} />
          <Route path="/carrinho" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CarrinhoProvider>
  </React.StrictMode>,
)
