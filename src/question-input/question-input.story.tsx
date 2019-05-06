import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import QuestionInput from './index'

const blurHandler = (str: number) => console.log('string', str, typeof str)
const errorHandler = (error: string) => console.log('error', error)

storiesOf('问卷输入框', module)
  .add('不可输入', withInfo({ inline: true })(() => (
    <QuestionInput
      mode='view'
      score={'3'}
    />
  )))
  .add('可以输入', withInfo({ inline: true })(() => (
    <QuestionInput
      mode='edit'
      score={''}
      onBlur={blurHandler}
      onError={errorHandler}
    />
  )))
