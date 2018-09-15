// @flow

import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../styles'
import Text from './Text'

const Title = (props: *) => (<Text size={props.size || 36} bold={true} color={colors.blue}>{props.children}</Text>)

export default Title