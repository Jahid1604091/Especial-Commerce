import React from 'react'
import { NavItem, NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../actions/user';
export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const {userInfo:{data}} = useSelector(state => state.userLogin);
  
  const handleLogout = (e) =>{
    e.preventDefault()
    dispatch(logout())
    // navigate('/login')
  }
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">E EC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/support">Support</Nav.Link>
            <Nav.Link as={Link} to="/">Products</Nav.Link>
            {data ? <NavDropdown title={data.name} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/cart">Cart</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown> :
             <NavDropdown title='Account' id="basic-nav-dropdown">
             <NavDropdown.Item as={Link} to="/cart">Cart</NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item as={Link} to='/login'>
               Login
             </NavDropdown.Item>
           </NavDropdown>
            
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


