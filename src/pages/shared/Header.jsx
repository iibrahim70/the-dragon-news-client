import React, { useContext } from 'react';
import logo from '../../assets/logo.png'; 
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

  const {user} = useContext(AuthContext); 
  
  return (
    <Container className='mt-4'>
      <div className='text-center'>
        <img src={logo} alt="" />
        <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
      <div className='d-flex'>
        <Button variant="danger">Latest</Button>
        <Marquee speed={60}>
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link>
                <Link to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link>About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link>Career</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              { user && <Nav.Link><FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle></Nav.Link>}
              <Nav.Link eventKey={2}>
                {user ? <Button variant="secondary">LogOut</Button> : <Link to='/login'><Button variant="secondary">Login</Button></Link>}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;