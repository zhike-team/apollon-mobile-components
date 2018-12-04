import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Calendar from './calendar'

// let selectedDate: any = new Date()

const onDateChange = (date: any) => {
  console.log(date)
}

storiesOf('Calendar', module)
  .add('Calendar', withInfo({ inline: true })(() => (
    <Calendar date={new Date()} onChange={onDateChange} />
  )))
