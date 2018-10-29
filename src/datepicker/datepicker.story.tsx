import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import SmartDatePicker from './index'

let currentDate = new Date()

const handleChangeDate = (date: any) => {
  currentDate = date
  console.log('currentDate', currentDate)
}

storiesOf('Datepicker', module)
  .add('Default datepicker', withInfo({ inline: true })(() => (
    <SmartDatePicker date={currentDate} onChange={handleChangeDate} />
  )))
