import * as React from 'react'
import './image-button.css'

export interface ImageButtonPropsInterface {
  mainText: string,
  backgroundImage: string,
  onClick?: React.MouseEventHandler<HTMLElement>,
  note?: string
}

class ImageButton extends React.Component<ImageButtonPropsInterface, any> {

  render () {
    const {
      mainText,
      onClick,
      backgroundImage,
      note
    } = this.props
    return (
      <div
        className='image-button-container'
        style={{ backgroundImage: 'url(' + backgroundImage + ')' }}
        onClick={onClick}
      >
        <p>{mainText}</p>
        {note && <span className='note'>{note}</span>}
      </div>
    )
  }
}

export default ImageButton
