// eslint-disable-next-line import/no-extraneous-dependencies
import typography from "@tailwindcss/typography";
// eslint-disable-next-line import/no-extraneous-dependencies
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["var(--font-noto-sans-jp)"],
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#009592",
          secondary: "#00ea78",
          accent: "#a33700",
          neutral: "#313539",
          "base-100": "#fcfcfc",
          info: "#0091ec",
          success: "#00ae80",
          warning: "#c09700",
          error: "#ff758d",
        },
      },
    ],
  },
};
export default config;
