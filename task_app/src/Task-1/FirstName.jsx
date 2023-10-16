import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function FirstName({handleNext,handleChange,formData }) {
    const navigate = useNavigate();
    const handleData = (e) =>{
        e.preventDefault();
        handleNext()
    }
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md h-44 m-10">
            <form onSubmit={handleData}>
                <div>
                    <label htmlFor="FirstName" className='text-4xl text-black m-2'>FirstName</label> <br />
                    <input type="text" className=' form-control w-2/5 p-2  m-2 rounded-md'
                        name='FirstName'
                        id='FirstName'
                        value={formData.FirstName}
                        onChange={handleChange}
                        required />
                </div>
                <div className='flex justify-between m-2'>
                    <button className='p-2  bg-blue-600 rounded-md' onClick={(e)=>{
                        e.preventDefault();
                        navigate('/')
                    }}>
                        Home
                    </button>
                    <button className='p-2  bg-blue-600 rounded-md' type='submit' >
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FirstName