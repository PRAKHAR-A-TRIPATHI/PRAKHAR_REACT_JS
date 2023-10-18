import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik } from 'formik'
import { signUpSchema } from './Validation'
import Input from './Input'
import { toast } from 'react-toastify'


function Formiks() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [pass, setPass] = useState(true)
    const [cpass, setCPass] = useState(true)
    const [stopApi, setStopApi] = useState(true)
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
                toast.success(`${id ? "update Sussefully" : "Add Sussefull"}`)
                navigate('/')
                setStopApi(true)
                return response.json();

            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>

            <div className={'max-w-md mx-auto w-full  bg-white absolute left-1/3  p-6 rounded-md shadow-md '}>
                <h2 className="text-2xl font-semibold mb-6">Form</h2>
                <Formik
                    enableReinitialize={true}
                    initialValues={formData}
                    validationSchema={signUpSchema}
                    onSubmit={(values) => {
                        if (stopApi) {
                            handleUsers(values);
                            setStopApi(false)
                        }
                    }}>

                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <Input formik={formik} name="Number" type="text" id={id} />
                            <Input type="text" name="Name" formik={formik} />
                            <Input type={pass ? 'password' : 'text'} name="Password" formik={formik} toggleType={() => setPass(!pass)} />
                            <Input type={cpass ? 'password' : 'text'} name="ConfirmPasswords" formik={formik} toggleType={() => setCPass(!cpass)} />
                            <Input type="date" name="Date" formik={formik} />
                            <div className="text-center flex justify-between w-full">
                                <button
                                    type="submit"
                                    className={` ${id ? "bg-green-500" : "bg-blue-500"} text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600`}
                                >
                                    {id ? " Update Data " : "Submit"}
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate("/")
                                    }}
                                >Cancel</button>
                            </div>
                        </form>)}
                </Formik>
            </div>
        </div>
    )
}

export default Formiks