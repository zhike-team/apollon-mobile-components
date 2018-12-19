import * as React from 'react'
import '../report-list-item/report-list-item.css'
import Icon from '../icon'

export interface MineListItemPropsInterface {
  url: string
  primaryText: string
  secondaryText: string
  onMineClick: () => void
  className: string
}

interface MineListItemStateInterface {}

class MineListItem extends React.Component<MineListItemPropsInterface, MineListItemStateInterface> {
  public render () {
    return (
      <div className={`mine-list-item ${this.props.className}`} onClick={this.props.onMineClick}>
        <div className='icon-box'>
          <img src={this.props.url} className='icon' />
        </div>
        <div className='title-box'>
          <span className='primary-text'>{this.props.primaryText}</span>
          <span className='secondary-text'>{this.props.secondaryText}</span>
        </div>
        <div className='button'><Icon type='calendar-arrow' className='icon' /></div>
      </div>
    )
  }
}
export default MineListItem
