// @flow

import * as React from 'react'
import styled from 'styled-components'
import Gallery from './Gallery'
import YouTube from 'react-youtube'
import info from '../info'
const { videos } = info

const VideoGalleryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
        {this.state.selectedVideo != null ? (
          <YouTube videoId={this.state.selectedVideo.videoId} />
        ) : null}
      </VideoGalleryDiv>
    )
  }
}
