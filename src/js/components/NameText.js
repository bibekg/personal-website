// @flow

import styled from 'styled-components'
import { colors } from '../styles'
import Text from './Text'

export default Text.extend.attrs({
    size: () => 48,
    bold: () => true,
    color: () => colors.blue
})``