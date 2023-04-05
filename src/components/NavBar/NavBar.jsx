// import {container, Nav,NavBar,NavDropdown} from "react-bootstrap"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import Button from 'react-bootstrap/Button';
// import { Button } from 'reactstrap';
import image from '../../assets/react.svg'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import CartWidget from "../CartWidget/CartWidget"
export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Nav
      >
        <NavItem>
          <NavLink
            active
            href="#"
          >
            <img src={image} alt="imagen"/>
            Bienvenidos
            
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Repuestos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active
            href="#"
          >
            Reparaciones
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active
            href="#"
          >
            
            <CartWidget />
            
          </NavLink>
        </NavItem>
      </Nav>
    </div>

  )


}