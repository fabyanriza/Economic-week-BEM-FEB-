/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        custom: "1440px",
      },
      fontFamily: {
        custom: ["Quida-Script", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #0C356A 0%, #009BFF 65%)",
      },
    },
  },
  plugins: [],
};
