module.exports= {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          fontFamily: {
              titleFont: ['Montserrat', 'sans-serif'],
              bodyFonts: ['Poppins', 'sans-serif'],
              sans: ['Poppins', 'sans-serif'],
          },
          colors: {
              bodyColor: "#212428",
              lightText: "#c4cfde",
              boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
              designColor: "#ff014f",
          },
          boxShadow:{
              shadowOne: "10px 10px 19px #1c1022, -10px -10px 19px #262a2e",
          },      
      },
  },
  plugins: [],
};