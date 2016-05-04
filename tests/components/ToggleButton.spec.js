import React from 'react'
import ToggleButton from 'components/ToggleButton'
import { shallow } from 'enzyme'

describe('(Component) ToggleButton', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      active: 1,
      onChange: (_spies.onChange = sinon.spy())
    }
    _wrapper = shallow(
      <ToggleButton {..._props}>
        <button value={1}>1</button>
        <button value={2}>2</button>
      </ToggleButton>)
  })

  it('Should have two children', () => {
    _wrapper.props().children.length.should.equal(2)
  })

  it('Should inject onChange cb to buttons', () => {
    _wrapper.find('button').forEach(btn => {
      btn.simulate('click')
      _spies.onChange.should.have.been.calledWith(btn.prop('value'))
    })
  })

  it('Should set \'active\' class on active button', () => {
    _wrapper.find('button').first().hasClass('active').should.be.true
    _wrapper.find('button').last().hasClass('active').should.be.false

    _props.active = 2
    _wrapper = shallow(
      <ToggleButton {..._props}>
        <button value={1}>1</button>
        <button value={2}>2</button>
      </ToggleButton>)

    _wrapper.find('button').first().hasClass('active').should.be.false
    _wrapper.find('button').last().hasClass('active').should.be.true
  })
})
