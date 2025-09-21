/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      colors: {
        brand: {
          DEFAULT: '#22c55e', // verde acento
          50: '#ecfdf5'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.25)'
      }
    }
  },
  plugins: []
}
