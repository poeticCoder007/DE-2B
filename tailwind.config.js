/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        border: "hsl(12, 6.5%, 15.1%)", // Dark blue
        input: "hsl(12, 6.5%, 15.1%)", // Dark blue
        ring: "hsl(24, 5.7%, 82.9%)", // Golden
        background: "hsl(20, 14.3%, 4.1%)", // Dark blue
        foreground: "hsl(60, 9.1%, 97.8%)", // Golden
        primary: {
          DEFAULT: "hsl(60, 9.1%, 97.8%)", // Golden
          foreground: "hsl(24, 9.8%, 10%)", // Dark blue
        },
        secondary: {
          DEFAULT: "hsl(12, 6.5%, 15.1%)", // Dark blue
          foreground: "hsl(60, 9.1%, 97.8%)", // Golden
        },
        destructive: {
          DEFAULT: "hsl(0, 62.8%, 30.6%)", // Red
          foreground: "hsl(60, 9.1%, 97.8%)", // Golden
        },
        muted: {
          DEFAULT: "hsl(12, 6.5%, 15.1%)", // Dark blue
          foreground: "hsl(24, 5.4%, 63.9%)", // Dark blue (a bit lighter)
        },
        accent: {
          DEFAULT: "hsl(12, 6.5%, 15.1%)", // Dark blue
          foreground: "hsl(60, 9.1%, 97.8%)", // Golden
        },
        popover: {
          DEFAULT: "hsl(20, 14.3%, 4.1%)", // Dark blue
          foreground: "hsl(60, 9.1%, 97.8%)", // Golden
        },
        card: {
          DEFAULT: "hsl(20, 14.3%, 4.1%)", // Dark blue
          foreground: "hsl(60, 9.1%, 97.8%)", // Golden
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
