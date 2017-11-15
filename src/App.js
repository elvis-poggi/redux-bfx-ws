import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import TickerList from './components/TickerList'
import TradeList from './components/TradeList'
import Book from './components/Book'
import Candles from './containers/Candles.container'
import { getSubscribedChannels } from './websocket/subscriptions'

function unsubAll (ws) {
  const keys = getSubscribedChannels()
  for (const key of keys) {
    ws._send({
      event: 'unsubscribe',
      chanId: key
    })
  }
}

function subscription (ws, pair) {
  ws._send({
    'event': 'subscribe',
    'channel': 'candles',
    'key': 'trade:1D:' + pair
  })
  ws._send({
    'event': 'subscribe',
    'channel': 'ticker',
    'symbol': pair
  })
  ws._send({
    'event': 'subscribe',
    'channel': 'trades',
    'symbol': pair
  })
  ws._send({
      'event': 'subscribe',
      'channel': 'book',
      'symbol': pair,
      'precision': '',
      'freqency': '',
      'length': ''
    })
}

export function wsCheck (ws) {
  if (ws.readyState === 1) {
    subscription(ws, 'tBTCUSD')
  } else {
    setTimeout(() => wsCheck(ws), 1000)
  }
}

class App extends Component {
  state = {
    currentPair: 'tBTCUSD'
  }

  componentDidMount () {
    wsCheck(this.props.ws)
  }

  setPair (pair) {
    this.setState({ currentPair: pair })
    unsubAll(this.props.ws)
    setTimeout(subscription(this.props.ws, pair), 2000)
  }

  render () {
    const {
      trades,
      tickers,
      bids,
      asks,
      ws
    } = this.props
    const { currentPair } = this.state

    return (
      <div className='App'>
        <header>
          <h1>Change pair subscription to:</h1>
          <button onClick={() => this.setPair('tBTCUSD')}> BTCUSD </button>
          <button onClick={() => this.setPair('tETCUSD')}> ETCUSD </button>
          <button onClick={() => this.setPair('tETHUSD')}> ETHUSD </button>
          <button onClick={() => this.setPair('tLTCUSD')}> LTCUSD </button>
        </header>
        <div>
          <Candles pair={currentPair} />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <div>
            <TradeList data={trades} />
          </div>
          <div>
            <TickerList data={tickers} />
          </div>
          <div>
            <Book asks={asks} bids={bids} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    trades: state.trades,
    tickers: state.tickers,
    bids: state.books.bids,
    asks: state.books.asks
  }
}

export default connect(mapStateToProps)(App)
