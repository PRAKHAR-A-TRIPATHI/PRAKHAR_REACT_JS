import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import AddForm from './AddForm';
import TableComponent from './TableComponent';
import AddREcodeForm from './AddREcodeForm';
import Notifications from './Notifications';
import AddRecodeOut from './AddRecodeOut';

export default function Main() {
    // form open m
    const [showModal, setShowModal] = useState(false);
    const [showRecordModal, setShowRecordModal] = useState(false);
    const [showRecorOutdModal, setShowRecorOutdModal] = useState(false);
    const [RemovMedicineId, setRemovMedicineId] = useState("");
    const [apiData, setApiData] = useState([]);
    const [apiRecodeData, setApiRecodeData] = useState([]);
    const [apiRecodeOutData, setApiRecodeOutData] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showRemoveConfirmation, setRomoveShowConfirmation] = useState(false);
 

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleOpenRecordModal = () => setShowRecordModal(true);
    const handleCloseRecordModal = () => setShowRecordModal(false);

    const handleOpenRecorOutdModal = () => setShowRecorOutdModal(true);
    const handleCloseRecordOutModal = () => setShowRecorOutdModal(false);

    const showConfirmationHandler = () => setShowConfirmation(true);
    const hideConfirmationHandler = () => setShowConfirmation(false);

    const showRemoveConfirmationHandler = () => setRomoveShowConfirmation(true);
    const hideRemoveConfirmationHandler = () => setRomoveShowConfirmation(false);

    useEffect(() => {
        apiDataFun();
    }, [])

    const addMedicineFun = (medicineData, api) => {
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(medicineData),
        })
            .then((response) => {
                if (!response.ok) {
                    console.log('Failed to add medicine');
                }
                return response.json();
            })
            .then((addedMedicine) => {
                return addedMedicine;
            })
            .catch((error) => {
                console.error('Error adding medicine:', error);
            });
        apiDataFun();
    };

    // const apiDataFun = () => {
    //     fetch("http://localhost:3001/Medicine")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // console.log(data)
    //             setApiData(data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //     fetch("http://localhost:3001/AddMedicineRecode")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // console.log(data)
    //             setApiRecodeData(data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //     fetch("http://localhost:3001/AddMedicineOutRecode")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // console.log(data)
    //             setApiRecodeOutData(data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    const apiDataFun = () => {
        Promise.all([
            fetch("http://localhost:3001/Medicine").then((response) => response.json()),
            fetch("http://localhost:3001/AddMedicineRecode").then((response) => response.json()),
            fetch("http://localhost:3001/AddMedicineOutRecode").then((response) => response.json()),
        ])
            .then(([medicineData, recodeData, recodeOutData]) => {
                setApiData(medicineData);
                setApiRecodeData(recodeData);
                setApiRecodeOutData(recodeOutData);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateApiData= () => {
            fetch(`http://localhost:3001/Medicine/${rowData.id}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
    }

    const deleteMedicine = (medicineId) => {
        showRemoveConfirmationHandler()
        setRemovMedicineId(medicineId)
    };
    const confirmDelete = () => {
        fetch(`http://localhost:3001/Medicine/${RemovMedicineId}`, {
            method: "DELETE"
        }).then((response) => {
        }).catch((error) => {
            console.log(error)
        })
        apiDataFun();
    }
    return (
        <div>
            <div className=' d-flex justify-content-center '>
                <Button variant="primary" className='m-1' onClick={handleOpenModal}>
                    Add Medicine
                </Button>
                <Button variant="primary" className='m-1' onClick={handleOpenRecordModal}>
                    Add Recode Medicine
                </Button>
                <Button variant="primary" className='m-1' onClick={handleOpenRecorOutdModal}>
                    Add Recode Out Medicine
                </Button>
            </div>
            <div>
                <AddForm showModal={showModal} handleCloseModal={handleCloseModal} addMedicineFun={addMedicineFun} />
                <TableComponent apiData={apiData} deleteMedicine={deleteMedicine} text={"ADD MEDICINE TABLE"} />
                <Notifications showConfirmation={showRemoveConfirmation} hideConfirmationHandler={hideRemoveConfirmationHandler} data={"Are You Soure to Remove Medicine "} confirmDelete={confirmDelete} />

                <AddREcodeForm showRecordModal={showRecordModal} handleCloseRecordModal={handleCloseRecordModal} apiData={apiData} showConfirmationHandler={showConfirmationHandler} addMedicineFun={addMedicineFun} />
                <TableComponent apiData={apiRecodeData} showActions={false} text={"ADD RECODE TABLE"} />

                <AddRecodeOut showRecorOutdModal={showRecorOutdModal} handleCloseRecordOutModal={handleCloseRecordOutModal} apiRecodeData={apiRecodeData} addMedicineFun={addMedicineFun} showConfirmationHandler={showConfirmationHandler} />
                <TableComponent apiData={apiRecodeOutData} showActions={false} text={"ADD RECODE Out TABLE"} />
                <Notifications showConfirmation={showConfirmation} hideConfirmationHandler={hideConfirmationHandler} data={"this Medicine not avalible in Store"} />
            </div>
        </div>
    )
}
