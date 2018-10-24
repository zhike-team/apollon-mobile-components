import * as React from 'react'
import './image-button.scss'

export interface ImageButtonPropsInterface {
  text: string,
  index: number,
  onClick?: React.MouseEventHandler<HTMLElement>,
  isCurrentSite: boolean
}

const images: string[] = ['building', 'desk', 'hallway', 'homework', 'playground']

class ImageButton extends React.Component<ImageButtonPropsInterface, any> {
  render () {
    const { text, index, onClick, isCurrentSite } = this.props
    return (
      <div
        className='image-button-container'
        style={{ backgroundImage: `url(images/image-buttons/${images[index % images.length]}.png)` }}
        onClick={onClick}
      >
        <p>{text}</p>
        {isCurrentSite && <span className='note'>当前站点</span>}
      </div>
    )
  }
}

export default ImageButton
