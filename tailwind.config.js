const { Component } = require('react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      
      fontFamily:{
        courgette:['Courgette', 'cursive']
      },
    },
    screens : {
     // Mobile medium
     'mm' : "375px",
     // Mobile large
     'xs' : "420px",
     'sm' : "648px",
     'md' : "768px",
     'lg' : "1024px",
     'xl' : "1280px",
     '2xl' : "1536px",
   },
   borderRadius:{
    'none': '0',
       'sm': '0.125rem',
       DEFAULT: '0.25rem',
       DEFAULT: '4px',
       'md': '0.375rem',
       'lg': '0.5rem',
       'full': '9999px',
       'xl': '1rem',
       '2xl': '2rem',
       '3xl': '3rem',
      'large': '40px',
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
