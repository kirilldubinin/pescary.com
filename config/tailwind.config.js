/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'baloo': ['"Baloo Chettan 2"'],
      'montserrat': ['"Montserrat"']
    },
    extend: {
      spacing: {
        '72': '18rem'
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1640px',
        '4xl': '1840px'
      }
    }
  },
  variants: {},
  plugins: []
}