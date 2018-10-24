import * as React from 'react'
import './report-list-item.scss'
// import { withStyles } from '@material-ui/core/styles'

export interface ReportListItemPropsInterface {
  icon: string
  titleOne?: string
  titleTwo?: string
}

interface ReportListItemStateInterface {}

// const styles = () => ({
//   reportListItem: {
//     padding: 16,
//     display: 'flex',
//     alignItems: 'center',
//     boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.04)',
//     borderRadius: 5,
//   },
//   icon: {
//     background: '#ccc', /* TODO:del */
//     width: 40,
//     height: 40,
//     marginRight: 24,
//   },
//   titleOne: {
//     fontSize: 16,
//     color: '#2E3236',
//   },
//   titleTwo: {
//     fontSize: 14,
//     color: '#8F9DA5',
//   }
// })

export class ReportListItem extends React.Component<ReportListItemPropsInterface, ReportListItemStateInterface> {
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
export default ReportListItem
