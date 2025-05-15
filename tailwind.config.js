/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('@/assets/img/logo/vazcode.png')"
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#001529',
        secondary: '#376C83',
      }
    },
    plugins: [],
  }
}
