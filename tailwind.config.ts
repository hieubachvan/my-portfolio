import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      blink: {
        "0%": { opacity: "1" },
        "50%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      "slide-up": {
        "0%": { opacity: "0", transform: "translateY(50px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "slide-right": {
        "0%": { opacity: "0", transform: "translateX(500px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
    },
    animation: {
      blink: "blink 1s infinite",
      "button-slide-up": "slide-up 2s ease-out",
      "button-slide-right": "slide-right 2s ease-out",
    },
  },
  plugins: [],
};
export default config;
