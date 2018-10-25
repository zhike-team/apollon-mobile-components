import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ConfirmDialog, { openDialog } from '../index'
import theme from '../../theme'

let counter = 0
async function handleClick () {
  counter += 2
  const idxs = await Promise.all([
    openDialog({
      title: `title: ${counter - 1}`,
      message: `message: message: message: message: message: message: ${counter - 1}`
    }),
    openDialog({
      title: `title: ${counter}`,
      message: `message: ${counter}`
    })
  ])
  console.log(`click id: ${counter - 1}, ${counter}, return: ${idxs[0]}, ${idxs[1]}`)
}

storiesOf('Confirm Dialog', module)
  .add('click open', () => (
    <MuiThemeProvider theme={theme}>
      <Button id={'123'} onClick={handleClick} >打开</Button>
      <ConfirmDialog fullScreen={false} />
    </MuiThemeProvider>
  ))
