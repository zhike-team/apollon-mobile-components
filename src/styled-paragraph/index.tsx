import * as React from 'react'
import classNames from 'classnames'
// tslint:disable-next-line
import { Theme, withStyles, createStyles, StyledComponentProps } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Icon from '../icon/'
import './styles.css'

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'inline-flex'
  },
  title: {
    fontSize: 16,
    lineHeight: '1.125em'
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 32
  },
  icon: {
    width: 20
  },
  iconSlot: {
    height: '100%',
    marginRight: 8
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
  type: string
}

const StyledParagraph = (props: StyledParagraphPropInterface) => {
  const { classes = {}, text = '', title = '', iconProps, type } = props
  const hasIcon = !!iconProps
  const iconDom = hasIcon && (
    <div className={classes.iconSlot}>
      <Icon type={type} size='sm'/>
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
