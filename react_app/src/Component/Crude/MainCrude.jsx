import React, { useState, useMemo, useEffect } from 'react'
import CrudeTable from './CrudeTable'
import CrudeForm from './CrudeForm'

function MainCrude() {
    const [showModal, setShowModal] = useState(false);
    const [apiData, setApiData] = useState([])
    const [searchIterm, setSearchIterm] = useState("")
    const [selectedUser, setSelectedUser] = useState(null);
    const [updateButton, setUpdateButton] = useState(false);
    // const [serchApi,setSerchApi] = useState([])
    useEffect(() => {
        apiDataFetchFun()
    }, [])

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const apiDataFetchFun = () => {
        fetch("http://localhost:3000/users")
            .then((response) => response.json())
            .then((respnse) => setApiData(respnse))
    }

    const addUserFun = (data) => {
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    console.log('Failed to add medicine');
                }
                return response.json();
            })
            .catch((error) => {
                console.log(error)
            })
        apiDataFetchFun()
    }

    const apiDeleteFun = (id) => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
            .then(() => { })
            .catch((error) => console.log(error))
        apiDataFetchFun()
    }

    // const handleSearch = () => {
    //     console.log("hi")
    //     fetch(`http://localhost:3000/users?q=${searchIterm}`)
    //     // fetch(`http://localhost:3000/users`)
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //       })
    //       .then((data) => {
    //         console.log(data)
    //         setSerchApi(data)
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching data:', error);
    //       });
    //   };
    //   useEffect(()=>{
    //    let a = setTimeout(()=>{
    //         handleSearch()
    //     },500)
    //     return()=> clearTimeout(a);
    //   },[searchIterm])

    const filteredItems = apiData.filter((item) =>
        item.FirstName.toLowerCase().includes(searchIterm.toLowerCase())
    );

    const UpdateUserData = (user) => {
        setSelectedUser(user);
        handleOpenModal()
    };

    const updateUser = (updatedUser) => {
        fetch(`http://localhost:3000/users/${selectedUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then((response) => {
                if (!response.ok) {
                    console.log('Failed to update user');
                } else {
                    apiDataFetchFun();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>
            <header className=' bg-primary d-flex justify-content-between  '>
                <h1 className='text-light'>Add Users App</h1>
                <div className='w-50 d-flex justify-content-end '>
                    <input type="text" placeholder='Serch users' className='p-1 w-50 m-2 rounded-2 '
                        onChange={(e) => setSearchIterm(e.target.value)} />
                    <button className='p-1 bg-warning rounded-2 btn text-light m-2' onClick={() => {
                        handleOpenModal();
                        setUpdateButton(false);
                    }} >Add Users</button>
                </div>
            </header>
            <CrudeForm showModal={showModal} handleCloseModal={handleCloseModal} addUserFun={addUserFun} updateUser={selectedUser} updateUserFun={updateUser} updateButton={updateButton} />
            <CrudeTable ArrayItem={filteredItems} apiDeleteFun={apiDeleteFun} UpdateUserData={UpdateUserData} setUpdateButton={setUpdateButton} />
        </div>
    )
}
export default MainCrude