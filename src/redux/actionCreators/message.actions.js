import { isArray, isObject, maxBy, omit, values } from 'lodash'
import { getChannelInfo } from '../../websocket/subscriptions'
import { tickerMessage } from './tickers.actions'

export function isValidDataMessage (msg) {
  const channelInfo = getChannelInfo(msg[0])
  console.log('cInfo', channelInfo)
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
    // case 'trades':
    //   return // calls Trades actionCreator
    // case 'book':
    //   return // calls Books actionCreator
    default:
      return {
        type: 'UNKNOWN_DATA_MESSAGE',
        payload: msg
      }
  }
}
