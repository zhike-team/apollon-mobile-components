import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Checkbox from './index'
import theme from '../theme'

storiesOf('Checkbox', module)
  .add('checked', withInfo({ inline: true })(() => (
    <MuiThemeProvider theme={theme}>
      <Checkbox checked={true} />
    </MuiThemeProvider>
  )))
  .add('not checked', withInfo({ inline: true })(() => (
    <MuiThemeProvider theme={theme}>
      <Checkbox checked={false} />
    </MuiThemeProvider>
  )))
  .add('uncontrolled', withInfo({ inline: true })(() => (
    <MuiThemeProvider theme={theme}>
      <Checkbox />
    </MuiThemeProvider>
  )))
