// @flow

import * as React from "react";
import styled from "@emotion/styled";
import { useVisualizer, models as vizModels } from "react-audio-viz";

import MediaLyrics from "../MediaLyrics";
import songLyrics from "./for-alice-lyrics.json";
import { shadows } from "../../styles";
// import VIDEO_SRC from './for-alice-540p.mp4'

const VIDEO_SRC =
  "https://bibeks-random-assets.s3-us-west-2.amazonaws.com/personal-website/for-alice.mp4";

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
`;

const VideoContainer = styled.div`
  position: relative;
  height: 50vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:last-child {
    position: absolute;
    bottom: -60px;
  }
`;

const Video = styled.video`
  height: 100%;
  box-shadow: ${shadows.default};
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;

const AliceFarewell = () => {
  const videoElementRef: React.MutableRefObject<HTMLVideoElement | null> = React.useRef(null);
  const [ReactAudioViz, initializeVisualizer] = useVisualizer(videoElementRef);

  const vizModel = React.useMemo(
    () =>
      vizModels.polar({
        color: "rgb(159, 166, 117)",
        darkMode: true,
      }),
    [vizModels],
  );

  return (
    <Wrapper>
      {ReactAudioViz ? <ReactAudioViz model={vizModel} /> : null}
      <VideoContainer>
        <Video
          playsInline
          crossOrigin="anonymous"
          controls={true}
          x-webkit-airplay="allow"
          ref={videoElementRef}
          onPlay={initializeVisualizer}
          src={VIDEO_SRC}
        />
        {<MediaLyrics mediaElementRef={videoElementRef} songLyrics={songLyrics} />}
      </VideoContainer>
    </Wrapper>
  );
};

export default AliceFarewell;
