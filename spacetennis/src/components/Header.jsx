import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { CarrinhoContext } from "../contexts/CartContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { carrinho } = useContext(CarrinhoContext);

  return (
    <header className="w-full bg-gray-900 text-white px-6 py-4 border-b border-gray-700">
      <div className="flex justify-between items-center w-full">
        {/* Logo e nome */}
        <div className="flex items-center space-x-3">
          <img src="/logo-saturno.png" alt="Logo SpaceTennis" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-green-400">
            <span className="text-yellow-300">Space</span>Tennis
          </h1>
        </div>

        {/* Navegação para desktop */}
        <nav className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <a href="#produtos" className="hover:text-yellow-300">Produtos</a>
          <a href="#contato" className="hover:text-yellow-300">Contato</a>

          {/* Carrinho */}
          <Link to="/carrinho" className="relative">
            <ShoppingCart size={24} />
            {carrinho.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-300 text-black text-xs font-bold px-1 rounded-full">
                {carrinho.length}
              </span>
            )}
          </Link>
        </nav>

        {/* Menu hambúrguer para mobile */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu móvel */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <a href="#produtos" className="block hover:text-yellow-300">Produtos</a>
          <a href="#contato" className="block hover:text-yellow-300">Contato</a>
        </div>
      )}
    </header>
  );
}

export default Header;
