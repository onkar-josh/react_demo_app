import React from 'react';
//import './form.css'
//import ValidationForm from './ValidationForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Container, Card, Form } from "react-bootstrap";
const InfoButton = () => {
  return(
    <>
      <Form.Label>First name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="First name"
          defaultValue="Mark"
        />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </>
  )
}

export default InfoButton;