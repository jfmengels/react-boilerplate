import u from 'updeep'

const immutable = (state) => u(state, null)

export const createConstants = (names) => {
  return names.reduce((constants, name) => {
    constants[name] = name
    return constants
  }, {})
}

const noopFunc = (state) => state

export const createReducer = (initialState, reducerFuncs) => {
  return (state = immutable(initialState), action) => {
    const func = reducerFuncs[action.type] || noopFunc
    return func(state, action)
  }
}
