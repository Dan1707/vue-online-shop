/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phonel: { max: "425px" },

        tablets: { max: "576px" },

        tablet: { max: "908px" },

        laptop: { max: "1024px" },

        desktop: { max: "1200px" },
      },
      colors: {
        primary: "var(--primary)",
        dark: "var(--dark)",
        light: "var(--light)",
        def: "var(--base)",
        muted: "var(--muted)",
        green: "var(--green)",
        orange: "var(--orange)",
        red: "var(--red)",
        pink: "var(--pink)",
        gray: {
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
        },
      },

      fontFamily: {
        sans: ["Inter", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
