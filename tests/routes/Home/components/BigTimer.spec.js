import React from 'react'
import { Link } from 'react-router'
import BigTimer from 'routes/Home/components/BigTimer'
import { shallow } from 'enzyme'

describe('(Component) BigTimer', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _props = {
      disabled: false,
      time: '12:22'
    }
    _wrapper = shallow(<BigTimer {..._props} />)
  })

  it('Should render as a <div>', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  it('Should show time', () => {
    _wrapper.find('span').text().should.equal('12:22')
  })
})
