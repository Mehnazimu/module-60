import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
        <Navbar expand='lg' bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">news</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">All News</Nav.Link>
              <Nav.Link href="#features">Categories</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
  
        
      </>
    );
};

export default Header;