import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import useAuth from '../../hook/useAuth';

const Sidebar = () => {
  const {googleSignIn,facebookSignIn,user,logOut} = useAuth()
  console.log(user)
    return (
      <Navbar expand="lg" className='shadow'>
      <Container fluid>
        <Navbar.Brand className='logo ps-5 pe-5' href="#">ROAM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
             className="ms-auto my-2 my-lg-0"
             style={{ maxHeight: '100px' }}
             navbarScroll
          >
           {
              user.email?
              <p>{user.email}</p> 
             :
             <li> <Nav.Link onClick={googleSignIn} className="btn-hover" as={HashLink} to="/home"><GoogleIcon/></Nav.Link>
             <Nav.Link onClick={facebookSignIn} className="btn-hover" as={HashLink} to="/home"><FacebookOutlinedIcon/></Nav.Link></li> 
           }

          </Nav>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="btn-hover" as={HashLink} to="/home">Home</Nav.Link>
            <Nav.Link className="btn-hover" as={HashLink} to="/About">About </Nav.Link>
              <Nav.Link className='btn-hover' as={HashLink} to="/Projects">Projects</Nav.Link> 
              <Nav.Link className='btn-hover' as={HashLink} to="/Services">Services</Nav.Link> 
              <Nav.Link className='btn-hover' as={HashLink} to="/Contectus">Contect Us</Nav.Link> 
            
            {
              user?.email && <li>
                  <button onClick={logOut} className='btn btn-custom'>log out</button>
              </li>
            }
              
             
         

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Sidebar;