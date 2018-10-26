import * as React from 'react'
import classNames from 'classnames'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
// tslint:disable-next-line
import { Theme, withStyles, createStyles, StyledComponentProps } from '@material-ui/core/styles'
import './styles.scss'

// 扩展
const styles = (theme: Theme) => createStyles({
  root: {
    color: theme.custom.gray,
    '&$checked': {
      color: theme.custom.gray
    }
  },
  checked: {}
})

export interface CheckboxPropInterface extends CheckboxProps {
  classes?: {
    root?: string,
    checked?: string
  },
  checked?: boolean
}

const CustomCheckbox = (props: CheckboxPropInterface) => (
  <Checkbox
    {...props}
  />
)

// export default withStyles(styles)(CustomCheckbox)
export default CustomCheckbox
