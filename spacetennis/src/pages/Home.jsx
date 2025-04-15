import React, { useState, useContext } from "react";
import { CarrinhoContext } from "../contexts/CartContext";
import ProductCard from "../components/ProductCard/ProductCard";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header"; // Caminho para o componente Header
import Footer from "../components/Footer"; // Ajuste o caminho de acordo com a estrutura do seu projeto

function Home() {
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]); // Faixa de preço inicial
  const [freeShipping, setFreeShipping] = useState("");

  const produtos = [
    { id: 1, nome: "Raquete Espacial", descricao: "Alta performance nas galáxias.", categoria: "raquete", preco: 100, freteGratis: true },
    { id: 2, nome: "Bola Lunar", descricao: "Quique ideal mesmo em baixa gravidade.", categoria: "bola", preco: 50, freteGratis: false },
    { id: 3, nome: "Camiseta GalaxyDry", descricao: "Conforto interestelar para seu treino.", categoria: "camiseta", preco: 80, freteGratis: true },
    { id: 4, nome: "Grip Nebuloso", descricao: "Pegada firme em qualquer planeta.", categoria: "raquete", preco: 120, freteGratis: false },
    { id: 5, nome: "Tênis Nebuloso", descricao: "Ajuste perfeito para velocidade na órbita.", categoria: "tenis", preco: 150, freteGratis: true },
    { id: 6, nome: "Raquete Vortex", descricao: "Controle de precisão intergaláctico.", categoria: "raquete", preco: 200, freteGratis: false },
    { id: 7, nome: "Camiseta Solar", descricao: "Conforto para qualquer clima espacial.", categoria: "camiseta", preco: 90, freteGratis: true },
    { id: 8, nome: "Bola Cósmica", descricao: "Desafie a gravidade com cada jogada.", categoria: "bola", preco: 60, freteGratis: false },
    { id: 9, nome: "Kit Espacial", descricao: "Tudo o que você precisa para jogar nas estrelas.", categoria: "kit", preco: 250, freteGratis: true },
    { id: 10, nome: "Raqueteira Galáctica", descricao: "Proteção e estilo para suas raquetes.", categoria: "raquete", preco: 180, freteGratis: false },
  ];

  // Filtrando os produtos
  const filteredProducts = produtos.filter((produto) => {
    return (
      (search ? produto.nome.toLowerCase().includes(search.toLowerCase()) : true) &&
      (category ? produto.categoria === category : true) &&
      (priceRange[0] <= produto.preco && produto.preco <= priceRange[1]) &&
      (freeShipping ? produto.freteGratis === (freeShipping === "sim") : true)
    );
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-sans overflow-x-hidden">
      <Header />

      <section className="w-full text-center py-16 px-8 bg-[url('/galaxy-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Explore o universo do tênis
        </h2>
        <p className="text-lg md:text-xl mx-auto max-w-4xl">
          Eleve seu jogo ao infinito e além.
        </p>
      </section>

      <section id="produtos" className="w-full py-16 px-8">
        <h3 className="text-2xl font-semibold mb-8 text-center text-yellow-300">
          Nossos Produtos
        </h3>

        {/* Filtros e campo de pesquisa */}
        <div className="mb-8 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <input
              type="text"
              placeholder="Pesquisar por nome..."
              className="p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Categoria</option>
              <option value="raquete">Raquete</option>
              <option value="bola">Bola</option>
              <option value="camiseta">Camiseta</option>
            </select>
            <div className="w-64">
              <label htmlFor="price-range" className="block text-sm mb-2">Preço (R$)</label>
              <input
                type="range"
                id="price-range"
                min="0"
                max="500"
                step="10"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, e.target.value])}
                className="w-full bg-blue-500 rounded-md"
              />
              <div className="flex justify-between text-xs mt-1">
                <span>Até R$ {priceRange[1]}</span>
              </div>
            </div>
            <select
              className="p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              onChange={(e) => setFreeShipping(e.target.value)}
            >
              <option value="">Frete</option>
              <option value="sim">Frete grátis</option>
              <option value="nao">Frete pago</option>
            </select>
          </div>
        </div>

        {/* Lista de Produtos */}
        <div className="block md:hidden overflow-y-auto max-h-[80vh]">
          {filteredProducts.map((produto) => (
            <div key={produto.id} className="mb-8">
              <ProductCard produto={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
            </div>
          ))}
        </div>

        {/* Desktop - Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 max-w-screen-lg mx-auto">
          {filteredProducts.map((produto) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });

            return (
              <div key={produto.id} className="flex justify-center">
                <div ref={ref} className={`${inView ? "animate__animated animate__fadeInUp" : ""}`}>
                  <ProductCard produto={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
