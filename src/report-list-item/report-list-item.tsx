import * as React from 'react'
import './report-list-item.css'

export interface ReportListItemPropsInterface {
  icon: string;
  titleOne?: string;
  titleTwo?: string;
}

interface ReportListItemStateInterface {}

export default class ReportListItem extends React.Component<ReportListItemPropsInterface, ReportListItemStateInterface> {
  public render () {
    return (
      <div className="report-list-item">
        <div className="icon">{this.props.icon}</div>
        <div className="title-box">
          <div className="title-one">{this.props.titleOne}</div>
          <div className="title-two">{this.props.titleTwo}</div>
        </div>
      </div>
    )
  }
}
