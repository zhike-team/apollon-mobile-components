import * as React from 'react'
import './report-list-item.scss'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

export interface ReportListItemPropsInterface {
  icon: string;
  titleOne: string;
  titleTwo?: string;
  handleReportDetail: () => void;
}

interface ReportListItemStateInterface {}

export class ReportListItem extends React.Component<ReportListItemPropsInterface, ReportListItemStateInterface> {
  public render () {
    return (
      <ListItem className="report-list-item" button onClick={this.props.handleReportDetail}>
        <Avatar className="icon">{this.props.icon}</Avatar>
        <ListItemText className="title-box" primary={this.props.titleOne} secondary={this.props.titleTwo} />
      </ListItem>
    )
  }
}
export default ReportListItem
