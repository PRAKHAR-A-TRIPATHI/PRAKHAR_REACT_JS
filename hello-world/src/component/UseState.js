import React from 'react'
import { useState,useEffect } from "react";

function UseState() {
  let [count,setCont] = useState(0)
  let [width,setWidth] = useState(window.screen.width)
  let remove =()=>{
    if(count===0){
      setCont (0)
    }else{
      setCont(count-1)
    }
    }
  let add =()=>{
    setCont(count+1)
    }

    useEffect(() => {
      document.title = count
      })
    useEffect(() => {
      window.addEventListener("resize",()=>{
        setWidth(()=> window.innerWidth)
      })
      return()=>{
        // window.removeEventListener("resize")
      }
      })
    
  return (
    <div className="row">
      <button className="btn btn-primary col" onClick={add}>Add</button>
      <h1 className='fs-1 col text-center'>{count}</h1>
      <button className="btn btn-primary col" onClick={remove}>remove</button>
      <h1>this window size {width}</h1>
    </div>
  )
}

export default UseState 