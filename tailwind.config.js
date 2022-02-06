module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'app-logo-spin': 'app-logo-spin infinite 20s linear',
      },
      colors: {
        blue: {
          dark: '#191928',
          light: '#222231',
        },
        green: {
          dark: '#00a8b0',
          light: '#06b4bc',
        },
        grey: {
          dark: '#727272',
          light: '#7b7b7b',
        },
      },
      fontFamily: {
        spartan: ['Spartan', 'sans-serif'],
      },
      keyframes: {
        'app-logo-spin': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
