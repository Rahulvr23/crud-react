import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Ediit({data,num}) {
    console.log(data,num);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
  return (
    <div>
         <Button variant="" onClick={handleShow}>
         <i class="fa-solid fa-pen-nib"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><b>Edit Text</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input value={data} type="text" className='form-control' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
  </div>
  )
}

export default Ediit