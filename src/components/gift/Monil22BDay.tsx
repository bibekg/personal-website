// @flow

import * as React from 'react'
import styled from "@emotion/styled";
import { rgb } from 'polished'

import Text from '../Text'

import songFile from '../../assets/audio/monil-22-bday.mp3'
import songCover from '../../assets/images/monil-song-cover.jpeg'
import { colors, shadows } from '../../styles'

const contributors = [
  'Ryan',
  'Chris',
  'Nathan',
  'Jackson',
  'Deanna',
  'Nazaret',
  'Akhil',
  'Simon',
]

const lyrics = [
  'One of the most caring people that you will ever meet',
  'Always blasting simp music on endless repeat',
  'He gets sick at least once a quarter, probably cause he forgets to eat',
  "Nevertheless he'll still be there, you'll never find a friend so sweet",
  '',
  'Catch him on Facebook love reacting every post he comes across',
  "Interested in every event, doesn't even matter where it was",
  "Doin' all this on his iPhone 5S, with size 50 font",
  "You know he's super multicultural, he even went to Cuba",
  '',
  `Denim jacket on, he's sending it to Rocco's, cause you know he's "not not down"`,
  "but let's be real, he peaked at Club Jamba, last man standing, yeah he earned that crown",
  "Dedicated to the cause that's for sure, his enthusiasm's world-renowned",
  "Man's a lightweight so whenever he goes out, you know he's gonna come back browned",
  '',
  "All jokes aside, he is so selfless, he'll make you feel like a king or queen",
  "He's there for you without hesitation, he'll hype you up better than caffeine",
  "Or catch him for a late night deep talk, he'll let you know he's on your team",
  "Talk to him about whatever, he'll support you and all your dreams",
]

const Canvas = styled.canvas`
  border: 1px solid black;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
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

const CoverWrapper = styled.div`
  background: url(${songCover});
  background-position: center;
  background-size: cover;
  width: 500px;
  max-width: 90vw;
  height: 500px;
  z-index: 1;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: ${shadows.default};
`

const LyricsWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  opacity: ${props => (props.show ? '1' : '0')};
  transition: 0.5s ease opacity;
  }
`

const PixelGrid = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const PixelGridRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

const PixelGridPixel = styled('div')`
  flex-grow: 1;
`

type StateType = {
  songDone: boolean
}

export default class extends React.Component<{}, StateType> {
  constructor(props) {
    super(props)
    this.ctx = null
    this.canvas = null

    this.state = {
      showLyrics: false,
      pixelGrid: [],
    }

    for (let i = 0; i < 32; i += 1) {
      this.state.pixelGrid[i] = []
      for (let j = 0; j < 32; j += 1) {
        this.state.pixelGrid[i][j] = { r: 0, g: 0, b: 0 }
      }
    }

    this.handlePause = this.handlePause.bind(this)
    this.setUpVisualization = this.setUpVisualization.bind(this)
  }

  handlePause() {
    this.setState({ showLyrics: false })
  }

  setUpVisualization() {
    // Visualization already set up
    this.setState({ showLyrics: true })

    if (this.ctx) {
      return
    }

    if ('AudioContext' in window) {
      this.ctx = new AudioContext()
    } else if ('webkitAudioContext' in window) {
      this.ctx = new webkitAudioContext()
    } else {
      console.log("Can't show visualizations in this browser :(")
      return
    }

    const audio = document.getElementById('monils-song')
    if (!audio) {
      console.error('Did not load audio???')
      return
    }

    const audioSrc = this.ctx.createMediaElementSource(audio)
    const analyser = this.ctx.createAnalyser()

    // we have to connect the MediaElementSource with the analyser
    audioSrc.connect(analyser)
    audioSrc.connect(this.ctx.destination)
    // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)

    // frequencyBinCount tells you how many values you'll receive from the analyser
    const frequencyData = new Uint8Array(analyser.frequencyBinCount)

    // we're ready to receive some data!
    // loop
    const renderFrame = () => {
      requestAnimationFrame(renderFrame)
      // update data in frequencyData
      analyser.getByteFrequencyData(frequencyData)
      // render frame based on values in frequencyData
      for (let i = 0; i < frequencyData.length; i += 1) {
        const x = Math.floor(i / 32)
        const y = i % 32
        const pixel = document.getElementsByClassName(
          `pixel-${31 - x}-${31 - y}`
        )[0]

        const TIME_DIVISION = 10000

        const timeUnit = Date.now() % TIME_DIVISION
        const redDivision =
          Math.abs(timeUnit - TIME_DIVISION / 2) / (TIME_DIVISION / 2)
        const greenDivision = redDivision
        const blueDivision = 1 - redDivision

        const value = frequencyData[i] * 0.8
        pixel.style.backgroundColor = `rgb(${value * redDivision}, ${value *
          greenDivision}, ${value * blueDivision})`
      }
    }

    this.ctx.resume()
    renderFrame()
  }

  render() {
    return (
      <Wrapper>
        <InnerContainer>
          <PixelGrid>
            {this.state.pixelGrid.map((gridI, outerIndex) => (
              <PixelGridRow key={outerIndex}>
                {gridI.map((gridJ, innerIndex) => (
                  <PixelGridPixel
                    onClick={this.handlePixelClick}
                    className={`pixel-${outerIndex}-${innerIndex}`}
                    key={innerIndex}
                    style={{
                      backgroundColor: rgb(0, 0, 0),
                    }}
                  />
                ))}
              </PixelGridRow>
            ))}
          </PixelGrid>

          <audio
            id="monils-song"
            controls
            src={songFile}
            onPlay={this.setUpVisualization}
            onPause={this.handlePause}
          />

          <CoverWrapper>
            <LyricsWrapper show={this.state.showLyrics}>
              <Text color={colors.white} center bold medium>
                Happy 22nd Birthday, Monil! 😘
              </Text>
              <br />
              {lyrics.map((line, index) =>
                line === '' ? (
                  <br key={index} />
                ) : (
                  <Text key={index} center color={colors.white}>
                    {line}
                  </Text>
                )
              )}
            </LyricsWrapper>
          </CoverWrapper>

          <div style={{ zIndex: 1, marginTop: '50px' }}>
            <Text center color={colors.lightGrey}>
              A big thank you to the following people that helped make this
              happen by contributing ideas for lyrics, presentation, etc.
            </Text>
            <br />
            <Text center color={colors.lightGrey}>
              {contributors.join(', ')}
            </Text>
            ))}
          </div>
        </InnerContainer>
      </Wrapper>
    )
  }
}
