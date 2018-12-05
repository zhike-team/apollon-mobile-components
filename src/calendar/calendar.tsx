import * as React from 'react'
import './calendar.css'
import Calendar from 'rc-calendar'
import * as moment from 'moment'
import * as DatePicker from 'react-mobile-datepicker'
import Icon from '../icon'
import Slider from 'react-slick'
import 'moment/locale/zh-cn'
moment().locale('zh-cn')

export interface CalendarPropsInterface {
  date: any,
  onChange: (date: any) => void
}

interface CalendarStateInterface {
  pickerDate: any,
  isOpen: boolean
}

export class ZkCalendar extends React.Component<CalendarPropsInterface, CalendarStateInterface> {
  constructor (props: any) {
    super(props)
    this.state = {
      pickerDate: props.date || new Date(),
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
    this.props.onChange(date)
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
    const settings = {
      dots: false,
      infinite: true,
      speed: 200,
      beforeChange: (current: number, next: number) => {
        const currentDate = this.state.pickerDate
        const newDate = current - next === -1 || current - next > 1 ? moment(currentDate).add(1, 'months') : moment(currentDate).subtract(1, 'months')
        this.setState({ pickerDate: newDate })
      }
    }
    const calendarItem = (
      <div className='calendar-box'>
        <div className='calendar-head' onClick={this.handleSelectMonth}>
          <span>{moment(this.state.pickerDate).format('YYYY.MM')}</span>
          <Icon type='calendar-arrow' size='xxs' />
        </div>
        <Calendar
          value={moment(this.state.pickerDate)}
          showDateInput={false}
          showToday={false}
          onSelect={this.handleCalendarSelect}
        />
      </div>
    )
    return (
      <div className='calendar-container'>
        <Slider {...settings}>
          {calendarItem}
          {calendarItem}
          {calendarItem}
        </Slider>
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
