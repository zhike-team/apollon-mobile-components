import * as React from 'react'
import './icon.css'
import loadElement from '../loadElement'

declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type SvgProps = Omit<
  React.HTMLProps<SVGSVGElement>,
  'size' | 'type'
>

interface IconPropsType {
  type: string
  color?: string
}

interface IconPropsInterface extends IconPropsType, SvgProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
  onClick?: React.MouseEventHandler<SVGSVGElement>
}

class Icon extends React.Component<IconPropsInterface, any> {
  static defaultProps = {
    size: 'md'
  }
  componentDidMount () {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://at.alicdn.com/t/font_886252_xuybdiee629.js'
    script.id = '__SMART_MOBILE_ICONFONT_NODE__'
    loadElement(script, 'ICONFONT', 'head')
  }
  render () {
    const { type, className, size, ...restProps } = this.props
    const cls = `${className || ''} sm-icon sm-icon-${size}`
    return (
      <svg className={cls} {...restProps}>
        <use xlinkHref={`#icon-${type}`} />
      </svg>
    )
  }
}

export default Icon
