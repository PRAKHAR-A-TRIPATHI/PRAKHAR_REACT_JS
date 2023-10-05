import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function AddRecodeOut({showRecorOutdModal,handleCloseRecordOutModal,apiRecodeData,addMedicineFun,showConfirmationHandler}) {
    const [formData, setFormData] = useState({
        medicine: '',
        rack: '',
        quntity: '',
    });
    // console.log(apiData)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const medicineCheak = () => {
        return apiRecodeData.some((val) => val.medicine.toLowerCase().trim() === formData.medicine.toLowerCase().trim());
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (medicineCheak()) {
            addMedicineFun(formData,'http://localhost:3001/AddMedicineOutRecode')
            handleCloseRecordOutModal();
        } else {
            showConfirmationHandler()
        }
    };
    return (
        <div>
            <div>
                <Modal show={showRecorOutdModal} onHide={handleCloseRecordOutModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Medicine Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group pt-2">
                                    <label htmlFor="medicine">Serch Medicine</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="medicine"
                                        name="medicine"
                                        value={formData.medicine}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group pt-2">
                                    <label htmlFor="rack">Select Recode</label>
                                    <select
                                        className="form-control"
                                        id="rack"
                                        name="rack"
                                        value={formData.rack}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Choose...</option>
                                        <option value="1">1...</option>
                                        <option value="2">2...</option>
                                        <option value="3">3...</option>
                                        <option value="4">4...</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group pt-2">
                                <label htmlFor="quntity">Quntity</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quntity"
                                    name="quntity"
                                    value={formData.quntity}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className=' d-flex justify-content-between pt-2'>
                                {/* <button type='Submit'></button> */}
                                <Button variant="primary" className=' btn btn-info' type='submit' >
                                    Add Recode Out Medicine
                                </Button>
                                <Button variant="secondary" className=' btn btn-warning' onClick={handleCloseRecordOutModal}>
                                    Close
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}
