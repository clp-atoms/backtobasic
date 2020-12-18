const { pxToRem } = require('../helpers')

/**
 * https://tailwindcss.com/docs/font-size#font-sizes
 */
const fontSize = {
  xxs: `${pxToRem(10)}rem`,
  xs: `${pxToRem(12)}rem`,
  sm: `${pxToRem(14)}rem`,
  tiny: `${pxToRem(16)}rem`,
  base: `${pxToRem(18)}rem`,
  lg: `${pxToRem(30)}rem`,
  xl: `${pxToRem(36)}rem`,
  xxl: `${pxToRem(64)}rem`,
}

module.exports = fontSize
