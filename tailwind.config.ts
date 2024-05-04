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
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#313539',
          'secondary': '#009688',
          'accent': '#67e8f9',
          'neutral': '#01050b',
          'base-100': '#fff4fc',
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
