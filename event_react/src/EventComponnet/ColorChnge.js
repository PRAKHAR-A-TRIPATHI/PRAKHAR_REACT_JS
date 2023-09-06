import React from 'react';
import {useState} from 'react';

export default function ColorChnge() {
    let [color,setColor] = useState("red")
    let bgChange = ()=>{
        console.log("Kam ho gya");
        setColor("green")
    }
    let bgColor = ()=>{
        console.log("Kam ho gya");
        setColor("red")
    }
    let css={
        padding:10,
        backgroundColor:"blue",
        border:"none",
        borderRadius:10,
    }
  return (
    <div style={{backgroundColor:color}}>
      <button style={css} onClick={bgChange} onDoubleClick={bgColor}>Click Me 😁</button>
    </div>
  )
}
