import * as React from 'react'
import { storiesOf, forceReRender } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import LoadableContainer from './index'

let loading = false
let page = 1
let count = 8

function add () {
  loading = true
  forceReRender()
  setTimeout(() => {
    page++
    loading = false
    forceReRender()
  }, 1000)
}

function renderDom (num: number) {
  const domArr = []
  for (let i = 0; i < num * 10; i++) {
    domArr.push(<p style={{ border: '1px solid #000' }}>{i}</p>)
  }
  return domArr
}

storiesOf('Loadable Container', module)
  .add('load more content', withInfo({ inline: true })(() => (
    <div style={{ height: '100%', overflow: 'hidden' }}>
      <LoadableContainer
        noMore={count <= page}
        loading={loading}
        onLoad={add}
      >
        {renderDom(page)}
      </LoadableContainer>
    </div>
  ))
)
