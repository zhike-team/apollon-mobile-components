import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Calendar from './calendar'

storiesOf('Calendar', module)
  .add('Calendar', withInfo({ inline: true })(() => (
    <Calendar />
  )))
