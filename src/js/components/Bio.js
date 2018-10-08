// @flow

import * as React from 'react'
import styled from 'styled-components'
import Text from './Text'
import info from '../info'
import { ifMobile } from '../styles/helpers'

const BioDiv = styled.div`
  padding: 10px 0;
  margin: 25px 0;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  ${ifMobile(`
        text-align: center;
    `)};
`

export default function Bio() {
  return (
    <BioDiv>
      {info.bio.map(bioParagraph => (
        <Text key={bioParagraph} paragraph>
          {bioParagraph}
        </Text>
      ))}
    </BioDiv>
  )
}
