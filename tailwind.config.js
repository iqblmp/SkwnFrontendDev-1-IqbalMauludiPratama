module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#e5f0b6",
          foreground: "#2f241f",
          light: "#f0f7d1",
          dark: "#c9d89e",
        },
        secondary: {
          background: "#ffffff",
          foreground: "#553b33",
          light: "#f7f7f7",
          dark: "#2f241f",
        },
        accent: {
          DEFAULT: "#817253",
          foreground: "#ffffff",
          light: "#9a8a68",
          dark: "#665a42",
        },
        border: {
          primary: "#e0e0e0",
          secondary: "#cccccc",
          light: "#f0f0f0",
          dark: "#999999",
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0px 10px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};