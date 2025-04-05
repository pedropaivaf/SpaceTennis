import './App.css';
import './index.css';
import { useState, useContext } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { CarrinhoContext } from './contexts/CartContext';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { carrinho, adicionarAoCarrinho } = useContext(CarrinhoContext);

  const produtos = [
    { id: 1, nome: 'Raquete Espacial', descricao: 'Alta performance nas galáxias.' },
    { id: 2, nome: 'Bola Lunar', descricao: 'Quique ideal mesmo em baixa gravidade.' },
    { id: 3, nome: 'Camiseta GalaxyDry', descricao: 'Conforto interestelar para seu treino.' },
    { id: 4, nome: 'Grip Nebuloso', descricao: 'Pegada firme em qualquer planeta.' }
  ];

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
          <a href="#" className="hover:text-yellow-300">Home</a>
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
            <a href="#" className="hover:text-yellow-300 w-full" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#produtos" className="hover:text-yellow-300 w-full" onClick={() => setMenuOpen(false)}>Produtos</a>
            <a href="#" className="hover:text-yellow-300 w-full" onClick={() => setMenuOpen(false)}>Contato</a>
          </div>
        )}
      </header>

      {/* Banner */}
      <section className="flex flex-col items-center text-center py-20 px-4 bg-[url('/galaxy-bg.jpg')] bg-cover bg-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Explore o universo do tênis</h2>
        <p className="text-lg md:text-xl max-w-2xl">
          Os melhores equipamentos para superar seus limites até onde nenhum homem jamais foi.
        </p>
      </section>

      {/* Produtos em destaque */}
      <section id="produtos" className="py-12 px-6">
        <h3 className="text-2xl font-semibold mb-8 text-center text-yellow-300">Produtos em destaque</h3>

        {/* Mobile Carrossel */}
        <div className="block md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1}>
            {produtos.map((produto) => (
              <SwiperSlide key={produto.id}>
                <div className="bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-yellow-300 transition">
                  <div className="w-full h-48 bg-gray-700 rounded mb-4 flex items-center justify-center">
                    <span className="text-4xl">🎾</span>
                  </div>
                  <h4 className="text-lg font-bold mb-1">{produto.nome}</h4>
                  <p className="text-sm text-gray-400 mb-4">{produto.descricao}</p>
                  <div className="flex flex-col gap-2">
                    <Link to={`/produto/${produto.id}`} className="block w-full">
                      <button className="btn-loja bg-yellow-300 text-black hover:bg-yellow-400">
                        Ver produto
                      </button>
                    </Link>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => adicionarAoCarrinho({ id: produto.id, nome: produto.nome })}
                        className="btn-loja bg-green-500 text-white hover:bg-green-400"
                      >
                        Comprar
                      </button>
                      <input
                        type="number"
                        min={1}
                        defaultValue={1}
                        className="w-12 text-center bg-gray-800 border border-gray-600 rounded py-1"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-yellow-300 transition">
              <div className="w-full h-48 bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-4xl">🎾</span>
              </div>
              <h4 className="text-lg font-bold mb-1">{produto.nome}</h4>
              <p className="text-sm text-gray-400 mb-4">{produto.descricao}</p>
              <div className="flex flex-col gap-2">
                <Link to={`/produto/${produto.id}`} className="block w-full">
                  <button className="btn-loja bg-yellow-300 text-black hover:bg-yellow-400">
                    Ver produto
                  </button>
                </Link>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => adicionarAoCarrinho({ id: produto.id, nome: produto.nome })}
                    className="btn-loja bg-green-500 text-white hover:bg-green-400"
                  >
                    Comprar
                  </button>
                  <input
                    type="number"
                    min={1}
                    defaultValue={1}
                    className="w-12 text-center bg-gray-800 border border-gray-600 rounded py-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center py-6 border-t border-gray-700 mt-12">
        <p className="text-sm text-gray-500">© 2025 SpaceTennis. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
