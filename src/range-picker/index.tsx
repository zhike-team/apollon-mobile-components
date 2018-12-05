import * as React from 'react'
import * as moment from 'moment'
import Icon from '../icon'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import './range-picker.css'
import { withStyles, createStyles } from '@material-ui/core/styles'
const trangleImg = require('./tiny-trangle.png')

const TEXT = {
  day: '日',
  week: '周',
  month: '月'
}

const styles = () => createStyles({
  root: {
    position: 'relative'
  },
  ulStyle: {
    padding: '10px 15px 6px',
    marginTop: 0,
    width: 40,
    height: 114,
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    listStyle: 'none',
    background: 'rgba(255,255,255,1)',
    boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.13)'
  },
  liStyle: {
    padding: '8px 13px',
    textAlign: 'center',
    borderBottom: '1px solid rgba(234,239,242,1)'
  },
  noBorder: {
    border: 0
  },
  selectedLiStyle: {
    color: '#39f'
  },
  imgStyle: {
    position: 'absolute',
    top: -8,
    left: 0,
    width: 20,
    height: 10,
    backgroundColor: 'transparent'
  }
})

interface RangePickerPropsInterface {
  mode: string
  startDate: any,
  endDate: any,
  onChange: (mode: string ,[]) => void,
  classes: any
}

interface RangePickerStateInterface {
  open: Boolean
}

class RangePicker extends React.Component<RangePickerPropsInterface, any> {

  constructor (props: RangePickerPropsInterface) {
    super(props)
  }

  state = {
    open: false
  }

  handleDatesChange = (newMode: 'day' | 'week' | 'month') => {
    let { mode, startDate, endDate } = this.props
    if (newMode !== mode) {
      if (newMode === 'day') {
        endDate = startDate
      } else {
        startDate = moment(startDate).startOf(newMode).format('YYYY-MM-DD')
        endDate = moment(startDate).endOf(newMode).format('YYYY-MM-DD')
      }
      this.props.onChange(newMode, [startDate, endDate])
      this.handleCloseMenu()
    }
  }

  handleShowMenu = () => {
    this.setState((state: any) => ({
      open: !state.open
    }))
  }

  handleCloseMenu = () => {
    this.setState({ open: false })
  }

  generateSelectedClass = (liMode: string) => {
    const { mode, classes } = this.props
    return mode === liMode ? classes.selectedLiStyle : ''
  }

  renderContent = () => {
    const { mode } = this.props
    const handleDayChange = () => this.handleDatesChange('day')
    const handleWeekChange = () => this.handleDatesChange('week')
    const handleMonthChange = () => this.handleDatesChange('month')
    const { ulStyle, liStyle, noBorder, imgStyle } = this.props.classes
    const { open } = this.state
    const menuDom = (
      <ul className={ulStyle}>
        <img className={imgStyle} src={trangleImg} />
        <li
          className={`${liStyle} ${this.generateSelectedClass('day')}`}
          onClick={handleDayChange}
        >
          日
        </li>
        <li
          className={`${liStyle} ${this.generateSelectedClass('week')}`}
          onClick={handleWeekChange}
        >
          周
        </li>
        <li
          className={`${liStyle} ${this.generateSelectedClass('month')} ${noBorder}`}
          onClick={handleMonthChange}
        >
          月
        </li>
      </ul>
    )
    return (
      <ClickAwayListener onClickAway={this.handleCloseMenu}>
        <div className={this.props.classes.root}>
          <div onClick={this.handleShowMenu}>
            <span>{TEXT[mode]}</span>
            <Icon type='shaixuan' />
          </div>
          {open ? menuDom : null}
        </div>
      </ClickAwayListener>
    )
  }

  render (): React.ReactNode {
    return (
      <div
        className='range-picker-container'
      >
        {this.renderContent()}
      </div>
    )
  }
}

export default withStyles(styles)(RangePicker)
