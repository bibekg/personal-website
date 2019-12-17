import * as React from 'react'

type Pixel = {
  r: number
  g: number
  b: number
  // alpha is optional, defaults to 255
  a?: number
}

type UseVisualizerReturnValue = [React.Node, () => void]

type VisualizationModel = (
  x: number,
  y: number,
  width: number,
  height: number,
  frequencyData: Uint8Array
) => Pixel

type CircularVizualizationModelOptins = {
  direction: 'normal' | 'reverse'
  scale: number
  mode: 'dark' | 'light'
  color: { r: number; g: numbe; b: number }
}

export const vizModels = {
  polar: (options: CircularVizualizationModelOptins) => {
    const {
      direction = 'normal',
      scale = 2,
      mode = 'dark',
      color = { r: 100, g: 150, b: 120 },
    } = options

    const colorMakerOptions: {
      [key: string]: (c: number, f: number) => number
    } = {
      dark: (c, f) => c * (f / 255),
      light: (c, f) => c + (255 - c) * (1 - f / 255),
    }
    const colorMaker = colorMakerOptions[mode]

    const frequencyIndexSelectorOptions: {
      [key: string]: (r: number, R: number, L: number) => number
    } = {
      normal: (r, R, L) => Math.min(Math.floor((r / R) * L), L),
      reverse: (r, R, L) => L - 1 - Math.min(Math.floor((r / R) * L), L),
    }

    const frequencyIndexSelector = frequencyIndexSelectorOptions[direction]

    return (
      x: number,
      y: number,
      width: number,
      height: number,
      frequencyData: Uint8Array
    ): Pixel => {
      const centerX = Math.floor(width / 2)
      const centerY = Math.floor(height / 2)

      // The viz will be a circle with radius equaling the distance from the center to any of the four cocrners
      // This will ensure that the visible area is fully contained within the circle
      const R = Math.sqrt(centerX ** 2 + centerY ** 2) * scale
      const radius = Math.sqrt((centerX - x) ** 2 + (centerY - y) ** 2)

      const frequencyMagnitudeForThisPixel =
        frequencyData[frequencyIndexSelector(radius, R, frequencyData.length)]
      return {
        r: colorMaker(color.r, frequencyMagnitudeForThisPixel),
        g: colorMaker(color.g, frequencyMagnitudeForThisPixel),
        b: colorMaker(color.b, frequencyMagnitudeForThisPixel),
      }
    }
  },
}

type VisualizerConfig = {
  width?: number
  height?: number
}

type MediaElement = HTMLAudioElement | HTMLVideoElement
type MediaElementRef = React.MutableRefObject<MediaElemeent>

export const useVisualizer = (
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

export const initializeVisualizer = (
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
