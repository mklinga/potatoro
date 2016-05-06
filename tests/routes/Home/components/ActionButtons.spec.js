import React from 'react'
import { Link } from 'react-router'
import ActionButtons from 'routes/Home/components/ActionButtons'
import { shallow } from 'enzyme'

describe('(Component) ActionButtons', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      running: false,
      launch: (_spies.launch = sinon.spy()),
      stop: (_spies.stop = sinon.spy())
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
        running: false,
        launch: (_spies.launch = sinon.spy()),
        stop: (_spies.stop = sinon.spy())
      }
      _wrapper = shallow(<ActionButtons {..._props} />)
      _button = _wrapper.find('button')
    })

    it('Should render with an <button> that triggers launch() action when not running', () => {
      _button.should.exist
      _button.simulate('click')
      _spies.launch.should.have.been.called
    })

    it('Should render with an <button> that triggers stop() action when running', () => {
      _props.running = true
      _wrapper = shallow(<ActionButtons {..._props} />)
      _button = _wrapper.find('button')

      _button.simulate('click')
      _spies.stop.should.have.been.called
    })
  })

  describe('(Link) Edit counters', () => {
    let _link

    beforeEach(() => {
      _spies = {}
      _props = {
        running: false,
        launch: (_spies.launch = sinon.spy()),
        stop: (_spies.stop = sinon.spy())
      }
      _wrapper = shallow(<ActionButtons {..._props} />)
      _link = _wrapper.find(Link)
    })

    it('Should point to /edit', () => {
      _link.should.exist
      _link.prop('to').should.equal('/edit')
    })

    it('Should not exist while running', () => {
      _props.running = true
      _wrapper = shallow(<ActionButtons {..._props} />)
      _link = _wrapper.find(Link)
      expect(_link).to.not.exist
    })
  })
})
