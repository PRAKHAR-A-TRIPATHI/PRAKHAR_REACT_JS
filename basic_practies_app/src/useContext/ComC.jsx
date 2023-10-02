import React, { useContext } from 'react'
import { data } from './CompA'

function ComC() {
    const first = useContext(data)
  return (
    <div>ComC {first}</div>
  )
}

export default ComC