/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '1024',
    },
    colors: {
      'dark_text_primary': '#F9F6EE',
      'dark_text_secondary': '#CDCAC4',
      'navbar_primary': '#0764A1',
      'dark_background_primary': '#01223A',
      'dark_section_secondary': '#02406E',
      'dark_section_primary': '#02406E',
      'action_blue': '#1180AD',
      'footer_primary': '#001A2D'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

