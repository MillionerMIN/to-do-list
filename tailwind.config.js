/** @type {import('tailwindcss').Config} */

export default {
  content: ['index.html', 'src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    extend: {
      screens: {
        '-2xl': { max: '1535px' },
        // => @media (max-width: 1600px) { ... }
        '-xl': { max: '1279px' },
        // => @media (max-width: 1400px) { ... }
        '-lg': { max: '1023px' },
        // => @media (max-width: 1023px) { ... }
        '-md': { max: '767px' },
        // => @media (max-width: 767px) { ... }
        '-sm': { max: '639px' },
        // => @media (max-width: 639px) { ... }
        '-xs': { max: '370px' },
        // => @media (max-width: 420px) { ... }
        '-xxs': { max: '329px' },
        // => @media (max-width: 330px) { ... }
      },
      colors: {
        'bg-dark': '#0E1A1F',
        main: '#C8F904',
        second: '#6967FB',
        pink: '#FF2D55',
        'bg-light': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['PT Sans', 'serif'],
      },
      fontSize: {
        h1: '4rem',
        h2: '3.5rem',
        h3: '3rem',
        h4: '2.5rem',
        h5: '2rem',
        h6: '1.5rem',
      },
    },
  },
  plugins: [],
};
