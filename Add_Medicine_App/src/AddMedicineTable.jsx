import React from 'react'

export default function AddMedicineTable({ addMedicineData,removeData,setEditBtn,openPopup,UpdateMedicine }) {
    
    return (
        <div>
            <div className="w-full">
                <div className="bg-pink-100 shadow-md rounded my-6">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    Medicine Name
                                </th>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    Rack
                                </th>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    Batch Number
                                </th>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    Quntity
                                </th>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    Explain Date
                                </th>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addMedicineData.map((val, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="px-5 py-5 border-b border-pink-200 bg-white text-sm">
                                                {val.medicine}
                                            </td>
                                            <td className="px-5 py-5 border-b border-pink-200 bg-white text-sm">
                                                {val.rack}
                                            </td>
                                            <td className="px-5 py-5 border-b border-pink-200 bg-white text-sm">
                                                {val.batch}
                                            </td>
                                            <td className="px-5 py-5 border-b border-pink-200 bg-white text-sm">
                                                {val.quntity}
                                            </td>
                                            <td className="px-5 py-5 border-b border-pink-200 bg-white text-sm">
                                                {val.expiry}
                                            </td>
                                            <td className="px-5 py-5 border-b border-pink-200 bg-white text-sm">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                                onClick={()=>{
                                                    setEditBtn(true);
                                                    openPopup()
                                                    UpdateMedicine(index);
                                                }}>
                                                    Edit
                                                </button>
                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={()=>removeData(index)}>
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
