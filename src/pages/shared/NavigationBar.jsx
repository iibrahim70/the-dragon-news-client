import React, { useContext } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const NavigationBar = () => {

  const {user, logOut} = useContext(AuthContext); 

  const handleLogout = () => {
    logOut()
    .then()
    .catch(err => console.log(err));
  }

  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto gap-5">
                <Link to='/category/0'>Home</Link>
                <Link >About</Link>
                <Link >Career</Link>
              </Nav>
              <Nav>
                {user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}
                {user ? <Button onClick={handleLogout} variant="secondary">LogOut</Button> : <Link to='/login'><Button variant="secondary">Login</Button></Link>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;