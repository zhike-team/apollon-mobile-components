import * as React from 'react'
import classNames from 'classnames'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
// tslint:disable-next-line
import { Theme, withStyles, createStyles, StyledComponentProps } from '@material-ui/core/styles'
import './checkbox.scss'

// 扩展
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string
    }
  }
  interface ThemeOptions {
    status: {
      danger: string
    }
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger
    }
  },
  checked: {}
})

export interface CustomCheckboxPropTypes extends CheckboxProps {
  classes?: {
    root?: string,
    checked?: string
  },
  checked?: boolean
}

const CustomCheckbox = (props: CustomCheckboxPropTypes) => (
  <Checkbox
    {...props}
  />
)

export default CustomCheckbox
// export default withStyles(styles)(CustomCheckbox)
