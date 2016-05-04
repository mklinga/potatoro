import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import LaunchOrEdit from 'routes/Home/components/LaunchOrEdit'
import { shallow } from 'enzyme'

describe('(Component) Home', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      running: true,
      launch: (_spies.launch = sinon.spy())
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
    _wrapper.find('span').text().should.match(/^Running$/)
  })

  it('Should render LauncOrEdit when props.running is false', () => {
    _props.running = false
    _wrapper = shallow(<HomeView {..._props} />)
    _wrapper.find(LaunchOrEdit).should.exist
  })
})
