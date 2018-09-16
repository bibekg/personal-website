import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Text from './Text'
import {breakpoints, shadows} from '../styles'

const Image = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`

const Box = styled.a`
  background-color: white;
  box-shadow: ${shadows.default};
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > ${Image} {
    flex-shrink: 0;
    height: 150px;
    width: 100%;
  }
  
  @media (min-width: ${breakpoints.default}px) {
    flex-direction: row;
    align-items: stretch;
    & > ${Image} {
      height: auto;
      width: 30%;
    }
  }
  text-decoration: none;
`

const TextInfo = styled.div`
  padding: 10px 15px;
`

class WritingPiece extends React.Component {
  render() {
    const {data} = this.props
    return data ? (
      <Box href={data.link}>
        {data.image && <Image image={data.image.src} />}
        <TextInfo>
          <Title size={24}>{data.title}</Title>
          <Text size={18}>{data.description}</Text>
        </TextInfo>
      </Box>
     ) :null
  }
}

export default WritingPiece
