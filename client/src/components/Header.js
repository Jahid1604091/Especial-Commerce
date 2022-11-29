import React, { useState } from 'react'
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
import logo from '../assets/mp.png'
export default function Header() {
  const dispatch = useDispatch()

  const { userInfo: { data } } = useSelector(state => state.userLogin);

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    // navigate('/login')
  }



  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" width='50' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">

            {data ? <NavDropdown title={data.name} id="basic-nav-dropdown" className='rounded-0'>
              {data.role !== 'admin' ?
                <NavDropdown.Item as={Link} to="/cart">Cart</NavDropdown.Item> :
                <>
                  <NavDropdown.Item as={Link} to="/admin/products">Product List</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/admin/orders">Order List</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/admin/users">User List</NavDropdown.Item>
                </>
              }
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
            <Nav.Link as={Link} to="/">Products</Nav.Link>
            <Nav.Link as={Link} to="/support">Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


