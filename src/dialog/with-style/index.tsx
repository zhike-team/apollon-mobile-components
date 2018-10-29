import * as React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import Dialog, { DialogProps } from '@material-ui/core/Dialog'
import DialogActions, { DialogActionsProps } from '@material-ui/core/DialogActions'
import DialogContent, { DialogContentProps } from '@material-ui/core/DialogContent'
import DialogContentText, { DialogContentTextProps } from '@material-ui/core/DialogContentText'
import DialogTitle, { DialogTitleProps } from '@material-ui/core/DialogTitle'

// tslint:disable-next-line
import { Theme, withStyles, createStyles, StyledComponentProps } from '@material-ui/core/styles'

const buttonStyles = (theme: Theme) => createStyles({
  root: {
    display: 'inline-flex'
  },
  textPrimary: {
    color: theme.custom.gray
  }
})

const dialogStyles = (theme: Theme) => createStyles({
})

const dialogActionStyles = (theme: Theme) => createStyles({
})

const dialogContentStyles = (theme: Theme) => createStyles({
})

const dialogContentTextStyles = (theme: Theme) => createStyles({
  root: {
    color: theme.custom.gray2,
    fontSize: 16,
    borderRadius: 10
  }
})

export default {
  Button: withStyles(buttonStyles)(Button),
  Dialog: withStyles(dialogStyles)(Dialog),
  DialogTitle: withStyles(dialogActionStyles)(DialogTitle),
  DialogActions: withStyles(dialogActionStyles)(DialogActions),
  DialogContent: withStyles(dialogContentStyles)(DialogContent),
  DialogContentText: withStyles(dialogContentTextStyles)(DialogContentText)
}
