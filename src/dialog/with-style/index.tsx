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
  root: {},
  rootSingleButton: {
    justifyContent: 'center'
  }
})

const dialogTitleStyles = (theme: Theme) => createStyles({
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

export interface CustomDialogActionsPropInterface extends DialogActionsProps {
  classes: DialogActionsProps['classes'] & {rootSingleButton?: string},
  centerSingleButton?: boolean
}

class CustomDialogActions extends React.Component<CustomDialogActionsPropInterface, any> {
  render () {
    const { centerSingleButton = true, classes, ...passProps } = this.props
    if (!centerSingleButton) {
      return <DialogActions {...passProps} classes={classes} />
    }

    const isSingleButton = React.Children.count(this.props.children) === 1
    const wrapClasses = { ...classes }
    if (isSingleButton) {
      wrapClasses.root = classes.rootSingleButton
    } else {
      wrapClasses.rootSingleButton = undefined
    }

    return <DialogActions {...passProps} classes={wrapClasses} />
  }
}

export default {
  Button: withStyles(buttonStyles)(Button),
  Dialog: withStyles(dialogStyles)(Dialog),
  DialogTitle: withStyles(dialogTitleStyles)(DialogTitle),
  DialogActions: withStyles(dialogActionStyles)(CustomDialogActions),
  DialogContent: withStyles(dialogContentStyles)(DialogContent),
  DialogContentText: withStyles(dialogContentTextStyles)(DialogContentText)
}
