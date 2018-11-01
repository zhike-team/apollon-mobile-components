import * as React from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

export interface DatePickerPropsInterface {
  date: any,
  onChange: (date: string) => void
}

const locale = {
  locale: require('date-fns/locale/zh_cn'),
  headerFormat: 'YYYY年MMMD日',
  weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  todayLabel: {
    long: '今天'
  }
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
        locale={locale}
      />
    )
  }
}

export default DatePicker
