import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { withInfo } from '@storybook/addon-info'
import Button from '@material-ui/core/Button'
import ConfirmDialog, { openDialog } from '../index'
import theme from '../../theme'

let counter = 0
async function handleClick () {
  counter += 2
  const idxs = await Promise.all([
    openDialog({
      message: `message: message: message: message: message: message: ${counter - 2}`
    }),
    openDialog({
      message: `message: message: message: message: message: message: ${counter - 1}`,
      actions: [{ text: 'btn1' }, { text: 'btn2' }, { text: 'btn3' }]
    })
  ])
  console.log(`click id: ${counter - 1}, ${counter}, return: ${idxs[0]}, ${idxs[1]}`)
}

async function handleClick2 () {
  counter += 1
  const ret = await openDialog({
    message: `message: message: message: message: message: message: ${counter - 1}`,
    actions: [{ text: '确定' }]
  })
  console.log(`click id: ${counter - 1}, return: ${ret}`)
}

storiesOf('Confirm Dialog', module)
  .add('click open', withInfo({ inline: true })(() => (
    <MuiThemeProvider theme={theme}>
      <Button onClick={handleClick} >打开</Button>
      <ConfirmDialog fullScreen={false} />
    </MuiThemeProvider>
  )))
  .add('one button', withInfo({ inline: true })(() => (
    <MuiThemeProvider theme={theme}>
      <Button onClick={handleClick2} >打开</Button>
      <ConfirmDialog fullScreen={false} />
    </MuiThemeProvider>
  )))
