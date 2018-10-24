import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Checkbox from './index'
import theme from '../theme'

storiesOf('Checkbox', module)
  .add('checked', () => (
    <MuiThemeProvider theme={theme}>
      <Checkbox checked={true} />
    </MuiThemeProvider>
  ))
  .add('not checked', () => (
    <MuiThemeProvider theme={theme}>
      <Checkbox checked={false} />
    </MuiThemeProvider>
  ))
  .add('uncontrolled', () => (
    <MuiThemeProvider theme={theme}>
      <Checkbox />
    </MuiThemeProvider>
  ))
