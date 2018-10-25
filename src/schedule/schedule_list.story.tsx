import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ScheduleList from './schedule_list'
const data = {
  name: 'IELTS口语',
  studentName: 'LF1',
  teacherName: 'LF2',
  startTime: new Date(),
  endTime: new Date(),
  classroom: '北京新中关学习中心'
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
  .add('完成', () => (
    <ScheduleList
      data={data}
      complete={true}
      identify={'student'}
      viewReport={viewReport}
      onUnfinish={onUnfinish}
      onFinish={onFinish}
    />
  ))
  .add('学生未完成', () => (
    <ScheduleList
      complete={false}
      data={data}
      identify={'student'}
      viewReport={viewReport}
      onUnfinish={onUnfinish}
      onFinish={onFinish}
    />
  ))
  .add('教师未完成', () => (
    <ScheduleList
      complete={false}
      data={data}
      identify={'teacher'}
      viewReport={viewReport}
      onUnfinish={onUnfinish}
      onFinish={onFinish}
    />
  ))
