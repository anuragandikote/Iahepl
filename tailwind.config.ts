import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        leagueSpartan: ["var(--font-league-spartan)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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

      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.foreground'),

            /* 📝 Paragraph Spacing */
            p: {
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
            },

            /* 🧠 Headings */
            h1: { color: theme('colors.foreground'), fontWeight: theme('fontWeight.bold') },
            h2: { color: theme('colors.foreground'), fontWeight: theme('fontWeight.semibold') },
            h3: { color: theme('colors.foreground'), fontWeight: theme('fontWeight.semibold') },

            strong: { color: theme('colors.foreground') },
            blockquote: {
              color: theme('colors.foreground'),
              borderLeftColor: theme('colors.gray.300'),
            },
            code: { color: theme('colors.foreground') },
            a: {
              color: theme('colors.blue.600'),
              '&:hover': { color: theme('colors.blue.700') },
            },

            /* 📊 Table Styling */
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
            },
            'th, td': {
              border: `1px solid ${theme('colors.gray.300')}`,
              padding: theme('spacing.3'),
              textAlign: 'left',
            },
            th: {
              backgroundColor: theme('colors.gray.100'),
              fontWeight: theme('fontWeight.semibold'),
            },
            tr: {
              '&:nth-child(even)': {
                backgroundColor: theme('colors.gray.50'),
              },
            },
          },
        },

        invert: {
          css: {
            '--tw-prose-body': theme('colors.gray.300'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.blue.400'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-th-borders': theme('colors.gray.600'),
            '--tw-prose-td-borders': theme('colors.gray.700'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
