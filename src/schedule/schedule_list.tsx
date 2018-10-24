import * as React from 'react'

interface ScheduleListPropsInterface {
  data: {
    status: number
  }
}

interface ScheduleListStateInterface {

}

export default class ScheduleList extends React.Component<ScheduleListPropsInterface, ScheduleListStateInterface> {
  public render () {
    const { data } = this.props
    return (<div>
      <header>
        <span className="time">{1111}</span>
        <span className="status">图标{data.status == 3 ? '已完成' : '未完成'}</span>
      </header>  
    </div>)
  }
}