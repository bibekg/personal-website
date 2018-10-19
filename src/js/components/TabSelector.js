// @flow

import * as React from 'react'
import styled from 'styled-components'
import Text from './Text'
import Title from './Title'
import { colors, shadows } from '../styles'

const SELECTOR_HEIGHT = 40

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > :nth-child(2) {
    margin-top: 25px;
  }
`

const SelectorDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${SELECTOR_HEIGHT}px;

  box-shadow: ${shadows.default};
  border-radius: 5px;
  > * {
    height: 100%;
    flex: 1;
    &:not(:last-child) {
      position: relative;

      ${'' /* Small (half-height) border between tabs */} &:after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 1px;
        height: 50%; /* or 100px */
        transform: translateY(-50%);
        border-right: 1px solid ${colors.lightGrey};
      }
    }
  }
`

const TabItemDiv = styled.div`
  background-color: ${colors.white};
  border-bottom: ${props =>
    props.selected ? `2px solid ${colors.blue}` : `2px solid transparent`};
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
  onTabChange: string => void,
  showLabel: boolean
}

function TabSelector(props: PropsType): React.Element<*> {
  return (
    <Wrapper>
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
      <Title>{props.selectedTab}</Title>
    </Wrapper>
  )
}

TabSelector.defaultProps = {
  showLabel: false
}

export default TabSelector
