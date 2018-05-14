import keyBy from 'lodash.keyby'

const INITIAL_STATE = {
  list: {}
}

const setConnectionsList = (state, activeConnections) => {
  const list = keyBy(activeConnections, connection => connection.ip)

  return { ...state,
    list,
    loading: false
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_CONNECTIONS':
      return setConnectionsList(state, action.activeConnections)
    default:
      return state
  }
}
