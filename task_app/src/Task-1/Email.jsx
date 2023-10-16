import React, { useState } from 'react'

function Email({ handleNext, handleChange, handlePrevious,formData}) {
    const handleData = (e) => {
        e.preventDefault();
        handleNext();
    }
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md h-44 m-10">
            <form onSubmit={handleData}>
                <div>
                    <label htmlFor="Email" className='text-4xl text-black m-2'>Email</label> <br />
                    <input type="email" className=' form-control w-2/5 p-2  m-2 rounded-md'
                        name='Email'
                        id='Email'
                        value={formData.Email}
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
                    <button className='p-2  bg-blue-600 rounded-md' type='submit'>
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Email