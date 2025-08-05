/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",         // for App Router structure
    "./pages/**/*.{js,ts,jsx,tsx}",       // if you ever use pages/
    "./components/**/*.{js,ts,jsx,tsx}",  // reusable components
  ],

  
  theme: {
    extend: {},
  },
  plugins: [],
}


