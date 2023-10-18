import React, { useEffect, useState } from 'react'

function Updateform({ isOpen, onClose }) {
    let user = JSON.parse(localStorage.getItem('use-info'));
    const [formData, setFormData] = useState({
        name: '',
        Mname: '',
        Lname: '',
        email: '',
        gender: '',
        tel: '',
        dob:""
    });
    useEffect(() => {
        setFormData({ ...user })
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    // console.log(formData)
    function setNewData() {
        const newData = formData
        const newDataString = JSON.stringify(newData);
        localStorage.setItem('use-info', newDataString);
        return newData;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewData()
        onClose();
    }
    return (
        <div>
            <div className={`max-w-md mx-auto w-full  bg-white absolute left-1/3  p-6 top-20 rounded-md shadow-md  ${isOpen ? 'block' : 'hidden'}`}>
                <h2 className="text-2xl font-semibold mb-6">Form</h2>
                <button className="absolute top-6  right-4 text-gray-600" onClick={() => {
                    onClose();
                }}><i className="fa-solid fa-xmark fa-2xl"></i></button>
                <form onSubmit={handleSubmit} className=' w-full'>
                    <div className='flex justify-between'>
                        <div className="mb-4  m-2 w-2/4">
                            <label htmlFor="name" className="block text-gray-600">First Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4  m-2 w-2/4">
                            <label htmlFor="name" className="block text-gray-600">Middle Name</label>
                            <input
                                type="text"
                                id="Mname"
                                name="Mname"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                value={formData.Mname}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="mb-4 m-2">
                            <label htmlFor="name" className="block text-gray-600">Last Name</label>
                            <input
                                type="text"
                                id="Lname"
                                name="Lname"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                value={formData.Lname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 m-2">
                            <label htmlFor="email" className="block text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                value={formData.email}
                                onChange={handleChange}
                            />

                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="mb-4 m-2">
                            <label htmlFor="gender">Gender</label> <br />
                            <select name="gender" id="" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                onChange={handleChange} value={formData.gender}>
                                <option value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">female</option>
                            </select>
                        </div>
                        <div className="mb-4 m-2">
                            <label htmlFor="tel" className="block text-gray-600">Number</label>
                            <input
                            disabled
                                type="number"
                                id="tel"
                                name="tel"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                value={formData.tel}
                                onChange={handleChange}
                            />

                        </div>
                    </div>

                    <div className="mb-4 m-2">
                        <label htmlFor="tel" className="block text-gray-600">Date Of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            value={formData.dob}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                        >
                            Update Data
                        </button> 
                         <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                       onClick={onClose} >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Updateform