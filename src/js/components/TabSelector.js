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
  > * {
    height: 100%;
    flex: 1;
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
  & > * {
    width: 100%;
  }
`

type PropsType = {
  tabs: { [string]: TabInfoType },
  selectedTab: string,
  onTabChange: string => void
}

export default function TabSelector(props: PropsType): React.Element<*> {
  return (
    <SelectorDiv>
      {Object.keys(props.tabs).map(tabKey => (
        <TabItemDiv
          key={tabKey}
          onClick={() => props.onTabChange(tabKey)}
          selected={props.selectedTab === tabKey}
        >
          <Text
            title={tabKey}
            color={props.selectedTab === tabKey ? colors.white : colors.black}
            bold
          >
            {props.tabs[tabKey].emoji}
          </Text>
        </TabItemDiv>
      ))}
    </SelectorDiv>
  )
}
