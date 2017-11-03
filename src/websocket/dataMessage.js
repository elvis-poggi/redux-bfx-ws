import { isArray, isNumber, isObject, maxBy, omit, values } from 'lodash'
import { getSubscriptions } from './subscriptions'
import { tickerAdapter, tradeAdapter, booksAdapter } from './adapters'
let data = {
  books: {},
  tickers: {},
  trades: {}
}

export function isValidDataMsg (msg) {
  const subs = getSubscriptions()
  if (isArray(msg) && (isNumber(msg[0])) && isObject(subs[msg[0]])) {
    return true
  }
}

export function digestDataMsg (msg) {
  const subs = getSubscriptions()
  const chanId = msg[0]
  const channelData = subs[ chanId ]
  if (msg[1] === 'hb') {
    return
  }
  switch (channelData.channel) {
    case 'ticker':
      return saveTickers(msg, channelData)
    case 'trades':
      return saveTrade(msg, channelData)
    case 'book':
      return saveBook(msg)
    default:
      console.log('default case', msg)
  }
}

export function printData () {
  console.log('data', data)
}

export function getData (section) {
  return data[section]
}

// setData('books', {...})
export function setData (section, value) {
  data[section] = value
}

// TICKERS
export function isTickerMessage (msg) {
  return (msg.channel === 'ticker')
}

export function saveTickers (tickerMsg, channelData) {
  const symbol = channelData.symbol
  const rawMsgData = tickerMsg[1]
  const msgData = tickerAdapter(rawMsgData)
  // data.tickers[symbol] = msgData
  const tickers = getData('tickers')
  const newTickers = Object.assign({}, tickers, { [symbol]: msgData })
  setData('tickers', newTickers)
}

// TRADES
export function isTradeMessage (msg) {
  return (msg.channel === 'trades')
}

function removeOldestTrade (trades = []) {
  const oldest = maxBy(values(trades), 'mts')
  return omit(trades, oldest.tradeId)
}

function tradeUpdate (msg) {
  console.log('trade is updating...')
  const rawMsgData = msg[2]
  const msgData = tradeAdapter(rawMsgData)
  const currentId = msgData.tradeId
  if (!isObject(data.trades[currentId])) {
    data.trades = removeOldestTrade(data.trades)
  }
  data.trades[currentId] = msgData
}

function tradeSnapshot (msg) {
  console.log('clearing and populating...')
  const rawMsgData = msg[1]
  let result = {}
  for (const row of rawMsgData) {
    const adaptedRow = tradeAdapter(row)
    const key = adaptedRow.tradeId
    result[key] = adaptedRow
  }
  data.trades = result
}

export function saveTrade (msg, channelData) {
  if (msg[1] === 'te' || msg[1] === 'tu') {
    console.log('is trade update')
    tradeUpdate(msg)
  } else {
    console.log('is snapshot', data)
    tradeSnapshot(msg)
  }
}

// BOOKS
export function isBookMessage (msg) {
  return (msg.channel === 'books')
}

function booksSnapshot (msg) {
  data.books = {
    asks: {},
    bids: {}
  }
  for (const r of msg[1]) {
    const row = booksAdapter(r)
    data.books[row.side][row.price] = row
  }
}

function booksUpdate (msg) {
  const rawMsgData = msg[1]
  const row = booksAdapter(rawMsgData)

  if (row.count) {
    data.books[row.side][row.price] = row
  } else {
    data.books[row.side] = omit(data.books[row.side], row.price)
  }
}

export function saveBook (msg) {
  if (msg[1].length > 3) {
    booksSnapshot(msg)
  } else {
    booksUpdate(msg)
  }
}
