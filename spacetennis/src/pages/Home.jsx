import "../App.css";
import "../index.css";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CarrinhoContext } from "../contexts/CartContext";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { useInView } from "react-intersection-observer";

function Home() {
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  const produtos = [
    { id: 1, nome: "Raquete Espacial", descricao: "Alta performance nas galáxias." },
    { id: 2, nome: "Bola Lunar", descricao: "Quique ideal mesmo em baixa gravidade." },
    { id: 3, nome: "Camiseta GalaxyDry", descricao: "Conforto interestelar para seu treino." },
    { id: 4, nome: "Grip Nebuloso", descricao: "Pegada firme em qualquer planeta." },
    { id: 5, nome: "Tênis Nebuloso", descricao: "Ajuste perfeito para velocidade na órbita." },
    { id: 6, nome: "Raquete Vortex", descricao: "Controle de precisão intergaláctico." },
    { id: 7, nome: "Camiseta Solar", descricao: "Conforto para qualquer clima espacial." },
    { id: 8, nome: "Bola Cósmica", descricao: "Desafie a gravidade com cada jogada." },
    { id: 9, nome: "Kit Espacial", descricao: "Tudo o que você precisa para jogar nas estrelas." },
    { id: 10, nome: "Raqueteira Galáctica", descricao: "Proteção e estilo para suas raquetes." },
  ];

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
          Produtos em destaque
        </h3>

        {/* Mobile - Carrossel */}
        <div className="block md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1} loop={true} autoplay={{ delay: 3000 }} pagination={{ clickable: true }}>
            {produtos.map((produto) => (
              <SwiperSlide key={produto.id}>
                <ProductCard produto={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop - Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtos.map((produto) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });

            return (
              <div key={produto.id} className="flex justify-center">
                <div
                  ref={ref}
                  className={`${
                    inView ? "animate__animated animate__fadeInUp" : ""
                  }`}
                >
                  <ProductCard produto={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="w-full text-center py-6 border-t border-gray-700 mt-12">
        <p className="text-sm text-gray-500">
          © 2025 SpaceTennis. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Home;
