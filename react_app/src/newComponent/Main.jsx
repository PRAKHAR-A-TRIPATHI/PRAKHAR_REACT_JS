import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddUser from './AddUser';


function Main() {
    const [apiData, setApiData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [updateButton, setUpdateButton] = useState(false);
    // console.log(selectedUser)
    const apiDataFetchFun = () => {
        fetch("http://localhost:3000/users")
            .then((response) => response.json())
            .then((respnse) => setApiData(respnse))
    }
    useEffect(() => {
        apiDataFetchFun()
    }, [])
    const UpdateUserData = (user) => {
        setSelectedUser(user);
    };
    const apiDeleteFun = (id) => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
            .then(() => { })
            .catch((error) => console.log(error))
        apiDataFetchFun()   
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
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home apiData={apiData} apiDeleteFun={apiDeleteFun} UpdateUserData={UpdateUserData} setUpdateButton={setUpdateButton} />} />
                    <Route
                        path="AddUsers/:id"
                        element={<AddUser />} />
                    <Route
                        path="AddUsers"
                        element={<AddUser addUserFun={addUserFun} selectedUser={selectedUser} updateButton={updateButton} updateUser={updateUser} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main