import * as React from 'react'
import loadSprite from './loadSprite'

declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type SvgProps = Omit<
  React.HTMLProps<SVGSVGElement>,
  'size' | 'type'
>

interface IconPropsType {
  type: string
  color?: string
}

interface IconProps extends IconPropsType, SvgProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
  onClick?: React.MouseEventHandler<SVGSVGElement>
}

class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    size: 'md'
  }
  componentDidMount () {
    loadSprite()
  }
  render () {
    const { type, className, size, ...restProps } = this.props
    const cls = `${className} sm-icon sm-icon-${type} sm-icon-${size}`
    return (
      <svg className={cls} {...restProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    )
  }
}

export default Icon
