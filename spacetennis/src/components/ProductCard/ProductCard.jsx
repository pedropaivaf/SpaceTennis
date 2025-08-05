import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CarrinhoContext } from "../../contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductCard({ produto }) {
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleComprar = () => {
    adicionarAoCarrinho({ ...produto, quantidade: 1 });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // some após 2 segundos
  };

  const irParaProduto = () => {
    navigate(`/produto/${produto.id}`);
  };

  return (
    <div className="relative bg-gray-800 text-white p-4 rounded-lg shadow-lg w-full max-w-xs flex flex-col justify-between">
      <img
        src="/racket-rocket.jpg"
        alt={produto.nome}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h4 className="text-lg font-semibold mb-1">{produto.nome}</h4>
      <p className="text-yellow-300 font-semibold mb-2">
        R$ {produto.preco.toFixed(2).replace('.', ',')}
      </p>

      <div className="flex gap-2">
        <button
          onClick={irParaProduto}
          className="flex-1 bg-transparent border border-yellow-400 text-yellow-400 py-1 px-2 rounded hover:bg-yellow-400 hover:text-black transition"
        >
          Ver Produto
        </button>
        <button
          onClick={handleComprar}
          className="flex-1 bg-yellow-400 text-black py-1 px-2 rounded hover:bg-yellow-500 transition"
        >
          Comprar
        </button>
      </div>

      {/* Toast de confirmação */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-4 py-2 rounded shadow-lg text-sm font-semibold"
          >
            ✅ Adicionado ao carrinho!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
