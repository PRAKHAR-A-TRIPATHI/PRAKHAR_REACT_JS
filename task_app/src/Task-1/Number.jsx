import React, { useState } from 'react'

function Number({ handleChange, handlePrevious, handleSubmiit, formData }) {
    
    const handleData = (e) => {
        e.preventDefault();
        handleSubmiit();
    }
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md h-44 m-10">
            <form onSubmit={handleData}>
                <div>
                    <label htmlFor="Number" className='text-4xl text-black m-2'>Number</label> <br />
                    <input type="number" className=' form-control w-2/5 p-2  m-2 rounded-md'
                        name='Number'
                        id='Number'
                        value={formData.Number}
                        onChange={handleChange}
                        required />
                </div>
                <div className='flex justify-between m-2'>
                    <button className='p-2  bg-blue-600 rounded-md' onClick={(e) => {
                        e.preventDefault();
                        handlePrevious()
                    }}>
                        Previous
                    </button>
                    <button className='p-2  bg-blue-600 rounded-md' type='submit' >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Number