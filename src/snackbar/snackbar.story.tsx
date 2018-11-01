import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import SmartSnackbar from './index'

function handleClose () {
  console.log(Math.random()) // trigger close action
}

storiesOf('Snackbar', module)
  .add('snack bar', withInfo({ inline: true })(() => (
    <SmartSnackbar
      key={1}
      message='testing'
      autoHideDuration={2000}
      onClose={handleClose}
    />
  ))
)
