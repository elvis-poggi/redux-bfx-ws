
export function tickersSub (symbol) {
  const symbols = [
    'tBTCUSD',
    'tETCUSD',
    'tLTCUSD'
  ]
  symbols.map((symbol) => {
    window.wsSend({
      event: 'subscribe',
      channel: 'ticker',
      symbol: symbol
    })
  })
}

export function tradesSub (symbol = 'tBTCUSD') {
  window.wsSend({
    event: 'subscribe',
    channel: 'trades',
    symbol: symbol
  })
}

export function booksSub (symbol = 'tBTCUSD', precision = 'p0', frequency = 'f0', length = '25') {
  window.wsSend({
    event: 'subscribe',
    channel: 'book',
    symbol: symbol,
    prec: precision,
    freq: frequency,
    len: length
  })
}

export function unSub (chanId) {
  console.log('unSub', chanId)
  window.wsSend({
    event: 'unsubscribe',
    chanId: chanId
  })
}

let subscriptions = {
  // chanId: {...channel info}
}

export function getChannelInfo (chanId) {
  console.log('getChnnelInfo', chanId, subscriptions, subscriptions[chanId])
  return subscriptions[chanId]
}

export function getSubscriptions () {
  return subscriptions
}

export function isSubscription (msg) {
  return (msg.event === 'subscribed')
}

export function digestSubscription (subMsg) {
  subscriptions[subMsg.chanId] = subMsg
}

export function digestUnsub (msg) {
  subscriptions[msg.chanId] = null
}

export function isUnsub (msg) {
  return (msg.event === 'unsubscribed')
}
