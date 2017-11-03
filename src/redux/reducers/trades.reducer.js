const trades = (state = {}, action = {}) => {
  const { type, payload = {} } = action
  switch (type) {
    case 'TRADE_UPDATE': {
      return {
        ...state,
        [payload.tradeId]: payload
      }
    }
    case 'TRADE_SNAPSHOT': {
      let result = {}
      for (const row of payload) {
        result[ row.tradeId ] = row
      }
      return result
    }

    default:
      return state
  }
}

export default trades
