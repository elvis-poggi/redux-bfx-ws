import React from 'react'
import Cell from './Cell'
import ColoredNumber from './ColoredNumber'

const Ticker = (props = {}) => {
  const { data = {} } = props
  return [
    <Cell>
      {data.symbol.substr(1, 3)}
    </Cell>,
    <Cell>
      {data.lastPrice.toFixed(2)} {data.symbol.substr(4, 6)}
    </Cell>,
    <Cell>
      <ColoredNumber value={data.dailyChangeperc}>
        {data.dailyChangeperc.toFixed(2)}%
      </ColoredNumber>
    </Cell>,
    <Cell>
      {data.volume.toFixed(2)}
    </Cell>
  ]
}
export default Ticker
