import * as React from 'react'
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import loadElement from '../loadElement'

import * as cnLocale from 'date-fns/locale/zh-CN'

export interface DatePickerPropsInterface {
  date: any,
  onChange: (date: string) => void
}

export default class SmartDatePciker extends React.Component<DatePickerPropsInterface, {}> {

  componentDidMount () { // import icons for date picker
    const element = '<link rel="stylesheet" id="__SMART_MOBILE_DATEPICKER_ICONS_NODE__" href="https://fonts.googleapis.com/icon?family=Material+Icons">'
    loadElement(element, 'DATEPICKER_ICONS', 'body')
  }

  handleDateChange = (date: any) => {
    return this.props.onChange(date)
  }

  render (): React.ReactNode {
    const { date } = this.props
    return (
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
        locale={cnLocale}
      >
        <DatePicker
          value={date}
          onChange={this.handleDateChange}
        />
      </MuiPickersUtilsProvider>
    )
  }
}
