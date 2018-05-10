// @flow

import * as React from 'react'
import styled from 'styled-components'
import BusinessCard from './BusinessCard'
import Bio from './Bio'
import Gallery, { GalleryItem } from './Gallery'
import PhotoGallery from './PhotoGallery'
import Title from './Title'
import Container from './Container'
import info from '../info'

const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
`

const InnerContainer = styled.div`
    max-width: 750px;
    width: 100%;
`

const GalleryContainer = styled.div.attrs({ className: 'gallery-container' })`
    margin-bottom: 20px;
`

export default function() {
    return (
        <HomePageWrapper>
            <InnerContainer>
                <Container>
                    <BusinessCard />
                </Container>

                <Container>
                    <Bio />
                </Container>

                <GalleryContainer >
                    <Container>
                        <Title>Work</Title>
                    </Container>
                    <Gallery contents={info.projects} />
                </GalleryContainer>

                <GalleryContainer>
                    <Container>
                        <Title>Videos</Title>
                    </Container>
                    <Gallery contents={info.videos} />
                </GalleryContainer>

                <GalleryContainer>
                    <Container>
                        <Title>Photography</Title>
                        <PhotoGallery />
                    </Container>
                </GalleryContainer>
            </InnerContainer>
        </HomePageWrapper>
    )
}