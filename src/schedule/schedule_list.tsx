import * as React from 'react'
import './schedule_list.css'
import Button from '@material-ui/core/Button'

interface SchedulePropsInterface {
  data: {
    name: string,
    studentName: string,
    teacherName: string,
    startTime: Date,
    endTime: Date,
    classroom: string
  },
  complete: boolean | null,
  identify: string,
  viewReport: () => void,
  onUnfinish: () => void,
  onFinish: () => void
}
interface ScheduleStateInterface {}

export default class Schedule extends React.Component<SchedulePropsInterface, ScheduleStateInterface> {
  public render () {
    const { data, complete, identify } = this.props
    enum identifyType {
      teacher = 'teacher',
      student = 'student'
    }
    const completeButtonsDom = (<Button variant='outlined' size='large' color='primary' className='view-button' onClick={this.props.viewReport}> 查看反馈 </Button>)
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
          <span className='status'>图标{complete ? '已完成' : '未完成'}</span>
        </header>
        <main>
          <div className='name'>
            <p>{data.name}</p>
            <p>{data.classroom}</p>
          </div>
          <div className='member'>
            <p>{data.studentName}</p>
            <p>{data.teacherName}</p>
          </div>
        </main>
        <footer>
          {complete ? completeButtonsDom : identify === identifyType.teacher ? uncompleteButtonsDom : ''}
        </footer>
      </div>
    )
  }
}
