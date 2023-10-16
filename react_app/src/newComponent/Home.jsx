import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from './Table';
import AddUser from './AddUser';

function Home({ apiData,apiDeleteFun,UpdateUserData,setUpdateButton }) {
    const [searchIterm, setSearchIterm] = useState("")
    const[apiSerch,setApiSerch] =useState([])
    
    // const filteredItems = apiData.filter((item) =>
    //     item.FirstName.toLowerCase().includes(searchIterm.toLowerCase()) ||
    //     item.LastName.toLowerCase().includes(searchIterm.toLowerCase())
    // );
    useEffect(()=>{
        handleSearch()
    },[apiData])
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
      useEffect(()=>{
       let a = setTimeout(()=>{
            handleSearch()
        },300)
        return()=> clearTimeout(a);
      },[searchIterm])

    return (
        <div>
            <header className='bg-primary d-flex justify-content-between'>
                <h1 className='text-light'>Add Users App</h1>
                <div className='w-50 d-flex justify-content-end'>
                    <input
                        type="text"
                        placeholder='Search users'
                        className='p-1 w-50 m-2 rounded-2'
                        onChange={(e) => setSearchIterm(e.target.value)}
                    />
                    <Link to="/AddUsers">
                        <button className='p-1 bg-warning rounded-2 btn text-light m-2'>
                            Add Users
                        </button>
                    </Link>
                </div>
            </header>
            <Table    />
        </div>
    );
}

export default Home;
