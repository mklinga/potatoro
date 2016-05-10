/* @flow */
import init from '../../../init'

import { resetTimer } from './timerActions'

import type { State } from 'types/timer'

import { makeReducer } from 'utils/reducer'

export const SET_CURRENT_TIMER = 'SET_CURRENT_TIMER'

export function setCurrent (index: number): Action {
  return {
    type: SET_CURRENT_TIMER,
    payload: index
  }
}

export function getNextTimerIndex (state: State): number {
  const { sequence, current } = state
  return (current + 1) % sequence.length
}

export function setNextTimer (): (dispatch: Function, getState: Function) => void {
  return function (dispatch, getState) {
    const nextTimer = getNextTimerIndex(getState())
    dispatch(resetTimer())
    dispatch(setCurrent(nextTimer))
  }
}

export default makeReducer(init.current, {
  [SET_CURRENT_TIMER]: (state: number, action: { payload: number }): number => action.payload
})
