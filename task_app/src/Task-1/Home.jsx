import React from 'react'
import { useNavigate } from 'react-router-dom'
import Table from './Table';


function Home() {
    const navigate = useNavigate();


    return (
        <div>
            <div className='flex justify-center'>
                <button className='bg-blue-500 p-2 rounded-xl text-2xl m-2' onClick={()=>navigate("/form")}>
                    Add Users
                </button>
            </div>
            <Table/>
        </div>
    )
}

export default Home