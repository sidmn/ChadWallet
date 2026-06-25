import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080806",
        acid: "#c8ff2c",
        mint: "#4ef1b0",
        ember: "#ff6f3c",
        cyan: "#58d6ff"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 36px rgba(200, 255, 44, 0.28)"
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 31s linear infinite",
        pulsebar: "pulsebar 2.8s ease-in-out infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        },
        pulsebar: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
