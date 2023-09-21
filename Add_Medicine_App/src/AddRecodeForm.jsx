import React, { useState } from 'react'


export default function AddRecodeForm({ isOpen, onClose,addMedicineData }) {
    const [medicineName, setMedicineName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [serch, setserch] = useState([])
    // console.log(serch)
    const handleSubmit = (e) => {
        e.preventDefault();
     
        setMedicineName('');
        setQuantity('');
        onClose();
    };

    return (
        <div>
            <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
                <div className="bg-white p-4 rounded shadow-md relative w-96">
                    <h1 className='font-black text-2xl'>Add Medicine Form</h1>
                    <button className="absolute top-6 right-4 text-gray-600" onClick={onClose}>
                        <i className="fa-solid fa-xmark fa-2xl"></i>
                    </button>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Medicine Name</label>
                            <input
                                type="text"
                                value={medicineName}
                                onChange={(e) => {
                                    setMedicineName(e.target.value);
                                    let input = e.target.value.toLowerCase();
                                    let a = addMedicineData.filter(val => val.medicine.toLowerCase().includes(input));
                                    setserch(a)
                                    console.log(a)
                                }}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your Medicine"
                                required
                            />
                            {
                                serch.map((val,index)=>{
                                   return <ul key={index}>
                                    <li>{val}</li>
                                   </ul>
                                })
                            }
                        </div>
                        <div className='mb-4'>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter quantity"
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Select Slot</label>
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
