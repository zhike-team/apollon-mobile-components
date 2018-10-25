import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ReportListItem from './report-list-item'

const showDailyReport = () => console.log('日报')
const showWeeklyReport = () => console.log('周报')

storiesOf('报告列表项', module)
  .add('日报项', () => (
    <ReportListItem
      icon='日报'
      primaryText='2018年10月18日教学服务日报'
      onReportClick={showDailyReport}
    />
  ))
  .add('周报项', () => (
    <ReportListItem
      icon='周报'
      primaryText='2018.10.01-2018.10.07'
      secondaryText='教学服务周报'
      onReportClick={showWeeklyReport}
    />
  ))
