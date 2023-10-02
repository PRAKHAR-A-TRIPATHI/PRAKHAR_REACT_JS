import React from 'react'

export default function Componnet({first,chilldRef}) {
    // console.log(first.current)
    // console.log(chilldRef.current)
    function change() {
        first.current.style.backgroundColor = "red"
    }
  return (
    <div>
       <button onClick={change} className='bg-red-500 rounded-md p-2'>Child</button>
       <p>Child Input</p>
        <input type="text" ref={chilldRef} name='childName'/>
    </div>
  )
}
