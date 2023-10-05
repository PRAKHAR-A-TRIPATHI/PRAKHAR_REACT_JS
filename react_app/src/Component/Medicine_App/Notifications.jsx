import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Notifications({showConfirmation,hideConfirmationHandler,data,confirmDelete}) {
    
   
    const handleConfirmation = () => {
        hideConfirmationHandler();
        confirmDelete()
      };
    
    return (
        <div>
            <Modal show={showConfirmation} onHide={hideConfirmationHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>{data}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideConfirmationHandler}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleConfirmation}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
