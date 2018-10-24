import * as React from 'react'
import './schedule_list.scss'
import Button from '@material-ui/core/Button'

interface ScheduleListPropsInterface {
  data: {
    name: string,
    studentName: string,
    teacherName: string
  },
  status: number,
}
interface ScheduleListStateInterface {}

export default class ScheduleList extends React.Component<ScheduleListPropsInterface, ScheduleListStateInterface> {
  public render () {
    const { data, status } = this.props
    return (
      <div className='schedule-list'>
        <header>
          <span className='time'>时间</span>
          <span className='status'>图标{status === 3 ? '已完成' : '未完成'}</span>
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
          {
            status === 3 ?
              <Button variant='outlined' size='large' color='primary' className='view-button'>
                查看反馈
              </Button>
              : <div>
                <p className='unfinish-button'>
                  <Button variant='outlined' size='large' color='primary'>
                    未完成
                  </Button>
                </p>
                <p className='finished-button'>
                  <Button variant='contained' size='large' color='primary'>
                    完成
                  </Button>
                </p>
              </div>
          }
          
        </footer>
      </div>
    )
  }
}
