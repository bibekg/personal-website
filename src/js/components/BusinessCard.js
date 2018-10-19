// @flow

import * as React from 'react'
import styled from 'styled-components'
import { colors, breakpoints } from '../styles'
import info from '../info'
import profilePicture from '../images/me-frame-mixed.png'
import SocialLinks from './SocialLinks'
import Text from './Text'

const Card = styled.div`
  & > *:first-child {
    margin-right: 10px;
  }

  display: flex;
  @media screen and (max-width: ${breakpoints.default - 1}px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media screen and (min-width: ${breakpoints.default}px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${breakpoints.default - 1}px) {
    align-items: center;
    ${Text} {
      :first-child {
        font-size: 36px;
      }
      :nth-child(2) {
        font-size: 14px;
      }
    }
  }

  @media screen and (min-width: ${breakpoints.default}px) {
    align-itmes: flex-start;
    ${Text} {
      :first-child {
        font-size: 48px;
      }
      :nth-child(2) {
        font-size: 18px;
      }
    }
  }
`

const ProfileImage = styled.img`
  @media screen and (max-width: ${breakpoints.default - 1}px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: ${breakpoints.default}px) {
    width: 150px;
    height: 150px;
  }
`

export default function BusinessCard() {
  const name = `${info.name.first} ${info.name.last}`

  return (
    <Card>
      <ProfileImage src={profilePicture} alt={name} />
      <TextInfo>
        <Text bold color={colors.blue}>
          {name}
        </Text>
        <Text light>{info.tagline}</Text>
        <SocialLinks />
      </TextInfo>
    </Card>
  )
}
