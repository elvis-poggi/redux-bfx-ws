import { omit } from 'lodash'

const books = (state = {}, action = {}) => {
  const { type, payload = {} } = action
  switch (type) {
    case 'BOOK_SNAPSHOT': {
      let result = {
        asks: {},
        bids: {}
      }
      for (const row of action.payload) {
        result[ row.side ][ row.price ] = row
      }
      return result
    }
    case 'BOOK_REMOVE': {
      const { side, price } = payload
      const res = {
        ...state,
        [ side ]: omit(state[ side ], price)
      }
      return res
    }
    case 'BOOK_UPDATE': {
      const { side, price } = payload
      return {
        ...state,
        [ side ]: {
          ...state[ side ],
          [ price ]: payload
        }
      }
    }
    default:
      return state
  }
}

export default books
