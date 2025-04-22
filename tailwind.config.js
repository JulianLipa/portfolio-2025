/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{js,jsx,mdx}",
      "./components/**/*.{js,jsx,mdx}",
      "./app/**/*.{js,jsx,mdx}",
      "*.{js,jsx,mdx}",
      "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
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
          "gradient-border": {
            "0%, 100%": { transform: "translateX(0) translateY(0)" },
            "50%": { transform: "translateX(15px) translateY(15px)" },
          },
          "gradient-1": {
            "0%": { opacity: "0.5" },
            "33%": { opacity: "0.75" },
            "66%": { opacity: "0.5" },
            "100%": { opacity: "0.75" },
          },
          "gradient-2": {
            "0%": { opacity: "0.75" },
            "33%": { opacity: "0.5" },
            "66%": { opacity: "0.75" },
            "100%": { opacity: "0.5" },
          },
          "gradient-3": {
            "0%": { opacity: "0.5" },
            "33%": { opacity: "0.75" },
            "66%": { opacity: "0.5" },
            "100%": { opacity: "0.75" },
          },
          "gradient-4": {
            "0%": { opacity: "0.75" },
            "33%": { opacity: "0.5" },
            "66%": { opacity: "0.75" },
            "100%": { opacity: "0.5" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "gradient-border": "gradient-border 6s ease-in-out infinite",
          "gradient-1": "gradient-1 12s ease-in-out infinite alternate",
          "gradient-2": "gradient-2 12s ease-in-out infinite alternate",
          "gradient-3": "gradient-3 12s ease-in-out infinite alternate",
          "gradient-4": "gradient-4 12s ease-in-out infinite alternate",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  
  