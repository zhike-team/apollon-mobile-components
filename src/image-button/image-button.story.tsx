import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ImageButton from './index'

storiesOf('ImageButton', module)
  .add('image button', () => (
    <ImageButton text='北京新中关学习中心' isCurrentSite={true} />
  ))
