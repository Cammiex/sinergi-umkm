/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        blue: {
          light: '#e8e9f2',
          light_hover: '#dcddeb',
          light_active: '#b6bad5',
          normal: '#141f79',
          normal_hover: '#121c6d',
          normal_active: '#101961',
          dark: '#0f175b',
          dark_hover: '#0c1349',
          dark_active: '#090e36',
          darker: '#070b2a',
        },
        green: {
          light: '#ebfaef',
          light_hover: '#e2f7e6',
          light_active: '#c2efcc',
          normal: '#3bcc5a',
          normal_hover: '#35b851',
          normal_active: '#2fa348',
          dark: '#2c9944',
          dark_hover: '#237a36',
          dark_active: '#1b5c28',
          darker: '#15471f',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        livvic: ['Livvic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
