import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './index'

storiesOf('Icon', module)
  .add('calendar icon with xxs size', () => (
    <Icon type='calendar' size='xxs' />
  ))
  .add('tv icon with xs size', () => (
    <Icon type='tv' size='xs' />
  ))
  .add('clock icon with sm size', () => (
    <Icon type='clock' size='sm' />
  ))
  .add('teacher icon with md size', () => (
    <Icon type='teacher' size='md' />
  ))
  .add('exchange icon with lg size', () => (
    <Icon type='exchange' size='lg' />
  ))
