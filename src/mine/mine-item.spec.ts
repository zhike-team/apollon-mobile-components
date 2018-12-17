import { testComponent } from '../../test/utils'
import Mine from './mine-item'

it('normal', () => {
  testComponent(Mine, wrapper => {
    expect(wrapper).toMatchSnapshot()
  }, { })
})
