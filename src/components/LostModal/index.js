import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Seal from '../../images/Seal.jpg';
import './style.css';

const LostModal = (props) => {
    
    return (
    <>
      <Modal className="modal" show={props.status}>
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title id="contained-modal-title-vcenter">
            <img src={Seal} alt="OH NO!"/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center text-center">
          <h3 className="modalText">Uh oh! <br/> You already clicked that card! <br/> Please try again. </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modalClose" onClick={props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}


export default LostModal;
