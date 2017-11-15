import React from 'react'
import { max as _max, min as _min, sortedUniq } from 'lodash'

const HEIGHT = '210'
const WIDTH = '789'

function getCy (close, max, min) {
  const ord = (100 * (close - min)) / (max - min)
  return HEIGHT - (Math.round(ord))
}

const style = {
  stroke: '#6F7CBA',
  strokeWidth: '1.7',
  fill: '#e4e7f2',
  pointerEvents: 'none'
}

function getCloseList (data = {}) {
  const keys = Object.keys(data)
  const sortedKeys = sortedUniq(keys)

  return sortedKeys.map(k => data[k])
}

const Candles = (props = {}) => {
  const { data = {}, pair, send = () => {} } = props
  if (!Object.keys(data).length) {
    const msg = {
      'event': 'subscribe',
      'channel': 'candles',
      'key': 'trade:1m:tBTCUSD'
    }
    return (
      <div>
        <h2> Nothing to show </h2>
        <button onClick={() => send(msg)}>Subscribe</button>
      </div>
    )
  }
  const closeList = getCloseList(data)
  const max = _max(closeList)
  const min = _min(closeList)
  const count = closeList.length
  const step = WIDTH / count
  const pathList = closeList.map((close, index) => {
    const cx = (step * index)
    const cy = getCy(close, max, min)
    return `L ${cx} ${cy}`
  })
  const path = `M 0 ${HEIGHT} ${pathList.join(' ')} L ${WIDTH} ${HEIGHT}`

  return (
    <div>
      <h2>Symbol: {pair}</h2>
      <p> High: {max}<br /> Low: {min} </p>
      <svg height={HEIGHT} width={WIDTH}>
        <path style={style} d={path} />
      </svg>
    </div>
  )
}

export default Candles
