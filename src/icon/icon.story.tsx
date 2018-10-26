import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Icon from './index'

storiesOf('Icon', module)
  .add('calendar icon with xxs size', withInfo({ inline: true })(() => (
    <Icon type='calendar' size='xxs' />
  )))
  .add('tv icon with xs size', withInfo({ inline: true })(() => (
    <Icon type='tv' size='xs' />
  )))
  .add('clock icon with sm size', withInfo({ inline: true })(() => (
    <Icon type='clock' size='sm' />
  )))
  .add('teacher icon with md size', withInfo({ inline: true })(() => (
    <Icon type='teacher' size='md' />
  )))
  .add('exchange icon with lg size', withInfo({ inline: true })(() => (
    <Icon type='exchange' size='lg' />
  )))
