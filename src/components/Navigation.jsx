import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.css"
import "./my.jpg"

function Navigation(){
    return(
        <div>
    <Navbar bg="light" expand="lg" className="fixed-top navbar">
      <Container>
        <Navbar.Brand href="#home" >
        <div className="name">
        Shubham Khaire
        </div>
     </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-items">
            <Nav.Link href="./#home">Home</Nav.Link>
            <Nav.Link href="./#about">About</Nav.Link>
            <Nav.Link href="./#skills">Skills</Nav.Link>
            <Nav.Link href="./#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    )
}
export default Navigation;