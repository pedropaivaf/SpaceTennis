import { createContext, useEffect, useState } from 'react';

export const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState(() => {
    const salvo = localStorage.getItem('carrinho');
    return salvo ? JSON.parse(salvo) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => [...prev, produto]);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== id));
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
