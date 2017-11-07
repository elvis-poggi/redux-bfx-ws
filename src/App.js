import React, { Component } from 'react'
import './App.css'
// import Debug from './components/Debug'
import { connect } from 'react-redux'
import TickerList from './components/TickerList'
import TradeList from './components/TradeList'
import Book from './components/Book'

class App extends Component {
  render () {
    const {
      trades,
      tickers,
      bids,
      asks
    } = this.props
    return (
      <div className='App'>
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
