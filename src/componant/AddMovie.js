import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function AddMovie() {
    const [title,setTitle]=useState("")
    const [img,setImg]=useState("")
    const [description,setDescription]=useState("")
    const [rating,setRating]=useState(0)
    const [show, setShow] = useState(false)
    const newMovie = {title,img,description,rating}
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addmov=()=>{
      localStorage.setItem("newmovie",JSON.stringify(newMovie))
      handleClose()
       }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  autoFocus
                  onChange={(e)=>setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e)=>setDescription(e.target.value)}
                  
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  autoFocus
                  onChange={(e)=>setImg(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="number"
                  placeholder=""
                  autoFocus
                  onChange={(e)=>setRating(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addmov}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default AddMovie