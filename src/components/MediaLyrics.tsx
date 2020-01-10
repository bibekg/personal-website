import * as React from 'react'
import styled from 'styled-components'
import Text from './Text'

const LyricsContainer = styled.div`
  background-color: rgba(0, 0, 0, ${props => (props.hidden ? 0 : 0.5)});
  padding: 10px;
  border-radius: 5px;
`

export type LyricListItem = {
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

interface Props {
  mediaElementRef: React.MutableRefObject<HTMLVideoElement>
  songLyrics: LyricListItem[]
}

const MediaLyrics = ({ mediaElementRef, songLyrics }: Props) => {
  const [currentTime, setTime] = React.useState(0)
  React.useEffect(() => {
    const updateTime = () => {
      if (
        mediaElementRef &&
        mediaElementRef.current &&
        mediaElementRef.current.currentTime
      ) {
        setTime(mediaElementRef.current.currentTime)
      }
    }
    setInterval(updateTime, 100)
  }, [mediaElementRef])

  const currentSongLyric = getCurrentLyric(currentTime, songLyrics)
  return (
    <LyricsContainer hidden={currentSongLyric == null}>
      <Text style={{ margin: 0 }} color="white">
        {currentSongLyric}
      </Text>
    </LyricsContainer>
  )
}

export default MediaLyrics
