import React from 'react'
import Cell from './Cell'

const Bid = (props = {}) => {
  const { data = {} } = props
  return [
    <Cell>{data.count}</Cell>,
    <Cell>{data.amount}</Cell>,
    <Cell>{data.price}</Cell>
  ]
}

export default Bid
