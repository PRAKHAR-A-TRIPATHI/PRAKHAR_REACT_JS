import React, { useEffect, useRef, useState } from 'react'
import Componnet from './Componnet';

export default function UseRef() {
    const [input,setInput] = useState("");
    // const [count,setCount] = useState();
    const count = useRef(0);
    console.log(count)
    useEffect(()=>{
        // setCount(count+1)
        count.current = count.current + 1;
    })
    // used to access a Dom Element Directly
    const first = useRef("")
    const changeFun = () => {
        //  console.log(first.current)
        first.current.style.backgroundColor = "lightgreen"
        first.current.focus()
    }
  return (
    <div>
      <input type="text" ref={first} value={input} onChange={(e)=>setInput(e.target.value)} /> <br />
      <button className=' bg-green-300 p-2 rounded-md'
      onClick={changeFun}>Submit</button>
      <p className=' text-lg'>The Number of Time : {count.current}</p>
      <Componnet first={first}/>
    </div>
  )
}
