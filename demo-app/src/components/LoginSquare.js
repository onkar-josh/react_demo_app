import React from 'react';
//import './form.css'
//import ValidationForm from './ValidationForm';

import LoginComponent from './LoginComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Container, Card } from "react-bootstrap";
const LoginSuare = () => {
    return(
      <Container className="p-3 mb-2 bg-info text-white">
      <Row>
        <Col style={{ padding: '0px', height: '158px' }} ></Col>
      </Row>
      <Row>
        <Col style={{ padding: '0px', height: '274.5px' }} ><LoginComponent/></Col>
      </Row>
      <Row>
        <Col style={{ padding: '0px', height: '149px' }}></Col>
      </Row>
    </Container>
    )
};
export default LoginSuare;
