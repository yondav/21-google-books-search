import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './navigation.css';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Navbar.Brand>Google Books</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav>
          <Nav.Link className='px-3'>My Books</Nav.Link>
          <Nav.Link className='px-3'>Google Books</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
