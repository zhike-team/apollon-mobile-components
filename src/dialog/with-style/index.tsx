import * as React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import Dialog, { DialogProps } from '@material-ui/core/Dialog'
import DialogActions, { DialogActionsProps } from '@material-ui/core/DialogActions'
import DialogContent, { DialogContentProps } from '@material-ui/core/DialogContent'
import DialogContentText, { DialogContentTextProps } from '@material-ui/core/DialogContentText'
import DialogTitle, { DialogTitleProps } from '@material-ui/core/DialogTitle'

// tslint:disable-next-line
import { Theme, withStyles, createStyles, StyledComponentProps } from '@material-ui/core/styles'

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
    fontSize: 16
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

export default {
  Button: withStyles(styles)(Button),
  Dialog: withStyles(styles)(Dialog),
  DialogTitle: withStyles(styles)(DialogTitle),
  DialogActions: withStyles(styles)(DialogActions),
  DialogContent: withStyles(styles)(DialogContent),
  DialogContentText: withStyles(styles)(DialogContentText)
}
