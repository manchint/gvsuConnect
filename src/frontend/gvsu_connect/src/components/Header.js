import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(props) {
    let navigate = useNavigate();
    return (
        <>
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Professors</Nav.Link>
            <Nav.Link href="#pricing">Accommodation</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title={<i className='icon-user'></i>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2" onClick={() => navigate("/")}>
                Logout
              </NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        
        
        </>
    )
}

export default Header;