import React, { useState } from "react";

import { Row, Col, Button, Container, Card, Form,Navbar,Nav,NavDropdown,NavItem,Image } from "react-bootstrap";

export default function Login() {
 
    return (
<Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">login</Nav.Link>
      <Nav.Link href="/listOfUsers">All Users</Nav.Link>
      <Nav.Link href="/Rewards">give reward</Nav.Link>
    </Nav>
  </Navbar>
  <Image src={require('../images/4.jpg')} fluid />
</Container> 
    );
}
/*<Switch>
                    <Route path="/listOfUsers" children={<ListOfUsers />} />
                  </Switch>
                  <Link to="/listofusers">List of Users</Link> */