import { useContext } from 'react';
import { CarrinhoContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // ajuste o caminho conforme sua estrutura
import "../App.css";
import "../index.css";

function CartPage() {
  const { carrinho, removerDoCarrinho, limparCarrinho } = useContext(CarrinhoContext);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Header centralizado em um único componente */}
      <Header />

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
