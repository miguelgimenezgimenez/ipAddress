const INITIAL_STATE = {
  error: null,
  list: {},
  loading: false,
  current: {}
}
const setError = (state, error) => ({ ...state,
  error,
  loading: false
})

const setLoading = (state, loading) => ({ ...state,
  loading
})

const setList = (state, data) => {
  const {
    list,
    page
  } = data
  const list = { ...state.list
  }
  if (!list[type]) list[type] = bookList
  else list[type] = list[type].concat(bookList)
  return { ...state,
    list,
    loading: false
  }
}

const setCurrentBook = (state, current) => ({ ...state,
  current,
  loading: false
})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BOOK_LOADING':
      return setLoading(state, true)
    case 'BOOK_LIST_SUCCESS':
      return setBookList(state, action.data)
    case 'BOOK_CURRENT_SUCCESS':
      return setCurrentBook(state, action.data)
    case 'BOOK_CURRENT_ERROR':
    case 'BOOK_LIST_ERROR':
      return setError(state, action.error)

    default:
      return state
  }
}
