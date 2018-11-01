import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import DatePicker from './index'

function handleShowDate (date: string) {
  console.log('date', date)
}

storiesOf('Datepicker', module)
  .add('datepicker', withInfo({ inline: true })(() => (
    <DatePicker date={new Date()} onChange={handleShowDate} />
  )))
