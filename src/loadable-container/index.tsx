import * as React from 'react'
import './loadable-container.css'

interface LoadMorePropsInterface {
  noMore: boolean
  noFooter?: boolean
  loading?: boolean,
  onLoad: () => void
}

class LoadableContainer extends React.Component<LoadMorePropsInterface, any> {

  renderFooter (noMore: boolean, loading: boolean, onLoad: () => void) {
    return loading ?
      <div className='loading-icon' /> :
        noMore ?
          <p>没有更多了</p> :
            (
              <div className='load-btn-container'>
                <span
                  className='load-btn'
                  onClick={onLoad}
                >
                  加载更多
                </span>
              </div>
            )
  }

  render (): React.ReactNode {
    const {
      noMore,
      loading,
      onLoad,
      noFooter
    } = this.props
    return (
      <div
        className='loadable-container'
      >
        <div className='contents'>
          {this.props.children}
        </div>
        {!noFooter && <div className='footer'>{this.renderFooter(noMore, loading || false, onLoad)}</div>}
      </div>
    )
  }
}

export default LoadableContainer
