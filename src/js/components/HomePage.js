// @flow

import * as React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import BusinessCard from './BusinessCard'
import Bio from './Bio'
import TabSelector from './TabSelector'
import ProjectGallery from './ProjectGallery'
import PhotoGallery from './PhotoGallery'
import VideoGallery from './VideoGallery'
import WritingGallery from './WritingGallery'
import Title from './Title'
import Container from './Container'
import info from '../info'
import { colors } from '../styles'

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background: linear-gradient(0deg, ${rgba(colors.blue, 0.15)}, ${colors.white});
`

const InnerContainer = styled.div`
  max-width: 750px;
  width: 95%;
`

const RenderedTabContainer = styled.div`
  margin: 30px 0;
`

export default class HomePage extends React.Component<PropsType, StateType> {
  state = {
    selectedTab: 'Work'
  }

  tabs = {
    Work: {
      emoji: '💼',
      component: () => (
        <Container>
          <ProjectGallery />
        </Container>
      )
    },
    Videos: {
      emoji: "🎬",
      component: () => (
        <Container>
          <VideoGallery />
        </Container>
      )
    },
    Photography: {
      emoji: "📸",
      component: () => (
        <Container>
          <PhotoGallery />
        </Container>
      )
    },
    Writing: {
      emoji: "📝",
      component: () => (
        <Container>
          <WritingGallery />
        </Container>
      )
    }
  }

  handleTabChange = (newTab: string) => {
    this.setState({ selectedTab: newTab })
  }

  renderTab() {
    return this.state.selectedTab ? this.tabs[this.state.selectedTab].component() : null
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
              tabs={this.tabs}
              selectedTab={this.state.selectedTab}
              onTabChange={this.handleTabChange}
            />
          </Container>

          <RenderedTabContainer>{this.renderTab()}</RenderedTabContainer>
        </InnerContainer>
      </HomePageWrapper>
    )
  }
}
