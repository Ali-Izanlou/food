import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center : true,
      padding : '1rem'
    },
    extend: {

    },
  },
  plugins: [
    require('@pyncz/tailwind-mask-image')
  ],
};
export default config;
