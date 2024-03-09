/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navShadow: "0 0 12px rgba(16, 38, 73, 0.06)",
      },
    },
  },
  plugins: [],
};
