// @flow

import * as React from 'react'
import { IndexRedirect, Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import BusinessCard from './BusinessCard'
import Bio from './Bio'
import TabSelector from './TabSelector'
import ProjectGallery from './ProjectGallery'
import PhotoGallery from './PhotoGallery'
import VideoGallery from './VideoGallery'
import WritingGallery from './WritingGallery'
import Text from './Text'
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
`

const InnerContainer = styled.div`
  max-width: 750px;
  width: 95%;
`

const RenderedTabContainer = styled.div`
  margin: 30px 0;
`

const TabContentContainer = props => (
  <Container>
    <Text center bold color={colors.blue} large capitalized>
      {props.label}
    </Text>
    <br />
    {props.children}
  </Container>
)

export default class HomePage extends React.Component<PropsType, StateType> {
  state = {
    selectedTab: 'work',
  }

  tabs = {
    work: {
      emoji: '💼',
      component: () => (
        <TabContentContainer label="Work">
          <ProjectGallery />
        </TabContentContainer>
      ),
    },
    writing: {
      emoji: '📝',
      component: () => (
        <TabContentContainer label="Writing">
          <WritingGallery />
        </TabContentContainer>
      ),
    },
    videos: {
      emoji: '🎬',
      component: () => (
        <TabContentContainer label="Videos">
          <VideoGallery />
        </TabContentContainer>
      ),
    },
    photography: {
      emoji: '📸',
      component: () => (
        <TabContentContainer label="Photography">
          <PhotoGallery />
        </TabContentContainer>
      ),
    },
  }

  handleTabChange = (newTab: string) => {
    this.setState({ selectedTab: newTab })
  }

  renderTab() {
    return this.state.selectedTab
      ? this.tabs[this.state.selectedTab].component()
      : null
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
            <TabSelector showLabel tabs={this.tabs} />
          </Container>

          <RenderedTabContainer>
            <Switch>
              {Object.keys(this.tabs).map(t => (
                <Route
                  key={t}
                  path={`/${t}/:subItem?`}
                  component={this.tabs[t].component}
                />
              ))}
              <Route
                render={() => <Redirect to={`/${Object.keys(this.tabs)[0]}`} />}
              />
            </Switch>
          </RenderedTabContainer>
        </InnerContainer>
      </HomePageWrapper>
    )
  }
}
