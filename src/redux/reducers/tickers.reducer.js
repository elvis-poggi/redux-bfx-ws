const tickers = (state = {}, action = {}, payload) => {
  switch (action.type) {
    case 'TICKER_UPDATE': {
      console.log('ticker update action', action.payload)
      return {
        ...state,
        [action.payload.symbol]: action.payload
      }
    }
    default:
      return state
  }
}

export default tickers
