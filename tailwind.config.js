module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        header: '60px',
      },
      inset: {
        header: '60px',
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['hover'],
    },
  },
  plugins: [],
};
