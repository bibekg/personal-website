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
    max-width: 800px;
    padding: 50px 0;
`

const GalleryContainer = styled.div`
    margin-bottom: 20px;
    & > *:first-child {
        margin-bottom: 10px;
    }
`

export default function() {
    return (
        <Flex column alignCenter>
            <InnerContainer>
                <BusinessCard />

                <Bio />

                <GalleryContainer>
                    <Title>Projects</Title>
                    <Gallery>
                        {info.projects.map(project => (
                            <GalleryItem key={project.name} name={project.name} image={project.image} href={project.href} />
                        ))}
                    </Gallery>
                </GalleryContainer>
                    
                <GalleryContainer>
                    <Title>Work</Title>
                    <Gallery>
                        {info.work.map(work => (
                            <GalleryItem key={work.name} name={work.name} image={work.image} />
                        ))}
                    </Gallery>
                </GalleryContainer>

                <GalleryContainer>
                    <Title>Videos</Title>
                    <Gallery>
                        {info.videos.map(video => (
                            <GalleryItem key={video.name} name={video.name} image={video.image} />
                        ))}
                    </Gallery>
                </GalleryContainer>
            </InnerContainer>
        </Flex>
    )
}