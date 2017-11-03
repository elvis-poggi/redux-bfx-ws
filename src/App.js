import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Debug from './components/Debug'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    const tradeStyle = {
      textAlign: 'center',
      width: '50px',
      display: 'inline-block'
    }
    const tickerStyle = {
      textAlign: 'center',
      display: 'inline-block',
      float: 'right'
    }
    const bookStyle = {
      textAlign: 'center',
      display: 'inline-block',
      float: 'left'
    }
    const { trades, tickers, bids, asks } = this.props
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <div style={tradeStyle}>Trades: <Debug data={trades} /></div>
        <div style={tickerStyle}>Ticker: <Debug data={tickers} /></div>
        <div style={bookStyle}>Book:
          <div style={{float: 'left', margin: '10px', display: 'inline-block'}}>
            Bids:<Debug data={bids} />
          </div>
          <div style={{margin: '10px', display: 'inline-block'}}>
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
