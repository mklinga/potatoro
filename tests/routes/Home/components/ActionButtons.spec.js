import React from 'react'
import { Link } from 'react-router'
import ActionButtons from 'routes/Home/components/ActionButtons'
import { shallow } from 'enzyme'

describe('(Component) ActionButtons', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      launch: (_spies.launch = sinon.spy())
    }
    _wrapper = shallow(<ActionButtons {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  describe('Launch button', () => {
    let _button

    beforeEach(() => {
      _spies = {}
      _props = {
        launch: (_spies.launch = sinon.spy())
      }
      _wrapper = shallow(<ActionButtons {..._props} />)
      _button = _wrapper.find('button')
    })

    it('Should render with an <button> that triggers launch() action', () => {
      _button.should.exist
      _button.simulate('click')
      _spies.launch.should.have.been.called
    })
  })

  describe('(Link) Edit counters', () => {
    let _link

    beforeEach(() => {
      _spies = {}
      _props = {
        launch: (_spies.launch = sinon.spy())
      }
      _wrapper = shallow(<ActionButtons {..._props} />)
      _link = _wrapper.find(Link)
    })

    it('Should point to /edit', () => {
      _link.should.exist
      _link.prop('to').should.equal('/edit')
    })
  })
})
