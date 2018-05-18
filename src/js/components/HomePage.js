// @flow

import * as React from 'react'
import styled from 'styled-components'
import BusinessCard from './BusinessCard'
import Bio from './Bio'
import Gallery, { GalleryItem } from './Gallery'
import TabSelector from './TabSelector'
import PhotoGallery from './PhotoGallery'
import VideoGallery from './VideoGallery'
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

const RenderedTabContainer = styled.div`
    margin: 30px 0;
`

export default class HomePage extends React.Component<PropsType, StateType> {
  state = {
    selectedTab: 'Videos'
  }

  handleTabChange = (newTab: string) => {
    this.setState({ selectedTab: newTab })
  }

  renderTab() {
    const content = {
      Work: (
          <Container>
            <Gallery contents={info.projects} />
          </Container>
      ),
      Videos: (
          <Container>
            <VideoGallery />
          </Container>
      ),
      Photography: (
          <Container>
            <PhotoGallery />
          </Container>
      )
    }

    return this.state.selectedTab ? content[this.state.selectedTab] : null
  }

  render(): React.Element<*> {
    return (
      <HomePageWrapper>
        <InnerContainer>
          <Container>
            <BusinessCard />
          </Container>

          <Container>
            <Bio />
          </Container>

          <Container>
            <TabSelector
              tabs={['Work', 'Videos', 'Photography']}
              selectedTab={this.state.selectedTab}
              onTabChange={this.handleTabChange}
            />
          </Container>

            <RenderedTabContainer>
                {this.renderTab()}
            </RenderedTabContainer>
        </InnerContainer>
      </HomePageWrapper>
    )
  }
}
