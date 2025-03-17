/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '0px',
      md: '745px',
      lg: '950px',
      xl: '1440px',
    },

    backgroundImage: {
      'chicken': 'url(src\assets\pictures\JollibeeHomebg.webp)',
    },

    extend: {
      boxShadow: {
       'Jshadow': '0 3px 6px rgba(0, 0, 0, 0.16)'
      },
    },
  },
  plugins: [],
}

