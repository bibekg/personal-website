// @flow

import * as React from 'react'
import styled, { css } from 'styled-components'

import Text from './Text'
import ProfilePic, { picturePositioningCalc } from './ProfilePic'
import Logo from './Logo'
import items from '../info'

import { colors, mixins, sizes } from '../styles'

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.offWhite};
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`

const InnerContainer = styled.div`
  margin-top: calc(
    0.5 * calc(${sizes.profilePicWidth} - ${picturePositioningCalc})
  );

  ${mixins.onMobile(css`
    margin-top: calc(${sizes.logo} + 20px);
    padding: 0 20px;
  `)};

  max-width: 650px;
  width: 95%;
  position: relative;
  margin-bottom: 80px;
`

const ProfilePicContainer = styled.div`
  position: absolute;
  top: calc(-1 * ${picturePositioningCalc});
  right: calc(-1 * ${picturePositioningCalc});
  opacity: 0.5;

  ${mixins.onMobile(css`
    display: none;
  `)};
`

const Section = styled.section`
  margin-bottom: 50px;
`

const HomePage = () => (
  <HomePageWrapper>
    <Logo />

    <ProfilePicContainer>
      <ProfilePic />
    </ProfilePicContainer>

    <InnerContainer>
      <Section id="heythere">
        <Text as="h1">Hey there! 👋🏽</Text>
      </Section>
      <Section id="intro">
        <Text as="p">
          My name is Bibek Ghimire. I’m a software engineer based in the San
          Francisco Bay Area. I’m currently working on payment platforms
          software at {items.stripe()}. I graduated from UCLA in 2019 with a
          B.S. in Computer Science and have worked at {items.clever()},{' '}
          {items.uber()}, and {items.stanza()} in the past.
        </Text>
      </Section>
      <Section id="side-projects">
        <Text as="p">
          I've also worked on a couple of fun side projects through the years.
        </Text>
        <Text as="p">
          In college, I worked on a UCLA-exclusive dating app,{' '}
          {items.bruinmeet()}, during which I was able to build an open-source
          React component, {items.scheduleSelector()}.
        </Text>
        <Text as="p">
          I also built a web app, {items.unjournal()} that uses impermanence to
          help you write openly and freely (in other words, it tosses your words
          into the digital void when you're done).
        </Text>
      </Section>

      <Section id="when-not-coding">
        <Text as="p">
          When I'm not coding, I love to {items.blog('write')},{' '}
          {items.readingList('read')}, {items.run('run')},{' '}
          {items.guitar('play guitar')}, and{' '}
          {items.outside('spend time outdoors')}.
        </Text>
      </Section>

      <Section id="contact">
        <Text as="p">
          If you're interested in working together, you can find me on the rest
          of the internet at {items.github('GitHub')},{' '}
          {items.linkedIn('LinkedIn')}, and {items.medium('Medium')}, or hit me
          up at {items.email()}.
        </Text>
      </Section>
    </InnerContainer>
  </HomePageWrapper>
)

export default HomePage
