import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import ConfirmDialog from '../index'
import theme from '../../theme'

storiesOf('Confirm Dialog', module)
  .add('fullscreen', () => (
    <MuiThemeProvider theme={theme}>
      <ConfirmDialog fullScreen={true} />
    </MuiThemeProvider>
  ))
  .add('not fullscreen', () => (
    <MuiThemeProvider theme={theme}>
      <ConfirmDialog fullScreen={false} />
    </MuiThemeProvider>
  ))
