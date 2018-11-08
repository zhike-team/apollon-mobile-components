import * as React from 'react'
import './load-more.css'

interface LoadMorePropsInterface {
  count: number,
  page: number,
  onClick: () => void,
  dom: React.ReactNode,
  height?: number | string // percentage of height
}

class LoadMore extends React.Component<LoadMorePropsInterface, any> {
  renderOperation (count: number, page: number, onClick: () => void) {
    return page < count ?
      (
        <div className='load-btn-container'>
          <span
            className='load-btn'
            onClick={onClick}
          >
            加载更多
          </span>
        </div>
      ) :
      <p>没有更多了</p>
  }

  render (): React.ReactNode {
    const {
      count,
      page,
      onClick,
      dom,
      height
    } = this.props
    return (
      <div
        className='load-more-container'
        style={{ height: height || '100%' }}
      >
        <div className='contents'>
          {dom}
        </div>
        <div className='operation'>
          {this.renderOperation(count, page, onClick)}
        </div>
      </div>
    )
  }
}

export default LoadMore
