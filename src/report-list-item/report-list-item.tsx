import * as React from 'react'
import './report-list-item.css'
import Icon from '../icon'

export interface ReportListItemPropsInterface {
  icon: string
  primaryText: string
  secondaryText?: string
  onReportClick: () => void
}

interface ReportListItemStateInterface {}

export class ReportListItem extends React.Component<ReportListItemPropsInterface, ReportListItemStateInterface> {
  public render () {
    return (
      <div className='report-list-item' onClick={this.props.onReportClick}>
        <div className='icon-box'>
          <Icon type={this.props.icon} className='icon' />
        </div>
        <div className='title-box'>
          <span className='primary-text'>{this.props.primaryText}</span>
          {this.props.secondaryText ? <span className='secondary-text'>{this.props.secondaryText}</span> : ''}
        </div>
      </div>
    )
  }
}
export default ReportListItem
