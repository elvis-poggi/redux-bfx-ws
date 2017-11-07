import React from 'react'
import PropTypes from 'prop-types'

const CellColor = (props = {}) => {
  const { children, value } = props
  let style = {}
  if (value < 0) {
    style.color = 'white'
    style.background = 'rgba(99, 0, 0, 0.68)'
  }
  if (value > 0) {
    style.color = 'white'
    style.background = 'green'
  }
  return (
    <span style={style}> { children } </span>
  )
}

CellColor.propTypes = {
  value: PropTypes.number.isRequired
}

export default CellColor
