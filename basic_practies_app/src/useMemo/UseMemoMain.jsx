import React, { useMemo, useState } from 'react'

export default function UseMemoMain() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  const muliCountMemo = useMemo(function muliCount(){
      console.log("hello")
      return count*5
    },[count])
  
  return (
    <div>
      <h1>Use Memo</h1>
      <h1>Count:{count}</h1>
      <h1>Items:{item}</h1>
      {muliCountMemo} <br />
      <button className='btn btn-lg bg-yellow-500 p-2 m-2' onClick={() => { setCount(count + 1) }}>Update Count</button> <br />
      <button className='btn btn-lg bg-yellow-500 p-2 m-2' onClick={() => { setItem(item * 5) }}>Update Count</button>
    </div>
  )
}
