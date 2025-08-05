import React, { useState, useContext } from "react";
import { CarrinhoContext } from "../contexts/CartContext";
import ProductCard from "../components/ProductCard/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";

// Componente que aplica o efeito com useInView de forma isolada
function ProductWrapper({ produto, adicionarAoCarrinho }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`flex justify-center ${inView ? "animate__animated animate__fadeInUp" : ""
        }`}
    >
      <ProductCard produto={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
    </div>
  );
}

function Home() {
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [freeShipping, setFreeShipping] = useState("");
  const [maxPrice, setMaxPrice] = useState(500);

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

  const filteredProducts = produtos.filter((produto) => {
    const matchSearch = produto?.nome?.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category ? produto.categoria === category : true;
    const matchPrice = produto.preco <= Number(maxPrice);
    const matchShipping = freeShipping === "" ? true : produto.freteGratis === (freeShipping === "sim");
    return matchSearch && matchCategory && matchPrice && matchShipping;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-sans overflow-x-hidden">
      <Header />

      <section className="w-full text-center py-16 px-4 sm:px-8 bg-[url('/galaxy-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Explore o universo do tênis
        </h2>
        <p className="text-lg md:text-xl mx-auto max-w-4xl">
          Eleve seu jogo ao infinito e além.
        </p>
      </section>

      {/* BENEFÍCIOS DA SPACE TENNIS */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
        <div>
          <i className="fas fa-truck text-yellow-400 text-4xl mb-3"></i>
          <h4 className="font-bold text-lg">Frete Rápido</h4>
          <p className="text-sm text-gray-300">Entrega para todo o Brasil em até 48h.</p>
        </div>
        <div>
          <i className="fas fa-shield-alt text-yellow-400 text-4xl mb-3"></i>
          <h4 className="font-bold text-lg">Compra Segura</h4>
          <p className="text-sm text-gray-300">Pagamento 100% protegido e criptografado.</p>
        </div>
        <div>
          <i className="fas fa-star text-yellow-400 text-4xl mb-3"></i>
          <h4 className="font-bold text-lg">Qualidade Garantida</h4>
          <p className="text-sm text-gray-300">Produtos testados e aprovados por atletas.</p>
        </div>
      </div>

      <section className="text-center mt-10">
        <h2 className="text-3xl font-bold text-yellow-400 mb-2">Explore o universo do tênis</h2>
        <p className="text-gray-300 mb-8">Eleve seu jogo ao infinito e além.</p>
      </section>

      {/* BANNER DE DESCONTO */}
      <div className="bg-white text-black text-center py-4 px-6 rounded-lg mx-auto max-w-3xl font-semibold mb-12 shadow-md animate__animated animate__fadeInDown">
        🎁 <span className="font-bold">Ganhe 10% de desconto</span> na sua primeira compra! Use o cupom <span className="font-bold text-lime-600">SPACESTART</span> no carrinho.
      </div>

      <section id="produtos" className="w-full py-16 px-4 sm:px-8">
        <h3 className="text-2xl font-semibold mb-8 text-center text-yellow-300">
          Nossos Produtos
        </h3>

        {/* Filtros estilosos */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-end">
            {/* Campo de busca */}
            <input
              type="text"
              placeholder="Pesquisar por nome..."
              className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Categoria */}
            <select
              className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Categoria</option>
              <option value="raquete">Raquete</option>
              <option value="bola">Bola</option>
              <option value="camiseta">Camiseta</option>
              <option value="tenis">Tênis</option>
              <option value="kit">Kit</option>
            </select>

            {/* Preço */}
            <div className="flex items-center gap-2 w-full max-w-xs">
              <input
                type="range"
                min="0"
                max="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-yellow-400"
              />
              <span className="text-yellow-300 text-sm">Até R$ {maxPrice}</span>
            </div>

            {/* Frete */}
            <select
              className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={(e) => setFreeShipping(e.target.value)}
            >
              <option value="">Frete</option>
              <option value="sim">Frete grátis</option>
              <option value="nao">Frete pago</option>
            </select>
          </div>
        </div>

        {/* Produtos com animação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((produto) => (
            <ProductWrapper
              key={produto.id}
              produto={produto}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
