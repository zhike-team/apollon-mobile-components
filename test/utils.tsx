import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

export const RealDate = Date

export function mockDate (isoDate: Date) {
  (global as any).Date = class extends RealDate {
    constructor () {
      super(isoDate)
      return new RealDate(isoDate)
    }
  }
}

interface TestComponentOptions {
  state?: AnyObject,
  props?: AnyObject
}

export function testComponent (Component: any, callback: (wrapper: ShallowWrapper) => any, options: TestComponentOptions = {}) {
  expect(callback).toBeTruthy()
  const wrapper = shallow(
    <Component
      {...(options.props)}
    />
  )
  wrapper.setState(options.state || {}, () => {
    callback && callback(wrapper)
  })
}
