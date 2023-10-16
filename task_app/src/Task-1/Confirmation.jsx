import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

function Confirmation({ show, setShow, handleDelet }) {
  return (
    <div>
         <div>
            <div className={`max-w-md mx-auto w-full bg-green-200 rounded-md absolute top-3 right-96 p-2 shadow ${show ? ' block' : ' hidden'}`}>
                <button className="p-2 bg-red-300 rounded-md " onClick={()=>{setShow(false)}}>
                    <AiOutlineClose />
                </button>
                <h2 className="text-2xl font-weight-bold mb-4">Are You Sure Delete Row</h2>
                <button className="btn bg-green-500 rounded-lg p-2 m-2" onClick={handleDelet}>Confirm</button>
                <button className="btn bg-red-500 p-2 rounded-lg m-2" onClick={()=>{setShow(false)}}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Confirmation