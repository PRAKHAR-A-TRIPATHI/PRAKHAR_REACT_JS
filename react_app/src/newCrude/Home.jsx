import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import CompTable from './CompTable'
import Notification from './Notification';


function Home() {
    const [searchIterm, setSearchIterm] = useState("")
    const [apiSerch, setApiSerch] = useState([])
    const[show,setShow] = useState(false)
    const[id,setId] = useState(null)
   
    const handleClose=()=>{setShow(!show)}
    const handleSearch = () => {
        fetch(`http://localhost:3000/users?q=${searchIterm}`)
            // fetch(`http://localhost:3000/users`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data)
                setApiSerch(data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const apiDeleteFun = () => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
            .then((response) => {
                handleSearch();
                handleClose();
            })
            .catch((error) => console.log(error))
           
    }

    const handleNotification = (id) =>{
        handleClose();
        setId(id)
    }

    useEffect(() => {
        let a = setTimeout(() => {
            handleSearch()
        }, 200)
        return () => clearTimeout(a);
    }, [searchIterm])
    
    return (
        <div>
            <Notification show={show} handleClose={handleClose} apiDeleteFun={apiDeleteFun}/>
            <header className='bg-primary d-flex justify-content-between'>
                <h1 className='text-light'>Add Users App</h1>
                <div className='w-50 d-flex justify-content-end'>
                    <input
                        type="text"
                        placeholder='Search users'
                        className='w-50 m-2 rounded-2 border '
                        value={searchIterm}
                        onChange={(e) => setSearchIterm(e.target.value)}
                    />
                    <Link to="/AddUsers">
                        <button className='p-2 bg-warning rounded-2 btn text-light m-2'>
                            Add Users
                        </button>
                    </Link>
                </div>
            </header>
            <CompTable ArrayItem={apiSerch} apiDeleteFun={apiDeleteFun} handleNotification={handleNotification} />    
        </div>
    )
}

export default Home