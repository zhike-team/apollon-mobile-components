// tslint:disable-next-line
import { createMuiTheme, Theme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#53595F'
    },
    secondary: {
      main: '#3399FF'
    }
  },
  status: {
    // My business variables
    danger: orange[500]
  }
})
