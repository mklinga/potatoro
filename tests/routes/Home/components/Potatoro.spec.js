import React from 'react'
import { Potatoro } from 'routes/Home/components/Potatoro'
import { shallow } from 'enzyme'

describe('(Component) Potatoro', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Potatoro />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  it('Should render with an <h2> that includes Home View text.', () => {
    expect(_wrapper.find('h2').text()).to.match(/Home View/)
  })
})
