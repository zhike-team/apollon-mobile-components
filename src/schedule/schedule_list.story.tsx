import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ScheduleList from './schedule_list'
const data = {
  name: 'IELTS口语',
  studentName: 'LF1',
  teacherName: 'LF2'
}

storiesOf('ScheduleList', module)
  .add('ScheduleList component finished', () => (
    <ScheduleList data={data} status={3}/>
  ))
  .add('ScheduleList component unfinish', () => (
    <ScheduleList status={1} data={data}/>
  ))
