import { Link } from 'react-router-dom'; // Importando o Link corretamente
import './product-card.css'; // Importando o CSS do ProductCard

function ProductCard({ produto, adicionarAoCarrinho }) {
  return (
    <div className="product-card flex flex-col justify-between bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-yellow-300 transition w-full">
      <div className="w-full h-48 bg-gray-700 rounded mb-4 flex items-center justify-center overflow-hidden">
        <span className="text-4xl">🎾</span>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-bold mb-1 text-ellipsis overflow-hidden">{produto.nome}</h4>
          <p className="text-sm text-gray-400 mb-4">{produto.descricao}</p>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          <Link to={`/produto/${produto.id}`} className="block w-full">
            <button className="btn-loja w-full bg-yellow-300 text-black hover:bg-yellow-400">
              Ver produto
            </button>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                adicionarAoCarrinho({ id: produto.id, nome: produto.nome })
              }
              className="btn-loja flex-1 bg-green-500 text-white hover:bg-green-400"
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
    </div>
  );
}

export default ProductCard;
