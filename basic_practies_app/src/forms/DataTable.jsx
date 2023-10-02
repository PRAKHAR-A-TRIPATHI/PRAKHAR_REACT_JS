// import React, { useState, useEffect } from 'react';

export default function DataTable({apiData,deleteData,openForm,editRowDataForm}) {
    // const [apiData, setApiData] = useState([]);
    // const [stop,setStop] = useState(true), 
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

   
    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/users');
//       if (response.ok) {
//         const jsonData = await response.json();
//         setApiData(jsonData);
//         setStop(false)
//       } else {
//         console.log('data not Found');
//       }
//     } catch (error) {
//       console.log('An error occurred:', error);
//     }
//   };

//   if(stop){
//       fetchData();
//   }

    return (
        <div>
            <div className="w-full">
                <div className="bg-pink-100 shadow-md rounded my-6">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    Id
                                </th>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    First Name
                                </th>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    Lsat Nmae
                                </th>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    PassWord
                                </th>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    Number
                                </th>
                                <th className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-600 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {apiData.map((val, index) => (
                                <tr key={index}>
                                    <td className="px-3 py-2 border-b border-pink-200 bg-white text-sm">
                                        {val.id}
                                    </td>
                                    <td className="px-3 py-2 border-b border-pink-200 bg-white text-sm">
                                        {val.Fname}
                                    </td>
                                    <td className="px-3 py-2 border-b border-pink-200 bg-white text-sm">
                                        {val.Lname}
                                    </td>
                                    <td className="px-3 py-2 border-b border-pink-200 bg-white text-sm">
                                        {val.email}
                                    </td>
                                    <td className="px-3 py-2 border-b border-pink-200 bg-white text-sm">
                                        {val.password}
                                    </td>
                                    <td className="px-3 py-2 border-b border-pink-200 bg-white text-sm">
                                        {val.number}
                                    </td>
                                    <td className="py-2 border-b border-pink-200 bg-white text-sm">
                                        <button className="rounded-lg bg-rose-600 p-2 m-2 text-white"
                                       onClick={()=>{deleteData(val.id)}}>Remove</button>
                                        <button className="rounded-lg bg-green-600 p-2 m-2 text-white"
                                       onClick={()=>{
                                       
                                        editRowDataForm(val.id)
                                       }}>Edit</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
