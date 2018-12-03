import * as React from 'react'
import './calendar.css'
import Calendar from 'rc-calendar'
// import 'rc-calendar/assets/index.css'
import * as moment from 'moment'
import 'moment/locale/zh-cn'
moment().locale('zh-cn').utcOffset(8)
import * as DatePicker from 'react-mobile-datepicker'

export interface CalendarPropsInterface {
  // icon: string
  // primaryText: string
  // secondaryText?: string
  // onReportClick: () => void
}

interface CalendarStateInterface {
  pickerDate: any,
  isOpen: boolean
}

export class ZkCalendar extends React.Component<CalendarPropsInterface, CalendarStateInterface> {
  constructor (props: any) {
    super(props)
    this.state = {
      pickerDate: new Date(),
      isOpen: false
    }
  }

  handleSelectMonth = () => {
    this.setState({ isOpen: true })
  }

  handlePickerSelect = (date: any) => {
    this.setState({
      isOpen: false,
      pickerDate: date
    })
  }

  handlePickerCancel = () => {
    this.setState({ isOpen: false })
  }

  handleCalendarSelect = (date: any) => {
    this.setState({ pickerDate: date })
  }

  public render () {
    const datePickerConfig = {
      'year': {
        format: 'YYYY',
        caption: 'Year',
        step: 1
      },
      'month': {
        format: 'MM',
        caption: 'Mon',
        step: 1
      }
    }
    return (
      <div className='calendar-container'>
        <div onClick={this.handleSelectMonth}>{moment(this.state.pickerDate).format('YYYY.MM')}</div>
        <Calendar
          value={moment(this.state.pickerDate)}
          showDateInput={false}
          showToday={false}
          onSelect={this.handleCalendarSelect}
        />
        <DatePicker
          value={new Date(this.state.pickerDate)}
          isOpen={this.state.isOpen}
          theme='ios'
          dateConfig={datePickerConfig}
          onSelect={this.handlePickerSelect}
          onCancel={this.handlePickerCancel}
          showHeader={false}
          confirmText='确定'
        />
      </div>
    )
  }
}
export default ZkCalendar
