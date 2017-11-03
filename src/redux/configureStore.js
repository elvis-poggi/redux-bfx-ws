import { createStore, combineReducers } from 'redux'
import tickers from './reducers/tickers.reducer'
import trades from './reducers/trades.reducer'
import books from './reducers/books.reducer'

export function configureStore () {
  const reducers = combineReducers({
    tickers, trades, books
  })
  return createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
