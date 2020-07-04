import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Edwin from '../../images/Edwin.jpg';
import './style.css';

const WonModal = (props) => {
    
    return (
    <>
      <Modal className="wonModal" show={props.status}>
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title id="contained-modal-title-vcenter">
            <img src={Edwin} alt="OH NO!"/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center text-center">
          <h3 className="wonModalText">Congratulations! <br/> You won!!! </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button className="wonModalClose" onClick={props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}


export default WonModal;
