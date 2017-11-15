import React from 'react'
import FilledChart from './FilledChart'

const Candles = (props = {}) => {
  const { pair, data } = props
  return (
    <div>
      <h2>Symbol: {pair}</h2>
      <FilledChart data={data} />
    </div>
  )
}

export default Candles
