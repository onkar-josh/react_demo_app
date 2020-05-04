import React from 'react';

import InnerSquare from '../components/innerSquare';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Container, Card,Jumbotron } from "react-bootstrap";
const HomePage = (props) => {
    return(
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Jumbotron fluid style={{padding: "2rem 24rem", "margin-bottom": "0"}}>
  <h1>Welcome To PEERLY</h1>
  
</Jumbotron> 
<InnerSquare/>
</Container>
        )
};
export default HomePage;
