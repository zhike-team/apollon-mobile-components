import * as React from 'react'
import './report-list-item.scss'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

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
      <ListItem className='report-list-item' button={true} onClick={this.props.onReportClick}>
        <Avatar className='icon'>{this.props.icon}</Avatar>
        <ListItemText className='text' primary={this.props.primaryText} secondary={this.props.secondaryText} />
      </ListItem>
    )
  }
}
export default ReportListItem
