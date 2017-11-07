import React from 'react'
import Trade from './Trade'
import Cell from './Cell'

const TradeList = ({data}) => {
  const keys = Object.keys(data)
  return (
    <div className='tradesWrapper'>
      <Cell isHeader />
      <Cell isHeader>TIME</Cell>
      <Cell isHeader>PRICE</Cell>
      <Cell isHeader>AMOUNT</Cell>
      {keys.map(key => (
        <Trade data={data[key]} key={key} />
    ))}
    </div>
  )
}
export default TradeList
