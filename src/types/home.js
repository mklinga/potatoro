export type Props = {
  ActionButtons: {
    running: boolean,
    launch: () => Action,
    reset: (value?: number) => Action,
    stop: () => Action
  },
  BigTimer: {
    disabled: boolean,
    time: string
  },
  SequenceView: {
    current: string
  }
}

export type ActionCreators = {
  ActionButtons: {
    launch: () => Action,
    reset: (value?: number) => Action,
    stop: () => Action
  },
  Potatoro: {
    startTimer: (tickLength?: number) => (dispatch: Function, getState: Function) => number,
    stopTimer: (timerId: number) => void
  }
}
