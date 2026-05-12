import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#330033", // Dark purple
          foreground: "#ffffff",
          light: "#4d004d", // Lighter purple for hover states
        },
        secondary: {
          DEFAULT: "#FFD700", // Gold yellow (better contrast)
          foreground: "#330033",
          dark: "#B8860B", // Darker yellow for text on light backgrounds
        },
        accent: {
          DEFAULT: "#f5f5f5", // Slightly warmer light gray
          foreground: "#330033",
          dark: "#e0e0e0", // Darker gray for borders
        },
        muted: {
          DEFAULT: "#fafafa",
          foreground: "#330033",
        },
        warning: {
          DEFAULT: "#FF6B35", // Orange for warnings/highlights
          foreground: "#ffffff",
        },
        success: {
          DEFAULT: "#28A745", // Green for success states
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "text-transform": {
          "0%": { content: '"UX Designer"' },
          "33%": { content: '"UX Designer"', opacity: "1" },
          "45%": { opacity: "0" },
          "55%": { content: '"Product Manager"', opacity: "0" },
          "67%": { content: '"Product Manager"', opacity: "1" },
          "100%": { content: '"Product Manager"' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "text-transform": "text-transform 6s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
