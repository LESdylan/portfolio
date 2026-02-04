/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        dark: '#0b1120',
        card: '#111827',
        accent: '#3b82f6',
        muted: '#94a3b8'
      }
    }
  },
  plugins: []
}
