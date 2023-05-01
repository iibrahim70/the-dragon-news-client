import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from './QZone';

const RightNav = () => {
  return (
    <div>
      <h4 className='mt-4'>Login With</h4>
      <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
      <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
      <div>
        <h4 className='mt-4'>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook/>Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter />Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;