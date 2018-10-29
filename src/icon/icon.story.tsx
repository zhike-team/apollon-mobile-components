import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Icon from './index'

storiesOf('Icon', module)
  .add('people icon with md size', withInfo({ inline: true })(() => (
    <Icon type='people' size='md' />
  )))
