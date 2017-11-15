import {findIndex} from 'lodash'

function isUpdate (data = [], msg = {}) {
  return findIndex(data, ['mts', msg.mts])
}

const candles = (state = {}, action = {}) => {
  const { type, payload = {} } = action
  switch (type) {
    case 'CANDLE_UPDATE': {
      const { data = {}, symbol } = payload
      const index = isUpdate(state[symbol], data)
      if (index !== -1) {
        console.log('candle update is updating')
        return {
          [symbol]: [
            ...state[symbol].slice(0, index),
            data,
            ...state[symbol].slice(index + 1)
          ]
        }
      } else {
        console.log('candle update is inserting')
        return {
          [symbol]: [
            ...state[symbol],
            data
          ]
        }
      }
    }
    case 'CANDLE_SNAPSHOT': {
      const { data = {}, symbol } = payload
      return {
        [symbol]: data
      }
    }
    default:
      return state
  }
}

export default candles
