/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /^fi-/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
