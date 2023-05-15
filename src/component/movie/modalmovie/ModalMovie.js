import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';
import './ModalMovie.css';
// import axios from 'axios';

function ModalMovie(props) {
    const path = `https://image.tmdb.org/t/p/w500`;
    const item = props.setClickedMovie;
  
    return (
      <>
        <Modal show={props.showFlag} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{item.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={path + item.poster_path} width="100%" />
            <Form >
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Add Comment here</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="comments"
                  value={props.comments}
                  onChange={(e) => props.setComments(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.addtoFavorite}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default ModalMovie;