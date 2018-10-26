import * as React from 'react'
import StyledComponents from './with-style'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import { WithWidth } from '@material-ui/core/withWidth'

const { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } = StyledComponents

const ACTION_BTN_ID_PREF = 'com.smartstudy.dialog-id-pref'

const ACTION_CANCEL = -1
const ACTION_AGAIN = -2
const ACTION_DUP = -3

export interface IOpenDialogAction {
  text: string
}

export interface IOpenDialogParams {
  title: string,
  message: string,
  actions?: IOpenDialogAction[]
}

export interface IOpenDialog {
  (params: IOpenDialogParams): Promise<number>,
  instance?: ConfirmDialog,
  pending?: Promise<number>
}

export interface ConfirmDialogPropInterface extends React.ClassAttributes<any> {
  fullScreen: boolean
}

export interface ConfirmDialogStateInterface extends React.ClassAttributes<any> {
  open: boolean,
  openRequest?: Required<IOpenDialogParams>
}

export class ConfirmDialog extends React.Component<ConfirmDialogPropInterface, ConfirmDialogStateInterface> {
  callback?: { resolve: (idx: number) => any, reject: (idx: number) => any }

  constructor (props: ConfirmDialogPropInterface) {
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
    return (
      <DialogActions>
        {actions.map(({ text }, ii) => <Button id={`${ACTION_BTN_ID_PREF}:${ii}`} key={text} onClick={this.handleClose} color='primary' autoFocus={ii === actions.length - 1} >{text}</Button>)}
      </DialogActions>
    )
  }

  render () {
    if (!this.state.openRequest) {
      return null
    }
    const { fullScreen } = this.props
    const { title, message } = this.state.openRequest
    return (
      <Dialog
        id={`${ACTION_BTN_ID_PREF}:-1`}
        fullScreen={fullScreen}
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        {this.renderActions()}
      </Dialog>
    )
  }
}

export const openDialog: IOpenDialog = async (params: IOpenDialogParams) => {
  if (!params.actions) {
    params.actions = [{ text: '取消' }, { text: '确定' }]
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

export default withMobileDialog<ConfirmDialogPropInterface>()(ConfirmDialog)
