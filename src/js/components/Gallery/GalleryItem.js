// @flow

import * as React from 'react'
import Color from 'color'
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import Text from '../Text'
import { colors } from '../../styles'

type PropsType = {
    size: number,
    name: string,
    description?: string,
    image: string,
    href?: string
}

const Overlay = styled(Flex)`
    justify-content: ${props => props.justify};
    background-color: ${Color(colors.blue).alpha(0.8).string()};
    width: 100%;
    height: 100%;
    padding: 4px;
`

const GalleryGridItem = styled.div`
    & {
        width: ${props => props.size}px;
        height: ${props => props.size}px;
    }
`

const GalleryItemDiv = styled.div`
    display: block;
    position: relative;
    border-radius: 5px;
    box-shadow: 0px 0px 4px ${Color(colors.black).alpha(0.5).string()};
    flex-shrink: 0;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    text-decoration: none;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
    }

    ${Overlay} {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: 0.3s ease opacity;
    }

    &:hover {
        & > ${Overlay} {
            opacity: 1;
        }
    }
`

const TitleText = Text.extend`
    margin-bottom: 8px;
`

const GalleryItem = (props: PropsType) => {
    // Use a <a/> tag if there is a link associated with this gallery item
    const ItemWrapper = props.href ?
        GalleryItemDiv.withComponent('a').extend.attrs({ href: props.href }) `` :
        GalleryItemDiv

    const titleOnly = props.description === undefined
    const justify = titleOnly ? 'center' : 'flex-start'

    return (
        <GalleryGridItem size={props.size}>
            <ItemWrapper background={props.image}>
                <Overlay column alignCenter justify={justify}>
                    <TitleText bold center color={colors.white}>{props.name}</TitleText>
                    { props.description && <Text center size={14} color={colors.white}>{props.description}</Text>}
                </Overlay>
            </ItemWrapper>
        </GalleryGridItem>
    )
}

export default GalleryItem