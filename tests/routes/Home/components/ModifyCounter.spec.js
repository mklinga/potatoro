import React from 'react'
import { bindActionCreators } from 'redux'
import { ModifyCounter, _changeDuration, labels } from 'routes/Home/components/ModifyCounter'
import { shallow } from 'enzyme'

describe('(Component) ModifyCounter', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      timer: { type: 'WORK', duration: 30, issues: [] },
      ...bindActionCreators({
        changeDuration: (_spies.changeDuration = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<ModifyCounter {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  describe('Input label', () => {
    let _label

    beforeEach(() => {
      _label = _wrapper.find('label')
    })

    it('should have a human readable label', () => {
      ['WORK', 'SHORT_PAUSE', 'LONG_PAUSE'].forEach(type => {
        _props.timer.type = type
        _wrapper = shallow(<ModifyCounter {..._props} />)
        _label = _wrapper.find('label')
        _label.text().should.equal(labels[type])
      })
    })
  })

  describe('Duration input', () => {
    let _input

    beforeEach(() => {
      _input = _wrapper.find('input')
    })

    it('has minimum and maximum', () => {
      expect(_input.prop('min')).to.exist
      expect(_input.prop('max')).to.exist
    })

    it('Should dispatch a `changeDuration` action when changed', () => {
      _spies.dispatch.should.have.not.been.called

      _input.simulate('change', { target: { value: '5' } })

      _spies.dispatch.should.have.been.called
      _spies.changeDuration.should.have.been.calledWith('WORK', '5')
    })

    it('Should set tooltip when there are issues', () => {
      _props.timer.issues = [ { msg: 'A serious issue' } ]
      _wrapper = shallow(<ModifyCounter {..._props} />)
      _input = _wrapper.find('input')

      expect(_input.prop('title')).to.equal('A serious issue')
    })

    it('Should set input value from the issue when exists', () => {
      expect(_input.prop('value')).to.equal(30)

      _props.timer.issues = [ { msg: 'A serious issue', value: 'wrong' } ]
      _wrapper = shallow(<ModifyCounter {..._props} />)
      _input = _wrapper.find('input')

      expect(_input.prop('value')).to.equal('wrong')
    })
  })

  describe('_changeDuration wrapper', () => {
    it('should wrap original props.changeDuration into a function', () => {
      let _cb = sinon.spy()
      let _func = _changeDuration('WORK', _cb)

      expect(typeof _func).to.equal('function')
    })

    it('should call original props.changeDuration through wrapper', () => {
      let _cb = sinon.spy()
      let _func = _changeDuration('SHORT_PAUSE', _cb)

      _func({ target: { value: '12' } })
      _cb.should.have.been.calledWith('SHORT_PAUSE', '12')
    })
  })
})
