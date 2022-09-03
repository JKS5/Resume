/** @type {import('tailwindcss').Config} */
module.exports = {
  //경로 설정
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },

      keyframes: {
        "fade-in0-100": {
          "0%": {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-delay-0-100": {
          "0%": {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          "50%": {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-delay-0-100-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(15px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-delay-0-100-zero": {
          "0%": {
            opacity: "0",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in0-100 2.5s ease-out",
        "fade-in-delay": "fade-in-delay-0-100 2.5s ease-out",
        "fade-in-up": "fade-in-delay-0-100-up 2.5s ease-out",
        "fade-in-delay-0-100-zero": "fade-in-delay-0-100-zero 2.5s ease-out",
      },
      transitionDelay: {
        0: "0ms",
        2000: "2000ms",
      },
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1936px",
      // => @media (min-width: 1936px) { ... }
    },
 
  },
  plugins: [require("tailwindcss-animation-delay", "tailwind-clip-path")],
};
