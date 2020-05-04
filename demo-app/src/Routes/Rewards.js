import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import UseFetch from '../hooks/useFetch';
import { Row, Col, Button, Container, Card,ListGroup,ListGroupItem,Jumbotron,Form,Modal } from "react-bootstrap";
const Rewards = () => {
const [hi5,sethi5] = useState(null);
const [data1,setData1] = useState([]);
const [isData,setIsData] = useState(false);
const [validated, setValidated] = useState(false);
const [comment, setComment] = useState(null);
const [recognitionTo, setRecognitionTo] = useState(null);
const [recognitionFor, setRecognitionFor] = useState(null);
const [show, setShow] = useState(false);
let history = useHistory();
if(!isData){
    setIsData(true);
    const fetchOptions = {
        method: "GET",
       headers: new Headers({
         "Content-Type": "application/json",
       })
       };
    UseFetch("https://reqres.in/api/users?page=2",fetchOptions
    ).then(response => {
      console.log(response.data);
      setData1(response.data);
    });
}

const checkfunction = (event) =>{
  event.preventDefault();
  const formData = new FormData(event.target);
  setComment(formData.get("comment"));
  setRecognitionFor(formData.get("recognitionFor"));
  setRecognitionTo(formData.get("recognitionTo"));
  setValidated(true);
  setShow(true);
}

const handleOnChange = (event) => {
  sethi5(event.target.value);
}
if(comment && recognitionFor && recognitionTo)
{
  const handleClose = () => {
    setShow(false);
    history.push('/login')}
return(
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Hello</Modal.Title>
    </Modal.Header>
    <Modal.Body>you have given recognition to  Mr.<b> {recognitionTo} </b> for <b>{recognitionFor}</b> with special comment as<br/> <b>{comment}</b>
    </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
      </Modal.Footer>
    </Modal>
);
  }

    return(
<>
<Jumbotron fluid style={{padding: "2rem 24rem", "margin-bottom": "0"}}>
  <Container>
    <h1>Give Rewards </h1>  
  </Container>
</Jumbotron>
<Row>
<Col></Col>
<Col xs={6}>
<Form noValidate validated={validated} onSubmit={checkfunction}>
   <Card
    className="border border-primary mt-4 bg-light grey"
   >
   <Card.Header className="d-flex justify-content-around" style={{"height":"100px"}}>
   <Autocomplete
      id="combo-box-demo"
      name="recognitionTo"
      options={data1}
      getOptionLabel={(option) => option.email}
      style={{ width: 250, height: 50, 'margin-left':300, 'margin-top':10  }}
      renderInput={(params) => <TextField required name="recognitionTo" {...params} label="Give Recognation To" variant="outlined"/>}               
     />
   </Card.Header>
   <Card.Body className="h-50 p-3 ml-5 mr-5 font-italic text-left">
      <Autocomplete
        id="combo-box-demo"
        name="recognitionFrom"
        options={data1}
        getOptionLabel={(option) => option.email}
        style={{ width: 250, height: 50, 'margin-left':275, 'margin-top':10  }}
        renderInput={(params) => <TextField {...params} required name="recognitionFor" label="Give Recognation For" variant="outlined"/>}
        />
      <Card.Text>
      <Form.Group controlId="exampleForm.ControlTextarea1">
         <Form.Label>Add Comments for recognition</Form.Label>
         <Form.Control required name="comment" as="textarea" rows="3" errorMessage = "comment is required" />
         <Form.Control.Feedback type="invalid">{"comment is required"}</Form.Control.Feedback>
      </Form.Group>
       </Card.Text>
      <Card.Text className="text-primary font-weight-lighter">
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-around">
       <h4 style={{"margin-right": "-38px"}}>Give hi5</h4>
       <Button name="hi5" value="hi5" variant="outline" style={{"margin-left":"-75px"}} onClick={(event) => {
        handleOnChange(event);
        }}>🖐</Button>{' '}
        <br/>
        <Button variant="primary" type="submit">
        submit
        </Button>
        </Card.Footer>
      </Card>
  </Form>
   </Col>
   <Col></Col>
</Row>
</>
    )
};
export default Rewards;
