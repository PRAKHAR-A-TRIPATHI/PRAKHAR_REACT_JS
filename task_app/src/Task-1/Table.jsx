import React, { useEffect, useState } from 'react';
import Confirmation from './Confirmation';
import { useNavigate } from 'react-router-dom';

function Table() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [id, setId] = useState(null);
    const navigate = useNavigate();
    const fetchFun = () => {
        fetch(`http://localhost:3001/users`)
            .then((response) => response.json())
            .then((userData) => {
                setData(userData);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }
    useEffect(() => {
        fetchFun()
    }, []);

    const handleDelet = () => {
        fetch(`http://localhost:3001/users/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then(() => {
                setShow(false)
            })
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
        fetchFun()
    }

    return (
        <div>
            <div>
                <table className="border-separate rounded-sm border border-slate-500 bg-blue-200 w-full">
                    <thead>
                        <tr>
                            {data.length > 0 &&
                                Object.keys(data[0]).map((key) => (
                                    <th className='border border-slate-600' key={key}>{key}</th>
                                ))}
                            <th className='border border-slate-600'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, index) => (
                            <tr key={index}>
                                {Object.keys(data[0]).map((key) => (
                                    <td className='border border-slate-700' key={key}>{val[key]}</td>
                                ))}
                                <td className='border border-slate-700'>
                                    <div>
                                        <button
                                            className='btn bg-red-400 p-1 rounded-md m-1 text-light'
                                            onClick={() => {
                                                setId(val.id);
                                                setShow(true);
                                            }}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className='btn bg-green-400 p-1 m-1 rounded-md text-light'
                                            onClick={() => navigate(`/form/${val.id}`)}
                                        >
                                            Update
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Confirmation show={show} handleDelet={handleDelet} setShow={setShow} />
        </div>
    );
}

export default Table;