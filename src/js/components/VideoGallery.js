// @flow

import * as React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'

import Text from './Text'
import Gallery from './Gallery'
import info from '../info'
import { colors } from '../styles'
const { videos } = info

const VideoGalleryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const VideoPlayerDiv = styled.div`
  ${'' /* width: 100%; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 20px 0;

  ${Text}:last-child {
    margin-bottom: 15px;
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
      return <VideoPlayerDiv>
        <div>
          <Text size={24} center color={colors.blue} bold>{selectedVideo.name}</Text>
          { selectedVideo.tagline && <Text center>{selectedVideo.tagline}</Text>}
        </div>
        <YouTube videoId={selectedVideo.videoId} />
      </VideoPlayerDiv>
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
