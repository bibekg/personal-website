// @flow

import * as React from 'react'
import Gallery from './Gallery'
import info from '../info'
const { projects } = info

export default function WorkGallery() {
  return (
    <div>
      <Gallery contents={projects}/>
    </div>
  )
}
