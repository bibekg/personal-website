// @flow

import * as React from 'react'
import styled from 'styled-components'
import Color from 'color'
import Flex, { FlexItem } from 'styled-flex-component'
import { colors } from '../styles'

const GalleryDiv = Flex.extend`
    box-shadow: inset 0px 0px 6px ${Color(colors.black).alpha(0.3).string()};
    width: 100%;
    height: ${props => props.size}px;
    overflow-y: hidden;
    overflow-x: auto;

    & > * {
        height: ${props => (props.size * 0.8)}px;
        width: ${props => (props.size * 0.8)}px;
        margin: ${props => (props.size / 10)}px;
    }

    ::-webkit-scrollbar {
        height: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${colors.blue};
        border-radius: 3px;
    }
`

type PropsType = {
    size: number,
    children: Array<React.Element<typeof GalleryItem>>
}

export default function Gallery(props: PropsType) {
    return (
        <GalleryDiv alignCenter justifyStart noWrap size={props.size} >
            {props.children}
        </GalleryDiv>
    )
}

Gallery.defaultProps = {
    size: 150
}

/// Gallery Item

type ItemPropsType = {
    name: string,
    image: string,
    href?: string
}

const GalleryItemDiv = styled.div`
    border-radius: 5px;
    box-shadow: 0px 0px 4px ${Color(colors.black).alpha(0.5).string()};
    flex-shrink: 0;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: contain;

    img {
        width: 100%;
        height: 100%;
    }
`
const GalleryItemLink = GalleryItemDiv.withComponent('a')

const GalleryItem = (props: ItemPropsType) => {
    // Use a <a/> tag if there is a link associated with this gallery item
    const ItemWrapper = props.href ? 
        GalleryItemLink.extend.attrs({ href: props.href })`` : 
        GalleryItemDiv

    return (
        <ItemWrapper background={props.image} />
    )
}

export { GalleryItem }