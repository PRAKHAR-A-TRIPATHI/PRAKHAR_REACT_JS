import React, { useContext } from 'react'
import { data } from './CompA'
import { comBContext } from './ComB';

export default function ComD() {
    let aData = useContext(data);
    let comb  = useContext(comBContext)
    console.log(comBData)
  return (
    <div>
      <h1>Comp D</h1>
    {aData.b}
   {
    comb.comBData.map((val,index)=>{
        return <button key={index} className='btn bg-black text-white text-xl m-2 p-3' onClick={comb.com} >{val}</button>
    })
   }
    </div>
  )
}
