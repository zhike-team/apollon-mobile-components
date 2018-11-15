import Button from '@material-ui/core/Button'

// tslint:disable-next-line
import { Theme, withStyles, createStyles } from '@material-ui/core/styles'

const buttonStyles = (theme: Theme) => createStyles({
  outlinedPrimary: {
    borderColor: theme.custom.lightBlue,
    color: theme.custom.lightBlue
  },
  containedSecondary: {
    backgroundColor: theme.custom.lightBlue,
    color: theme.custom.white,
    boxShadow: 'none'
  }
})

export default {
  Button: withStyles(buttonStyles)(Button)
}
