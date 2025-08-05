/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Certifique-se de que o Tailwind saiba onde procurar seus arquivos HTML
    "./src/**/*.{js,ts,jsx,tsx}", // Adiciona todos os arquivos de código-fonte que você pode usar Tailwind
  ],
  darkMode: 'class', // Ativa suporte a dark mode via classe
  theme: {
    extend: {
      colors: {
        'galaxy-blue': '#0A74DA',
        'space-gray': '#2A2A2A',
        'verde': '#32CD32', // Verde personalizado para identidade visual
        'amarelo': '#FFD700', // Amarelo vibrante
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}