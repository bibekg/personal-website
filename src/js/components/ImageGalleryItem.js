// @flow

import * as React from 'react'
import { GalleryItem } from './Gallery'

const ImageGalleryItem = (props) => {
  const { data } = props.photo
  debugger
  
  return (
    <GalleryItem
      id={data.name}
      name={data.name}
      description={data.description}
      image={data.image.src}
      href={data.href}
      noExplicitWidth={props.noExplicitWidth}
    />
  )
}

ImageGalleryItem.defaultProps = {
  noExplicitWidth: false
}

export default ImageGalleryItem