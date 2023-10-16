import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

function Notification({ show, handleClose, apiDeleteFun }) {
    return (
        <div>
            <div className={`max-w-md mx-auto w-full bg-white position-fixed end-50   rounded-4 p-2 shadow ${show ? 'd-block' : 'd-none'}`}>
                <button className="btn" onClick={handleClose}>
                    <AiOutlineClose />
                </button>
                <h2 className="text-2xl font-weight-bold mb-4">Are You Sure Delete Row</h2>
                <button className="btn btn-success rounded-lg m-2" onClick={apiDeleteFun}>Yes</button>
                <button className="btn btn-danger rounded-lg m-2" onClick={handleClose}>No</button>
            </div>
        </div>

    )
}

export default Notification