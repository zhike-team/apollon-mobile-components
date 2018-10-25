import * as React from 'react'
import classNames from 'classnames'
// tslint:disable-next-line
import { Theme, withStyles, createStyles, StyledComponentProps } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
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
  title: {
    fontSize: '1rem'
  },
  paragraph: {
    // 14 / 16px
    fontSize: '0.875rem',
    marginBottom: '2rem'
  },
  icon: {
    width: '1.25rem'
  },
  iconSlot: {
    height: '100%',
    marginRight: '0.5rem'
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
        <Typography color={'secondary'} classes={{ root: classes.title }}>{title}</Typography>
        <p>
          <Typography color={'primary'} classes={{ root: classes.paragraph }}>{text}</Typography>
        </p>
      </div>
    </div>
  )
}

export default withStyles(styles)(StyledParagraph)
