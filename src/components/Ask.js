import React from 'react'
import Cell from './Cell'

const Ask = (props = {}) => {
  const { data = {} } = props
  return [
    <Cell>{data.price}</Cell>,
    <Cell>{data.amount}</Cell>,
    <Cell>{data.count}</Cell>
  ]
}

export default Ask
