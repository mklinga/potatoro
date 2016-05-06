import React from 'react'
import { Link } from 'react-router'
import SequenceView from 'routes/Home/components/SequenceView'
import { shallow } from 'enzyme'

describe('(Component) SequenceView', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _props = {
      current: 0,
      sequence: [ 'WORK', 'SHORT_PAUSE' ]
    }
    _wrapper = shallow(<SequenceView {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  describe('Current sequence', () => {
    let _current

    _props = {
      current: 0,
      sequence: [ 'WORK', 'SHORT_PAUSE' ]
    }
    _wrapper = shallow(<SequenceView {..._props} />)
    _current = _wrapper.find('h4').filterWhere(a => a.text() === 'Current').parent().find('span')

    it('Should show current action', () => {
      _current.should.exist
      _current.text().should.equal('WORK')

      _props.current = 1
      _wrapper = shallow(<SequenceView {..._props} />)
      _current = _wrapper.find('h4').filterWhere(a => a.text() === 'Current').parent().find('span')
      _current.text().should.equal('SHORT_PAUSE')
    })
  })

  describe('Next sequence', () => {
    let _next

    _props = {
      current: 0,
      sequence: [ 'WORK', 'SHORT_PAUSE' ]
    }
    _wrapper = shallow(<SequenceView {..._props} />)
    _next = _wrapper.find('h4').filterWhere(a => a.text() === 'Next').parent().find('span')

    it('Should show current action', () => {
      _next.should.exist
      _next.text().should.equal('SHORT_PAUSE')

      _props.current = 1
      _wrapper = shallow(<SequenceView {..._props} />)
      _next = _wrapper.find('h4').filterWhere(a => a.text() === 'Next').parent().find('span')
      _next.text().should.equal('WORK')
    })
  })
})
