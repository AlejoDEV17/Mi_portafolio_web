import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#03040a",
        orbit: "#08111f",
        plasma: "#57d7ff",
        aurora: "#9d6bff",
        mint: "#70ffd8",
        star: "#f8fbff",
        mist: "#a9b8c8"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        mono: ["var(--font-space)", "Consolas", "monospace"]
      },
      boxShadow: {
        glow: "0 0 45px rgba(87, 215, 255, 0.22)",
        aurora: "0 0 70px rgba(157, 107, 255, 0.24)"
      },
      backgroundImage: {
        "glass-radial": "radial-gradient(circle at top left, rgba(112,255,216,.18), transparent 36%), radial-gradient(circle at bottom right, rgba(157,107,255,.16), transparent 36%)"
      }
    }
  },
  plugins: []
};

export default config;
