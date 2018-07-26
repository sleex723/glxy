import React from 'react';
import styles from './navbar.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Logo from '../../../img/flgalaxy-logo.png';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect fixedTop className={styles.Navigation}>
      <Navbar.Header>
        <Navbar.Brand className={styles.NavBrand}>
          <a href="#home"><img src={Logo} className={styles.Logo}/></a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="about">About</NavItem>
          <NavItem eventKey={2} href="product">Product</NavItem>
          <NavItem eventKey={3} href="services">Services</NavItem>
          <NavItem eventKey={4} href="contact">Contact</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;