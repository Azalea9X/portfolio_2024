/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      colors: {
        // add your color palette here
      },
    },
    screens: {
      xxs: '320px', // iPhone 5/SE
      xs: '360px', // iPhone 6/7/8
      sm: '425px', // iPhone X/11/12
      md: '768px', // iPad
      lg: '1024px', // iPad Pro
      xl: '1280px', // Laptop
      xll: '1440px', // Large laptop
      lap: '1600px', // Small laptop
      mlap: '1800px', // Medium laptop
      llap: '2000px', // Large laptop
      desk: '3840px', // Desktop
      '3klap': '4096px', // 4K monitors
    },
  },
  plugins: [],
};
