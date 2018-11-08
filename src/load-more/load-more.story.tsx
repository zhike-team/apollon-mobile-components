import * as React from 'react'
import { storiesOf, forceReRender } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import LoadMore from './index'

const count = 3
let page = 1

function add () {
  page++
  forceReRender()
}

function renderDom (num: number) {
  const domArr = []
  for (let i = 0; i < num * 10; i++) {
    domArr.push(<p style={{ border: '1px solid #000' }}>{i}</p>)
  }
  return (
    <div>{domArr}</div>
  )
}

storiesOf('LoadMore', module)
  .add('load more', withInfo({ inline: true })(() => (
    <div style={{ height: '100%', overflow: 'hidden' }}>
      <LoadMore
        count={count}
        page={page}
        dom={renderDom(page)}
        onClick={add}
        height={'90%'}
      />
    </div>
  ))
)
