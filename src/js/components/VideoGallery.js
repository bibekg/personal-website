// @flow

import * as React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'

import Text from './Text'
import Gallery from './Gallery'
import info from '../info'
import { colors, shadows } from '../styles'
const { videos } = info

const VideoGalleryDiv = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const VideoPlayerDiv = styled.div`
  ${'' /* width: 100%; */}
  box-shadow: ${shadows.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 20px 0;
  padding: 20px 0;
  width: 100%;

  ${Text}:last-child {
    margin-bottom: 15px;
  }

  & > span {
    padding: 10px;
    iframe {
      max-width: 100%;
    }
  }
`

type PropsType = {}
type StateType = {
  selectedVideo: ?Object
}

export default class VideoGallery extends React.Component<
  PropsType,
  StateType
> {
  state = {
    selectedVideo: videos[0]
  }

  handleSelectChange = (itemName: string) => {
    this.setState({
      selectedVideo: videos.find(v => (v.name === itemName))
    })
  }

  renderSelectedVideo() {
    const { selectedVideo } = this.state
    if (selectedVideo) {
      return (
        <VideoPlayerDiv>
          <div>
            <Text size={24} center color={colors.blue} bold>{selectedVideo.name}</Text>
            { selectedVideo.tagline && <Text center>{selectedVideo.tagline}</Text>}
          </div>
          <YouTube videoId={selectedVideo.videoId} />
        </VideoPlayerDiv>
      )
    }
  }

  render(): React.Element<*> {
    return (
      <VideoGalleryDiv>
        <Gallery
          name="video"
          contents={videos}
          selectable
          selectedItem={this.state.selectedVideo}
          onSelectChange={this.handleSelectChange}
        />
        {this.state.selectedVideo != null ? this.renderSelectedVideo() : null}
      </VideoGalleryDiv>
    )
  }
}
