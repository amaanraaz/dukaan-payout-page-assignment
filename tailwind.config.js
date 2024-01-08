/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: '#1E2640',
      black: '#000000',
      white: '#ffffff',
      lightBlue: '#343B53',
      gray: '#f2f2f2',
      primaryBlue: '#146EB4',
      cardBlue: '#0E4F82'
    }
  },
  plugins: [],
}