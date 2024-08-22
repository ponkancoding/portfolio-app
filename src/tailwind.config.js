import { fileURLToPath } from 'url';
const componentsDir = fileURLToPath(new URL('./components', import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [`${componentsDir}/**/**/*.{tsx,js,jsx,html,css}`],
  theme: {
    extend: {},
  },
  plugins: [],
}

