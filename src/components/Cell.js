import React from 'react'

const basicStyle = {
  display: 'inline-block',
  padding: '5px'
}

const Cell = (props = {}) => {
  const { children, isHeader } = props
  const style = isHeader
    ? {...basicStyle, background: 'gray'}
    : basicStyle

  return (
    <div style={style}> { children } </div>
  )
}

export default Cell
