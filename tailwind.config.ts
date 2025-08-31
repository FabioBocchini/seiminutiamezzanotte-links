import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'smam-gray': '#212121',
        'smam-dark-gray': '#121212',
        'smam-white': '#f3f1e9',
        'smam-red': '#71081d',
      },
      boxShadow: {
        'shadow-b': '0 1px 2px 0 rgb(0 0 0 / 0.1)',
        'shadow-t': '0 -1px 2px 0 rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
