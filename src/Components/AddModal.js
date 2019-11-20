import React from 'react'
import { ButtonToolbar,Button } from 'react-bootstrap';
import MydModalWithGrid from './Modal'
import './Modal.css'
const AddModal = (props)=>{
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <ButtonToolbar>
        <Button className="addotherStocks" variant="primary" onClick={() => setModalShow(true)}>
          {props.children}
        </Button>
  
        <MydModalWithGrid
          show={modalShow}
          onHide={() => setModalShow(false)}
          addingShare={props.addingShare}
        />
      </ButtonToolbar>
    )}

export default AddModal