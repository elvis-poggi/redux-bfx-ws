import React from 'react'
import Bids from './Bids'
import Asks from './Asks'

const s = {
  display: 'flex',
  flexDirection: 'row'
}

const Book = ({asks = {}, bids = {}}) => {
  return (
    <div style={s}>
      <Asks data={asks} />
      <Bids data={bids} />
    </div>
  )
}
export default Book
