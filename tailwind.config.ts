import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          lighter: '#333333',
          darker: '#0f0f0f',
        },
        primary: {
          DEFAULT: '#ff4d4d',
          dark: '#e60000',
          light: '#ff8080',
        }
      },
    },
  },
  plugins: [],
}

export default config