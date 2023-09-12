import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddMedicine() {
    const [show, setShow] = useState(false);

    const handleClose = () =>{
        setShow(false);
        // console.log("hello world")
    };
    const handleShow = () => setShow(true);

    function addFunction(){
        console.log("hello")
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Medicine Form</Modal.Title>
                </Modal.Header>
               
                    <Form onSubmit={addFunction} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Medicine Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Medicine"
                                autoFocus
                            />
                            <Form.Label>Rack</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Form.Label>Batch</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Batch"
                                disabled
                            />
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3 flex-row">
                                    <Form.Check // prettier-ignore
                                        type={type}
                                        id={`default-${type}`}
                                        label={`default ${type}`}
                                    />
                                    <Form.Check // prettier-ignore
                                        type={type}
                                        id={`default-${type}`}
                                        label={`default ${type}`}
                                    />

                                </div>
                            ))}


                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                        </Form.Group>

                    </Form>
   
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMedicine;