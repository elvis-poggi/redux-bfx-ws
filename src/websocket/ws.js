import { isSubscription, isUnsub, digestUnsub, digestSubscription } from './subscriptions'
import { isValidDataMessage, messageAction } from '../redux/actionCreators/message.actions'
const url = 'wss://api.bitfinex.com/ws/2'
const wss = new window.WebSocket(url)

export function init (store = {}) {
  wss.onopen = (event) => {
    console.log('Ws connected')
  }
  wss.onmessage = (rawMsg) => {
    const msg = JSON.parse(rawMsg.data)
    console.log('Message received', msg)
    if (isValidDataMessage(msg)) {
      // new data
      // store must be updated
      const action = messageAction(msg)
      action && store.dispatch(action)
    }
    if (isSubscription(msg)) {
      digestSubscription(msg)
    }
    if (isUnsub(msg)) {
      digestUnsub(msg)
    }
  }
  wss.onclose = () => {
    console.log('Ws closed')
  }
  wss.onerror = () => {
    console.log('Connection error')
  }
  wss._send = (msg) => {
    console.log('Ws send', msg)
    wss.send(JSON.stringify(msg))
  }

  return wss
}
