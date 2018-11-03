import * as React from 'react'
import StyledComponents from './with-style'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import { WithWidth } from '@material-ui/core/withWidth'
import { ButtonProps } from '@material-ui/core/Button'
import { DialogProps } from '@material-ui/core/Dialog'
import { DialogActionsProps } from '@material-ui/core/DialogActions'
import { DialogContentProps } from '@material-ui/core/DialogContent'
import { DialogContentTextProps } from '@material-ui/core/DialogContentText'
import { DialogTitleProps } from '@material-ui/core/DialogTitle'

const { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } = StyledComponents

const ACTION_BTN_ID_PREF = 'com.smartstudy.dialog-id-pref'

const ACTION_CANCEL = -1
const ACTION_AGAIN = -2
const ACTION_DUP = -3

export interface IOpenDialogAction {
  text: string
}

export interface IOpenDialogParams {
  title?: string,
  message: string,
  actions?: IOpenDialogAction[]
}

export interface IOpenDialog {
  (params: IOpenDialogParams): Promise<number>,
  instance?: SSDialog,
  pending?: Promise<number>
}

export interface SSDialogPropInterface extends React.ClassAttributes<any> {
  fullScreen?: boolean,
  fullWidth?: boolean,
  buttonProps?: ButtonProps,
  dialogProps?: DialogProps,
  dialogActionsProps?: DialogActionsProps,
  dialogTitleProps?: DialogTitleProps,
  dialogContentProps?: DialogContentProps,
  dialogContentTextProps?: DialogContentTextProps
}

export interface SSDialogStateInterface extends React.ClassAttributes<any> {
  open: boolean,
  openRequest?: Required<IOpenDialogParams>
}

export class SSDialog extends React.Component<SSDialogPropInterface, SSDialogStateInterface> {
  callback?: { resolve: (idx: number) => any, reject: (idx: number) => any }

  constructor (props: SSDialogPropInterface) {
    super(props)
    openDialog.instance = this
    this.state = { open: false }
  }

  componentWillUnmount () {
    if (this.callback) {
      this.callback.resolve(ACTION_CANCEL)
    }
  }

  open (params: Required<IOpenDialogParams>): Promise<number> {
    if (this.state.open) {
      return Promise.reject(ACTION_DUP)
    }

    return new Promise((resolve, reject) => {
      this.callback = { resolve, reject }
      this.setState({ open: true, openRequest: params })
    })
  }

  handleClose = (e: React.SyntheticEvent) => {
    const { id } = e.currentTarget
    let retCode: number
    if (!id.startsWith(ACTION_BTN_ID_PREF)) {
      retCode = ACTION_CANCEL
    } else {
      retCode = +id.substring(ACTION_BTN_ID_PREF.length + 1)
    }
    this.setState({ open: false }, () => {
      if (this.callback) {
        this.callback.resolve(retCode)
        this.callback = undefined
      }
    })
  }

  renderActions = () => {
    if (!this.state.openRequest) {
      return null
    }
    const { actions } = this.state.openRequest
    const { dialogActionsProps = {}, buttonProps = {} } = this.props
    return (
      <DialogActions
        {...dialogActionsProps}
      >
        {actions.map(({ text }, ii) => <Button {...buttonProps} id={`${ACTION_BTN_ID_PREF}:${ii}`} key={text} onClick={this.handleClose} color={ii === actions.length - 1 ? 'secondary' : 'primary'} >{text}</Button>)}
      </DialogActions>
    )
  }

  render () {
    const {
      fullScreen = false,
      fullWidth = true,
      dialogProps = {},
      dialogTitleProps = {},
      dialogContentProps = {},
      dialogContentTextProps = {}
    } = this.props
    const { title = '', message = '' } = this.state.openRequest || {}
    return (
      <Dialog
        {...dialogProps}
        fullScreen={fullScreen}
        fullWidth={fullWidth}
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby='ss-responsive-dialog-title'
      >
        {!!title && <DialogTitle {...dialogTitleProps} id='ss-responsive-dialog-title'>{title}</DialogTitle>}
        <DialogContent {...dialogContentProps} >
          <DialogContentText {...dialogContentTextProps} color='primary'>{message}</DialogContentText>
        </DialogContent>
        {this.renderActions()}
      </Dialog>
    )
  }
}

// resolve value: -1(selected nothing), 0\1\2...(index of selected button)
// reject value(rarely happen): -2(not prepared), -3(internal queueing bug ;])
export const openDialog: IOpenDialog = async (params: IOpenDialogParams) => {
  if (!params.actions) {
    params.actions = [{ text: '取消' }, { text: '确定' }]
  }
  if (!params.title) {
    params.title = ''
  }
  const { instance } = openDialog
  if (!instance) {
    return Promise.reject(ACTION_AGAIN)
  }

  const ret = Promise.resolve(openDialog.pending || 0).then(() => {
    return instance.open(params as Required<IOpenDialogParams>)
  })
  .then(code => {
    if (openDialog.pending === ret) {
      openDialog.pending = undefined
    }
    return code
  })
  openDialog.pending = ret
  return ret
}

export default withMobileDialog<SSDialogPropInterface>()(SSDialog)
