import * as React from 'react'
import { storiesOf, forceReRender } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import RangePicker from './index'

let mode = 'day'
let startDate = new Date()
let endDate = new Date()

function changeDates (newMode: string, dates: any) {
  mode = newMode
  startDate = dates[0]
  endDate = dates[1]
  forceReRender()
}

storiesOf('Range Picker', module)
  .add('default', withInfo({ inline: true })(() => (
    <RangePicker
      mode={mode}
      startDate={startDate}
      endDate={endDate}
      onChange={changeDates}
    />
  ))
)
