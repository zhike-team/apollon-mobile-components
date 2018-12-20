import * as React from 'react'
import Draggable from 'react-draggable'
import './follow-item.css'

const WIDTH = 60

interface OperationInterface {
  name: string,
  callback: () => void
}

interface FollowItemPropsInterface {
  name: string,
  phone: string | number,
  withBorder: boolean,
  operations: OperationInterface[]
}

interface FollowItemStateInterface {
  xDistance: number
}

class FollowItem extends React.Component<FollowItemPropsInterface, FollowItemStateInterface> {

  state = {
    xDistance: 0
  }

  startPosition = 0

  endPosition = 0

  renderOperations (operations: OperationInterface[]) {
    const operationButtons = operations.map((item: OperationInterface) => {
      return <span key={item.name} onClick={item.callback}>{item.name}</span>
    })
    return (
      <div className='operations'>
        {operationButtons}
      </div>
    )
  }

  handleStart = (e: any, position: any) => {
    this.startPosition = position.x
  }

  handleDrag = (e: any, position: any) => {
    this.setState({
      xDistance: position.x
    })
  }

  handleStop = (e: any, position: any) => {
    this.endPosition = position.x
    let coefficient = 0
    if (this.startPosition - this.endPosition > 0) {
      coefficient = -1
    }
    this.setState({
      xDistance: WIDTH * coefficient
    }, () => {
      this.startPosition = this.endPosition = this.state.xDistance
    })
  }

  render () {
    const { name, phone, withBorder, operations } = this.props
    const { xDistance } = this.state
    return (
      <div className={`follow-item-container ${withBorder ? 'bordered' : ''}`}>
        <Draggable
          axis='x'
          position={{ x: xDistance, y: 0 }}
          bounds={{ left: 0 - WIDTH * operations.length, right: 0, top: 0, bottom: 0 }}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <div className='slick-container'>
            <span className='name'>
              {name}
            </span>
            <span className='phone'>
              {phone}
            </span>
          </div>
        </Draggable>
        {this.renderOperations(operations)}
      </div>
    )
  }
}

export default FollowItem
