import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", './app/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['var(--font-oswald)', 'sans-serif'],
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
    },
  },
  plugins: [],
};

export default config;