import { createStore } from 'redux'
import tickers from './reducers/tickers.reducer'

export function configureStore () {
  return createStore(tickers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
