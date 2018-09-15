// @flow

import * as React from 'react'
import styled from 'styled-components'
import PhotoGallery from 'react-photo-gallery'
import Title from './Title'
import Text from './Text'
import { colors } from '../styles'

const SpotlightDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > * {
    width: 100%;
  }
`

const DescriptionText = Text.extend`
  margin-bottom: 10px;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px 0;
  & > * {
      margin-right: 10px;
      transition: 0.3s ease transform;
      &:hover {
          transform: scale(1.1);
      }
  }
`

const SocialLinkIcon = styled.img`
    width: 30px;
    height: 30px;
`

type LinkType = {}

type PropsType = {
  name: string,
  tagline: string,
  screenshots?: Array<string>,
  description?: Array<string>,
  links?: Array<LinkType>
}

export default function ProjectSpotlight(props: PropsType) {
  const { name, tagline, screenshots, description, links, CustomRender } = props
  return (
    <SpotlightDiv>
      <Title>{name}</Title>
      <Text color={colors.black} size={22}>{tagline}</Text>
      { links && <SocialLinks>
        {links.map(link => (
          <a key={link.name} href={link.href}><SocialLinkIcon src={link.icon} alt={link.name} /></a>
        ))}
      </SocialLinks>}

      {description && description.map(d => {
        if (typeof d === 'string') {
          return <DescriptionText key={d} paragraph>{d}</DescriptionText>
        }
        if (typeof d === 'object' && d.screenshots) {
          return <PhotoGallery
            key={d.screenshots[0].src}
            columns={1}
            photos={d.screenshots}
          />
        }
        return null
      })}

      {CustomRender && <CustomRender />}

    </SpotlightDiv>
  )
}