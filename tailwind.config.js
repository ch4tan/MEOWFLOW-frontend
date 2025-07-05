/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        bitcount: ['"Bitcount Grid Double"', 'serif']
      },
    },
  },
  plugins: [],
}

