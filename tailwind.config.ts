import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  mode: 'jit',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001F3F",
        "primary-dark": "#01162C",
        blue: {
          royal: "#4169E1"
        }
      },
      backgroundImage: {
        "primary-image": "url('../images/background-image.svg')"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
