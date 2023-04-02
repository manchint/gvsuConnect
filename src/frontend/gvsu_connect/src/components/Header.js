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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/main")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/posts", {
                    state : {
                        category: "general"
                    }
                    
                })}>General</Nav.Link>
            <Nav.Link onClick={() => navigate("/posts", {
                    state : {
                        category: "accommodation"
                    }
                    
                })}>Accommodation</Nav.Link>
            <Nav.Link onClick={() => navigate("/posts", {
                    state : {
                        category: "car rides"
                    }
                    
                })}>Car Rides</Nav.Link>
            <Nav.Link onClick={() => navigate("/posts", {
                    state : {
                        category: "Places"
                    }
                    
                })}>Places To Visit</Nav.Link>
            <Nav.Link onClick={() => navigate("/posts", {
                    state : {
                        category: "hangout"
                    }
                    
                })}>Hangout places</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title={<i className='icon-user'></i>} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/")}>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/")}>
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