import * as React from 'react'
import { storiesOf, forceReRender } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import DateMover from './index'

let mode = 'week'
let startDate = '2018-12-02'
let endDate = '2018-12-08'

function changeDates (dates: any) {
  startDate = dates[0]
  endDate = dates[1]
  forceReRender()
}

storiesOf('Date Mover', module)
  .add('default', withInfo({ inline: true })(() => (
    <DateMover
      mode={mode}
      startDate={startDate}
      endDate={endDate}
      onChange={changeDates}
    />
  ))
)
