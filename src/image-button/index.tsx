import * as React from 'react'
import './image-button.scss'

export interface ImageButtonPropsInterface {
  mainText: string,
  backgroundImage: string,
  onClick?: React.MouseEventHandler<HTMLElement>,
  note?: boolean,
  noteText?: string
}

class ImageButton extends React.Component<ImageButtonPropsInterface, any> {

  renderNote = () => {
    const { note, noteText } = this.props
    return note && noteText ? (
      <span className='note'>
        {noteText}
      </span>
      ) : null
  }

  render () {
    const {
      mainText,
      onClick,
      backgroundImage
    } = this.props
    return (
      <div
        className='image-button-container'
        style={{ backgroundImage: 'url(' + backgroundImage + ')' }}
        onClick={onClick}
      >
        <p>{mainText}</p>
        {this.renderNote()}
      </div>
    )
  }
}

export default ImageButton
