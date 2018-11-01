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
  weekdays : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
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
