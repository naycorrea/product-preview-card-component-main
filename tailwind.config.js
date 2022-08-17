/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#F3EAE3",
        green: "#3D8168",
        fontSmall: "#AEAEB1",
        fontLarge: "#1D2023",
      },
      width: {
        body: "100vw",
        footer: "100vw",
        cardMobile: "90%",
        cardDesktop: "460px",
      },
      height: {
        body: "100vh",
        container: "92%",
        footer: "8%",
        cardMobile: "92%",
        cardDesktop: "330px",
      },
      backgroundImage: {
        "image-mobile": "url('/images/image-product-mobile.jpg')",
        "image-desktop": "url('/images/image-product-desktop.jpg')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      padding: {
        cardContainer: "1.30rem",
      },
      fontSize: {
        titleSM: ["1.5rem", "1.5rem"],
      },
    },
  },
  plugins: [],
};
