import React from 'react'
import Cell from './Cell'
import ColoredNumber from './ColoredNumber'

const Ticker = (props = {}) => {
  const { data = {} } = props
  return [
    <Cell>
      {data.symbol}
    </Cell>,
    <Cell>
      {data.bid.toFixed(2)}/{data.bidSize.toFixed(2)}
    </Cell>,
    <Cell>
      {data.ask.toFixed(2)}/{data.askSize.toFixed(2)}
    </Cell>,
    <Cell>
      {data.dailyChange.toFixed(2)} (
      <ColoredNumber value={data.dailyChangeperc}>
        {data.dailyChangeperc.toFixed(2)}
      </ColoredNumber>%)
    </Cell>,
    <Cell>
      <ColoredNumber value={data.lastPrice}>
        {data.lastPrice.toFixed(2)}
      </ColoredNumber>
    </Cell>,
    <Cell>
      {data.volume.toFixed(2)}
    </Cell>,
    <Cell>
      {data.high.toFixed(2)}
    </Cell>,
    <Cell>
      {data.low.toFixed(2)}
    </Cell>
  ]
}
export default Ticker
