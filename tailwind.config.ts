import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {

      colors: {
        Red: 'hsl(14, 86%, 42%)',
        Green: 'hsl(159, 69%, 38%)',
        Rose: {
          50: 'hsl(20, 50%, 98%)',
          100: 'hsl(13, 31%, 94%)',
          300: 'hsl(14, 25%, 72%)',
          400: 'hsl(7, 20%, 60%)',
          500: 'hsl(12, 20%, 44%)',
          900: 'hsl(14, 65%, 9%)',
        },
      },
    },

    screens: {
      'mobile': '375px',

      'tablet': '1024px',

      'desktop': '1440px',
    },



  },



  extend: {


  },
  plugins: [],
} satisfies Config;
