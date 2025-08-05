import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CarrinhoContext } from "../contexts/CartContext";
import Header from "../components/Header";

// Simulando os produtos reais (mesmo da Home)
const produtos = [
  { id: 1, nome: "Raquete Espacial", preco: 100, descricao: "Alta performance nas galáxias.", imagem: "/racket-rocket.jpg" },
  { id: 2, nome: "Bola Lunar", preco: 50, descricao: "Quique ideal mesmo em baixa gravidade.", imagem: "/racket-rocket.jpg" },
  { id: 3, nome: "Camiseta GalaxyDry", preco: 80, descricao: "Conforto interestelar para seu treino.", imagem: "/racket-rocket.jpg" },
  { id: 4, nome: "Grip Nebuloso", preco: 120, descricao: "Pegada firme em qualquer planeta.", imagem: "/racket-rocket.jpg" },
  { id: 5, nome: "Tênis Nebuloso", preco: 150, descricao: "Ajuste perfeito para velocidade na órbita.", imagem: "/racket-rocket.jpg" },
  { id: 6, nome: "Raquete Vortex", preco: 200, descricao: "Controle de precisão intergaláctico.", imagem: "/racket-rocket.jpg" },
  { id: 7, nome: "Camiseta Solar", preco: 90, descricao: "Conforto para qualquer clima espacial.", imagem: "/racket-rocket.jpg" },
  { id: 8, nome: "Bola Cósmica", preco: 60, descricao: "Desafie a gravidade com cada jogada.", imagem: "/racket-rocket.jpg" },
  { id: 9, nome: "Kit Espacial", preco: 250, descricao: "Tudo o que você precisa para jogar nas estrelas.", imagem: "/racket-rocket.jpg" },
  { id: 10, nome: "Raqueteira Galáctica", preco: 180, descricao: "Proteção e estilo para suas raquetes.", imagem: "/racket-rocket.jpg" },
];

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);
  const [quantidade, setQuantidade] = useState(1);
  const [adicionado, setAdicionado] = useState(false);

  const produto = produtos.find((p) => p.id === Number(id));

  if (!produto) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl text-yellow-400">Produto não encontrado 😢</p>
      </div>
    );
  }

  const handleAdicionarAoCarrinho = () => {
    adicionarAoCarrinho({ ...produto, quantidade });
    setAdicionado(true);
    setTimeout(() => {
      setAdicionado(false);
      navigate("/carrinho");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="px-4 py-10 md:py-16 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="w-full rounded-xl shadow-lg"
          />

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-2">{produto.nome}</h1>
            <p className="text-yellow-300 text-2xl font-semibold mb-4">
              R$ {produto.preco.toFixed(2).replace(".", ",")}
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {produto.descricao}
            </p>

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
                className={`text-lg font-semibold py-2 px-6 rounded transition-all duration-300 ${
                  adicionado
                    ? "bg-green-600 text-white"
                    : "bg-yellow-300 text-black hover:bg-yellow-400"
                }`}
              >
                {adicionado ? "Adicionado ✅" : "Adicionar ao carrinho"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
