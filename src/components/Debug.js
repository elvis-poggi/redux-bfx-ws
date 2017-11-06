import React from 'react'

const Debug = (props = {}) => {
  const { data } = props
  return (
    <pre style={{textAlign: 'left'}}>{JSON.stringify(data, 0, 2)}</pre>
  )
}

export default Debug
