import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Question from './index'

const description = [
  '服务PT会严格按照任务清单上检查我每日任务完成情况，没有完成的PT老师会继续督促我完成。',
  '服务PT会按照任务清单检查我每日任务完成情况，偶尔会忘记督促我完成没有完成的任务。',
  '服务PT会询问我是否完成每日任务，但是如果没有完成，也没有关系。',
  '服务PT基本上不管理我每天的任务是否完成。'
]

const questionScoreDescription = [
  '非常满意：5 分',
  '满意：4.5 分（含）- 5 分',
  '一般：4 分（含）- 4.5 分',
  '不满意：0 分 - 4 分'
]

const subjects = [
  { id: 1, name: '阅读', rank: 10, visible: 1, examinationId: 1 },
  { id: 2, name: '听力', rank: 20, visible: 1, examinationId: 1 }
]

const teachers = [
  { subjectId: 1, name: '小贩3' },
  { subjectId: 2, name: '汪文杰' }
]

const onChangeHandler = (value: string) => {
  console.log('value', value)
}

storiesOf('问卷输入框', module)
  .add('不可输入1', withInfo({ inline: true })(() => (
    <Question
      mode='view'
      score={4}
      description={description}
      title='请问您对服务PT 柯南的每日学习管理是否满意'
      type='management'
      index={4}
      text='I am a good person'
      subjects={subjects}
      teachers={teachers}
      questionScoreDescription={questionScoreDescription}
    />
  )))
  .add('可输入', withInfo({ inline: true })(() => (
    <Question
      mode='create'
      type='atmosphere'
      title='请您给我们的TOEFL授课PT课堂氛围打分。'
      subjects={subjects}
      teachers={teachers}
      index={4}
      description={description}
      text='I am a good person'
      questionScoreDescription={questionScoreDescription}
      onChange={onChangeHandler}
    />
  )))
  .add('可输入textArea', withInfo({ inline: true })(() => (
    <Question
      mode='create'
      index={9}
      text='第一份有效的问卷'
      title='请问您对智课还有其他的意见或者建议吗？'
      type='advice'
      onChange={onChangeHandler}
    />
  )))
