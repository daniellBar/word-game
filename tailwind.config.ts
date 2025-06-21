import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        background: "#f9fafb",
        success: "#4ade80",
        error: "#f87171",
        primary: "#646cff",
        "primary-hover": "#535bf2",
        dark: "#242424",
        "key-bg": "#e5e7eb",
        "key-bg-hover": "#d1d5db",
        "key-text": "#111827",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
        pop: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        shake: "shake 0.3s ease-in-out",
        pop: "pop 0.3s ease-out",
        pulse: "pulse 1.5s ease-in-out infinite",
      },
    },
  },

  plugins: [],
} satisfies Config;
