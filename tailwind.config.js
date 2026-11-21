/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        aura: {
          bg: "#0A0A0A",
          surface: "#121212",
          card: "#181818",
          elevated: "#1E1E1E",
          border: "#2A2A2A",
          crimson: "#8B0000",
          flame: "#DC143C",
          rose: "#FF2E54",
        },
      },
    },
  },
  plugins: [],
};
