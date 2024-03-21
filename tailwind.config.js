/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
          center:true,
          padding:{
              DEFAULT:'0.5rem',
              xl:'1.5rem',
          },
          screens:{
              xl:'1630px',
          }
      },
        fontFamily:{
            gotham: ["GothamPro", "sans-serif"],
        }
    },
  },
  plugins: [],
}