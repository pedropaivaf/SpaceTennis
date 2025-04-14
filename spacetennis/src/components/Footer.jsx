import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contato" className="w-full py-16 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h3 className="text-2xl font-semibold mb-4">Entre em Contato</h3>
        
        {/* Redes sociais */}
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://www.instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-pink-600 hover:text-pink-400 transition duration-200" />
          </a>
          <a href="https://www.facebook.com/seuusuario" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="text-blue-600 hover:text-blue-400 transition duration-200" />
          </a>
          <a href="https://twitter.com/seuusuario" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} className="text-blue-400 hover:text-blue-300 transition duration-200" />
          </a>
        </div>

        {/* Informações de contato */}
        <div className="text-center mb-6">
          <p className="text-lg">
            <FaEnvelope className="inline mr-2" /> seuemail@dominio.com
          </p>
          <p className="text-lg">
            <FaPhone className="inline mr-2" /> (XX) 1234-5678
          </p>
        </div>

        {/* Direitos autorais */}
        <div>
          <p className="text-sm text-gray-500">© 2025 SpaceTennis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
