import * as React from 'react'
import './report-list-item.scss'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

export interface ReportListItemPropsInterface {
<<<<<<< HEAD
  icon: string
  titleOne?: string
  titleTwo?: string
=======
  icon: string;
  titleOne: string;
  titleTwo?: string;
  handleReportDetail: () => void;
>>>>>>> refs #SMART-4141 use mui
}

interface ReportListItemStateInterface {}

export class ReportListItem extends React.Component<ReportListItemPropsInterface, ReportListItemStateInterface> {
  public render () {
    return (
<<<<<<< HEAD
      <div className='report-list-item'>
        <div className='icon'>{this.props.icon}</div>
        <div className='title-box'>
          <div className='title-one'>{this.props.titleOne}</div>
          <div className='title-two'>{this.props.titleTwo}</div>
        </div>
      </div>
=======
      <ListItem className="report-list-item" button onClick={this.props.handleReportDetail}>
        <Avatar className="icon">{this.props.icon}</Avatar>
        <ListItemText className="title-box" primary={this.props.titleOne} secondary={this.props.titleTwo} />
      </ListItem>
>>>>>>> refs #SMART-4141 use mui
    )
  }
}
export default ReportListItem
