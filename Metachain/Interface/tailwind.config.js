/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'success': '#38c172',
        'warning': '#ffed4a',
        'info': '#6cb2eb',
        'light': '#f8f9fa',
        'dark': '#343a40',
        'white': '#f8f9fa',
      }
    },

  },
  plugins: [],
}