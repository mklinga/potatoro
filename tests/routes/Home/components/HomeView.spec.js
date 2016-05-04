import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { shallow } from 'enzyme'

describe('(Component) Home', () => {
  let _props, _wrapper

  beforeEach(() => {
    _props = {
      running: true
    }
    _wrapper = shallow(<HomeView {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  it('Should render with an <h2> that includes Home View text.', () => {
    expect(_wrapper.find('h2').text()).to.match(/Home View/)
  })

  it('Should render text "running" when props.running is true', () => {
    expect(_wrapper.find('span').text()).to.match(/^Running$/)
  })
})
