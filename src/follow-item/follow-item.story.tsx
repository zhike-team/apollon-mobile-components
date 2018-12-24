import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import FollowItem from './index'
const demoData = [
  {
    name: '移除',
    callback: () => null
  }
]

const showNameClick = function () {
  console.log('name is clicked')
}

storiesOf('FollowItem', module)
  .add('follow item', withInfo({ inline: true })(() => (
    <FollowItem
      name='e'
      phone={13389887733}
      onNameClick={showNameClick}
      withBorder={true}
      operations={demoData}
    />
  ))
)
