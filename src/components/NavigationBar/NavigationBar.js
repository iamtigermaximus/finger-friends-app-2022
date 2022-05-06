import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
} from 'reactstrap'

const GITHUB_PROJECT_URL = process.env.REACT_APP_GITHUB_PROJECT_URL

function NavigationBar() {
  return (
    <>
      <header className='header-global'>
        <Navbar
          className='navbar-main navbar-transparent navbar-light headroom'
          expand='lg'
          id='navbar-main'
        >
          <Container>
            <NavbarBrand className='mr-lg-5 nav-header' to='/' tag={Link}>
              <i className='fa fa-cloud' aria-hidden='true' />
              <h1>Saggie's Finger Friends</h1>
            </NavbarBrand>
            <Nav className='navbar-nav-hover align-items-lg-center' navbar>
              <NavItem className='d-none d-sm-block ml-lg-4'></NavItem>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default NavigationBar
