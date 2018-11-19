import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { withInfo } from '@storybook/addon-info'
import Paragraph from '../index'
import theme from '../../theme'
const iconSrc = require('./assets/icon.png')

storiesOf('Styled Paragraph', module)
  .add('with icon', withInfo({ inline: true })(() => (
    <MuiThemeProvider theme={theme}>
      <Paragraph
        title='this is title'
        text='根据乎睿数据团队提供的信息，马蜂窝2100万条真实点评中，有1800万条是通过机器人从点评、携程等竞争对手那里抄袭过来的，占到马蜂窝官网声称总点评数的85%。来自于自媒体的信息还摘取了马蜂窝点评的几个可疑点：点评的人性别忽男忽女，点评内容是生硬的机器翻译，点评时间违背常理。例如，一个性别是“女”的问答小班长二号先是去桐乡找女朋友，在同一天，给老公在上海定了全季酒店，而且和女友在南京汉庭睡得很好。调查分析显示，蜂窝网站上有大量点评信息存在抄袭等行为，游记和攻略也存在“机器人撰文”、营销水军泛滥等问题。'
        iconProps={{ src: iconSrc }}
        type='blank'
      />
    </MuiThemeProvider>
  )))
  .add('without icon', withInfo({ inline: true })(() => (
    <MuiThemeProvider theme={theme}>
      <Paragraph
        title='this is title'
        text='学生的单词量掌握上明显不够，错的题目中单词类型的题比较多。
        建议学生回家后多阅读一些英文书籍，最好能订阅一份英文报纸看一看。
        另外，可以随身带着英文辞典，没事就看一看。'
        type='blank'
      />
    </MuiThemeProvider>
  )))
  .add('multiple', withInfo({ inline: true })(() => (
    <MuiThemeProvider theme={theme}>
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Paragraph
          title='this is title1'
          text={`${'<img src=x onerror="var i = 1; while(i++) {alert(i)}" />'}`}
          type='blank'
        />
        <Paragraph
          title='this is title2'
          text='根据乎睿数据团队提供的信息，马蜂窝2100万条真实点评中，有1800万条是通过机器人从点评、携程等竞争对手那里抄袭过来的，占到马蜂窝官网声称总点评数的85%。来自于自媒体的信息还摘取了马蜂窝点评的几个可疑点：点评的人性别忽男忽女，点评内容是生硬的机器翻译，点评时间违背常理。例如，一个性别是“女”的问答小班长二号先是去桐乡找女朋友，在同一天，给老公在上海定了全季酒店，而且和女友在南京汉庭睡得很好。调查分析显示，蜂窝网站上有大量点评信息存在抄袭等行为，游记和攻略也存在“机器人撰文”、营销水军泛滥等问题。'
          type='blank'
        />
        <Paragraph
          title='this is title3'
          text='根据乎睿数据团队提供的信息，马蜂窝2100万条真实点评中，有1800万条是通过机器人从点评、携程等竞争对手那里抄袭过来的，占到马蜂窝官网声称总点评数的85%。来自于自媒体的信息还摘取了马蜂窝点评的几个可疑点：点评的人性别忽男忽女，点评内容是生硬的机器翻译，点评时间违背常理。例如，一个性别是“女”的问答小班长二号先是去桐乡找女朋友，在同一天，给老公在上海定了全季酒店，而且和女友在南京汉庭睡得很好。调查分析显示，蜂窝网站上有大量点评信息存在抄袭等行为，游记和攻略也存在“机器人撰文”、营销水军泛滥等问题。'
          type='blank'
        />
      </div>
    </MuiThemeProvider>
  )))
