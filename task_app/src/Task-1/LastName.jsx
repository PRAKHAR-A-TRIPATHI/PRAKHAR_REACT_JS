import React, { useState } from 'react'


function Lastname({handleNext,handleChange,handlePrevious,formData }) {
   
    const handleData = (e) =>{
        e.preventDefault();
        handleNext()
    }
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md h-44 m-10">
            <form onSubmit={handleData}>
                <div>
                    <label htmlFor="Lastname" className='text-4xl text-black m-2'>Lastname</label> <br />
                    <input type="text" className=' form-control w-2/5 p-2  m-2 rounded-md'
                        name='Lastname'
                        id='Lastname'
                        value={formData.Lastname}
                        onChange={handleChange}
                        required />
                </div>
                <div className='flex justify-between m-2'>
                    <button className='p-2  bg-blue-600 rounded-md' onClick={(e)=>{
                        e.preventDefault();
                        handlePrevious()
                    }}>
                    Previous
                    </button>
                    <button className='p-2  bg-blue-600 rounded-md' type='submit'>
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Lastname