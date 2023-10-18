import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TableNew from './TableNew'
import Confirm from './Confirm'
import { toast } from 'react-toastify'


function Home() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [id, setId] = useState(null)
    const [show, setShow] = useState(false);
    const [stopApi, setStopApi] = useState(true)
    useEffect(() => {
        fetchFun()
    }, [])
    const fetchFun = () => {
        fetch(`http://localhost:3001/task2`)
            .then((response) => response.json())
            .then((userData) => {
                setData(userData);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }
    // console.log(data)
    const handleDelet = () => {
        if (stopApi) {
            fetch(`http://localhost:3001/task2/${id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then(() => {
                    setShow(false)

                    toast.warn('Delete Sussefully !', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setStopApi(true)
                })
                .catch((error) => {
                    console.error('Error deleting user:', error);
                });
            setStopApi(false)
            fetchFun()
        }


    }
    return (
        <div>
            <div className='flex justify-center'>
                <button className='bg-blue-500 p-2 rounded-xl text-2xl m-2' onClick={() => navigate("/AddUsers")}>
                    Add Users
                </button>
            </div>
            <TableNew data={data} setId={setId} setShow={setShow} />
            <Confirm show={show} handleDelet={handleDelet} setShow={setShow} />
        </div>
    )
}

export default Home