import React from 'react'
import { useState } from 'react'

export default function ButtonEvent() {
    let [first, setFirest] = useState("")
    let [second, setSecond] = useState("")
  return (
    <div>
        <button
        onClick={e => setFirest('onClick (first button)')}
        onMouseDown={e => setFirest('onMouseDown (first button)')}
        onMouseEnter={e => setFirest('onMouseEnter (first button)')}
        onMouseLeave={e => setFirest('onMouseLeave (first button)')}
        onMouseOver={e => setFirest('onMouseOver (first button)')}
        onMouseUp={e => setFirest('onMouseUp (first button)')}
      >
        First button
      </button>
      <h1>{first}</h1>
      <button
        onClick={e =>setSecond('onClick (second button)')}
        onMouseDown={e => setSecond('onMouseDown (second button)')}
        onMouseEnter={e => setSecond('onMouseEnter (second button)')}
        onMouseLeave={e => setSecond('onMouseLeave (second button)')}
        onMouseOver={e => setSecond('onMouseOver (second button)')}
        onMouseUp={e => setSecond('onMouseUp (second button)')}
      >
        Second button
      </button>
      <h1>{second}</h1>
    </div>
  )
}
