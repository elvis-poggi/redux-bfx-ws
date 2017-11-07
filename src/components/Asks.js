import React from 'react'
import Cell from './Cell'
import Ask from './Ask'

const s = {
  display: 'grid',
  gridTemplateColumns: '90px 90px 120px',
  textAlign: 'center',
  border: '1px solid gray'
}

const Asks = (props = {}) => {
  const {data = {}} = props
  const keys = Object.keys(data)

  return (
    <div>
      <p>ASKS</p>
      <div style={s}>
        <Cell isHeader>PRICE</Cell>
        <Cell isHeader>AMOUNT</Cell>
        <Cell isHeader>COUNT</Cell>
        {keys.map(key => (
          <Ask data={data[key]} key={key} />
      ))}
      </div>
    </div>
  )
}

export default Asks
//       {keys.map(key => (
//         <Bids data={data[key]} key={key} />
//       ))}
// <Cell>COUNT</Cell>
// <Cell>AMOUNT</Cell>
// <Cell>PRICE</Cell>
