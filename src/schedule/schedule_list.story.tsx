import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import ScheduleList from './schedule_list'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'
const data = {
  name: 'IELTS口语',
  studentName: 'LF1',
  teacherName: 'LF2',
  startTime: new Date(),
  endTime: new Date(),
  classroom: '北京新中关学习中心',
  time: '9:20-10:20',
  identification: ''
}

const viewReport = () => {
  alert('查看反馈')
}

const onUnfinish = () => {
  alert('确定标记为未完成')
}

const onFinish = () => {
  alert('确定标记为完成')
}

storiesOf('ScheduleList', module)
  .add('完成', withInfo({ inline: true })(() => (
    <MuiThemeProvider theme={theme}>
      <ScheduleList
        data={data}
        status={'FINISHED'}
        identify={'student'}
        viewReport={viewReport}
        onUnfinish={onUnfinish}
        onFinish={onFinish}
      />
    </MuiThemeProvider>
  )))
  .add('学生未完成', withInfo({ inline: true })(() => (
    <ScheduleList
      status={'UNSURE'}
      data={data}
      identify={'student'}
      viewReport={viewReport}
      onUnfinish={onUnfinish}
      onFinish={onFinish}
    />
  )))
  .add('教师未完成', withInfo({ inline: true })(() => (
    <MuiThemeProvider theme={theme}>
      <ScheduleList
        status={'UNSURE'}
        data={data}
        identify={'teacher'}
        viewReport={viewReport}
        onUnfinish={onUnfinish}
        onFinish={onFinish}
      />
    </MuiThemeProvider>
  )))
