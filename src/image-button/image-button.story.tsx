import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ImageButton from './index'
const testImg = require('./assets/default.png')

storiesOf('ImageButton', module)
  .add('image button', () => (
    <ImageButton
      mainText='北京新中关学习中心'
      note='关中大侠'
      backgroundImage={testImg}
    />
  ))
