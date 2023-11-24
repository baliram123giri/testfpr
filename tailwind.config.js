/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "red-600": "#FE0000",
        "b-blue-600": "#092F50",
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
        "orange-1000": "#F49A53",
        "orange-400": "#F2822A",
        "app-main-theme": "#000000b8",
        "app-main-logo-shade": "#F3862B"
      },
      fontSize: {
        "b-sm": "12px",
        "submenu-font": "13px",
        "menu-font": "16px",
      }
    },
  },
  plugins: [],
}
