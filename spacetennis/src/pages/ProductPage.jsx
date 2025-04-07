import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CarrinhoContext } from "../contexts/CartContext";
import Header from "../components/Header";
import "../App.css";
import "../index.css";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);
  const [quantidade, setQuantidade] = useState(1);

  const produto = {
    id,
    nome: "Bola Espacial Pro",
    preco: "R$ 89,90",
    descricao:
      "A bola oficial da SpaceTennis. Alta durabilidade, ideal para quadras rápidas e lentas.",
    imagem: "/racket-rocket.jpg",
  };

  const handleAdicionarAoCarrinho = () => {
    adicionarAoCarrinho({ ...produto, quantidade });
    navigate("/carrinho");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="px-4 py-10 md:py-16 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagem do produto */}
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="w-full rounded-xl shadow-lg"
          />

          {/* Conteúdo */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-2">{produto.nome}</h1>
            <p className="text-yellow-300 text-2xl font-semibold mb-4">{produto.preco}</p>
            <p className="text-gray-300 mb-8 leading-relaxed">{produto.descricao}</p>

            {/* Seletor + Botão */}
            <div className="flex items-center gap-4">
              <input
                type="number"
                min="1"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="w-16 bg-gray-800 text-white text-center rounded border border-gray-600 py-2"
              />
              <button
                onClick={handleAdicionarAoCarrinho}
                className="btn-loja bg-yellow-300 text-black hover:bg-yellow-400 text-lg font-semibold py-2 px-6"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
