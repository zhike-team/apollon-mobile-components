import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ScheduleList from './schedule_list'
const data = {
  status: 1,
  name: 'IELTS口语',
  studentName: 'LF1',
  teacherName: 'LF2'
}

storiesOf('ScheduleList', module)
  .add('ScheduleList component', () => (
    <ScheduleList data={data}/>
  ))
