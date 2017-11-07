import React from 'react'
import Cell from './Cell'
import ColoredArrow from './ColoredArrow'

const Trade = (props = {}) => {
  const { data = {} } = props
  return [
    <Cell hasColor value={data.amount}>
      <ColoredArrow value={data.amount}>
        {
        (data.amount > 0)
        ? <i className='fa fa-chevron-up' />
        : <i className='fa fa-chevron-down' />
      }
      </ColoredArrow>
    </Cell>,
    <Cell hasColor value={data.amount}>
      {new Date(data.mts).toLocaleTimeString()}
    </Cell>,
    <Cell hasColor value={data.amount}>
      {data.price.toFixed(1)}
    </Cell>,
    <Cell hasColor value={data.amount}>
      {data.amount.toFixed(4)}
    </Cell>
  ]
}
export default Trade
