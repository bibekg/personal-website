// @flow

import {breakpoints} from './index'

const ifMobile = content => `
  @media screen and (max-width: ${breakpoints.default - 1}px) {
    ${content}
  }
`

const ifNotMobile = content => `
  @media screen and (min-width: ${breakpoints.default}px ) {
    ${content}
  }
`

export { ifMobile, ifNotMobile }