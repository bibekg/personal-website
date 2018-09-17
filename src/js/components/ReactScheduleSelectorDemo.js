import React from 'react'
import styled from 'styled-components'
import ScheduleSelector from 'react-schedule-selector'

import {shadows} from '../styles'

const Wrapper = styled.div`
  background-color: white;
  box-shadow: ${shadows.light};
  padding: 20px 40px;
`

export default class ReactScheduleSelectorDemo extends React.Component {
  state = { schedule: [] }

  handleDateChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }

  render(): React.Element<*> {
    return (
      <Wrapper>
        <ScheduleSelector
          minTime={12}
          maxTime={20}
          numDays={5}
          selection={this.state.schedule}
          onChange={this.handleDateChange}
        />
      </Wrapper>
    )
  }
}