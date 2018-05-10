// @flow

const MOBILE_BREAKPOINT = 750;

const ifMobile = content => `
  @media screen and (max-width: ${MOBILE_BREAKPOINT - 1}px) {
    ${content}
  }
`

const ifNotMobile = content => `
  @media screen and (min-width: ${MOBILE_BREAKPOINT}px ) {
    ${content}
  }
`

export { ifMobile, ifNotMobile }