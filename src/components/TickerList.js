import React from 'react'
import Ticker from './Ticker'
import Cell from './Cell'

const TickerList = ({data}) => {
  const keys = Object.keys(data)
  return (
    <div className='tickerWrapper'>
      <Cell isHeader>SYMBOL</Cell>
      <Cell isHeader>LAST</Cell>
      <Cell isHeader>24HR</Cell>
      <Cell isHeader>VOLUME SELF</Cell>
      {keys.map(key => (
        <Ticker data={data[key]} key={key} />
    ))}
    </div>
  )
}
export default TickerList
