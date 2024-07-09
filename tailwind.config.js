/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-black': '#000000',
        'dark-green': '#1e3932',
        'light-green': '#008248',
        'theme-white': '#f1f8f6',
        'blue-tone': '#d4e9e2',
        'red-tone': '#f3f1e7'
      }
    },
    fontFamily: {
      'sans': ['Noto Sans', 'sans-serif']
    }
  },
  plugins: [],
}

