import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Checkbox from './index'
import theme from '../theme'

storiesOf('Checkbox', module)
  .add('checked', () => (
    <MuiThemeProvider theme={theme}>
      <Checkbox checked={true} classes={{ checked: 'funny-checkbox' }} />
    </MuiThemeProvider>
  ))
  .add('not checked', () => (
    <MuiThemeProvider theme={theme}>
      <Checkbox checked={false} classes={{ root: 'funny-checkbox' }} />
    </MuiThemeProvider>
  ))
  .add('uncontrolled', () => (
    <MuiThemeProvider theme={theme}>
      <Checkbox classes={{ checked: 'funny-checkbox' }} />
    </MuiThemeProvider>
  ))
