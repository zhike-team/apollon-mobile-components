import * as React from 'react'
import Icon from '../icon/'
import './styles.css'
import * as sanitizeHtml from 'sanitize-html'

export interface StyledParagraphPropInterface {
  text?: string,
  title?: string,
  iconProps?: React.ImgHTMLAttributes<any>
  type: string
}
class StyledParagraph extends React.Component<StyledParagraphPropInterface> {
  public render () {
    const { text = '', title = '', iconProps, type } = this.props
    const hasIcon = !!iconProps
    const iconDom = hasIcon && (
      <div className='icon'>
        <Icon type={type} size='sm'/>
      </div>
    )
    const dirty = text.replace(/\n/g, '<br/>')
    const clean = sanitizeHtml(dirty, {
      allowedTags: ['br']
    })
    return (
        <div className='paragraph-container' >
        {hasIcon && iconDom}
          <div className='paragraph'>
            <h3 className='paragraph-title'>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: clean || '' }} className='paragraph-content' />
        </div>
      </div>
    )
  }
}

export default StyledParagraph
