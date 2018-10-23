import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Checkbox from './checkbox'
import theme from './theme'

storiesOf('Checkbox', module)
  .add('checked', () => (
    <MuiThemeProvider theme={theme}>
      <Checkbox checked={true} />
    </MuiThemeProvider>
  ))
