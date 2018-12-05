import * as React from 'react'
import * as moment from 'moment'
import Icon from '../icon'
import './date-mover.css'

interface RangePickerPropsInterface {
  startDate: any,
  endDate: any,
  onChange: ([]) => void,
  mode: string
}

class DateMover extends React.Component<RangePickerPropsInterface, any> {

  constructor (props: RangePickerPropsInterface) {
    super(props)
  }

  renderDates = (): string => {
    const { startDate, endDate } = this.props
    const startDateStr = moment(startDate).format('MM月DD日')
    const endDateStr = moment(endDate).format('MM月DD日')
    if (startDateStr === endDateStr) {
      return startDateStr
    } else {
      return `${startDateStr}-${endDateStr}`
    }
  }

  handleOperation = (direction: string) => {
    const operation = direction === 'back' ? 'subtract' : 'add'
    const { mode } = this.props
    let { startDate, endDate } = this.props
    if (mode === 'day') {
      startDate = endDate = moment(endDate)[operation]({ d: 1 }).format('YYYY-MM-DD')
    } else {
      const stepObj = mode === 'week' ? { w: 1 } : { M: 1 }
      const modeStr = mode === 'week' ? 'week' : 'month'
      startDate = moment(startDate)[operation](stepObj).format('YYYY-MM-DD')
      endDate = moment(startDate).endOf(modeStr).format('YYYY-MM-DD')
    }
    this.props.onChange([startDate, endDate])
  }

  render (): React.ReactNode {
    const handleBack = () => this.handleOperation('back')
    const handleForward = () => this.handleOperation('forward')
    return (
      <div
        className='date-mover-container'
      >
        <Icon className='reverse-icon' type='right-arrow' onClick={handleBack} />
        <span className='date'>{this.renderDates()}</span>
        <Icon type='right-arrow' onClick={handleForward} />
      </div>
    )
  }
}

export default DateMover
