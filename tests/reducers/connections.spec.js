import connectionsReducer from '../../client/reducers/connections'

const INITIAL_STATE = {
  list: {}
}

test('it returns unique values for same ip connections', () => {
  const action = {
    type: 'UPDATE_CONNECTIONS',
    activeConnections: {
      1: {
        ip: '88.88.88.88',
        country: 'SPAIN'
      },
      2: {
        ip: '88.88.88.88',
        country: 'SPAIN'
      },
      3: {
        ip: '99.99.99.99',
        country: 'SPAIN'
      },
      4: {
        ip: '99.99.99.99',
        country: 'SPAIN'
      },
      5: {
        ip: '85.85.85.85',
        country: 'SPAIN'
      }
    }
  }
  const updatedState = { list: {
    '88.88.88.88': {
      ip: '88.88.88.88',
      country: 'SPAIN'
    },
    '99.99.99.99': {
      ip: '99.99.99.99',
      country: 'SPAIN'
    },

    '85.85.85.85': {
      ip: '85.85.85.85',
      country: 'SPAIN'
    }
  }
  }

  expect(connectionsReducer(INITIAL_STATE, action)).toEqual(updatedState)
})
