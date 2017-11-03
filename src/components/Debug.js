import React from 'react'

const Debug = (props = {}) => {
  const { data } = props
  return (
    <pre>{JSON.stringify(data, 0, 2)}</pre>
  )
}

export default Debug
