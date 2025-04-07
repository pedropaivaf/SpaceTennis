/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Certifique-se de que o Tailwind saiba onde procurar seus arquivos HTML
    "./src/**/*.{js,ts,jsx,tsx}", // Adiciona todos os arquivos de código-fonte que você pode usar Tailwind
  ],
  theme: {
    extend: {
      // Aqui você pode estender o tema do Tailwind, como cores, fontes, espaçamento, etc.
      colors: {
        'galaxy-blue': '#0A74DA', // Exemplo de como adicionar cores personalizadas
        'space-gray': '#2A2A2A', // Exemplo de uma cor personalizada
      },
      spacing: {
        128: '32rem', // Exemplo de como adicionar espaçamento personalizado
      },
    },
  },
  plugins: [],
}
