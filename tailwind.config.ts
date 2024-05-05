// eslint-disable-next-line import/no-extraneous-dependencies
import typography from '@tailwindcss/typography';
// eslint-disable-next-line import/no-extraneous-dependencies
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      sans: ['var(--font-noto-sans-jp)'],
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#313539',
          'secondary': '#009688',
          'accent': '#67e8f9',
          'neutral': '#313539',
          'base-100': '#f3f4f6',
          'info': '#38bdf8',
          'success': '#4ade80',
          'warning': '#fcd34d',
          'error': '#fb7185',
        },
      },
    ],
    darkTheme: "dark"
  },
};
export default config;
