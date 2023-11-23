import React, { useState } from 'react';

function Address({ isAddressForm, setIsAddressForm }) {
    let user = JSON.parse(localStorage.getItem('use-info'));
    const [isSameAddress, setIsSameAddress] = useState(false);
    const [formData, setFormData] = useState({
        CurrAddress: "",
        PermAddress: ""
    });
    const handleCheckboxChange = () => {
        setIsSameAddress(!isSameAddress);
        if (isSameAddress) {
            setFormData({ ...formData, PermAddress: '' })
        } else {
            setFormData({ ...formData, PermAddress: formData.CurrAddress })
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const setNewData = () => {
        const storedData = JSON.parse(localStorage.getItem('use-info'));
        const newData = { ...storedData, ...formData };
        const newDataString = JSON.stringify(newData);
        localStorage.setItem('use-info', newDataString);        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewData();
        setIsAddressForm(false)
    }
    // console.log(user)
    return (
        <div className={`max-w-md mx-auto w-full  bg-white absolute left-1/3  p-6 bottom-1 rounded-md shadow-md  ${isAddressForm ? 'block' : 'hidden'}`}>
            <h1 className="text-2xl font-semibold mb-4">Address Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-600 mb-1">
                        Current Address:
                    </label>
                    <textarea
                        type="text"
                        id="currentAddress"
                        name='CurrAddress'
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={formData.CurrAddress}
                        onChange={handleChange}
                    />
                </div>

                <label className="block text-sm font-medium text-gray-600">
                    Same as Current Address:
                    <input
                        type="checkbox"
                        checked={isSameAddress}
                        onChange={handleCheckboxChange}
                        className="ml-2"
                    />
                </label>
                <div className="mb-4">
                    <label htmlFor="permanentAddress" className="block text-sm font-medium text-gray-600 mb-1">
                        Permanent Address:
                    </label>
                    <textarea
                        type="text"
                        id="permanentAddress"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name='PermAddress'
                        value={formData.PermAddress}
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
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsAddressForm(false)
                        }} >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Address;
