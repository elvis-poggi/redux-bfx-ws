import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Debug from './components/Debug'
import { connect } from 'react-redux'
import TickerList from './components/TickerList'
import TradeList from './components/TradeList'

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
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <div>
            Trades:<TradeList data={trades} />
          </div>
          <div>
            Tickers:<TickerList data={tickers} />
          </div>
          <div>
            Bids:<Debug data={bids} />
          </div>
          <div>
            Asks:<Debug data={asks} />
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
