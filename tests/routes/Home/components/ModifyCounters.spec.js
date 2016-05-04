import React from 'react'
import { bindActionCreators } from 'redux'
import { ModifyCounters, hasIssues, getActiveFromSequence } from 'routes/Home/components/ModifyCounters'
import { ALLOWED_SEQUENCES } from 'routes/Home/modules/sequence'
import { shallow } from 'enzyme'

describe('(Component) ModifyCounters', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      timers: [
        { type: 'WORK', duration: 30, issues: [] },
        { type: 'SHORT_PAUSE', duration: 5, issues: [] },
        { type: 'LONG_PAUSE', duration: 15, issues: [] }
      ],
      sequence: [ 'WORK', 'SHORT_PAUSE', 'WORK', 'LONG_PAUSE' ],
      ...bindActionCreators({
        launch: (_spies.launch = sinon.spy()),
        changeDuration: (_spies.changeDuration = sinon.spy()),
        changeSequence: (_spies.changeSequence = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<ModifyCounters {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  describe('hasIssues checking', () => {
    it('Should return true if there is any issue', () => {
      hasIssues([ { issues: [] }, { issues: [] }, { issues: [] } ]).should.be.false

      hasIssues([ { issues: [{ msg: '' }] }, { issues: [] }, { issues: [] } ]).should.be.true
      hasIssues([ { issues: [] }, { issues: [{ msg: '' }] }, { issues: [] } ]).should.be.true
      hasIssues([ { issues: [] }, { issues: [] }, { issues: [{ msg: '' }] } ]).should.be.true

      hasIssues([ { issues: [{ msg: '' }] }, { issues: [{ msg: '' }] }, { issues: [] } ]).should.be.true
      hasIssues([ { issues: [] }, { issues: [{ msg: '' }] }, { issues: [{ msg: '' }] } ]).should.be.true
      hasIssues([ { issues: [{ msg: '' }] }, { issues: [] }, { issues: [{ msg: '' }] } ]).should.be.true

      hasIssues([ { issues: [{ msg: '' }] }, { issues: [{ msg: '' }] }, { issues: [{ msg: '' }] } ]).should.be.true
    })
  })

  describe('Launch button', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Launch!')
    })

    it('is disabled if there are any issues', () => {
      expect(_button.prop('disabled')).to.be.false

      _props.timers.forEach(timer => {
        let timersWithIssues = _props.timers
          .map(t => t.type === timer.type ? ({ ...t, issues: [{ msg: 'has issue' }] }) : t)
        _wrapper = shallow(<ModifyCounters {..._props} timers={timersWithIssues} />)

        _button = _wrapper.find('button').filterWhere(a => a.text() === 'Launch!')
        expect(_button.prop('disabled')).to.be.true
      })
    })

    it('Should dispatch a `launch` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called

      _button.simulate('click')

      _spies.dispatch.should.have.been.called
      _spies.launch.should.have.been.called
    })
  })

  describe('getActiveFromSequence', () => {
    it('should return 1 or 2 based on the sequence', () => {
      Object.keys(ALLOWED_SEQUENCES).forEach(key => {
        getActiveFromSequence(ALLOWED_SEQUENCES[key]).should.equal(Number(key))
      })
    })
  })
})
