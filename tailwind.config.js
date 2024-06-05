export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--gray-10) / <alpha-value>)",
        ring: "rgb(var(--primary) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--gray-90) / <alpha-value>)",
        focus: "rgb(var(--focus) / <alpha-value>)",
        hover: "rgb(var(--hover) / <alpha-value>)",
        gray: {
          10: "rgb(var(--gray-10) / <alpha-value>)",
          20: "rgb(var(--gray-20) / <alpha-value>)",
          30: "rgb(var(--gray-30) / <alpha-value>)",
          40: "rgb(var(--gray-40) / <alpha-value>)",
          50: "rgb(var(--gray-50) / <alpha-value>)",
          60: "rgb(var(--gray-60) / <alpha-value>)",
          70: "rgb(var(--gray-70) / <alpha-value>)",
          80: "rgb(var(--gray-80) / <alpha-value>)",
          90: "rgb(var(--gray-90) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--gray-10) / <alpha-value>)",
          muted: "rgb(var(--primary-muted) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--gray-30) / <alpha-value>)",
          foreground: "rgb(var(--gray-90) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--gray-70) / <alpha-value>)",
          foreground: "rgb(var(--gray-10) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--gray-30) / <alpha-value>)",
          foreground: "rgb(var(--gray-90) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--gray-10) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--gray-10) / <alpha-value>)",
          foreground: "rgb(var(--gray-90) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--gray-10) / <alpha-value>)",
          foreground: "rgb(var(--gray-90) / <alpha-value>)",
        },
      },
      maxWidth: {
        content: "1400px",
      },
      fontSize: {
        base: ["16px", "20px"],
        md: ["18px", "22px"],
        lg: ["20px", "24px"],
        xl: ["24px", "30px"],
        "2xl": ["30px", "36px"],
        "3xl": ["40px", "44px"],
        "4xl": ["48px", "53px"],
        "8xl": ["96px", "106px"],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};
