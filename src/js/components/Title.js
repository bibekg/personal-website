// @flow

import styled from 'styled-components'
import { colors } from '../styles'
import Text from './Text'

export default Text.extend.attrs({
    size: () => 36,
    bold: () => true,
    color: () => colors.blue
}) ``