/* @flow */

export const makeReducer = (initialValue: any, handlers: Object): Function => {
  return (state = initialValue, action: Action) => {
    const handler = handlers[action.type]

    return handler ? handler(state, action) : state
  }
}

export default makeReducer
