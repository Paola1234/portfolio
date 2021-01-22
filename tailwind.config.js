module.exports = {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          'accent-1': '#333',
          'grey-back':'#F9F8F8',
          'my-purple':'#443B96',
        },
      },
    },
    variants: {},
    plugins: [],
  }
  