import React from 'react'
import Ticker from './Ticker'
import Cell from './Cell'

const TickerList = ({data}) => {
  const keys = Object.keys(data)
  return (
    <div className='wrapper'>
      <Cell isHeader>Symbol</Cell>
      <Cell isHeader>Bid</Cell>
      <Cell isHeader>Ask</Cell>
      <Cell isHeader>Daily Change</Cell>
      <Cell isHeader>Last Price</Cell>
      <Cell isHeader>Volume</Cell>
      <Cell isHeader>High</Cell>
      <Cell isHeader>Low</Cell>
      {keys.map(key => (
        <Ticker data={data[key]} key={key} />
    ))}
    </div>
  )
}
export default TickerList
