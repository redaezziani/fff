/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode:"class",
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#007bff', 
        },
      },
      keyframes: {
        "anime": {
          '0%': {
            left: '-160px',
          },
          '100%': {
            left: '360px',
          },
        },
      },
      animation: {
        "anime": "anime 3s ease-in-out infinite "
      },
    },
  },
  plugins: [],
};
