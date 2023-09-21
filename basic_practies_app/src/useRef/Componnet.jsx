import React from 'react'

export default function Componnet({first}) {
    console.log(first.current)
    function change() {
        first.current.style.backgroundColor = "red"
    }
  return (
    <div>
       <button onClick={change} className='bg-red-500 rounded-md p-2'>Child</button>
    </div>
  )
}
