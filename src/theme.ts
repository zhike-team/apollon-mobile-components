// tslint:disable-next-line
import { createMuiTheme, Theme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      gray: string,
      gray2: string
    }
  }
  interface ThemeOptions {
    custom: {
      gray: string,
      gray2: string
    }
  }
}

export default createMuiTheme({
  palette: {
    primary: {
      main: '#53595F'
    },
    secondary: {
      main: '#3399FF'
    }
  },
  custom: {
    gray: '#8F9DA5',
    gray2: '#2E3236'
  }
})
