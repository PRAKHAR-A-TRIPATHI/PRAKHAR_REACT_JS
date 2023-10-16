import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from "react-icons/ai";

function CrudeForm({ showModal, handleCloseModal, addUserFun, updateButton, updateUserFun, updateUser }) {
    const [pass, setPass] = useState(true)
    const [data, setData] = useState({
        FirstName: "",
        LastName: "",
        Email: '',
        Passwords: "",
    })
    useEffect(() => {
        if (updateButton) {
            setData(updateUser)
        }
    }, [updateUser, updateButton])
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    function togglepass() {
        setPass(!pass)
    }
    const handleSubmiit = (e) => {
        e.preventDefault();
        if (updateButton) {
            updateUserFun(data)
        } else {
            addUserFun(data);
        }
        handleCloseModalFun()
    }
   function handleCloseModalFun(){
    handleCloseModal();
    setData({
        FirstName: "",
        LastName: "",
        Email: '',
        Passwords: "", 
    })
   }
    return (
        <div>
            <Modal show={showModal} onHide={handleCloseModalFun}>
                <Modal.Header >
                    <Modal.Title>Add User</Modal.Title>
                    <button className='btn'
                    onClick={handleCloseModalFun}>
                         <AiOutlineClose />
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmiit}>
                        <div>
                            <label htmlFor="FirstName" >FirstName</label>
                            <input type="text" className=' form-control '
                                name='FirstName'
                                id='FirstName'
                                value={data.FirstName}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label htmlFor="LastName" >LastName</label>
                            <input type="text" className=' form-control '
                                name='LastName'
                                id='LastName'
                                value={data.LastName}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label htmlFor="Email" >Email</label>
                            <input type="email" className=' form-control '
                                name='Email'
                                id='Email'
                                value={data.Email}
                                onChange={handleInputChange} required />
                        </div>
                        <div className='w-100'>
                            <label htmlFor="Passwords" >Passwords</label>
                            <input type={pass ? "password" : "text"}
                                className=' form-control '
                                name='Passwords'
                                id='Passwords'
                                value={data.Passwords}
                                onChange={handleInputChange} required />
                            <button
                                className="btn top-50 end-100"
                                type="button"
                                onClick={togglepass}
                            >
                                {pass ? '😑' : '🙄'}
                            </button>
                        </div>
                        <div className=' d-flex justify-content-between pt-2'>
                            <button type='Submit' className='btn bg-primary text-light  '>{updateButton ? "Update" : "Submit"}</button>
                            <button className='bg-info btn text-light' onClick={(e) => {
                                e.preventDefault();
                                handleCloseModalFun();
                            }}>Close</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CrudeForm