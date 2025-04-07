import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'animate.css'; // Importando o animate.css
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="/produto/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
