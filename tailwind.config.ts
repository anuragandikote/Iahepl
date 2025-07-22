import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        leagueSpartan: ["var(--font-league-spartan)"],
      },
      colors: {
        red: {
          800: '#8B0000',
          900: '#660000',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 8s linear infinite',
      },
      images: {
        unoptimized: true,
      },
    },
  },
  plugins: [],
};

export default config;