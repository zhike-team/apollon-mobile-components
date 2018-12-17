import { testComponent } from '../../test/utils'
import Loading from './index'

it('normal', () => {
  testComponent(Loading, wrapper => {
    expect(wrapper).toMatchSnapshot()
  }, { })
})
