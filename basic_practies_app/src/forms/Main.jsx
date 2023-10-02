import React, { useState, useEffect } from 'react'
import DataForm from './DataForm';
import DataTable from './DataTable';
import Notification from './Notification';

export default function Main() {
    // const [formData, setFormData] = useState([])
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
    const [isEditConfirmationOpen, setIsEditConfirmationOpen] = useState(false);
    const [rowDataToDelete, setRowDataToDelete] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [rowData, setRowData] = useState("");
    // const [editDataId, setEditDataId] = useState("");
    const [editBtn, setEditBtn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editID,setEditID] = useState("")
    // const [conf,setConf] = useState(false)
    // const [stop, setStop] = useState(true)
    // const [apiData, setApiData] = useState([]);
    // console.log(formData)
    // console.log(editDataId)

    useEffect(() => {
        apiDataFun();
        // fetchData();
    }, []);

    function apiDataFun() {
        fetch('http://localhost:3000/users')
            .then((response) => response.json())
            .then((data) => {
                setApiData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                console.log(error)
                setLoading(false);
            });
    }
    // console.log(rowData)
    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Error: {error.message}</h1>;
    }

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3000/users');
    //         if (response.ok) {
    //             const jsonData = await response.json();
    //             setApiData(jsonData);
    //             // setStop(false)
    //         } else {
    //             console.log('data not Found');
    //         }
    //     } catch (error) {
    //         console.log('An error occurred:', error);
    //     }
    // };

    // if (stop) {
    //     fetchData();
    // }


    const AddDataFun = (data) => {
        if (editBtn) {
            fetch(`http://localhost:3000/users/${rowData.id}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            // alert("update Sussesfully")
            apiDataFun();
        } else {
            // setFormData([...formData, data]);
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            apiDataFun();
        }
    }
    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    // console.log(formData)

    // function deleteData(id) {
    //         fetch(`http://localhost:3000/users/${id}`, {
    //             method: "DELETE"
    //         })
    //         apiDataFun();
    // }
    function deleteData(id) {
        setRowDataToDelete(id);
        setIsDeleteConfirmationOpen(true);
    }

    function confirmDelete() {
        setIsDeleteConfirmationOpen(false);
    
        fetch(`http://localhost:3000/users/${rowDataToDelete}`, {
            method: "DELETE"
        })
        apiDataFun();
    }
    
    function confirmEditData(){
        let updateData = apiData.find((val) => {
            return val.id === editID;
        })
        // setEditDataId(id) 
        setEditBtn(true)
        // console.log(updateData)
        setRowData(updateData);
        openForm()
        setIsEditConfirmationOpen(false);
    }

    const editRowDataForm = (id) => {
        setEditID(id);
        setIsEditConfirmationOpen(true);
    }
    
    // console.log(rowData)
    return (
        <div>
            <button className='rounded-lg bg-rose-600 p-2 m-2 text-white'
                onClick={() => {
                    openForm();
                    setEditBtn(false)
                }}>
                Add Recode
            </button>
            <DataForm isOpen={isFormOpen} onClose={closeForm} AddDataFun={AddDataFun} handlData={AddDataFun} rowData={rowData} editBtn={editBtn} />
            <DataTable apiData={apiData} deleteData={deleteData} openForm={openForm} editRowDataForm={editRowDataForm}  />
            <Notification show={isDeleteConfirmationOpen} confirmDelete={confirmDelete} setIsDeleteConfirmationOpen={setIsDeleteConfirmationOpen} rowDataToDelete={rowDataToDelete} work={"delete"} />
            <Notification show={isEditConfirmationOpen} confirmDelete={confirmEditData} setIsDeleteConfirmationOpen={setIsEditConfirmationOpen} rowDataToDelete={editID} work={"update"} />
        </div >
    )
}