import React from 'react'
import { Link } from 'react-router'
import { BigTimer, _formatTimer, _padLeft } from 'routes/Home/components/BigTimer'
import { shallow } from 'enzyme'

describe('(Component) BigTimer', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _props = {
      running: true,
      seconds: 100
    }
    _wrapper = shallow(<BigTimer {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  describe('_padLeft', () => {
    it('Should pad numbers smaller than ten with a zero', () => {
      for (let i = 0; i < 10; i++) {
        _padLeft(i).should.equal('0' + i)
      }
    })

    it('Should not pad numbers bigger than ten with a zero', () => {
      for (let i = 10; i <= 60; i++) {
        _padLeft(i).should.equal(i)
      }
    })
  })

  describe('_formatTimer', () => {
    it('Should format seconds into minutes:seconds', () => {
      for (let min = 0; min < 120; min++) {
        for (let sec = 0; sec < 60; sec++) {
          const seconds = min*60 + sec;
          _formatTimer(seconds).should.equal(min + ':' + _padLeft(sec))
        }
      }
    })
  })
})
