import * as React from 'react'
import './schedule_list.css'
import Button from '@material-ui/core/Button'
import Icon from '../icon'

interface SchedulePropsInterface {
  data: {
    name: string,
    studentName: string,
    teacherName: string,
    startTime: Date,
    endTime: Date,
    classroom: string
  },
  status: string | null,
  identify: string,
  viewReport: () => void,
  onUnfinish: () => void,
  onFinish: () => void
}
interface ScheduleStateInterface {}

export default class Schedule extends React.Component<SchedulePropsInterface, ScheduleStateInterface> {
  public render () {
    const { data, status, identify } = this.props
    enum identifyType {
      teacher = 'teacher',
      student = 'student'
    }
    // const completeButtonsDom = (<Button variant='outlined' size='large' color='primary' className='view-button' onClick={this.props.viewReport}> 查看反馈 </Button>)
    const completeButtonsDom = ''
    const uncompleteButtonsDom = (
      <div>
        <p className='unfinish-button'>
          <Button variant='outlined' size='large' color='primary' onClick={this.props.onUnfinish}>
            未完成
          </Button>
        </p>
        <p className='finished-button'>
          <Button variant='contained' size='large' color='primary' onClick={this.props.onFinish}>
            完成
          </Button>
        </p>
      </div>
    )
    return (
      <div className='schedule-list'>
        <header>
          <span className='time'>{`${data.startTime}-${data.endTime}`}</span>
          <span className='status'>{status === 'FINISHED' ? <Icon type='correct-thick' size='xs' /> : status === 'UNFINISHED' ? <Icon type='cross-red' size='xs' /> : <Icon type='question' size='xs' />}{status === 'FINISHED' ? <span className='blue'>已完成</span> : status === 'UNFINISHED' ? <span className='red'>未完成</span> : <span className='gray'>未确认</span>}</span>
        </header>
        <main>
          <div className='name'>
            <p>{data.name}</p>
            <p className='classroom'><Icon type='location' size='xs' />{data.classroom}</p>
          </div>
          <div className='member'>
            <p><span><Icon type='face-teacher' size='xs' /></span><span className='right'>{data.studentName}</span></p>
            <p><span className='exchange'><Icon type='exchange' size='xxs' /></span></p>
            <p><span><Icon type='face-student' size='xs' /></span><span className='right'>{data.teacherName}</span></p>
          </div>
        </main>
        <footer>
          {status === 'FINISHED' ? completeButtonsDom : status === 'UNSURE' && identify === identifyType.teacher ? uncompleteButtonsDom : ''}
        </footer>
      </div>
    )
  }
}
