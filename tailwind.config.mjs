/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-brown": "#6c584c",
        "light-brown": "#a98467",
        "dark-green": "#adc178",
        "light-green": "#dde5b6",
        cream: "#f0ead2",
      },
      fontFamily: {
        iranyekan: ["Iranyekan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
