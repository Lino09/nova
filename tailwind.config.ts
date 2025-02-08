import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberpunk:{
          blk: '#080A0C',
          tqs: '#00F5D4',
          ylw: '#FFD700',
          ble: '#00A3FF',
          wht: '#E0E0E0'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
