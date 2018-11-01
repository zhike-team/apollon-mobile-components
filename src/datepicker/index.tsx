import * as React from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

export interface DatePickerPropsInterface {
  date: any,
  onChange: (date: string) => void
}

class DatePicker extends React.Component<DatePickerPropsInterface, any> {

  handleDateChange = (date: any) => {
    this.props.onChange(date)
  }

  render () {
    const { date } = this.props
    return (
      <InfiniteCalendar
        className='smart-date-picker' // for modifying css
        selected={date}
        onSelect={this.handleDateChange}
      />
    )
  }
}

export default DatePicker
