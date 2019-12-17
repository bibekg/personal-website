// @flow

import * as React from 'react'
import styled from 'styled-components'

import Text from '../Text'
import songLyrics from './for-alice-lyrics.json'
import { colors, shadows } from '../../styles'
import { useVisualizer, vizModels } from '../useVisualizer'

const VIDEO_SRC =
  'https://bibeks-random-assets.s3-us-west-2.amazonaws.com/personal-website/for-alice.mp4'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background-position: center;
  background-size: cover;
  background: black;
  min-height: 100vh;
  position: relative;
  & > canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & > :not(canvas) {
    z-index: 1;
  }
`

const Video = styled.video`
  position: relative;
  width: 600px;
  max-width: 80%;
  box-shadow: ${shadows.default};
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`

const LyricsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
  z-index: 2;
`

type LyricListItem = {
  startTime: number
  endTime: number
  lyric: string
}

const getCurrentLyric = (
  currentTime: number,
  lyricList: LyricListItem[]
): string | null => {
  if (currentTime === 0) {
    return null
  }

  // just in case it's not already sorted
  lyricList.sort((a, b) => (a.startTime < b.startTime ? -1 : 1))
  const currentIndex = lyricList.findIndex(
    ({ startTime, endTime }) =>
      // Find the first lyric that starts after the current time (minus some padding)
      currentTime > startTime && currentTime < endTime
  )
  return currentIndex === -1 ? null : lyricList[currentIndex].lyric
}

const AliceFarewell = () => {
  const [currentTime, setTime] = React.useState(0)
  const currentSongLyric = getCurrentLyric(currentTime, songLyrics)
  const videoElementRef: React.MutableRefObject<HTMLVideoElement> = React.useRef(
    null
  )
  const [visualizationCanvas, initializeVisualizer] = useVisualizer(
    videoElementRef,
    vizModels.polar({
      direction: 'normal',
      scale: 1,
      mode: 'dark',
      color: { r: 247, g: 245, b: 138 },
    })
  )

  // Set up time-grabbing logic
  const handleVideoCanPlay = React.useCallback(() => {
    const updateTime = () => {
      if (videoElementRef.current && videoElementRef.current.currentTime) {
        setTime(videoElementRef.current.currentTime)
      }
    }
    setInterval(updateTime, 100)
  }, [])

  return (
    <Wrapper>
      {visualizationCanvas}
      <Video
        playsInline
        crossOrigin="anonymous"
        controls={true}
        x-webkit-airplay="allow"
        ref={videoElementRef}
        onPlay={initializeVisualizer}
        src={VIDEO_SRC}
        onCanPlay={handleVideoCanPlay}
      />
      <LyricsContainer>
        <Text color="white">{currentSongLyric}</Text>
      </LyricsContainer>
    </Wrapper>
  )
}

export default AliceFarewell
