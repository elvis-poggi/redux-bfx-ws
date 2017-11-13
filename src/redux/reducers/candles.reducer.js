const candles = (state = {}, action = {}) => {
  const { type, payload = {} } = action
  switch (type) {
    case 'CANDLE_UPDATE': {
      const { data = {} } = payload
      return {
        ...state,
        [payload.symbol]: {
          ...state[payload.symbol],
          [data.mts]: data.close
        }
      }
    }
    case 'CANDLE_SNAPSHOT': {
      let result = {}
      const { data = {} } = payload
      for (const row of data) {
        result[ row.mts ] = row.close
      }
      return {
        ...state,
        [payload.symbol]: result
      }
    }
    default:
      return state
  }
}

export default candles
