/* @flow */
import init from '../../../init'

import { makeReducer } from 'utils/reducer'

export const LAUNCH_POTATORO = 'LAUNCH_POTATORO'
export const STOP_POTATORO = 'STOP_POTATORO'

export function launch (): Action {
  return {
    type: LAUNCH_POTATORO
  }
}

export function stop (): Action {
  return {
    type: STOP_POTATORO
  }
}

export default makeReducer(init.running, {
  [LAUNCH_POTATORO]: (state: boolean): boolean => true,
  [STOP_POTATORO]: (state: boolean): boolean => false
})
