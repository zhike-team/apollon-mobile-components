import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './index'

storiesOf('Icon', module)
  .add('down blue icon', () => (
    <Icon className='icon-className' type='down-blue' size='xs' />
  ))
