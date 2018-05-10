// @flow

import styled from 'styled-components'
import { ifMobile } from '../styles/helpers'

export default styled.div`
  width: 100%;

  ${ifMobile(`
    padding-left: 15px;
    padding-right: 15px;
  `)}
`