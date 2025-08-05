export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4 text-center">
        <h4 className="text-lg font-semibold">Entre em Contato</h4>
        <div className="flex justify-center gap-4 text-2xl">
          <i className="fab fa-instagram text-pink-500"></i>
          <i className="fab fa-facebook text-blue-500"></i>
          <i className="fab fa-twitter text-blue-400"></i>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p>📧 seuemail@dominio.com</p>
          <p>📞 (XX) 1234-5678</p>
        </div>
        <p className="text-xs text-gray-400">© 2025 SpaceTennis. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
