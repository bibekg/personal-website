import * as React from 'react'
import { VisualizationModel, Pixel } from './models/types'

type UseVisualizerReturnValue = [React.Node, () => void]

export type VisualizerConfig = {
  width?: number
  height?: number
}

type MediaElement = HTMLAudioElement | HTMLVideoElement
type MediaElementRef = React.MutableRefObject<MediaElemeent>

const initializeVisualizer = (
  mediaElement: MediaElement,
  canvasRef: React.MutableRefObject<HTMLCanvasElement>,
  visualizationModel: VisualizationModel
): 'unsupported' | 'error' | 'loading' | 'success' => {
  // Set up audio context if it hasn't been yet
  let audioContext
  if (audioContext == null) {
    if ('AudioContext' in window) {
      audioContext = new AudioContext()
    } else if ('webkitAudioContext' in window) {
      audioContext = new webkitAudioContext()
    } else {
      console.warn("Can't show visualizations in this browser :(")
      return 'unsupported'
    }
  }

  if (!mediaElement) {
    return 'loading'
  }

  const audioSrc = audioContext.createMediaElementSource(mediaElement)
  const analyser = audioContext.createAnalyser()

  // we have to connect the MediaElementSource with the analyser
  audioSrc.connect(analyser)
  audioSrc.connect(audioContext.destination)
  // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)

  // frequencyBinCount tells you how many values you'll receive from the analyser
  const frequencyData = new Uint8Array(analyser.frequencyBinCount)
  const canvas: HTMLCanvasElement = canvasRef.current
  const canvasContext = canvas.getContext('2d')

  const createVizImageFromData = (frequencyData: UInt8Array) => {
    const { width, height } = canvas
    const imageData = canvasContext.createImageData(width, height)
    for (let y = 0, i = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1, i += 4) {
        const { r, g, b, a } = visualizationModel(
          x + 1,
          y + 1,
          width,
          height,
          frequencyData
        )
        imageData.data[i + 0] = r
        imageData.data[i + 1] = g
        imageData.data[i + 2] = b
        imageData.data[i + 3] = a || 255
      }
    }
    return imageData
  }

  let vizImage
  const renderFrame = () => {
    requestAnimationFrame(renderFrame)
    analyser.getByteFrequencyData(frequencyData)
    vizImage = createVizImageFromData(frequencyData)
    canvasContext.putImageData(vizImage, 0, 0)
  }

  audioContext.resume()
  renderFrame()
  return 'success'
}

const useVisualizer = (
  mediaElement: MediaElementRef,
  model: VisualizationModel,
  config: VisualizerConfig = {}
): UseVisualizerReturnValue => {
  const { width = window.innerWidth, height = window.innerHeight } = config

  const [hasInitialized, setHasInitialized] = React.useState(false)
  const canvasRef = React.useRef(null)

  const visualization = (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%' }}
      width={width}
      height={height}
    />
  )

  return [
    visualization,
    hasInitialized
      ? // TODO: Clean up this mess
        () => {}
      : () => {
          let interval: any
          const initializeThenComplete = () => {
            const result = initializeVisualizer(
              mediaElement.current,
              canvasRef,
              model
            )
            if (result !== 'loading') {
              setHasInitialized(true)
              clearInterval(interval)
            }
          }
          interval = setInterval(initializeThenComplete, 100)
        },
  ]
}

export default useVisualizer
