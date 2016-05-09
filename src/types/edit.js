import type { Timer, TimerType } from 'types/timer'

export type ActionCreators = {
  ModifyCountersContainer: {
    changeDuration: (type: TimerType, duration: string) => Action,
    changeSequence: (amountOfshortBreaks: number) => Action
  }
}

export type Props = {
  ModifyCounter: {
    timer: Timer,
    changeDuration: (type: TimerType, duration: string) => Action
  },
  ModifyCounters: {
    changeDuration: (type: TimerType, duration: string) => Action,
    changeSequence: (amountOfshortBreaks: number) => Action,
    timers: Array<Timer>,
    sequence: Array<TimerType>
  }
}
