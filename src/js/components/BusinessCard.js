// @flow

import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../styles'
import info from '../info'
import profilePicture from '../images/me-frame-mixed.png'
import Flex from 'styled-flex-component'
import Text from './Text'

const BREAKPOINT = 650;

const Card = styled.div`
    & > *:first-child {
        margin-right: 10px;
    }

    display: flex;
    @media screen and (max-width: ${BREAKPOINT - 1}px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    @media screen and (min-width: ${BREAKPOINT}px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
    }
`

const TextInfo = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: ${BREAKPOINT - 1}px) {
        align-items: center;
    }

    @media screen and (min-width: ${BREAKPOINT}px) {
        align-items: flex-start;
    }
`

const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
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
        <Card>
            <ProfileImage src={profilePicture} alt={name} />
            <TextInfo>
                <Text bold color={colors.blue} size={48}>{name}</Text>
                <Text light>{info.tagline}</Text>
                <SocialLinks justifyStart alignCenter>
                    {info.links.map(link => (
                        <a key={link.name} href={link.href}><SocialLinkIcon src={link.icon} alt={link.name} /></a>
                    ))}
                </SocialLinks>
            </TextInfo>
        </Card>
    )
}