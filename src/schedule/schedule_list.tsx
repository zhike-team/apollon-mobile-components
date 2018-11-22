import * as React from 'react'
import './schedule_list.css'
import Icon from '../icon'
import StyledComponents from './with-style'

import { Theme, withStyles, createStyles, StyledComponentProps } from '@material-ui/core/styles'
const { Button } = StyledComponents

interface SchedulePropsInterface {
  data: {
    name: string,
    studentName: string,
    teacherName: string,
    startTime: Date,
    endTime: Date,
    classroom: string,
    time: string,
    identification: string
  },
  status: string | null,
  identify: string,
  editPermission: boolean,
  viewReport: () => void,
  onUnfinish: () => void,
  onFinish: () => void
}
interface ScheduleStateInterface {}

export default class Schedule extends React.Component<SchedulePropsInterface, ScheduleStateInterface> {
  public render () {
    const { data, status, identify, editPermission } = this.props
    enum identifyType {
      teacher = 'teacher',
      student = 'student'
    }
    const completeButtonsDom = (
      <Button
        variant='outlined'
        size='large'
        color='primary'
        className='view-button button-box'
        onClick={this.props.viewReport}
      >
        查看反馈
      </Button>
    )
    const uncompleteButtonsDom = (
      <div className='button-box'>
        <p className='unfinish-button'>
          <Button variant='outlined' size='large' color='primary' onClick={this.props.onUnfinish}>
            未完成
          </Button>
        </p>
        <p className='finished-button'>
          <Button variant='contained' size='large' color='secondary' onClick={this.props.onFinish}>
            完成
          </Button>
        </p>
      </div>
    )
    return (
      <div className='schedule-list'>
        <header>
          <span className='time'>{data.time}</span>
          <span className='status'>{status === 'FINISHED' ? <Icon type='correct-thick' size='sm' /> : status === 'UNFINISH' ? <Icon type='cross-red' size='sm' /> : <Icon type='question' size='sm' />}{status === 'FINISHED' ? <span className='blue'>已完成</span> : status === 'UNFINISH' ? <span className='red'>未完成</span> : <span className='gray'>未确认</span>}</span>
        </header>
        <main>
          <div className='name'>
            <p className='course-name'>
              <span className={`identification-box ${!data.identification ? 'identification-hide' : ''}`}>
                <span className='identification'>{data.identification}</span>
              </span>
              <span>{data.name}</span>
            </p>
            <p className='classroom'><Icon type='location' size='xxs' />{data.classroom}</p>
          </div>
          <div className='member'>
            <p><span><Icon type='face-teacher' size='xs' /></span><span className='right'>{data.teacherName}</span></p>
            <p><span className='exchange right'><Icon type='exchange' size='xxs' /></span></p>
            <p><span><Icon type='face-student' size='xs' /></span><span className='right'>{data.studentName || '班课'}</span></p>
          </div>
        </main>
        <footer className={`${!editPermission ? 'hide' : ''}`}>
          {status === 'FINISHED' ? completeButtonsDom : status === 'UNSURE' && identify === identifyType.teacher ? uncompleteButtonsDom : ''}
        </footer>
      </div>
    )
  }
}
