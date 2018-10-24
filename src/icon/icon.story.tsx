import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './index'

storiesOf('Icon', module)
  .add('calendar icon', () => (
    <Icon type='calendar' size='xxs' />
  ))
