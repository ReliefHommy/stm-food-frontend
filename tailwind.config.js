/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",         // for App Router structure
    "./pages/**/*.{js,ts,jsx,tsx}",       // if you ever use pages/
    "./components/**/*.{js,ts,jsx,tsx}",  // reusable components
  ],

  
  theme: {
    extend: {
      colors: {
        cream: '#FBF3E7',
        'cream-card': '#FFFDF9',
        charcoal: '#2B211B',
        'charcoal-soft': '#5B4A3F',
        gold: '#E8B84B',
        terracotta: '#C1522E',
        'terracotta-hover': '#9C4123',
        basil: '#3F5D3A',
        hairline: '#EAD9C4',
      },
      fontFamily: {
        headline: ['var(--font-bitter)', 'Georgia', 'serif'],
        body: ['var(--font-noto-thai)', 'var(--font-work-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        btn: '7px',
        card: '14px',
      },
    },
  },
  plugins: [],
}


