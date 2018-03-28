// @flow

import * as React from 'react'
import styled from 'styled-components'
import Color from 'color'
import Flex from 'styled-flex-component'
import GalleryItem from './GalleryItem'
import { colors } from '../../styles'

const GalleryDiv = Flex.extend`
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;

    & > * {
        padding: ${props => (props.size / 20)}px;
    }
`

type GalleryItemType = {
    name: string,
    image: string,
    href?: string
}

type PropsType = {
    size: number,
    contents: Array<GalleryItemType>
}

export default function Gallery(props: PropsType) {
    return (
        <GalleryDiv wrap alignCenter justifyStart size={props.size} >
            {props.contents.map(c => (
                <GalleryItem key={c.name} 
                    name={c.name} 
                    description={c.description}
                    image={c.image} 
                    href={c.href} 
                    size={props.size}
                />
            ))}
        </GalleryDiv>
    )
}

Gallery.defaultProps = {
    size: 180
}