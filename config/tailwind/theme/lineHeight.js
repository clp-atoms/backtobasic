const { pxToRem } = require('../helpers')

/**
 * https://tailwindcss.com/docs/line-height#customizing
 */
const lineHeight = {
  xs: `${pxToRem(16)}rem`,
  sm: `${pxToRem(20)}rem`,
  tiny: `${pxToRem(20)}rem`,
  base: `${pxToRem(25)}rem`,
  lg: `${pxToRem(40)}rem`,
  //   xl: `${pxToRem(36)}rem`,
  xxl: `${pxToRem(77)}rem`,
}

module.exports = lineHeight
