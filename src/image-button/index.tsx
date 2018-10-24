import * as React from 'react'
import './image-button.scss'

export interface ImageButtonPropsInterface {
  text: string,
  onClick?: React.MouseEventHandler<HTMLElement>,
  isCurrentSite: boolean
}

class ImageButton extends React.Component<ImageButtonPropsInterface, any> {
  render () {
    const { text, onClick, isCurrentSite } = this.props
    return (
      <div
        className='image-button-container'
        onClick={onClick}
      >
        <p>{text}</p>
        {isCurrentSite && <span className='note'>当前站点</span>}
      </div>
    )
  }
}

export default ImageButton
