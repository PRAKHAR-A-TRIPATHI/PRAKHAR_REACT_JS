import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function AddForm({ showModal, handleCloseModal, addMedicineFun }) {
  const [formData, setFormData] = useState({
    medicine: '',
    batchNum: '',
    quntity: '',
    rack: '',
    expireDate: ''
  });
  const [batchs, setBatch] = useState("");

  const racks = [
    { id: 1, num: 1 },
    { id: 2, num: 2 },
    { id: 3, num: 3 },
    { id: 4, num: 4 },
    { id: 5, num: 5 },
    { id: 6, num: 6 },
    { id: 7, num: 7 },
    { id: 8, num: 8 },
    { id: 9, num: 9 },
    { id: 10, num: 10 },
  ];
  const batch = [
    { rack_id: 1, batch: "A1" },
    { rack_id: 2, batch: "A2" },
    { rack_id: 3, batch: "A3" },
    { rack_id: 4, batch: "A4" },
    { rack_id: 5, batch: "A5" },
    { rack_id: 6, batch: "A6" },
    { rack_id: 7, batch: "A7" },
    { rack_id: 8, batch: "A8" },
    { rack_id: 9, batch: "A9" },
    { rack_id: 10, batch: "A10" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicineFun(formData,'http://localhost:3001/Medicine');
    handleCloseModal()
  };
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Medicine Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group pt-2">
                <label htmlFor="medicine">Medicine</label>
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
                <label htmlFor="rack">Rack</label>
                <select
                  className="form-control"
                  id="rack"
                  name="rack"
                  value={formData.rack}
                  onChange={handleInputChange}
                  onClick={() => {
                    batch.map((val) => {
                      if (val.rack_id == formData.rack) {
                        setBatch(val.batch)
                        formData.batchNum = val.batch;
                      }
                    })
                  }}
                >
                  <option value="">Choose...</option>
                  {
                    racks.map((element, index) => {
                      return <option key={index} value={element.id}>{element.id}</option>;
                    })
                  }
                </select>
              </div>
              <div className="form-group pt-2">
                <label htmlFor="batchNum">Batch Number</label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="batchNum"
                  name="batchNum"
                  value={batchs}
                  onChange={handleInputChange}
                />
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

            <div className="form-group pt-2">
              <label htmlFor="expireDate">Expire Date</label>
              <input
                type="date"
                className="form-control"
                id="expireDate"
                name="expireDate"
                value={formData.expireDate}
                onChange={handleInputChange}
              />
            </div>
            <div className=' d-flex justify-content-between pt-2'>
              {/* <button type='Submit'></button> */}
              <Button variant="primary" className=' btn btn-info' type='submit' >
                Add Medicine
              </Button>
              <Button variant="secondary" className=' btn btn-warning' onClick={handleCloseModal}>
                Close
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
