import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Longin() {
    const [data, setData] = useState({
        name: "",
        email: "",
        tel: '',
        file:""
    })
    const login = () => {
        localStorage.setItem("use-info",JSON.stringify(data))
    }
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem("use-info")
        if (login) {
            navigate('/')
        }
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    return (
        <div>
            <form className="p-6 flex flex-col justify-center" onSubmit={login}>
                <div className="flex flex-col">
                    <label htmlFor="name" className="hidden">
                        Full Name
                    </label>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        required
                        onChange={handleInputChange} />
                </div>

                <div className="flex flex-col mt-2">
                    <label for="email" className="hidden">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        onChange={handleInputChange} />
                </div>

                <div className="flex flex-col mt-2">
                    <label for="tel" className="hidden">
                        Number
                    </label>
                    <input
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="Telephone Number"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        required
                        onChange={handleInputChange} />
                </div>
                <button
                    type="submit"
                    className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Longin