import * as React from 'react'
import styled from 'styled-components'

import Text from './Text'
import info from '../info'
import { colors } from '../styles'

const SocialLinkIcon = styled.img`
  width: 30px;
  height: 30px;
`

const SocialLinksDiv = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  position: relative;
  & > a {
    margin-right: 10px;
    position: relative;
    :hover {
      ${SocialLinkIcon} {
        transform: scale(1.1);
      }
      ${Text} {
        opacity: 1;
      }
    }
    ${SocialLinkIcon} {
      transition: 0.3s ease transform;
    }

    ${Text} {
      color: ${colors.black};
      font-size: 0.8em;
      text-align: center;
      opacity: 0;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      transition: 0.3s ease opacity;
    }
  }
`

export default function SocialLinks(props) {
  return (
    <SocialLinksDiv>
      {info.links.map(link => (
        <a key={link.name} href={link.href}>
          <SocialLinkIcon src={link.icon} alt={link.name} />
          <Text>{link.name}</Text>
        </a>
      ))}
    </SocialLinksDiv>
  )
}
