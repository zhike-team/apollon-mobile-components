import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Button from './button'

test('button', () => {
  const testRenderer = renderer.create(<Button/>)
  const testInstance = testRenderer.root
  expect(testInstance.type).toBe(Button)
})
