import * as React from 'react'
import './report-list-item.css'
import Icon from '../icon'

export interface ReportListItemPropsInterface {
  icon: string
  primaryText: string
  secondaryText?: string
  topTitle?: string
  onReportClick: () => void
}

interface ReportListItemStateInterface {}

export class ReportListItem extends React.Component<ReportListItemPropsInterface, ReportListItemStateInterface> {
  public render () {
    const { icon, primaryText, secondaryText, topTitle, onReportClick } = this.props
    return (
      <div className='report-list-item' onClick={onReportClick}>
        {topTitle && <span className='top-title'>{topTitle}</span>}
        <div className='icon-box'>
          <Icon type={icon} className='icon' />
        </div>
        <div className='title-box'>
          <span className='primary-text'>{primaryText}</span>
          {secondaryText ? <span className='secondary-text'>{secondaryText}</span> : ''}
        </div>
      </div>
    )
  }
}
export default ReportListItem
