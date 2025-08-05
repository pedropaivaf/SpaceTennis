import React, { useContext, useState } from "react";
import { CarrinhoContext } from "../contexts/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";

function CartPage() {
  const {
    carrinho,
    removerDoCarrinho,
    alterarQuantidade,
    limparCarrinho,
  } = useContext(CarrinhoContext);

  const [confetti, setConfetti] = useState(false);

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const finalizarCompra = () => {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
      limparCarrinho();
      alert("Compra finalizada com sucesso! 🚀");
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <Header />
      {confetti && <Confetti />}

      <main className="flex-grow">
        <section className="py-16 px-4 sm:px-8 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-10">Seu Carrinho</h2>

          {carrinho.length === 0 ? (
            <p className="text-gray-400">Seu carrinho está vazio.</p>
          ) : (
            <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg p-6 space-y-6">
              <AnimatePresence>
                {carrinho.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 rounded p-4 gap-4"
                  >
                    <div className="text-left w-full sm:w-auto flex-1">
                      <h4 className="font-semibold text-yellow-300">{item.nome}</h4>
                      <p className="text-sm text-gray-300">
                        {item.quantidade}x R$ {item.preco.toFixed(2).replace(".", ",")}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          alterarQuantidade(item.id, Math.max(1, item.quantidade - 1))
                        }
                        className="bg-yellow-500 text-black px-2 rounded hover:bg-yellow-400"
                      >
                        -
                      </button>
                      <span>{item.quantidade}</span>
                      <button
                        onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}
                        className="bg-yellow-500 text-black px-2 rounded hover:bg-yellow-400"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removerDoCarrinho(item.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
                      >
                        Remover
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <hr className="border-gray-700" />
              <div className="flex justify-between text-lg font-bold px-2">
                <span>Total:</span>
                <span className="text-green-400">
                  R$ {total.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <button
                onClick={finalizarCompra}
                className="w-full mt-4 bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded transition"
              >
                Finalizar Compra
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CartPage;
