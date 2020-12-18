/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const gutters = require('./theme/gutters')
const screens = require('./theme/screens')
const spacing = require('./theme/spacing')
const columns = require('./theme/columns')
const fontFamily = require('./theme/fontFamily')
const fontSize = require('./theme/fontSize')
const colors = require('./theme/colors')
const lineHeight = require('./theme/lineHeight')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },

  theme: {
    screens,
    gutters,
    spacing,
    columns,
    fontFamily,
    fontSize,
    colors,
    lineHeight,
  },

  variants: {},

  plugins: [
    require('./plugins/grid/tw-container')(),
    require('./plugins/grid/tw-row')(),
    require('./plugins/grid/tw-gutters')(),
    require('./plugins/grid/tw-columns')(),
    require('./plugins/grid/tw-offsets')(),
  ],

  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      '../../components/**/*.vue',
      '../../layouts/**/*.vue',
      '../../pages/**/*.vue',
      '../../plugins/**/*.js',
      '../../nuxt.config.js',
    ],
  },
}
