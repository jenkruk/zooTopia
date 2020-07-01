import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import UIfx from "uifx";
import loseSound from "../../sounds/gong.mp3"

// https://www.pluralsight.com/guides/working-with-bootstraps-modals-react 



const LostModal = () => {

    const lose = new UIfx(
      loseSound,
      {
        volume: 0.4,
        throttleMS: 100
      }
    )

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
      setIsOpen(true);
      lose.play();
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    
    return (
    <>
    <button onClick={showModal}>Display Modal</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}


export default LostModal;
