/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '550px',
        'md': '830px',
        'lg': '1100px',
        
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },

      animation:{
        marquee: 'marquee 25s linear infinite' ,
        marquee2: 'marquee2 25s linear infinite' ,
      },
    },
  },
  plugins: [],
}

