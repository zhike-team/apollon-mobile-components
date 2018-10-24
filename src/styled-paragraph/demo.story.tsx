import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Paragraph from './index'
import theme from '../theme'

storiesOf('Styled Paragraph', module)
  .add('Styled Paragraph', () => (
    <MuiThemeProvider theme={theme}>
      <Paragraph
        title='this is title'
        text='this is paragraph，当一个人，当一颗心沉入海底'
      />
    </MuiThemeProvider>
  ))
