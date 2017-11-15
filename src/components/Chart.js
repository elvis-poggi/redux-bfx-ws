import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const Chart = (props = {}) => {
  const { data = [] } = props
  if (!data.length) {
    return (
      <div>
        <h2> Nothing to show </h2>
      </div>
    )
  }
  return (
    <LineChart width={600} height={300} data={data}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey='mts' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Legend />
      <Line type='monotone' dataKey='close' stroke='#8884d8' />
    </LineChart>
  )
}

export default Chart
