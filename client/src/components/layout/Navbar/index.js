import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>AlgoRhythm</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/playlist'>Playlists</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
