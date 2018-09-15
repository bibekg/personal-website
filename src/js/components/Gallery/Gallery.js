// @flow

import * as React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import GalleryItem from './GalleryItem'
import { colors, shadows } from '../../styles'

const GalleryDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    background-color: ${colors.white};
    box-shadow: ${shadows.default};
`

const GalleryItemWrapper = styled.div`
    padding: 5px;

    &:first-child { padding-left: 10px; }
    &:last-child { padding-right: 10px; }
`

type GalleryItemType = {
    id: string,
    name: string,
    image: string,
    href?: string
}

type PropsType = {
    name: string,
    size: number,
    contents: Array<GalleryItemType>,
    makeLink: boolean,
    selectable: boolean,
    selectedItem?: GalleryItemType,
    onSelectChange?: (string) => void
}

export default function Gallery(props: PropsType) {
    return (
        <GalleryDiv size={props.size} >
            {props.contents.map(c => (
                <GalleryItemWrapper key={c.name}>
                    <GalleryItem
                        makeLink={props.makeLink}
                        selectable={props.selectable}
                        selected={props.selectable && props.selectedItem && c.name === props.selectedItem.name}
                        name={c.name} 
                        description={c.tagline}
                        image={c.icon.src} 
                        href={c.href} 
                        width={props.size}
                        height={props.size}
                        onClick={props.onSelectChange}
                    />
                </GalleryItemWrapper>
            ))}
        </GalleryDiv>
    )
}

Gallery.defaultProps = {
    size: 150,
    selectable: false,
    makeLink: false
}