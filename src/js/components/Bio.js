// @flow

import * as React from 'react'
import styled from 'styled-components'
import Text from './Text'
import info from '../info'

const BioDiv = styled.div`
    padding: 10px 0;
    margin: 25px 0;
`

export default function Bio() {
    return (
        <BioDiv>
            <Text paragraph>{info.bio}</Text>
        </BioDiv>
    )
}