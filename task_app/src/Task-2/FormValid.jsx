import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { signUpSchema } from './Validation'

function FormValid() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [pass, setPass] = useState(true)
    const [cpass, setCPass] = useState(true)
    const [formData, setFormData] = useState({
        Number: '',
        Name: '',
        Password: '',
        Date: '',
        ConfirmPasswords: ''
    })
    
    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/task2/${id}`)
                .then((response) => response.json())
                .then((userData) => {
                    setFormData(userData);
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [id]);


    const { values, errors, touched, handleBlur, handleChange, handleSubmit,setValues } = useFormik({
        initialValues: formData,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            handleUsers(values)
            // action.resetForm()
        },

    });
    useEffect(() => {
        setValues(formData);
    }, [formData]);

    const handleUsers = (values) => {
        const url = id ? `http://localhost:3001/task2/${id}` : 'http://localhost:3001/task2';

        fetch(url, {
            method: id ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => {
                if (!response.ok) {
                    if (id) {
                        console.log('Failed to update user');
                    } else {
                        console.log('Failed to add user');
                    }
                }
                navigate('/')
                return response.json();

            })
            .catch((error) => {
                console.log(error)
            })
    }
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value })
    // }
    // const handleSubmiit = (e) => {
    //     e.preventDefault();
    //     handleUsers();
    //     navigate('/');
    // }
    return (
        <div>
            <div className={'max-w-md mx-auto w-full  bg-white absolute left-1/3  p-6 rounded-md shadow-md '}>
                <h2 className="text-2xl font-semibold mb-6">Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600">Number</label>
                        <input
                            type="text"
                            name="Number"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            value={values.Number}
                            onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={id ? true : false}
                        />
                        {errors.Number && touched.Number ? <p className=' text-red-600'>{errors.Number}</p> : null}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Name</label>
                        <input
                            type="text"
                            name="Name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            value={values.Name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.Name && touched.Name ? <p className=' text-red-600'>{errors.Name}</p> : null}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Password</label>
                        <input
                            type={pass ? "password" : "text"}
                            name="Password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            value={values.Password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.Password && touched.Password ? <p className=' text-red-600'>{errors.Password}</p> : null}
                        <button
                            className="btn top-50 end-100"
                            type="button"
                            onClick={() => setPass(!pass)}
                        >
                            {pass ? '😑' : '🙄'}
                        </button>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Confirm Password</label>
                        <input
                            type={cpass ? "password" : "text"}
                            name="ConfirmPasswords"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            value={values.ConfirmPasswords}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.ConfirmPasswords && touched.ConfirmPasswords ? <p className=' text-red-600'>{errors.ConfirmPasswords}</p> : null}
                        <button
                            className="btn top-50 end-100"
                            type="button"
                            onClick={() => setCPass(!cpass)}
                        >
                            {cpass ? '😑' : '🙄'}
                        </button>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Date Of Birth</label>
                        <input
                            type="date"
                            name="Date"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            value={values.Date}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.Date && touched.Date ? <p className=' text-red-600'>{errors.Date}</p> : null}
                    </div>
                    <div className="text-center flex justify-between w-full">
                        {
                            id ? <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                            >
                                Update Data
                            </button> : <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Submit
                            </button>
                        }
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/")
                            }}
                        >Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormValid