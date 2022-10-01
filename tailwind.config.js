/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Blue': '#240D57',
        'primary':'#501FC1',
        'Purple':'#8456EC',
        'Pink':'#E87BF8',
        'Pink1': '#CCB6FF',
        'Pink2':'#EDE5FF',
        'Pink3': '#F6F2FF',
        'Red1' : '#FFD7E0',
        'Red2' : '#E61445',
        'Green1' : '#D3FFE2',
        'Green2' : '#00805E',
        'Black1' : '#4F4F4F',
        'Black2' : '#828282',
        'Black3': '#BDBDBD',
        'Black4' : '#E0E0E0',
        'Black5' : '#F2F2F2',
        'White' : '#FBFAFF'
      },
      spacing: {
        '306':'306px',
      },
      screens: {
        'sm': '375px',
        // => @media (min-width: 640px) { ... }
  
        'md': '960px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1512px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
