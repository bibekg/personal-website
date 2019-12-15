// @flow

import * as React from 'react'
import styled from 'styled-components'

import Text from '../Text'
import ReactYouTube from 'react-youtube'
import songLyrics from './for-alice-lyrics.json'

const YOUTUBE_VIDEO_ID = 'iifKNcoOjhY'

// const lyrs = {
//   21: "It's been about 10 years since we met",
//   23.5:
// }

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background-position: center;
  background-size: cover;
  background: black;
  min-height: 100vh;
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

  // Set up time-grabbing logic
  const handleReady = React.useCallback(({ target: player }) => {
    const updateTime = () => {
      if (player && player.getCurrentTime) {
        setTime(player.getCurrentTime())
      }
    }
    setInterval(updateTime, 100)
  }, [])

  return (
    <Wrapper>
      <ReactYouTube videoId={YOUTUBE_VIDEO_ID} onReady={handleReady} />
      <Text color="white">{currentSongLyric}</Text>
    </Wrapper>
  )
}

export default AliceFarewell
