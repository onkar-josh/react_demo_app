import React from 'react';
//import './form.css'
//import ValidationForm from './ValidationForm';

import LoginSquare from './LoginSquare';
import Slides from './Slides';
import MiddleCard from './MiddleCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Container, Card } from "react-bootstrap";
const InnerSqaure = () => {
    return(
<Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
  <Row fluid style={{ paddingTop: 0, paddingBottom: 0 }}>
    <Col xs={3} style={{ padding: '0px', height: '275px' }} ><Slides/></Col>
    <Col xs={5} style={{ padding: '0px', height: '635px' }} className="p-3 mb-2 bg-info text-white"><MiddleCard/></Col>
    <Col style={{ padding: '0px', height: '635px'}} className="p-3 mb-2 bg-info text-white"><LoginSquare/></Col>
  </Row>
</Container>   
  )
};
export default InnerSqaure;