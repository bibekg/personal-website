// @flow

import * as React from 'react'
import Gallery from 'react-photo-gallery'

import photography from '../images/photography'


export default function PhotoGallery() {
    return (
        <div>
          <Gallery
            columns={1}
            photos={[
              { src: photography.solstice, width: 6  , height: 2 }
            ]}
          />
          <Gallery
            columns={3}
            photos={[
              { src: photography.chicagoTrain, width: 3, height: 4 },
              { src: photography.mistTrail, width: 4, height: 3 },
              { src: photography.shuvangSMM, width: 3, height: 4 }
            ]}
          />
          <Gallery
            columns={3}
            photos={[
              { src: photography.gettyStream, width: 3, height: 4 },
              { src: photography.chicagoAerial, width: 3, height: 4 },
              { src: photography.carBlur, width: 4, height: 3 }
            ]}
          />
        </div>
    )
}