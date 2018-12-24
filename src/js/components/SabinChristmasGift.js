// @flow

import * as React from 'react'
import styled from 'styled-components'

import Text from './Text'
import bg from '../images/christmas-bg.png'
import songFile from '../../assets/audio/brother-for-life.mp3'
import { colors, shadows } from '../styles'

const SnowflakeDiv = styled.div`
  color: #fff;
  font-size: 1em;
  font-family: Arial, sans-serif;
  text-shadow: 0 0 5px #000;
`

const Snowflakes = props => (
  <div className="snowflakes" aria-hidden="true">
    {(() => {
      const els = []
      for (let i = 0; i < props.count; i += 1) {
        els.push(
          <SnowflakeDiv key={i} className="snowflake">
            ❅
          </SnowflakeDiv>
        )
      }
      return els
    })()}
  </div>
)

const lyrics = [
  'We laughed, we cried til our tears ran dry',
  'We danced, we sang late into the nights',
  "Memories made, I'll never forget, so glad you've been by my side",
  'Through all these times, the lows and the highs, I found my brother for life',
  '',
  'You helped me see who I really am, my personal North star',
  'You were the bridge, from me to my clan, even though they’re so far',
  'You helped me learn our language and culture, and melodies on guitar',
  'Oh and you found my champagne-covered cell phone, at that one Lakeside bar',
  '',
  'We laughed, we cried til our tears ran dry',
  'We danced, we sang late into the nights',
  "Memories made, I'll never forget, so glad you've been by my side",
  'Through all these times, the lows and the highs, I found my brother for life',
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`

const InnerContainer = styled.div`
  max-width: 750px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LyricsWrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: ${shadows.default};
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
  transition: opacity 0.6s ease;
  opacity: ${props => (props.show ? '1' : '0')};
`

type StateType = {
  songDone: boolean,
}

export default class extends React.Component<{}, StateType> {
  state = {
    songDone: false,
  }

  render() {
    return (
      <Wrapper>
        <InnerContainer>
          <Text color={colors.green} center bold large>
            🎄🎄🎄 Merry Christmas, Sabin! 🎄🎄🎄
          </Text>
          <br />
          <Text color={colors.white} center>
            I've always told you how I think the best gifts aren't necessarily
            the ones that cost the most money but rather the ones that are the
            most thoughtful.
          </Text>
          <Text color={colors.white} center>
            This Christmas, I'm taking my own advice and made you something that
            cost $0 but comes from the bottom of my heart with all the love I
            have for you.
          </Text>
          <br />
          <Text color={colors.white} center>
            Press play and enjoy.
          </Text>

          <br />
          <audio
            controls
            src={songFile}
            onEnded={() => {
              console.log('ended fired')
              this.setState({
                songDone: true,
              })
            }}
          />

          <LyricsWrapper show={this.state.songDone}>
            {lyrics.map((line, index) =>
              line === '' ? (
                <br />
              ) : (
                <Text key={index} center color={colors.black}>
                  {line}
                </Text>
              )
            )}
          </LyricsWrapper>
        </InnerContainer>
        <Snowflakes count={11} />
      </Wrapper>
    )
  }
}
