import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import UseFetch from '../hooks/useFetch';
import { Row, Col, Button, Container, Card,ListGroup,ListGroupItem,Jumbotron } from "react-bootstrap";
const ListOfUsers = () => {
const [data1,setData1] = useState([]);
const [isData,setIsData] = useState(false);
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
    return(
<>
<Jumbotron fluid>
  <Container>
    <h1>List Of Users</h1>  
  </Container>
</Jumbotron>
<Row>
<Col></Col>
<Col xs={6}>
          {data1.map((object) => (
            <Card
              className="border border-primary mt-4 bg-light grey"
              key={object.id}
            >
              <Card.Header className="d-flex justify-content-around">
              <h4></h4>
              </Card.Header>
              <Card.Body className="h-50 p-3 ml-5 mr-5 font-italic text-left">
                <Card.Text>
                  
                  <h3>{object.first_name}</h3>
                </Card.Text>
                <Card.Text className="text-primary font-weight-lighter">
                  <h5>{object.email}</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col></Col>
</Row>
</>
    )
};
export default ListOfUsers;



/*<ListGroup>
      <div>{data1 && data1.map((item, index) => {
        return <ListGroupItem key={index}>
     name :{item.first_name}<br/>
     email :{item.email}
     </ListGroupItem>;
       })} </div>
       </ListGroup> */