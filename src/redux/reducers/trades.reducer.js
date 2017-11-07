import { reverse, sortBy, slice } from 'lodash'

const MAX_LENGTH = 20

function filterTrades (data) {
  const sortedData = reverse(sortBy(data, 'mts'))
  return slice(sortedData, 0, MAX_LENGTH)
}

const trades = (state = {}, action = {}) => {
  const { type, payload = {} } = action
  switch (type) {
    case 'TRADE_UPDATE': {
      return filterTrades({
        ...state,
        [payload.tradeId]: payload
      })
    }
    case 'TRADE_SNAPSHOT': {
      let result = {}
      for (const row of payload) {
        result[ row.tradeId ] = row
      }
      return filterTrades(result)
    }

    default:
      return state
  }
}

export default trades
