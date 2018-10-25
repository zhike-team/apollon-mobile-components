import * as React from 'react'
import classNames from 'classnames'
// tslint:disable-next-line
import { Theme, withStyles, createStyles, StyledComponentProps } from '@material-ui/core/styles'
import './styles.scss'

// 扩展
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string
    }
  }
  interface ThemeOptions {
    status: {
      danger: string
    }
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'inline-flex'
  },
  title: {},
  paragraph: {},
  icon: {},
  iconSlot: {
    height: '100%'
  },
  right: {
    display: 'flex',
    flexDirection: 'column'
  }
})

export interface StyledParagraphPropInterface {
  classes?: {
    root?: string,
    title?: string,
    paragraph?: string,
    iconSlot?: string,
    icon?: string,
    right?: string
  },
  text?: string,
  title?: string,
  iconProps?: React.ImgHTMLAttributes<any>
}

const StyledParagraph = (props: StyledParagraphPropInterface) => {
  const { classes = {}, text = '', title = '', iconProps } = props
  const hasIcon = !!iconProps
  const iconDom = hasIcon && (
    <div className={classes.iconSlot}>
      <img {...iconProps} className={classes.icon} />
    </div>
  )
  return (
    <div className={classes.root} >
      {hasIcon && iconDom}
      <div className={classes.right}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.paragraph}>{text}</p>
      </div>
    </div>
  )
}

export default withStyles(styles)(StyledParagraph)
