import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ImageButton from './index'

storiesOf('ImageButton', module)
  .add('image button', () => (
    <ImageButton
      backgroundImage=''
      mainText='北京新中关学习中心'
      note={true}
      noteText='关中大侠'
    />
  ))
