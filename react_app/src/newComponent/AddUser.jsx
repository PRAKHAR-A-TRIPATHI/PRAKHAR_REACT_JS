import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AddUser({ addUserFun, updateButton, selectedUser, updateUser }) {
    const [pass, setPass] = useState(true)
    const [data, setData] = useState({
        FirstName: "",
        LastName: "",
        Email: '',
        number: "",
        Passwords: "",
    })
    useEffect(() => {
        if (updateButton) {
            setData(selectedUser)
        }
    }, [selectedUser, updateButton])
    const navigate = useNavigate();
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
            updateUser(data)
        } else {
            addUserFun(data);
        }
        navigate('/');
    }
    const handleClose = () => {
        setData({
            FirstName: "",
            LastName: "",
            Email: '',
            number: "",
            Passwords: "",
        });
        navigate("/")
    }
    // console.log(data)
    return (
        <div className=' w-100 d-flex justify-content-center align-items-center ' >
            <div className='w-50 bg-primary p-4'>
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
                    <div>
                        <label htmlFor="number" >Number</label>
                        <input type="number" className=' form-control '
                            name='number'
                            id='number'
                            value={data.number}
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

                        <button type='Submit' className='btn bg-warning text-light  '>{updateButton ? "Update" : "Submit"}</button>


                        <button className='bg-info btn text-light' onClick={handleClose}>Close</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser