// @flow

import * as React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { colors } from '../styles'

const SELECTOR_HEIGHT = 40

const SelectorDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${SELECTOR_HEIGHT}px;

  border: 2px solid ${colors.blue};
  border-radius: ${SELECTOR_HEIGHT}px;
  > * {
    height: 100%;
    flex: 1;
    &:first-child {
      border-top-left-radius: ${SELECTOR_HEIGHT}px;
      border-bottom-left-radius: ${SELECTOR_HEIGHT}px;
    }
    &:last-child {
      border-top-right-radius: ${SELECTOR_HEIGHT}px;
      border-bottom-right-radius: ${SELECTOR_HEIGHT}px;
    }
    &:not(:last-child) {
      border-right: 2px solid ${colors.blue};
    }
  }
`

const TabItemDiv = styled.div`
  background-color: ${props => (props.selected ? colors.blue : colors.white)}; padding: 5px 10px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

type PropsType = {
  tabs: Array<string>,
  selectedTab: string,
  onTabChange: string => void
}

export default function TabSelector(props: PropsType): React.Element<*> {
  return (
    <SelectorDiv>
      {props.tabs.map(tab => (
        <TabItemDiv
          key={tab}
          onClick={() => props.onTabChange(tab)}
          selected={props.selectedTab === tab}
        >
          <Text
            color={props.selectedTab === tab ? colors.white : colors.black}
            bold
          >
            {tab}
          </Text>
        </TabItemDiv>
      ))}
    </SelectorDiv>
  )
}
