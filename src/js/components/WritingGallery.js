import React from 'react'
import styled from 'styled-components'
import WritingPiece from './WritingPiece'
import info from '../info'

const WritingGalleryDiv = styled.div`
  & > * {
    :not(:last-child) {
      margin-bottom: 25px;
    }
  }
`

const WritingGallery = () => {
  return (
    <WritingGalleryDiv>
      {info.writing.map(w => <WritingPiece key={w.link} data={w} />)}
    </WritingGalleryDiv>
  )
}

export default WritingGallery