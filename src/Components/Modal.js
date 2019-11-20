import React from 'react'
import { Modal,Container,Col,Row,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Click the Stock to add to your portfolio
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col xs={6} md={4}>
               <span onClick = {props.addingShare.bind(null,4)}>Apple</span>
              </Col>
              <Col xs={6} md={4}>
                <code>APPL</code>
              </Col>
              <Col xs={6} md={4}>
                <code>10 $</code>
              </Col>
            </Row>
  
            <Row className="show-grid">
              <Col xs={6} md={4}>
              <span onClick = {props.addingShare.bind(null,5)}>Genesys</span>
              </Col>
              <Col xs={6} md={4}>
                <code>GEN</code>
              </Col>
              <Col xs={6} md={4}>
                <code>15$</code>
              </Col>
              <Col xs={6} md={4}>
              <span onClick = {props.addingShare.bind(null,6)}>Alphabet</span>
              </Col>
              <Col xs={6} md={4}>
                <code>Alp</code>
              </Col>
              <Col xs={6} md={4}>
                <code>15$</code>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export default MydModalWithGrid;