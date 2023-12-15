/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "830px",
    },
    extend: {
      colors: {
        sideBg: "var(--sideBg)",
        mainBg: "var(--mainBg)",
        primaryBg: "var(--primaryBg)",
        secondaryBg: "var(--secondaryBg)",
        thirdBg:"var(--thirdBg)",
        redIcons: "var(--redIcons)",
        greenIcons: "var(--greenIcons)",
        blueBar: "var(--blueBar)",
        primaryText: "var(--primaryText)",
        secondaryText: "var(--secondaryText)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
