import { isArray, isObject } from 'lodash'
import { getChannelInfo } from '../../websocket/subscriptions'
import { tickerMessage } from './tickers.actions'
import { tradeMessage } from './trades.action'
import { booksMessage } from './books.actions'

export function isValidDataMessage (msg) {
  const channelInfo = getChannelInfo(msg[0])
  // console.log('cInfo', channelInfo)
  return (isArray(msg) && isObject(channelInfo))
}

// takes data message from wss, returns action
export function messageAction (msg = []) {
  if (msg[1] === 'hb') {
    return false
  }
  const channelInfo = getChannelInfo(msg[0])
  switch (channelInfo.channel) {
    case 'ticker':
      return tickerMessage(msg, channelInfo)
    case 'trades':
      return tradeMessage(msg, channelInfo)
    case 'book':
      return booksMessage(msg)
    default:
      return {
        type: 'UNKNOWN_DATA_MESSAGE',
        payload: msg
      }
  }
}
