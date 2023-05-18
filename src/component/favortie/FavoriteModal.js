import axios from "axios";
// import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function FavoriteModal(props) {
    const item = props.clickedMovie;

    const UpdateMoiveHandler = async (e) => {
        e.preventDefault();

        const movieId = item.id;
        const serverURL = `${process.env.REACT_APP_serverURL}/update/${movieId}`;
        

        const obj = {
            title: e.target.title.value,
            release_date: e.target.release_date.value,
            overview: e.target.overview.value,
            comments: e.target.comments.value
        }

        const result = await axios.put(serverURL, obj)
        console.log('updated', result.data);
        props.handleClose();
        props.refreshUpdatedData(result.data);
    }
    return (<>
        <Modal show={props.showFlag} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{item.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={UpdateMoiveHandler}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="title"
                            autoFocus
                            defaultValue={item.title}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>release date</Form.Label>
                        <Form.Control
                            type="text"
                            name="release_date"
                            placeholder="Release date Enter As YYYY-MM-DD"
                            autoFocus
                            defaultValue={item.release_date}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>overview</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="overview"
                            rows={5}
                            placeholder="overview"
                            autoFocus
                            defaultValue={item.overview}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>comments</Form.Label>
                        <Form.Control as="textarea"
                            name="comments"
                            rows={5}
                            placeholder="comments"
                            autoFocus
                            defaultValue={item.comments}
                        />
                    </Form.Group>
                    <Button type="submit" variant="success" >Submit</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    </>)
}
export default FavoriteModal