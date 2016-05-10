import React from 'react'
import { Link } from 'react-router'
import SequenceView from 'routes/Home/components/SequenceView'
import { labels } from 'constants.js'
import { shallow } from 'enzyme'

describe('(Component) SequenceView', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _props = {
      current: 'WORK'
    }
    _wrapper = shallow(<SequenceView {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  describe('Current sequence', () => {
    let _current

    _props = {
      current: 'WORK'
    }
    _wrapper = shallow(<SequenceView {..._props} />)
    _current = _wrapper.find('span')

    it('Should show current action', () => {
      _current.should.exist
      _current.text().should.equal(labels['WORK'])

      _props.current = 'SHORT_PAUSE'
      _wrapper = shallow(<SequenceView {..._props} />)
      _current = _wrapper.find('span')
      _current.text().should.equal(labels['SHORT_PAUSE'])
    })
  })
})
