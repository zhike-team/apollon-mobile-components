import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ReportListItem from './report-list-item'

storiesOf('日报列表item', module)
  .add('一行文字', () => (
    <ReportListItem
      icon='日报'
      titleOne='2018年10月18日教学服务日报'
    />
  ))
  .add('两行文字', () => (
    <ReportListItem
      icon='周报'
      titleOne='2018.10.01-2018.10.07'
      titleTwo='教学服务周报'
    />
  ))
