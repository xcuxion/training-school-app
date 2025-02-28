import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        Nunito: ["var(--font-Nunito)"],
      },
      backgroundImage: {
        "faq-bg": "url('/images/wallpaper.jpg')",
        "admission-bg": "url('/images/classroom.jpg')",
        gateway: "url('/images/gateway2.jpg')",
        galaxybg: "url('/images/galaxybg.svg')",
        mock: "url('/images/mockbg.svg')",
      },
      colors: {
        primary: "#FEBC10",
        light: "#FFF9FF",
        secondary: "#0E0E0E",
        neutral: "#0E0E0E",
        fontColor: "#f5f5f5",
        outline: "#2D3748",

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        xxl: "24px",
        xl: "16px",
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
