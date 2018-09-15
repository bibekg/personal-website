import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Text from './Text'
import constants from '../constants'

const Box = styled.a`
  background-color: white;
  box-shadow: 10px 2px 30px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (min-width: ${constants.breakpoint}px) {
    flex-direction: row;
  }
  text-decoration: none;
`

const Image = styled.img`
  width: 30%;
  flex-shrink: 0;
`

const TextInfo = styled.div`
  padding-left: 10px;
`

class WritingPiece extends React.Component {
  render() {
    const {data} = this.props
    return data ? (
      <Box href={data.link}>
        {data.image && <Image src={data.image.src} />}
        <TextInfo>
          <Title size={24}>{data.title}</Title>
          <Text size={18}>{data.description}</Text>
        </TextInfo>
      </Box>
     ) :null
  }
}

export default WritingPiece
