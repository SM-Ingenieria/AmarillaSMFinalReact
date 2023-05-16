// import {container, Nav,NavBar,NavDropdown} from "react-bootstrap"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import Button from 'react-bootstrap/Button';
// import { Button } from 'reactstrap';
// import 'NavBar/NavBar.css';
import image from '../../assets/react.svg'
import foto from '../../assets/remera1.svg'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink, useParams } from 'react-router-dom';
// 
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div className="border border-5 border-primary m-3">
      <Navbar>

        <Nav>

          <Link className="BotonSm" to='/'>
            SM Ingenieria
          </Link>

          <NavItem>
            <NavLink to="/">
              Inicio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/categoria/repuestos"className={({isActive})=>isActive ? 'btn btn-primary': 'btn btn-outline-primary'}>
              Repuestos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/categoria/servicios" className={({isActive})=>isActive ? 'btn btn-primary': 'btn btn-outline-primary'}>
              Servicios
            </NavLink>
          </NavItem>
        
        </Nav>
        <Link className="linkCarrito" to='/cart'>
          {/* llamada al CartWidget   */}
          <CartWidget />


        </Link>
      </Navbar>
    </div>

  )


}