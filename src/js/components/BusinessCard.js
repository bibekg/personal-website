// @flow

import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../styles'
import info from '../info'
import profilePicture from '../images/profile.jpg'
import Flex from 'styled-flex-component'
import Text from './Text'

const Card = styled(Flex)`
    & > *:first-child {
        margin-right: 10px;
    }
`

const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid ${colors.blue};
`

const SocialLinks = styled(Flex)`
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

export default function BusinessCard() {

    const name = `${info.name.first} ${info.name.last}`

    return (
        <Card alignStart justifyStart className='hello'>
            <ProfileImage src={profilePicture} alt={name} />
            <Flex column alignStart>
                <Text bold color={colors.blue} size={48}>{name}</Text>
                <Text light>{info.tagline}</Text>
                <SocialLinks justifyStart alignCenter>
                    {info.links.map(link => (
                        <a key={link.name} href={link.href}><SocialLinkIcon src={link.icon} alt={link.name} /></a>
                    ))}
                </SocialLinks>
            </Flex>
        </Card>
    )
}