// @flow

import * as React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import BusinessCard from './BusinessCard'
import Bio from './Bio'
import Gallery, { GalleryItem } from './Gallery'
import Title from './Title'
import info from '../info'

const InnerContainer = styled.div`
    max-width: 850px;
    padding: 50px;
`

const GalleryContainer = styled.div`
    margin-bottom: 20px;
`

export default function() {
    return (
        <Flex column alignCenter>
            <InnerContainer>
                <BusinessCard />

                <Bio />

                <GalleryContainer >
                    <Title>Projects</Title>
                    <Gallery contents={info.projects} />
                </GalleryContainer>

                <GalleryContainer>
                    <Title>Videos</Title>
                    <Gallery contents={info.videos} />
                </GalleryContainer>

                <GalleryContainer>
                    <Title>Work</Title>
                    <Gallery contents={info.work} />
                </GalleryContainer>
                    
            </InnerContainer>
        </Flex>
    )
}