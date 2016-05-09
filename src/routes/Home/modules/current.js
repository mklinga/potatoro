/* @flow */
import init from '../../../init'

import { resetTimer } from './timerActions'

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

const ACTION_HANDLERS = {
  [SET_CURRENT_TIMER]: (state: number, action: { payload: number }): number => action.payload
}

export default function reducer (state: number = init.current, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

