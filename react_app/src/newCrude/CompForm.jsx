import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function CompForm() {
    const [pass, setPass] = useState(true)
    const [data, setData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        number: '',
        Passwords: '',
    })
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/users/${id}`)
                .then((response) => response.json())
                .then((userData) => {
                    setData(userData);
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [id]);

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
    }

    const updateUser = (updatedUser) => {
        fetch(`http://localhost:3000/users/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then((response) => {
                if (!response.ok) {
                    console.log('Failed to update user');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    function togglepass() {
        setPass(!pass)
    }

    const handleSubmiit = (e) => {
        e.preventDefault();
        if (id) {
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

    return (
        <div className=' w-100 d-flex justify-content-center align-items-center ' >
            <div className='w-50 bg-primary p-4 mt-4 rounded-4'>
                <h1 className='text-light'>Add Users Form</h1>
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

                        <button type='Submit' className='btn bg-warning text-light  '>{id ? "Update" : "Submit"}</button>


                        <button className='bg-info btn text-light' onClick={handleClose}>Close</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompForm