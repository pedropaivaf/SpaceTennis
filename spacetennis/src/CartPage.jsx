import { useContext, useState } from 'react';
import { CarrinhoContext } from './contexts/CartContext';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import './App.css';
import './index.css';

function CartPage() {
  const { carrinho, removerDoCarrinho, limparCarrinho } = useContext(CarrinhoContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700 relative z-10">
        <div className="flex items-center space-x-3">
          <img src="/logo-saturno.png" alt="Logo SpaceTennis" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-green-400">
            <span className="text-yellow-300">Space</span>Tennis
          </h1>
        </div>
        <nav className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <a href="#produtos" className="hover:text-yellow-300">Produtos</a>
          <a href="#" className="hover:text-yellow-300">Contato</a>
          <Link to="/carrinho" className="relative">
            <ShoppingCart size={24} />
            {carrinho.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-300 text-black text-xs font-bold px-1 rounded-full">
                {carrinho.length}
              </span>
            )}
          </Link>
        </nav>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {menuOpen && (
          <div className="absolute top-full right-6 mt-2 bg-gray-900 rounded shadow-md flex flex-col items-start w-40 py-2 px-4 space-y-2 md:hidden">
            <Link to="/" className="hover:text-yellow-300 w-full">Home</Link>
            <a href="#produtos" className="hover:text-yellow-300 w-full">Produtos</a>
            <a href="#" className="hover:text-yellow-300 w-full">Contato</a>
          </div>
        )}
      </header>

      {/* Conteúdo do carrinho */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-yellow-300">Seu Carrinho</h1>

        {carrinho.length === 0 ? (
          <p className="text-gray-400">Seu carrinho está vazio.</p>
        ) : (
          <div className="space-y-4">
            {carrinho.map((item, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-800 p-4 rounded shadow">
                <div>
                  <h2 className="text-lg font-bold">{item.nome}</h2>
                  <p className="text-sm text-gray-400">ID: {item.id}</p>
                </div>
                <button
                  onClick={() => removerDoCarrinho(item.id)}
                  className="text-red-500 hover:text-red-400 text-sm"
                >
                  Remover
                </button>
              </div>
            ))}

            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={limparCarrinho}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
              >
                Limpar carrinho
              </button>
              <Link
                to="/checkout"
                className="bg-yellow-300 text-black px-6 py-2 rounded hover:bg-yellow-400 font-semibold"
              >
                Finalizar compra
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
