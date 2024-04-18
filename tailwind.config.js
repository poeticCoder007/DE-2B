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
        'theme-purple':"#6d28d9",
        border: "hsl(265, 39%, 33%)", // Dark blue
        input: "hsl(265, 39%, 33%)", // Dark blue
        ring: "hsl(24, 5.7%, 82.9%)", // Golden
        background: "hsl(265, 39%, 13%)", // Dark blue
        foreground: "hsl(39, 100%, 50%)", // Golden
        primary: {
          DEFAULT: "hsl(39, 100%, 50%)", // Golden
          foreground: "hsl(265, 39%, 13%)", // Dark blue
        },
        secondary: {
          DEFAULT: "hsl(265, 39%, 13%)", // Dark blue
          foreground: "hsl(39, 100%, 50%)", // Golden
        },
        destructive: {
          DEFAULT: "hsl(265, 39%, 13%)", // Dark blue
          foreground: "hsl(39, 100%, 50%)", // Golden
        },
        muted: {
          DEFAULT: "hsl(265, 39%, 13%)", // Dark blue
          foreground: "hsl(39, 100%, 50%)", // Golden
        },
        accent: {
          DEFAULT: "hsl(265, 39%, 13%)", // Dark blue
          foreground: "hsl(39, 100%, 50%)", // Golden
        },
        popover: {
          DEFAULT: "hsl(265, 39%, 13%)", // Dark blue
          foreground: "hsl(39, 100%, 50%)", // Golden
        },
        card: {
          DEFAULT: "hsl(265, 39%, 13%)", // Dark blue
          foreground: "hsl(39, 100%, 50%)", // Golden
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
