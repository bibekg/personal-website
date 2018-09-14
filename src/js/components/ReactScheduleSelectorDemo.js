import React from 'react'

import ScheduleSelector from 'react-schedule-selector'

export default class ReactScheduleSelectorDemo extends React.Component {
  state = { schedule: [] }

  handleDateChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }

  render(): React.Element<*> {
    return (
      <ScheduleSelector
        minTime={12}
        maxTime={20}
        numDays={5}
        selection={this.state.schedule}
        onChange={this.handleDateChange}
      />
    )
  }
}