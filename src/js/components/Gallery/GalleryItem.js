// @flow

import * as React from 'react'
import Color from 'color'
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import Text from '../Text'
import { colors, shadows } from '../../styles'
import { computeSizes } from '../../utils'

const getPadding = (size: number) => size / 20

type PropsType = {
  id: string,
  width: number,
  height: number,
  name: string,
  description?: string,
  image: string,
  href?: string,
  noExplicitWidth: boolean,
  selectable: boolean,
  selected: boolean,
  onClick: string => void,
  makeLink: boolean
}

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4px;
`

const GalleryGridItem = styled.div`
  & {
    width: ${props => props.width ? `${props.width}px` : '100%'};
    ${props => props.height ? `height: ${props.height}px` : ''};
  }
  flex-grow: 0;
  flex-shrink: 0;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const GalleryItemDiv = styled.div`
  display: block;
  position: relative;
  transition: 0.3s ease outline, 0.3s ease transform;
  box-shadow: ${props => props.selected ? shadows.blue : shadows.light};
  transform: scale(${props => props.selected ? 1 : 0.9});
  flex-shrink: 0;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-decoration: none;
  width: 100%;
  height: 100%;
  margin: ${props => getPadding(props.size)}px;
  ${props => props.selectable ? 'cursor: pointer;' : ''}

  img {
    width: 100%;
    height: 100%;
  }

  ${Overlay} {
    background-color: ${Color(colors.blue)
      .alpha(0.95)
      .string()};
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.5s ease opacity;
  }

  &:hover {
    & > ${Overlay} {
      opacity: 1;
    }
  }
`

const TitleText = Text.extend`
  margin-bottom: 4px;
`

const GalleryItem = (props: PropsType) => {
  // Use a <a/> tag if there is a link associated with this gallery item
  const ItemWrapper = props.makeLink && props.href
    ? GalleryItemDiv.withComponent('a').extend.attrs({ href: props.href })``
    : GalleryItemDiv

  return (
    <GalleryGridItem
      onClick={() => props.onClick(props.name)}
      width={props.width}
      height={props.height}
      noExplicitWidth={props.noExplicitWidth}
    >
      <ItemWrapper
        selectable={props.selectable}
        selected={props.selected}
        background={props.image}
      >
        <Overlay>
          <TitleText bold center color={colors.white}>
            {props.name}
          </TitleText>
          {props.description && (
            <Text center size={14} color={colors.white}>
              {props.description}
            </Text>
          )}
        </Overlay>
      </ItemWrapper>
    </GalleryGridItem>
  )
}

GalleryItem.defaultProps = {
  selectable: false,
  selected: false,
  noExplicitWidth: false,
  onClick: () => {}
}

export default GalleryItem
