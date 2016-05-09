/* @flow */
import { setCurrent } from './current'
import { stop } from './running'
import type { State, Timer } from 'types/timer'

import init from '../../../init'

import { showNotification } from 'utils/notifications'

export const MODIFY_TIMER = 'MODIFY_TIMER'
export const RESET_TIMER = 'RESET_TIMER'
export const START_TIMER = 'START_TIMER'
export const STOP_TIMER = 'STOP_TIMER'

export const findTimerByType = (state: State) => (timer: Timer) => timer.type === state.sequence[state.current]

const _timerFinished = (dispatch: Function, state: State) => {
  dispatch(stop())
  dispatch(resetTimer())

  const nextTimer = (state.current + 1) % state.sequence.length
  dispatch(setCurrent(nextTimer))

  showNotification('Potatoro', { body: 'Time\'s up!' })
}

const _tick = (tickLength: number) => (dispatch: Function, getState: Function) => {
  return window.setInterval(() => {
    const state = getState()

    if (state.running) {
      dispatch(modifyTimer())

      const currentTimer = state.timers.find(findTimerByType(state))

      if (currentTimer) {
        const durationInSeconds = currentTimer.duration * 60

        if ((state.elapsed >= durationInSeconds)) {
          _timerFinished(dispatch, state)
        }
      }
    }
  }, tickLength)
}

export function resetTimer (value: number = 0): Action {
  return {
    type: RESET_TIMER,
    payload: value
  }
}

export function startTimer (tickLength: number = 1000): (dispatch: Function, getState: Function) => number {
  return _tick(tickLength)
}

export function modifyTimer (): Action {
  return {
    type: MODIFY_TIMER,
    payload: 1
  }
}

export function stopTimer (timerId: number): () => void {
  return () => window.clearInterval(timerId)
}

const ACTION_HANDLERS = {
  [MODIFY_TIMER]: (state: number, action: { payload: number }): number => state + action.payload,
  [RESET_TIMER]: (state: number, action: { payload: number }): number => action.payload
}

export default function reducer (state: number = init.elapsed, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
