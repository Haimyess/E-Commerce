/** @format */

import React, { useState, useEffect, useRef, useContext } from "react";

import LoginModal from "../components/LogInModal";

import { LoginModalContext } from "../contexts/LoginModalContext";

import SearchBar from "./SearchBar";
import "../components/Header.css";
import { Link } from "react-router-dom";

import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap/";
// import Catalogue from "../pages/Catalogue";

function Header() {
  ////////////////////////MODAL

  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <p>
            <Link className='logo-home' to='/'>
              {" "}
              Logo{" "}
            </Link>
          </p>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse
            id='navbarScroll'
            className='d-flex justify-content-between'>
            <Nav
              className='my-2 my-lg-0'
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Link to='/catalogue'> Cataloge</Link>

              {/* <NavDropdown title='Location' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Netanya</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>Tel aviv</NavDropdown.Item>

                <NavDropdown.Item href='#action5'>Hadera</NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link href='#' disabled>
                Link
              </Nav.Link> */}
            </Nav>

            <SearchBar searchDivRef={searchDivRef} isOpen={isOpen} />
            <div className='d-flex justify-content-md-center'>
              <Link to='/cart'>Cart</Link>

              {<LoginModal handleClose={handleClose} />}
              <Button onClick={handleShow} variant='outline-success'>
                Log In
              </Button>
            </div>
            {/* <FontAwesomeIcon icon='fa-solid fa-cart-shopping' /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div>
        <img src='' />
      </div>
      <div>
        <input type='text' />
      </div>
      <div></div> */}
    </>
  );
}

export default Header;
