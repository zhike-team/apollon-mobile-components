import * as React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

interface SnackbarPropsInterface {
  key: string | number,
  message: string,
  autoHideDuration: number,
  onClose: React.MouseEventHandler<HTMLElement>
}

class SmartSnackbar extends React.Component<SnackbarPropsInterface, any> {
  render () {
    const { key, message, autoHideDuration, onClose } = this.props
    return (
      <Snackbar
        className='smart-snackbar'
        key={key}
        open={true}
        message={message}
        autoHideDuration={autoHideDuration}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    )
  }
}

export default SmartSnackbar
