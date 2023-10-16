
import React, { useState } from 'react'

const Xyz = () => {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <div>
      {/* {console.log(count)} */}
      <h1 className='text-white'>{count}</h1>
      <button className='bg-sky-400' onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Xyz
