import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import MineItem from './mine-item'

const onMineClick = () => console.log('--------')

storiesOf('我的列表', module)
  .add('解绑按钮', withInfo({ inline: true })(() => (
    <MineItem
      url='paper-blue'
      primaryText='解绑'
      secondaryText='unbinding'
      onMineClick={onMineClick}
      className='hahahah'
    />
  )))
  .add('切换角色', withInfo({ inline: true })(() => (
    <MineItem
      url='paper-blue'
      primaryText='切换角色'
      secondaryText='change-role'
      onMineClick={onMineClick}
      className='ahahah'
    />
  )))
