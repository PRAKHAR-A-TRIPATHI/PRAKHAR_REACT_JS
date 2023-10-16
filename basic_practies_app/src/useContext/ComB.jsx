import React, { createContext, useEffect, useState } from 'react'
import ComC from './ComC'
import ComD from './comD';

let comBContext = createContext();
function ComB() {
  let [count, setcount] = useState(0)
  // let  x = useEffect((a,b)=>{
  //   return a+b
  // })
  let comBData = ["a", "b", "c", "d", "e", "f"]
  // console.log(x)
  const com = () => {
    setcount(count + 1)
  }
  // console.log(a)
  return (
    <>
      <comBContext.Provider value={{ comBData, com }}>
        <div>ComB
          <h1 className=' text-xl'>Update Value : {count}</h1>
          <ComC />
        </div>
      </comBContext.Provider>
      <ComD />
    </>
  )
}

export default ComB;
export { comBContext };