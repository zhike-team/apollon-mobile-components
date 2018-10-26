import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Loading from './index'

storiesOf('Loading', module)
  .add('loading', withInfo({ inline: true })(() => (
    <Loading />
  ))
)
