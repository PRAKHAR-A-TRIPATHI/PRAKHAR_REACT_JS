import { useState } from 'react'
import React from 'react'

export default function Bg() {
  const [color, setColor] = useState("blue")
  const [black, setBlack] = useState("white")
  function randomColor() {
    let color = ["red", "yellow", "blue", "green","orange","purple","lightblue","grey","black",'white']
    let i = Math.floor(Math.random() * color.length);
    setColor(color[i]);
    if(color[i] === "white"){
      setBlack("black")
    }
  }
  return (
    <div className='w-full h-screen durtion-200'
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center  bottom-12 insert-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} onMouseEnter={() => { setColor("red") }}>red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} onMouseEnter={() => { setColor("green") }}>green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "yellow" }} onMouseEnter={() => { setColor("yellow") }}>yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "orange" }} onMouseEnter={() => { setColor("orange") }}>orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "darkblue" }} onMouseEnter={() => { setColor("darkblue") }}>dark blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "pink" }} onMouseEnter={() => { setColor("pink") }}>pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "black" }} onMouseEnter={() => { setColor("black") }}>black</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "grey" }} onMouseEnter={() => { setColor("grey") }}>grey</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "lightblue" }} onMouseEnter={() => { setColor("lightblue") }}>light blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "purple" }} onMouseEnter={() => { setColor("purple") }}>purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: color , color:black}} onClick={randomColor}>randomColor</button>
        </div>
      </div>
    </div>
  )
}
