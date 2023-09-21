import React, { useRef, useState } from 'react'

export default function UnctrollForm() {
    const lukyName = useRef(null);
    const [show,setShow] = useState(false);
    const submitFun = (e) =>{
        e.preventDefault();
        let value = lukyName.current.value;
        value === "" ? alert("plz fill your name") : setShow(true)
        value === "" ? setShow(false) :setShow(true)
    }
  return (
    <div className='max-w-md mx-auto w-full  bg-blue-700 absolute left-1/3 top-20 p-6 rounded-md shadow-md '>
      <h1>Unctroll Form</h1>
      <form action="" onSubmit={submitFun}>
        <div>
            <label htmlFor="lukyName">Enter You Lucky Name</label> <br />
            <input ref={lukyName} type="text" id='lukyName' className='p-2 w-full'/>
        </div>
        <br />
        <button className=' bg-green-400 p-2 rounded-md mb-4' >Submit</button>
      </form>
      {show ? <p>YOUR LUCKY NAME {lukyName.current.value}</p>:null}
    </div>
  )
}
