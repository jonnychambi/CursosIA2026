/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1D4ED8',
          slate: '#0F172A',
          mint: '#2DD4BF',
          gray: '#E5E7EB',
          white: '#FFFFFF'
        }
      },
      boxShadow: {
        premium: '0 10px 30px -12px rgba(15, 23, 42, 0.22)'
      }
    }
  },
  plugins: []
};
