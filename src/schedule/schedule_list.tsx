import * as React from 'react'
import './schedule_list.scss'
import Button from '@material-ui/core/Button'

interface ScheduleListPropsInterface {
  data: {
    status: number,
    name: string,
    studentName: string,
    teacherName: string
  }
}
interface ScheduleListStateInterface {}

export default class ScheduleList extends React.Component<ScheduleListPropsInterface, ScheduleListStateInterface> {
  public render () {
    const { data } = this.props
    return (
      <div className='schedule-list'>
        <header>
          <span className='time'>时间</span>
          <span className='status'>图标{data.status === 3 ? '已完成' : '未完成'}</span>
        </header>
        <main>
          <div className='name'>
            <p>{data.name}</p>
            <p>地理位置</p>
          </div>
          <div className='member'>
            <p>{data.studentName}</p>
            <p>{data.teacherName}</p>
          </div>
        </main>
        <footer>
          <Button variant='outlined' size='large' color='primary' className='view'>
            查看反馈
          </Button>
        </footer>
      </div>
    )
  }
}
