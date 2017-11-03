import Ticker from './Ticker'

const TickerList = ({tickers}) => (
  <ul>
    {tickers.map(ticker => (
      <Ticker />
    ))}
  </ul>
)

export default TickerList
