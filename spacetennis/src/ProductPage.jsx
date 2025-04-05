import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { useContext, useState } from "react";
import { CarrinhoContext } from "./contexts/CartContext";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);
  const [quantidade, setQuantidade] = useState(1); // Estado para a quantidade

  // Simulação de um produto (em breve será dinâmico via JSON ou banco)
  const produto = {
    id,
    nome: "Bola Espacial Pro",
    preco: "R$ 89,90",
    descricao:
      "A bola oficial da SpaceTennis. Alta durabilidade, ideal para quadras rápidas e lentas.",
    imagem: "/racket-rocket.jpg",
  };

  const handleAdicionarAoCarrinho = (produto) => {
    adicionarAoCarrinho({ ...produto, quantidade }); // Adiciona o produto com a quantidade ao carrinho
    navigate("/carrinho"); // Redireciona para a página do carrinho
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full rounded-xl shadow-lg"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{produto.nome}</h1>
          <p className="text-yellow-300 text-2xl font-semibold mb-4">{produto.preco}</p>
          <p className="text-gray-300 mb-6">{produto.descricao}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleAdicionarAoCarrinho(produto)}
              className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition flex-1"
            >
              Adicionar ao carrinho
            </button>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="w-16 bg-gray-800 text-white text-center rounded border border-gray-600"
              />
              <button
                onClick={() => handleAdicionarAoCarrinho(produto)}
                className="bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-400 transition flex-1"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
